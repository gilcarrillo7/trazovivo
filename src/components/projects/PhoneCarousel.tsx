import * as React from "react";
import Carousel from "react-multi-carousel";
import { carouselResponsive } from "../shared/carouselConfig";

import PhoneWhite from "../../images/TEL_BCO.png";
import PhoneBlack from "../../images/TEL.png";

import "react-multi-carousel/lib/styles.css";

const responsive = carouselResponsive(3, { mobileMax: 640 });

const PhoneCarousel = ({
	variant,
	imgsDkt,
	imgsMob,
	alt = "Captura del proyecto",
}: {
	variant: "white" | "black";
	imgsDkt: string[];
	imgsMob: string[];
	alt?: string;
}) => {
	const isWhite = variant === "white";
	const classMob = "sm:hidden m-auto px-1 w-48";
	const classContMob = isWhite
		? "flex m-auto w-48 overflow-hidden"
		: "flex m-auto w-44 md:w-80 overflow-hidden";
	const classMobPhone = isWhite
		? "w-56 sm:hidden absolute top-0 left-1/2 -translate-x-1/2"
		: "w-56 sm:hidden absolute -top-4 left-1/2 -translate-x-1/2";
	const classCont = isWhite
		? "carousel-phone mb-8 relative p-8"
		: "carousel-phone carousel-phone-black mb-16 sm:mb-8 relative p-8";

	return (
		<div className={classCont}>
			<img
				src={isWhite ? PhoneWhite : PhoneBlack}
				alt=""
				aria-hidden="true"
				className={classMobPhone}
			/>

			<Carousel
				responsive={responsive}
				showDots={false}
				infinite={true}
				swipeable={true}
				draggable={false}
				arrows={false}
			>
				{imgsDkt.map((img, i) => (
					<div key={`${i}${img}`} className={classContMob}>
						<img
							src={img}
							alt={`${alt} ${i + 1}`}
							className="hidden sm:block"
							loading="lazy"
						/>
						<img
							src={imgsMob[i]}
							alt={`${alt} ${i + 1}`}
							className={classMob}
							loading="lazy"
						/>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default PhoneCarousel;
