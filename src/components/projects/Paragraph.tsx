import React from "react";

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
