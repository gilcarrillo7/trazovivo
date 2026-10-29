import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import Carousel from "react-multi-carousel";

import { carouselResponsive } from "../shared/carouselConfig";

import "react-multi-carousel/lib/styles.css";

const responsive = carouselResponsive();

const Slide = (props: { children: React.ReactNode }) => (
	<div className="w-full text-center font-normal text-2xl sm:text-3xl lg:text-4xl">
		{props.children}
	</div>
);

const Frases = () => {
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
