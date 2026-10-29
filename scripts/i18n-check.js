#!/usr/bin/env node
// Validates locales/{es,en}/*.json against each other and against src/.
//   errors   (exit 1): key missing in one language, key used in code but undefined,
//                      page query that doesn't load the namespaces the page needs
//   warnings:          key never used, same text in es and en, repeated es values,
//                      key defined in two namespaces, page loading unneeded namespaces
//
// Each page's `allLocale` query must filter `ns: { in: [...] }` so it only ships
// the translations it uses. The list is computed by following the page's imports;
// run with --fix to (re)write it:   npm run i18n:check -- --fix
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const LOCALES = path.join(ROOT, "locales");
const LANGS = ["es", "en"];
// Keys built at runtime (template literals) are detected automatically; add
// here any prefix that is composed some other way.
const DYNAMIC_PREFIXES = [];

const read = (f) => JSON.parse(fs.readFileSync(f, "utf8"));
const walk = (dir) =>
	fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
		const p = path.join(dir, e.name);
		return e.isDirectory() ? walk(p) : [p];
	});

const errors = [];
const warnings = [];

// --- load -----------------------------------------------------------------
const namespaces = fs
	.readdirSync(path.join(LOCALES, "es"))
	.filter((f) => f.endsWith(".json"))
	.map((f) => f.replace(".json", ""));
const data = {}; // data[lang][ns] = {key: value}
for (const lang of LANGS) {
	data[lang] = {};
	for (const ns of namespaces) {
		const file = path.join(LOCALES, lang, `${ns}.json`);
		if (!fs.existsSync(file)) {
			errors.push(`${lang}/${ns}.json does not exist`);
			continue;
		}
		data[lang][ns] = read(file);
	}
}

// --- parity ---------------------------------------------------------------
for (const ns of namespaces) {
	const [a, b] = LANGS.map((l) => data[l][ns] || {});
	for (const k of Object.keys(a))
		if (!(k in b)) errors.push(`[${ns}] "${k}" is in es but not in en`);
	for (const k of Object.keys(b))
		if (!(k in a)) errors.push(`[${ns}] "${k}" is in en but not in es`);
	for (const k of Object.keys(a))
		if (k in b && a[k] === b[k] && /\s/.test(a[k]) && a[k].length > 20)
			warnings.push(`[${ns}] "${k}" has the same text in es and en`);
	const seen = {};
	for (const [k, v] of Object.entries(a)) (seen[v] = seen[v] || []).push(k);
	for (const [v, ks] of Object.entries(seen))
		if (ks.length > 1 && v.length > 3)
			warnings.push(`[${ns}] repeated es text "${v.slice(0, 40)}": ${ks.join(", ")}`);
}

// --- usage in src ---------------------------------------------------------
const allKeys = new Set(namespaces.flatMap((ns) => Object.keys(data.es[ns] || {})));
const prefixes = new Set([...allKeys].filter((k) => k.includes(".")).map((k) => k.split(".")[0]));
const keyShape = /^[A-Za-z][\w-]*\.[\w.\-]+$/;

const sources = walk(path.join(ROOT, "src"))
	.filter((f) => /\.(tsx?|jsx?)$/.test(f))
	.map((f) => fs.readFileSync(f, "utf8"));
const code = sources.join("\n");

// Keys composed at runtime, e.g. `testimonio${n}.1`. Only templates without
// whitespace that start with literal letters count; otherwise `${a}-${b}` would match everything.
const isKeyTemplate = (t) => t.includes("${") && /^[A-Za-z]{2,}/.test(t) && !/\s/.test(t);
const templateRe = (t) =>
	// Escape regex chars first, then turn each ${...} into a wildcard.
	new RegExp("^" + t.replace(/[.*+?^()|[\]\\]/g, "\\$&").replace(/\$\{[^}]*\}/g, ".+") + "$");
const dynamic = [...code.matchAll(/`([^`]*\$\{[^}]+\}[^`]*)`/g)]
	.map((m) => m[1])
	.filter(isKeyTemplate)
	.map(templateRe);

const isUsed = (k) =>
	code.includes(`"${k}"`) ||
	code.includes(`'${k}'`) ||
	code.includes(`>${k}<`) ||
	code.includes(`\`${k}\``) ||
	dynamic.some((re) => re.test(k)) ||
	DYNAMIC_PREFIXES.some((p) => k.startsWith(p));

for (const ns of namespaces)
	for (const k of Object.keys(data.es[ns] || {}))
		if (!isUsed(k)) warnings.push(`[${ns}] "${k}" is not used in src/`);

// Keys referenced in code that don't exist.
const used = new Set();
for (const m of code.matchAll(/<Trans>([^<{]+)<\/Trans>/g)) used.add(m[1].trim());
for (const m of code.matchAll(/\b(?:text|title)="([^"]+)"/g)) used.add(m[1]);
for (const m of code.matchAll(/["']([^"'\s]+)["']/g)) {
	const [first] = m[1].split(".");
	if (keyShape.test(m[1]) && prefixes.has(first)) used.add(m[1]);
}
for (const k of used)
	if (keyShape.test(k) && prefixes.has(k.split(".")[0]) && !allKeys.has(k))
		errors.push(`"${k}" is used in src/ but is not defined in locales/`);

// --- namespaces per page -------------------------------------------------
const FIX = process.argv.includes("--fix");
// --why <page file>: print which key pulls in each extra namespace.
const WHY = process.argv.includes("--why") ? process.argv[process.argv.indexOf("--why") + 1] : "";
const keyNs = new Map(); // key -> [namespaces defining it]
for (const ns of namespaces)
	for (const k of Object.keys(data.es[ns] || {})) {
		if (!keyNs.has(k)) keyNs.set(k, []);
		keyNs.get(k).push(ns);
	}
if (keyNs.has("")) warnings.push(`empty key "" in: ${keyNs.get("").join(", ")}`);
for (const [k, list] of keyNs)
	if (list.length > 1) warnings.push(`"${k}" is defined in several namespaces: ${list.join(", ")}`);

const SRC = path.join(ROOT, "src");
const isFile = (f) => fs.existsSync(f) && fs.statSync(f).isFile();
const resolveImport = (from, spec) => {
	if (!spec.startsWith(".")) return null;
	const base = path.resolve(path.dirname(from), spec);
	return [`${base}.ts`, `${base}.tsx`, path.join(base, "index.ts"), path.join(base, "index.tsx")].find(isFile) || null;
};
const importsOf = (file, text) =>
	[...text.matchAll(/(?:from|import)\s*["']([^"']+)["']/g)]
		.map((m) => resolveImport(file, m[1]))
		.filter(Boolean);

const keysIn = (rawText) => {
	// The page query itself lists namespace names; don't mistake them for keys.
	const text = rawText.replace(/graphql`[\s\S]*?`/g, "");
	const found = new Set();
	const tokens = [
		...[...text.matchAll(/(["'`])((?:(?!\1)[^\\\n])*)\1/g)].map((m) => m[2]),
		...[...text.matchAll(/>\s*([^<>{}\n]+?)\s*</g)].map((m) => m[1]),
	];
	for (const t of tokens) {
		if (!t.trim()) continue;
		if (keyNs.has(t)) found.add(t);
		else if (isKeyTemplate(t)) {
			const re = templateRe(t);
			for (const k of keyNs.keys()) if (re.test(k)) found.add(k);
		}
	}
	return found;
};

// Namespaces needed by a page = those defining any key used by the page or by
// anything it imports (components, data files).
const neededNamespaces = (pageFile) => {
	const seen = new Set();
	const queue = [pageFile];
	const keys = new Set();
	while (queue.length) {
		const f = queue.pop();
		if (seen.has(f)) continue;
		seen.add(f);
		const text = fs.readFileSync(f, "utf8");
		for (const k of keysIn(text)) keys.add(k);
		queue.push(...importsOf(f, text));
	}
	const chosen = new Set(["index"]);
	for (const k of [...keys].sort())
		if (!keyNs.get(k).some((n) => chosen.has(n))) {
			chosen.add(keyNs.get(k)[0]);
			if (WHY && pageFile.endsWith(WHY)) console.log(`${keyNs.get(k)[0]} <- "${k}"`);
		}
	return ["index", ...[...chosen].filter((n) => n !== "index").sort()];
};

const queryRe =
	/(allLocale\(\s*filter:\s*)\{\s*language:\s*\{\s*eq:\s*\$language\s*\}(?:\s*,\s*ns:\s*\{\s*in:\s*\[([^\]]*)\]\s*\})?\s*\}/;
for (const file of walk(path.join(SRC, "pages")).filter((f) => /\.tsx?$/.test(f))) {
	const text = fs.readFileSync(file, "utf8");
	const m = text.match(queryRe);
	if (!m) continue;
	const rel = path.relative(ROOT, file);
	const needed = neededNamespaces(file);
	const current = m[2] === undefined ? null : [...m[2].matchAll(/["']([^"']+)["']/g)].map((x) => x[1]);
	if (FIX) {
		const list = needed.map((n) => `"${n}"`).join(", ");
		const next = text.replace(queryRe, `$1{ language: { eq: $language }, ns: { in: [${list}] } }`);
		if (next !== text) fs.writeFileSync(file, next);
		continue;
	}
	if (!current) {
		errors.push(`${rel}: allLocale query has no ns filter (run: npm run i18n:check -- --fix)`);
		continue;
	}
	const missing = needed.filter((n) => !current.includes(n));
	const extra = current.filter((n) => !needed.includes(n));
	if (missing.length) errors.push(`${rel}: query is missing namespaces ${missing.join(", ")}`);
	if (extra.length) warnings.push(`${rel}: query loads unneeded namespaces ${extra.join(", ")}`);
}

// --- report ---------------------------------------------------------------
const print = (label, list) => {
	if (!list.length) return;
	console.log(`\n${label} (${list.length})`);
	for (const l of [...new Set(list)].sort()) console.log("  " + l);
};
print("ERRORS", errors);
print("WARNINGS", warnings);
console.log(
	`\n${namespaces.length} namespaces, ${allKeys.size} keys: ${errors.length} errors, ${warnings.length} warnings`
);
process.exit(errors.length ? 1 : 0);
