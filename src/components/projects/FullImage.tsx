import * as React from "react";
import useReveal from "../../hooks/useReveal";

const FullImage = ({
	img,
	alt,
	mb = false,
}: {
	img: string;
	alt: string;
	mb?: boolean;
}) => {
	const { ref, inView } = useReveal(0.25);
	return (
		<img
			ref={ref}
			alt={alt}
			src={img}
			loading="lazy"
			decoding="async"
			className={`w-full pb-8 transition-all duration-[2000ms] ease-in-out ${
				inView ? "opacity-100" : "opacity-0 translate-x-24 sm:translate-x-72"
			} ${mb ? "mb-12" : ""}`}
		/>
	);
};

export default FullImage;
