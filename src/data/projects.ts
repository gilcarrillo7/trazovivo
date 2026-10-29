// Single source of truth for the case studies shown on the home grid.
// Newest first. NextProject follows this order, so adding a project only
// needs a new entry at the top (no need to edit the previous project's page).
// `title` / `text` are i18n keys, except proper names which are used as-is.
import Project5 from "../images/projects/5.jpg";
import Project6 from "../images/projects/6.jpg";
import Project7 from "../images/projects/7.jpg";
import Project8 from "../images/projects/8.jpg";
import Project9 from "../images/projects/9.jpg";
import Project10 from "../images/projects/10.jpg";
import Project11 from "../images/projects/11.jpg";
import Project12 from "../images/projects/12.jpg";
import Project13 from "../images/projects/13.gif";
import Project14 from "../images/projects/14.jpg";
import Project15 from "../images/projects/15.jpg";
import Project16 from "../images/projects/16.jpg";
import Project17 from "../images/projects/17.jpg";
import Project18 from "../images/projects/18.gif";
import Project19 from "../images/projects/19.gif";
import Project20 from "../images/projects/20.gif";
import Project21 from "../images/projects/21.gif";
import Project22 from "../images/projects/22.gif";
import Project23 from "../images/projects/23.gif";
import Project24 from "../images/projects/24.gif";
import Project25 from "../images/projects/25.gif";

export interface ProjectEntry {
	slug: string;
	title: string;
	text: string;
	img: string;
}

export const projects: ProjectEntry[] = [
	{
		slug: "hivos-futuros-urbanos",
		title: "hivos.t0",
		text: "hivos.t1",
		img: Project25,
	},
	{
		slug: "care-conecta",
		title: "CARE Conecta",
		text: "care.t0",
		img: Project24,
	},
	{
		slug: "fundacion-devlyn",
		title: "devlyn.t0",
		text: "devlyn.t1",
		img: Project23,
	},
	{
		slug: "wingu",
		title: "Wingu",
		text: "wingu.t0",
		img: Project22,
	},
	{
		slug: "oxfam",
		title: "Oxfam",
		text: "oxfam.t0",
		img: Project21,
	},
	{
		slug: "iniciativa-x-la-inclusion",
		title: "incl.t0",
		text: "common.estrategia-de-comunicacion",
		img: Project20,
	},
	{
		slug: "cfosc",
		title: "cfosc.t0",
		text: "common.estrategia-de-comunicacion",
		img: Project18,
	},
	{
		slug: "alianza-acercate",
		title: "al.t0",
		text: "subtitle.branding",
		img: Project19,
	},
	{
		slug: "international-rescue-committee",
		title: "IRC - International Rescue Committee",
		text: "subtitle.branding",
		img: Project13,
	},
	{
		slug: "friedrich-ebert-stiftung",
		title: "Friedrich Ebert Stiftung",
		text: "common.estrategia-de-comunicacion",
		img: Project16,
	},
	{
		slug: "thi",
		title: "thi.t1",
		text: "common.estrategia-de-comunicacion",
		img: Project17,
	},
	{
		slug: "incuba",
		title: "Incuba",
		text: "subtitle.identidad-grafica-y-experiencia-digital",
		img: Project15,
	},
	{
		slug: "ikaro",
		title: "Ikaro",
		text: "subtitle.nombre-branding-web",
		img: Project14,
	},
	{
		slug: "feministisches-zentrum-migrantinnen",
		title: "FZM - Feministisches Zentrum",
		text: "subtitle.experiencia-digital",
		img: Project12,
	},
	{
		slug: "salon_mexicano_de_ultramar",
		title: "titles.embajada-de-mexico-en-alemania",
		text: "subtitle.identidad-grafica",
		img: Project11,
	},
	{
		slug: "natur-poesie_instituto-cultural-mexico-alemania",
		title: "titles.embajada-de-mexico-en-alemania",
		text: "subtitle.identidad-grafica",
		img: Project10,
	},
	{
		slug: "instituto-cultural-mexico-alemania",
		title: "icma.t1",
		text: "subtitle.identidad-grafica",
		img: Project9,
	},
	{
		slug: "axa",
		title: "AXA",
		text: "subtitle.transformacion-digital",
		img: Project8,
	},
	{
		slug: "kreuzberger-himmel",
		title: "Kreuzberger Himmel",
		text: "subtitle.ux-ui-para-tienda-en",
		img: Project7,
	},
	{
		slug: "himmel-8",
		title: "Himmel 8",
		text: "subtitle.diseno-y-desarrollo-de-ux",
		img: Project6,
	},
	{
		slug: "coconat",
		title: "Coconat",
		text: "subtitle.brochure-de-comunicacion-de-la",
		img: Project5,
	},
];

export const projectPath = (slug: string) => `/projects/${slug}`;

// Next project in the list; the last one wraps around to the newest.
export const getNextProject = (slug: string) => {
	const i = projects.findIndex((p) => p.slug === slug);
	if (i === -1) return undefined;
	return projects[(i + 1) % projects.length];
};
