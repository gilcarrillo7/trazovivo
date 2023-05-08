import * as React from "react";
import { Trans } from "react-i18next";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

const Testimonios = () => {
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
				<div className="w-full text-left xl:pr-48 sm:pr-28">
					<p className="text-3xl sm:text-4xl !font-light mb-16">
						<Trans>testimonio1.1</Trans>
					</p>
					<div className="font-normal text-lg sm:text-xl">
						<p>
							<Trans>testimonio1.2</Trans>
						</p>
						<p>
							<Trans>testimonio1.3</Trans>
						</p>
						<p>
							<Trans>testimonio1.4</Trans>
						</p>
					</div>
				</div>
				<div className="w-full text-left xl:pr-48 sm:pr-28">
					<p className="text-3xl sm:text-4xl !font-light mb-16">
						<Trans>testimonio2.1</Trans>
					</p>
					<div className="font-normal text-lg sm:text-xl">
						<p>
							<Trans>testimonio2.2</Trans>
						</p>
						<p>
							<Trans>testimonio2.3</Trans>
						</p>
						<p>
							<Trans>testimonio2.4</Trans>
						</p>
					</div>
				</div>
				<div className="w-full text-left xl:pr-48 sm:pr-28">
					<p className="text-3xl sm:text-4xl !font-light mb-16">
						<Trans>testimonio3.1</Trans>
					</p>
					<div className="font-normal text-lg sm:text-xl">
						<p>
							<Trans>testimonio3.2</Trans>
						</p>
						<p>
							<Trans>testimonio3.3</Trans>
						</p>
						<p>
							<Trans>testimonio3.4</Trans>
						</p>
					</div>
				</div>
				<div className="w-full text-left xl:pr-48 sm:pr-28">
					<p className="text-3xl sm:text-4xl !font-light mb-16">
						<Trans>testimonio4.1</Trans>
					</p>
					<div className="font-normal text-lg sm:text-xl">
						<p>
							<Trans>testimonio4.2</Trans>
						</p>
						<p>
							<Trans>testimonio4.3</Trans>
						</p>
						<p>
							<Trans>testimonio4.4</Trans>
						</p>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Testimonios;
