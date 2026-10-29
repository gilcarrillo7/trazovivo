import React, { memo } from "react";
import { useSpring, animated } from "react-spring";

interface IProps {
	className?: string;
	center: boolean;
	hor: number;
	ver: number;
	hoverReel: boolean;
	small: boolean;
	delay: number;
}

const Point = ({
	className = "",
	center,
	hor,
	ver,
	hoverReel,
	small,
	delay,
}: IProps) => {
	const left = small ? hor * 0.8 : hor;
	const top = small ? ver * 0.8 : ver;
	const dist = small ? 0.5 : 1.5;

	const styles = useSpring({
		to: hoverReel
			? [
					{
						transform: center ? "scale(6,6)" : "scale(4,4)",
						left: center
							? `${hor < 8 ? hor + dist : hor - dist}rem`
							: `${left}rem`,
						top: center
							? `${ver < 12 ? ver + dist : ver - dist}rem`
							: `${top}rem`,
					},
					{ transform: center ? "scale(3,3)" : "scale(0,0)" },
				]
			: { transform: "scale(1,1)", left: `${left}rem`, top: `${top}rem` },
		from: { transform: "scale(1,1)", left: `${left}rem`, top: `${top}rem` },
		delay,
		reset: false,
		config: { duration: 400 },
	});

	return (
		<animated.div
			className={`absolute w-[0.4rem] h-[0.4rem] bg-tvyellow rounded-full ${className}`}
			style={styles}
		></animated.div>
	);
};

export default memo(Point);
