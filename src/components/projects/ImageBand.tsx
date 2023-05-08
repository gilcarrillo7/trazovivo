import * as React from "react";
import { Trans } from "react-i18next";
import { useInView } from "react-intersection-observer";

const ImageBand = ({
	img,
	alt,
	text,
}: {
	img: string;
	alt: string;
	text: string;
}) => {
	const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3 });
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
							ref={ref1}
							src={img}
							alt={alt}
							className={`w-full transition-all duration-1000 ease-in-out ${
								inView1 ? "opacity-100" : "opacity-0 scale-150"
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
