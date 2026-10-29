import * as React from "react";
import { useEffect, useState } from "react";
import useReveal from "../../hooks/useReveal";

type Space = "sm" | "md" | "lg";

// Full class names (not interpolated) so Tailwind keeps them in production builds.
const widths: Record<Space, string> = {
	sm: "sm:w-1/2",
	md: "sm:w-5/12",
	lg: "sm:w-1/3",
};
const gaps: Record<Space, string> = {
	sm: "hidden",
	md: "w-2/12",
	lg: "w-1/3",
};

const TwoImagesSpace = ({
	leftimg,
	rightimg,
	alt,
	space = "sm",
	leftClass = "",
	rightClass = "",
	nores = false,
	className = "",
}: {
	// An array cycles through the images (animated frames).
	leftimg: string | string[];
	rightimg?: string;
	alt: string;
	space?: Space;
	leftClass?: string;
	rightClass?: string;
	nores?: boolean;
	className?: string;
}) => {
	const { ref: ref1, inView: inView1 } = useReveal();
	const { ref: ref2, inView: inView2 } = useReveal();
	const frames = Array.isArray(leftimg) ? leftimg : [leftimg];

	const [index, setIndex] = useState(0);
	useEffect(() => {
		if (frames.length < 2) return;
		const interval = setInterval(() => {
			setIndex((i) => (i + 1) % frames.length);
		}, 750);
		return () => clearInterval(interval);
	}, [frames.length]);

	const side = nores ? "w-2/5 sm:w-1/3" : `${widths[space]} px-8`;

	return (
		<div className={`container pb-8 ${className}`}>
			<div
				className={`flex ${
					nores ? "flex-row" : "flex-col"
				} sm:flex-row sm:gap-6`}
			>
				<div
					className={`w-full flex items-center ${side} grow-0 mb-8 sm:mb-0 sm:px-0`}
				>
					<img
						ref={ref1}
						src={frames[index]}
						alt={alt}
						loading="lazy"
						decoding="async"
						className={`w-full transition-all duration-1000 ease-in-out ${leftClass} ${
							inView1 ? "opacity-100" : "opacity-0 scale-150"
						}`}
					/>
				</div>
				<div
					className={`shrink-0 ${nores ? "w-1/5 sm:w-1/3" : gaps[space]}`}
				></div>
				<div className={`w-full flex items-center grow-0 ${side} sm:px-0`}>
					{rightimg && (
						<img
							ref={ref2}
							src={rightimg}
							alt={alt}
							loading="lazy"
							decoding="async"
							className={`w-full transition-all duration-1000 ease-in-out ${rightClass} ${
								inView2 ? "opacity-100" : "opacity-0 scale-150"
							}`}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default TwoImagesSpace;
