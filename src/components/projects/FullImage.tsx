import * as React from "react";
import { useInView } from "react-intersection-observer";

const FullImage = ({
	img,
	alt,
	mb = false,
}: {
	img: string;
	alt: string;
	mb?: boolean;
}) => {
	const { ref, inView } = useInView({ threshold: 0.5 });
	return (
		<img
			ref={ref}
			alt={alt}
			src={img}
			className={`w-full pb-8 transition-all duration-[2000ms] ease-in-out ${
				inView ? "opacity-100" : "opacity-0 translate-x-24 sm:translate-x-72"
			} ${mb ? "mb-12" : ""}`}
		/>
	);
};

export default FullImage;
