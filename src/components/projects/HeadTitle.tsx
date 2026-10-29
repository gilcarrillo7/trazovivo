import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import TextContainer from "./TextContainer";

const HeadTitle = (props: {
	children: React.ReactNode;
	title?: string;
	className?: string;
	as?: "h1" | "h2";
}) => {
	const { title, className = "", as: Heading = "h2" } = props;
	return (
		<TextContainer>
			{title && (
				<Heading
					className={`font-semibold text-xl sm:text-2xl mb-6 ${className}`}
				>
					<Trans>{title}</Trans>
				</Heading>
			)}
			<div className={`font-light flex flex-col text-base ${className}`}>
				{props.children}
			</div>
		</TextContainer>
	);
};

export default HeadTitle;
