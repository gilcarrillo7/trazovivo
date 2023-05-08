import * as React from "react";
import { useInView } from "react-intersection-observer";

const TextContainer = (props: {
	children: React.ReactNode;
	className?: string;
}) => {
	const { className } = props;
	const { ref, inView } = useInView({ threshold: 0.3 });
	return (
		<div
			ref={ref}
			className={`container transition-all duration-1000 ease-in-out ${
				inView ? "opacity-100" : "opacity-0 translate-y-8"
			}`}
		>
			<div className={`w-full sm:w-3/4 lg:w-1/2 pb-8 ${className}`}>
				{props.children}
			</div>
		</div>
	);
};

export default TextContainer;
