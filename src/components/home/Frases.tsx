import * as React from "react";
import { ReactI18NextChild, Trans } from "react-i18next";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const Slide = (props: {
	children: boolean | React.ReactFragment | React.ReactPortal | React.ReactNode;
}) => (
	<div className="w-full text-center font-normal text-2xl sm:text-3xl lg:text-4xl">
		{props.children}
	</div>
);

const Frases = () => {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 576 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 576, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};

	return (
		<div className="w-full my-16">
			<Carousel
				className=""
				responsive={responsive}
				arrows={false}
				autoPlay={true}
				draggable={true}
				infinite
				keyBoardControl
				minimumTouchDrag={80}
				showDots={false}
				swipeable={true}
				autoPlaySpeed={3000}
			>
				<Slide>
					<Trans>frases1.t1</Trans> <br className="hidden sm:block" />{" "}
					<Trans>frases1.t2</Trans>{" "}
					<span className="text-tvpurple font-semibold">
						<Trans>frases1.t3</Trans>
					</span>{" "}
					<Trans>frases1.t4</Trans>.
				</Slide>
				<Slide>
					<Trans>frases2.t1</Trans>{" "}
					<span className="text-tvpurple font-semibold">
						<Trans>frases2.t2</Trans>
					</span>{" "}
					<Trans>frases2.t3</Trans> <br className="hidden sm:block" />
					<Trans>frases2.t4</Trans>.
				</Slide>
				<Slide>
					<Trans>frases3.t1</Trans> <br className="hidden sm:block" />
					<span className="text-tvpurple font-semibold">
						<Trans>frases3.t2</Trans>
					</span>
					<Trans>frases3.t3</Trans> <br className="hidden sm:block" />
					<Trans>frases3.t4</Trans>.
				</Slide>
				<Slide>
					<Trans>frases4.t1</Trans>{" "}
					<span className="text-tvpurple font-semibold">
						<Trans>frases4.t2</Trans>
					</span>{" "}
					<Trans>frases4.t3</Trans> <br className="hidden sm:block" />
					<Trans>frases4.t4</Trans>.
				</Slide>
			</Carousel>
		</div>
	);
};

export default Frases;
