import * as React from "react";

import Client1 from "../../images/clients/1.svg";
import Client2 from "../../images/clients/2.svg";
import Client3 from "../../images/clients/3.svg";
import Client4 from "../../images/clients/4.svg";
import Client5 from "../../images/clients/5.svg";
import Client6 from "../../images/clients/6.svg";
import Client7 from "../../images/clients/7.svg";
import Client8 from "../../images/clients/8.svg";
import Client9 from "../../images/clients/9.svg";
import Client10 from "../../images/clients/10.svg";
import Client11 from "../../images/clients/11.svg";
import Client12 from "../../images/clients/12.svg";
import Client13 from "../../images/clients/13.svg";
import Client14 from "../../images/clients/14.svg";
import CFOSC from "../../images/clients/CFOSC.svg";
import FECHAC from "../../images/clients/FECHAC.svg";
import GIZ from "../../images/clients/GIZ.svg";
import { useInView } from "react-intersection-observer";

const Clients = () => {
	const { ref: ref1, inView: view1 } = useInView({ threshold: 0.5 });
	const { ref: ref2, inView: view2 } = useInView({ threshold: 0.5 });
	const { ref: ref3, inView: view3 } = useInView({ threshold: 0.5 });
	const { ref: ref4, inView: view4 } = useInView({ threshold: 0.5 });
	const { ref: ref5, inView: view5 } = useInView({ threshold: 0.5 });
	return (
		<div className="container">
			<div
				ref={ref1}
				className={`flex justify-center items-center sm:justify-between grid grid-cols-2 gap-12 mb-8 sm:grid-cols-5 transition-all duration-1000 ease-in-out ${
					view1 ? "opacity-100" : "opacity-0"
				}`}
			>
				<img src={Client1} alt="IRC" className="mb-4 mx-auto w-20" />
				<img src={Client2} alt="" className="mb-4 mx-auto w-32" />
				<img src={GIZ} alt="" className="mb-4 mx-auto w-56" />
				<img src={CFOSC} alt="" className="mb-4 mx-auto w-20" />
				<img src={FECHAC} alt="" className="hidden sm:flex mb-4 mx-auto w-24" />
			</div>
			<div
				ref={ref2}
				className={`flex justify-center items-center sm:justify-between grid grid-cols-2 gap-12 sm:hidden transition-all duration-1000 ease-in-out ${
					view2 ? "opacity-100" : "opacity-0"
				}`}
			>
				<img src={FECHAC} alt="" className="mb-4 mx-auto w-24" />
				<img src={Client6} alt="" className="mb-4 mx-auto w-56" />
			</div>
			<div
				ref={ref3}
				className={`flex justify-center items-center sm:justify-between grid grid-cols-2 gap-12 mb-8 sm:grid-cols-4 transition-all duration-1000 ease-in-out ${
					view3 ? "opacity-100" : "opacity-0"
				}`}
			>
				<img src={Client6} alt="" className="hidden sm:flex mb-4 mx-auto w-56" />
				<img src={Client7} alt="" className="mb-4 mx-auto w-40" />
				<img src={Client5} alt="" className="mb-4 mx-auto w-24" />
				<img src={Client9} alt="" className="hidden sm:flex mb-4 mx-auto w-44" />
			</div>
			<div
				ref={ref4}
				className={`flex justify-center items-center sm:justify-between grid grid-cols-2 gap-12 mb-8 sm:hidden transition-all duration-1000 ease-in-out ${
					view4 ? "opacity-100" : "opacity-0"
				}`}
			>
				<img src={Client9} alt="" className="mb-4 mx-auto w-44" />
				<img src={Client4} alt="" className="mb-4 mx-auto w-44" />
			</div>
			<div
				ref={ref5}
				className={`flex justify-center items-center sm:justify-between grid grid-cols-2 gap-12 mb-8 sm:grid-cols-5 transition-all duration-1000 ease-in-out ${
					view5 ? "opacity-100" : "opacity-0"
				}`}
			>
				<img src={Client4} alt="" className="hidden sm:flex mb-4 mx-auto w-44" />
				<img src={Client11} alt="" className="mb-4 mx-auto w-36" />
				<img src={Client12} alt="" className="mb-4 mx-auto w-36" />
				<img src={Client3} alt="" className="mb-4 mx-auto w-44" />
				<img src={Client14} alt="" className="mb-4 mx-auto w-32" />
			</div>
		</div>
	);
};

export default Clients;
