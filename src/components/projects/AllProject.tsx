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
		<TextContainer className="!py-0 !pb-4">
			<Link
				to={link}
				className={`font-normal text-xl sm:text-2xl ${className}`}
			>
				<Trans>Ver Todos</Trans>
			</Link>
		</TextContainer>
	);
};

export default NextProject;
