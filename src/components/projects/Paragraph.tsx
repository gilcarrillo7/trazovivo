import React from "react";
import { Trans } from "react-i18next";

const Paragraph = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <p className={`mb-4 ${className}`}>{children}</p>;
};

export default Paragraph;
