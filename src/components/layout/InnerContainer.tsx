import * as React from "react";

interface IProps {
	children: boolean | React.ReactFragment | React.ReactPortal | React.ReactNode;
	className?: string;
}

const InnerContainer = (props: IProps) => {
	const { className } = props;
	return <div className={`w-full container xl:px-44 lg:px-36 ${className}`}>{props.children}</div>;
};

export default InnerContainer;
