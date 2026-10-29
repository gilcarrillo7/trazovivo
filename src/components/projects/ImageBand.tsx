import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import useReveal from "../../hooks/useReveal";

const ImageBand = ({
	img,
	alt,
	text,
}: {
	img: string;
	alt: string;
	text: string;
}) => {
	const { ref, inView } = useReveal(0.5);
	return (
		<div className="relative">
			<div
				className={`z-0 absolute left-0 top-1/2 sm:top-0 w-full h-1/2 bg-[#ec1d23] sm:translate-y-1/2`}
			></div>
			<div className="relative container pb-8">
				<div className="flex flex-col sm:flex-row sm:gap-6">
					<div
						className={`z-10 w-full sm:w-1/2 grow-0 mb-8 sm:mb-0 px-8 sm:px-0`}
					>
						<img
							ref={ref}
							src={img}
							alt={alt}
							loading="lazy"
							decoding="async"
							className={`w-full transition-all duration-1000 ease-in-out ${
								inView ? "opacity-100" : "opacity-0 scale-150"
							}`}
						/>
					</div>
					<div
						className={`z-10 flex items-center w-full grow-0 sm:w-1/2 px-8 sm:px-0`}
					>
						<p className={`text-white`}>
							<Trans>{text}</Trans>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageBand;
