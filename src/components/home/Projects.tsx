import * as React from "react";
import Project from "./Project";

import Project1 from "../../images/projects/1.jpg";
import Project2 from "../../images/projects/2.jpg";
import Project3 from "../../images/projects/3.jpg";
import Project4 from "../../images/projects/4.jpg";
import Project5 from "../../images/projects/5.jpg";
import Project6 from "../../images/projects/6.jpg";
import Project7 from "../../images/projects/7.jpg";
import Project8 from "../../images/projects/8.jpg";
import Project9 from "../../images/projects/9.jpg";
import Project10 from "../../images/projects/10.jpg";
import Project11 from "../../images/projects/11.jpg";
import Project12 from "../../images/projects/12.jpg";
import Project13 from "../../images/projects/13.jpg";
import Project14 from "../../images/projects/14.jpg";
import Project15 from "../../images/projects/15.jpg";
import Project16 from "../../images/projects/16.jpg";
import Project17 from "../../images/projects/17.jpg";
import { Trans } from "react-i18next";
import { useState } from "react";

const projects = [
	{
		title: "thi.t1",
		text: "thi.t2",
		img: Project17,
		link: "thi",
	},
	{
		title: "Friedrich Ebert Stiftung",
		text: "Estrategia de comunicación",
		img: Project16,
		link: "friedrich-ebert-stiftung",
	},
	{
		title: "Incuba",
		text: "Identidad gráfica y experiencia digital",
		img: Project15,
		link: "incuba",
	},
	{
		title: "Ikaro",
		text: "Nombre, Branding, Web",
		img: Project14,
		link: "ikaro",
	},
	{
		title: "IRC - International Rescue Committee",
		text: "Branding",
		img: Project13,
		link: "international-rescue-committee",
	},
	{
		title: "FZM - Feministisches Zentrum",
		text: "Experiencia digital",
		img: Project12,
		link: "feministisches-zentrum-migrantinnen",
	},
	{
		title: "Embajada de México en Alemania",
		text: "Identidad gráfica",
		img: Project11,
		link: "salon_mexicano_de_ultramar",
	},
	{
		title: "Embajada de México en Alemania",
		text: "Identidad gráfica",
		img: Project10,
		link: "natur-poesie_instituto-cultural-mexico-alemania",
	},
	{
		title: "icma.t1",
		text: "Identidad gráfica",
		img: Project9,
		link: "instituto-cultural-mexico-alemania",
	},
	{ title: "AXA", text: "Transformación digital", img: Project8, link: "axa" },
	{
		title: "Kreuzberger Himmel",
		text: "UX/UI para tienda en línea",
		img: Project7,
		link: "kreuzberger-himmel",
	},
	{
		title: "Himmel 8",
		text: "Diseño y desarrollo de UX/UI para página web",
		img: Project6,
		link: "himmel-8",
	},
	{
		title: "Coconat",
		text: "Brochure de comunicación de la compañía",
		img: Project5,
		link: "coconat",
	},
	{
		title: "Fortinet",
		text: "Identidad gráfica y materiales de comunicación",
		img: Project4,
		link: "fortinet",
	},
	{
		title: "Cisco",
		text: "Comics como complemento de campaña creativa",
		img: Project3,
		link: "cisco-comics",
	},
	{
		title: "Oracle",
		text: "Concepto creativo, identidad gráfica y materiales de comunicación",
		img: Project2,
		link: "oracle",
	},
	{
		title: "Cisco",
		text: "Diseño de materiales de comunicación para Cisco Live 2013 Cancún",
		img: Project1,
		link: "cisco-live",
	},
];

const Projects = () => {
	const [all, setAll] = useState(false);
	return (
		<>
			<div className="container grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-12 xl:gap-x-24">
				{projects.map((project, i) => (
					<React.Fragment key={`${i}${project.title}`}>
						{(all || i < 9) && (
							<Project
								img={project.img}
								title={project.title}
								text={project.text}
								link={project.link || ""}
								className={""}
							/>
						)}
					</React.Fragment>
				))}
			</div>
			{!all && (
				<div className="text-center pb-8">
					<a
						className="text-2xl sm:text-3xl font-normal underline pb-8 text-center"
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setAll(true);
						}}
					>
						<Trans>Ver Todos</Trans>
					</a>
				</div>
			)}
		</>
	);
};

export default Projects;
