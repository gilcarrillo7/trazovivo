import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import Carousel from "react-multi-carousel";
import { carouselResponsive } from "../shared/carouselConfig";

import "react-multi-carousel/lib/styles.css";

const responsive = carouselResponsive();
const testimonios = [1, 2, 3, 4, 5];

const Testimonios = () => {
	return (
		<div className="w-full">
			<p className="text-xl sm:text-2xl font-light text-white mb-16">
				<Trans>Qué opinan nuestros clientes de nuestro trabajo</Trans>.
			</p>
			<Carousel
				className="text-white carousel-testimonios"
				responsive={responsive}
				arrows={false}
				autoPlay={true}
				draggable={true}
				infinite
				keyBoardControl
				minimumTouchDrag={80}
				showDots={true}
				swipeable={true}
				autoPlaySpeed={5000}
			>
				{testimonios.map((n) => (
					<div key={n} className="w-full text-left xl:pr-48 sm:pr-28">
						<p className="text-3xl sm:text-4xl !font-light mb-16">
							<Trans>{`testimonio${n}.1`}</Trans>
						</p>
						<div className="font-normal text-lg sm:text-xl">
							<p>
								<Trans>{`testimonio${n}.2`}</Trans>
							</p>
							<p>
								<Trans>{`testimonio${n}.3`}</Trans>
							</p>
							<p>
								<Trans>{`testimonio${n}.4`}</Trans>
							</p>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Testimonios;
