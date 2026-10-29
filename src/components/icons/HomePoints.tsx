import React, { useContext, useEffect, useMemo, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import useWindowSize from "../../hooks/useWindowWide";
import Circle from "./points/Circle";
import Point from "./points/Point";

const COLS = 9;
const ROWS = 14;

const HomePoints = () => {
	const { hoverReel, setHoverReel } = useContext(AppContext);
	const { width } = useWindowSize();
	const small = width < 640;
	const timer = useRef<ReturnType<typeof setTimeout>>();

	// One random delay per point, computed once (not on every render).
	const points = useMemo(
		() =>
			Array.from({ length: ROWS * COLS }, (_, n) => {
				const hor = n % COLS;
				const ver = Math.floor(n / COLS);
				const center = hor > 1 && hor < 7 && ver > 3 && ver < 10;
				return {
					hor,
					ver,
					center,
					delay: Math.floor(Math.random() * (center ? 1000 : 500)),
				};
			}),
		[],
	);

	useEffect(() => () => clearTimeout(timer.current), []);

	return (
		<div
			className={`relative w-[200px] sm:w-[250px] h-[345px] sm:h-[425px] mt-2 sm:mt-0`}
			onMouseOver={() => {
				clearTimeout(timer.current);
				setHoverReel(true);
			}}
			onMouseLeave={() => {
				clearTimeout(timer.current);
				timer.current = setTimeout(() => setHoverReel(false), 1300);
			}}
		>
			{points.map(({ hor, ver, center, delay }) => (
				<Point
					key={`${ver}-${hor}`}
					hor={hor * 1.9}
					ver={ver * 1.9}
					center={center}
					delay={delay}
					hoverReel={hoverReel}
					small={small}
				/>
			))}
			<Circle className="" />
		</div>
	);
};

export default HomePoints;
