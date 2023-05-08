import * as React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const MultiCarousel = ({ imgs }: { imgs: string[] }) => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 576 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<>
			<div className="pb-8 hidden sm:block">
				<Carousel
					responsive={responsive}
					additionalTransfrom={0}
					arrows={false}
					autoPlay={true}
					autoPlaySpeed={1}
					centerMode={false}
					className=""
					customTransition={"all 50s linear"}
					dotListClass=""
					draggable={true}
					focusOnSelect={false}
					infinite
					itemClass=""
					keyBoardControl
					minimumTouchDrag={80}
					showDots={false}
					slidesToSlide={1}
					swipeable={false}
					transitionDuration={50000}
				>
					{imgs.map((img, indx) => (
						<div key={indx}>
							<img key={`${indx}${img}`} src={img} alt="Image Crousel" />
						</div>
					))}
				</Carousel>
			</div>
			<div className="pb-8 sm:hidden">
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
						<div key={indx}>
							<img key={`res${indx}${img}`} src={img} alt="Image Crousel" />
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
};

export default MultiCarousel;
