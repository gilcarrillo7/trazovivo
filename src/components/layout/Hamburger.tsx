import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

interface IProps {
	color: string;
}

const Hamburger = ({ color }: IProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext);

	return (
		<button
			className={`absolute 2xl:mr-16 xl:mr-12 lg:mr-8 sm:mr-0 mr-2 right-0 top-2 sm:top-4 w-9 h-12 focus:outline-none bg-transparent transition duration-200 ease-in-out z-30 ${
				menuOpen ? "text-white" : "text-black"
			}`}
			onClick={() => setMenuOpen(!menuOpen)}
		>
			<span className="sr-only">Menu</span>
			<span
				aria-hidden="true"
				className={`block absolute h-1 w-7 bg-${color} transform transition duration-500 ease-in-out ${
					menuOpen ? "rotate-45" : "-translate-y-3"
				}`}
			></span>
			<span
				aria-hidden="true"
				className={`block absolute h-1 w-7 bg-${color} transform transition duration-500 ease-in-out ${
					menuOpen && "opacity-0"
				}`}
			></span>
			<span
				aria-hidden="true"
				className={`block absolute h-1 w-7 bg-${color} transform  transition duration-500 ease-in-out ${
					menuOpen ? "-rotate-45" : "translate-y-3"
				}`}
			></span>
		</button>
	);
};

export default Hamburger;
