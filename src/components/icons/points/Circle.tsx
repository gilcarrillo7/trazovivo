import React, { useContext } from "react";
import { useSpring, animated } from "react-spring";
import { AppContext } from "../../../context/AppContext";

const Circle = ({ className }: { className: string }) => {
	const { hoverReel } = useContext(AppContext);
	const styles = useSpring({
		to: hoverReel ? { transform: "scale(65,65)" } : { transform: "scale(0,0)" },
		from: { transform: "scale(0,0)" },
		delay: 100,
		reset: false,
		config: { duration: 800 },
	});

	return (
		<animated.div
			className={`absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 mt-[1px] w-[0.25rem] h-[0.25rem] bg-tvyellow rounded-full ${className}`}
			style={styles}
		></animated.div>
	);
};

export default Circle;
