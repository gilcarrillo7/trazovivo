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
			<p
				className={`font-semibold text-xl sm:text-3xl ${className}`}
			>
				<Trans>{text}</Trans>
			</p>
		</TextContainer>
	);
};

export default BigText;
