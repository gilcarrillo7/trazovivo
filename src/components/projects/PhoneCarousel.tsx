import * as React from "react";
import Carousel from "react-multi-carousel";

import PhoneWhite from "../../images/TEL_BCO.png";
import PhoneBlack from "../../images/TEL.png";

import "react-multi-carousel/lib/styles.css";

const PhoneCarousel = ({
	variant,
	imgsDkt,
	imgsMob,
}: {
	variant: "white" | "black";
	imgsDkt: string[];
	imgsMob: string[];
}) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 576 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 640, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	const classMob =
		variant === "white" ? "sm:hidden m-auto px-1 w-48" : "sm:hidden m-auto px-1 w-48";
	const classContMob =
		variant === "white"
			? "flex m-auto w-48 overflow-hidden"
			: "flex m-auto w-44 md:w-80 overflow-hidden";
	const classMobPhone =
		variant === "white"
			? "w-56 sm:hidden absolute top-0 left-1/2 -translate-x-1/2"
			: "w-56 sm:hidden absolute -top-4 left-1/2 -translate-x-1/2";
	const classCont =
		variant === "white" ? "carousel-phone mb-8 relative p-8" : "carousel-phone carousel-phone-black mb-16 sm:mb-8 relative p-8";

	return (
		<div className={classCont}>
			<img
				src={variant === "white" ? PhoneWhite : PhoneBlack}
				alt="Image Phone Carousel"
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
				<div className={classContMob}>
					<img
						src={imgsDkt[0]}
						alt="Image Crousel 1"
						className="hidden sm:block"
					/>
					<img src={imgsMob[0]} alt="Image Crousel 1" className={classMob} />
				</div>
				<div className={classContMob}>
					<img
						src={imgsDkt[1]}
						alt="Image Crousel 2"
						className="hidden sm:block"
					/>
					<img src={imgsMob[1]} alt="Image Crousel 1" className={classMob} />
				</div>
				<div className={classContMob}>
					<img
						src={imgsDkt[2]}
						alt="Image Crousel 3"
						className="hidden sm:block"
					/>
					<img src={imgsMob[2]} alt="Image Crousel 1" className={classMob} />
				</div>
			</Carousel>
		</div>
	);
};

export default PhoneCarousel;
