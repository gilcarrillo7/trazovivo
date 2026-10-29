import * as React from "react";
import { Link, Trans } from "gatsby-plugin-react-i18next";
import { getNextProject, projectPath } from "../../data/projects";
import TextContainer from "./TextContainer";

// Pass `slug` (this page's slug) to follow the order in data/projects.ts,
// or `link` to point to a specific path.
const NextProject = ({
	slug,
	link,
	className = "",
}: {
	slug?: string;
	link?: string;
	className?: string;
}) => {
	const next = slug ? getNextProject(slug) : undefined;
	const to = link ?? (next ? projectPath(next.slug) : "/#projects");
	return (
		<TextContainer>
			<Link
				to={to}
				className={`font-semibold text-xl sm:text-2xl py-2 sm:py-6 ${className}`}
			>
				<Trans>Siguiente Proyecto</Trans>
			</Link>
		</TextContainer>
	);
};

export default NextProject;
