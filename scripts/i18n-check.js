#!/usr/bin/env node
// Validates locales/{es,en}/*.json against each other and against src/.
//   errors   (exit 1): key missing in one language, key used in code but undefined
//   warnings:          key never used, same text in es and en, repeated es values
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

const dynamic = [...code.matchAll(/`([^`]*\$\{[^}]+\}[^`]*)`/g)].map((m) =>
	// Escape regex chars first, then turn each ${...} into a wildcard.
	new RegExp("^" + m[1].replace(/[.*+?^()|[\]\\]/g, "\\$&").replace(/\$\{[^}]*\}/g, ".+") + "$")
);

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
