import * as React from "react";
import useReveal from "../../hooks/useReveal";

import Client1 from "../../images/clients/1.svg";
import Client2 from "../../images/clients/2.svg";
import Client3 from "../../images/clients/3.svg";
import Client4 from "../../images/clients/4.svg";
import Client5 from "../../images/clients/5.svg";
import Client6 from "../../images/clients/6.svg";
import Client7 from "../../images/clients/7.svg";
import Client9 from "../../images/clients/9.svg";
import Client11 from "../../images/clients/11.svg";
import Client12 from "../../images/clients/12.svg";
import Client14 from "../../images/clients/14.svg";
import CFOSC from "../../images/clients/CFOSC.svg";
import FECHAC from "../../images/clients/FECHAC.svg";
import GIZ from "../../images/clients/GIZ.svg";

// Full class names (not interpolated) so Tailwind keeps them in production builds.
// Mobile: one continuous 2-column grid. Desktop: 20-column grid so rows of
// 5 (span 4) and 4 (span 5) logos line up.
// Empty alt = logo whose client name isn't set yet (treated as decorative).
const logos = [
	{ src: Client1, alt: "IRC", width: "w-20", span: "sm:col-span-4" },
	{ src: Client2, alt: "", width: "w-32", span: "sm:col-span-4" },
	{ src: GIZ, alt: "GIZ", width: "w-56", span: "sm:col-span-4" },
	{ src: CFOSC, alt: "CFOSC", width: "w-20", span: "sm:col-span-4" },
	{ src: FECHAC, alt: "FECHAC", width: "w-24", span: "sm:col-span-4" },
	{ src: Client6, alt: "", width: "w-56", span: "sm:col-span-5" },
	{ src: Client7, alt: "", width: "w-40", span: "sm:col-span-5" },
	{ src: Client5, alt: "", width: "w-24", span: "sm:col-span-5" },
	{ src: Client9, alt: "", width: "w-44", span: "sm:col-span-5" },
	{ src: Client4, alt: "", width: "w-44", span: "sm:col-span-4" },
	{ src: Client11, alt: "", width: "w-36", span: "sm:col-span-4" },
	{ src: Client12, alt: "", width: "w-36", span: "sm:col-span-4" },
	{ src: Client3, alt: "", width: "w-44", span: "sm:col-span-4" },
	{ src: Client14, alt: "", width: "w-32", span: "sm:col-span-4" },
];

const Clients = () => {
	const { ref, inView } = useReveal(0.1);
	return (
		<div className="container">
			<div
				ref={ref}
				className={`grid grid-cols-2 sm:grid-cols-20 gap-x-12 gap-y-8 mb-8 justify-items-center items-center transition-all duration-1000 ease-in-out ${
					inView ? "opacity-100" : "opacity-0"
				}`}
			>
				{logos.map(({ src, alt, width, span }) => (
					<div key={src} className={`flex justify-center ${span}`}>
						<img
							src={src}
							alt={alt}
							loading="lazy"
							className={`mb-4 mx-auto ${width}`}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Clients;
