import * as React from "react";

interface IProps {
	children: boolean | React.ReactFragment | React.ReactPortal | React.ReactNode;
	className?: string;
}

const InnerBigContainer = (props: IProps) => {
	const { className } = props;
	return <div className={`w-full container xl:px-24 lg:px-16 ${className}`}>{props.children}</div>;
};

export default InnerBigContainer;
