import React from "react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Circle from "./points/Circle";
import Point from "./points/Point";

const HomePoints = () => {
	const { setHoverReel } = useContext(AppContext);
	const horizontal = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	const vertical = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

	return (
		<div
			className={`relative w-[200px] sm:w-[250px] h-[345px] sm:h-[425px] mt-2 sm:mt-0`}
			onMouseOver={() => setHoverReel(true)}
			onMouseLeave={() => setTimeout(() => setHoverReel(false), 1300)}
		>
			{vertical.map((ver, i) => (
				<React.Fragment key={`ver${i}${ver}`}>
					{horizontal.map((hor, j) => (
						<Point
							key={`hor${j}${hor}`}
							hor={hor * 1.9}
							ver={ver * 1.9}
							center={hor > 1 && hor < 7 && ver > 3 && ver < 10 ? true : false}
						/>
					))}
				</React.Fragment>
			))}
			<Circle className="" />
		</div>
	);
};

export default HomePoints;
