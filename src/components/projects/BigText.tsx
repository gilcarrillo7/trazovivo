import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import TextContainer from "./TextContainer";

const BigText = ({
	text,
	className = "",
}: {
	text: string;
	className?: string;
}) => {
	return (
		<TextContainer>
			<h2 className={`font-semibold text-xl sm:text-3xl ${className}`}>
				<Trans>{text}</Trans>
			</h2>
		</TextContainer>
	);
};

export default BigText;
