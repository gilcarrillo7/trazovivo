import React, { useContext } from "react";
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next";
import { AppContext } from "../../context/AppContext";
import Linkedin from "../icons/Linkedin";
import InnerContainer from "./InnerContainer";

const items = [
	{ to: "/", label: "Inicio" },
	{ to: "/quienes_somos", label: "Quienes somos" },
	{ to: "/#projects", label: "Proyectos" },
	{ to: "/valores", label: "Valores" },
	{ to: "/personal", label: "Personal" },
	{ to: "/contacto", label: "Contacto", mobileOnly: true },
];

const Menu = () => {
	const { menuOpen, setMenuOpen } = useContext(AppContext);
	const { language, changeLanguage } = useI18next();
	return (
		<div
			id="main-menu"
			aria-hidden={!menuOpen}
			className={`w-screen h-screen bg-black fixed top-0 left-0 z-20 flex items-center transition-all duration-1000 ease-in-out ${
				menuOpen
					? "opacity-100 visible"
					: "opacity-0 translate-x-[100%] invisible"
			}`}
		>
			<InnerContainer>
				<div className="flex flex-col md:flex-row text-white">
					<div className="md:order-2 md:w-[35%]">
						<ul className="font-light text-3xl sm:text-5xl lg:text-6xl w-3/5 md:w-full xl:ml-6 2xl:ml-16">
							{items.map(({ to, label, mobileOnly }) => (
								<li
									key={to}
									className={`border-b border-white py-2 mb-2 sm:mb-4 ${
										mobileOnly ? "md:hidden" : ""
									}`}
								>
									<Link
										to={to}
										onClick={() => setMenuOpen(false)}
										className="font-thin hover:font-normal"
									>
										<Trans>{label}</Trans>
									</Link>
								</li>
							))}
						</ul>
						<div className="md:hidden flex pt-4 pb-8">
							<button
								type="button"
								className="self-end leading-5 transition-all duration-1000 ease-in-out text-2xl font-light"
								onClick={() => {
									setMenuOpen(false);
									changeLanguage(language === "es" ? "en" : "es");
								}}
							>
								<Trans>lang</Trans>
							</button>
							<Linkedin className="ml-8" color="white" />
						</div>
					</div>
					<div className="md:order-1 md:w-3/5 flex items-center mt-8 md:mt-0">
						<p className="font-thin text-white text-lg md:text-[1.4rem] ">
							<Trans>menu.t1</Trans>
						</p>
					</div>
				</div>
			</InnerContainer>
		</div>
	);
};

export default Menu;
