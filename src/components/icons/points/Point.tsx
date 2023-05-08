import React, { useContext, useMemo } from "react";
import { useSpring, animated } from "react-spring";
import { AppContext } from "../../../context/AppContext";
import useWindowSize from "../../../hooks/useWindowWide";

const Point = ({
	className = "",
	center = false,
	hor,
	ver,
}: {
	className?: string;
	center: boolean;
	hor: number;
	ver: number;
}) => {
	const { hoverReel } = useContext(AppContext);
	const { width } = useWindowSize();
	const left = useMemo(() => (width < 640 ? hor * 0.8 : hor), [width, hor]);
	const top = useMemo(() => (width < 640 ? ver * 0.8 : ver), [width, ver]);
	const dist = useMemo(() => (width < 640 ? 0.5 : 1.5), [width]);
	const rnd = useMemo(
		() => Math.floor(Math.random() * (center ? 1000 : 500)),
		[center]
	);
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
		delay: rnd,
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

export default Point;
