import * as React from "react";
import { useState } from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import { projects } from "../../data/projects";
import Project from "./Project";

const VISIBLE = 9;

const Projects = () => {
	const [all, setAll] = useState(false);
	const shown = all ? projects : projects.slice(0, VISIBLE);
	return (
		<>
			<div className="container grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-12 xl:gap-x-24">
				{shown.map((project) => (
					<Project
						key={project.slug}
						img={project.img}
						title={project.title}
						text={project.text}
						link={project.slug}
					/>
				))}
			</div>
			{!all && (
				<div className="text-center pb-8">
					<button
						type="button"
						className="text-2xl sm:text-3xl font-normal underline pb-8 text-center"
						onClick={() => setAll(true)}
					>
						<Trans>Ver Todos</Trans>
					</button>
				</div>
			)}
		</>
	);
};

export default Projects;
