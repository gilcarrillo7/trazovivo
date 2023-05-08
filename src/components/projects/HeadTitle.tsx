import * as React from "react";
import { Trans } from "react-i18next";
import TextContainer from "./TextContainer";

const HeadTitle = (props: {
	children: React.ReactNode;
	title: string;
	className?: string;
}) => {
	const { title, className } = props;
	return (
		<TextContainer>
			<p className={`font-semibold text-xl sm:text-2xl mb-6 ${className}`}>
				<Trans>{title}</Trans>
			</p>
			<div
				className={`font-light flex flex-col text-base ${className}`}
			>
				{props.children}
			</div>
		</TextContainer>
	);
};

export default HeadTitle;
