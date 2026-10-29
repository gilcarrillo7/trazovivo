import * as React from "react";
import Carousel from "react-multi-carousel";
import useWindowSize from "../../hooks/useWindowWide";
import { carouselResponsive } from "../shared/carouselConfig";

import "react-multi-carousel/lib/styles.css";

const responsive = carouselResponsive(2);

const MultiCarousel = ({
	imgs,
	alt = "Galería del proyecto",
}: {
	imgs: string[];
	alt?: string;
}) => {
	const { width } = useWindowSize();

	// Width is 0 until mounted; render only the carousel that applies so
	// images aren't downloaded twice.
	if (!width) return null;

	if (width >= 640) {
		return (
			<div className="pb-8">
				<Carousel
					responsive={responsive}
					additionalTransfrom={0}
					arrows={false}
					autoPlay={true}
					// Continuous scroll: tiny autoplay interval + long linear transition.
					autoPlaySpeed={1}
					centerMode={false}
					customTransition={"all 50s linear"}
					draggable={true}
					focusOnSelect={false}
					infinite
					keyBoardControl
					minimumTouchDrag={80}
					showDots={false}
					slidesToSlide={1}
					swipeable={false}
					transitionDuration={50000}
				>
					{imgs.map((img, indx) => (
						<div key={`${indx}${img}`}>
							<img src={img} alt={`${alt} ${indx + 1}`} loading="lazy" />
						</div>
					))}
				</Carousel>
			</div>
		);
	}

	return (
		<div className="pb-8">
			<Carousel
				responsive={responsive}
				arrows={false}
				autoPlay={false}
				draggable={true}
				infinite
				keyBoardControl
				minimumTouchDrag={80}
				showDots={true}
				swipeable={true}
			>
				{imgs.map((img, indx) => (
					<div key={`res${indx}${img}`}>
						<img src={img} alt={`${alt} ${indx + 1}`} loading="lazy" />
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default MultiCarousel;
