import { Link } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";
import TextContainer from "./TextContainer";

const NextProject = ({
	link,
	className = "",
}: {
	link: string;
	className?: string;
}) => {
	return (
		<TextContainer>
			<Link
				to={link}
				className={`font-semibold text-xl sm:text-2xl py-2 sm:py-6 ${className}`}
			>
				<Trans>Siguiente Proyecto</Trans>
			</Link>
		</TextContainer>
	);
};

export default NextProject;
