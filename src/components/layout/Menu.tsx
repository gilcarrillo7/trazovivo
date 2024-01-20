import { Link } from "gatsby";
import React, { useContext } from "react";
import {
	Trans,
	Link as LinkTrans,
	useI18next,
} from "gatsby-plugin-react-i18next";
import { AppContext } from "../../context/AppContext";
import Linkedin from "../icons/Linkedin";
import InnerContainer from "./InnerContainer";

const Menu = () => {
	const { menuOpen, setMenuOpen } = useContext(AppContext);
	const { language, changeLanguage } = useI18next();
	return (
		<div
			className={`w-screen h-screen bg-black fixed top-0 left-0 z-20 flex items-center transition-all duration-1000 ease-in-out ${
				menuOpen ? "opacity-100" : "opacity-0 translate-x-[100%]"
			}`}
		>
			<InnerContainer>
				<div className="flex flex-col md:flex-row text-white">
					<div className="md:order-2 md:w-[35%]">
						<ul className="font-light text-3xl sm:text-5xl lg:text-6xl w-3/5 md:w-full xl:ml-6 2xl:ml-16">
							<li className="border-b boder-white py-2 mb-2 sm:mb-4">
								<Link
									to="/"
									onClick={() => setMenuOpen(false)}
									className="font-thin hover:font-normal"
								>
									<Trans>Inicio</Trans>
								</Link>
							</li>
							<li className="border-b boder-white py-2 mb-2 sm:mb-4">
								<Link
									to="/quienes_somos"
									onClick={() => setMenuOpen(false)}
									className="font-thin hover:font-normal"
								>
									<Trans>Quienes somos</Trans>
								</Link>
							</li>
							<li className="border-b boder-white py-2 mb-2 sm:mb-4">
								<Link
									to="/#projects"
									onClick={() => setMenuOpen(false)}
									className="font-thin hover:font-normal"
								>
									<Trans>Proyectos</Trans>
								</Link>
							</li>
							<li className="border-b boder-white py-2 mb-2 sm:mb-4">
								<Link
									to="/valores"
									onClick={() => setMenuOpen(false)}
									className="font-thin hover:font-normal"
								>
									<Trans>Valores</Trans>
								</Link>
							</li>
							<li className="border-b boder-white py-2 mb-2 sm:mb-4">
								<Link
									to="/personal"
									onClick={() => setMenuOpen(false)}
									className="font-thin hover:font-normal"
								>
									<Trans>Personal</Trans>
								</Link>
							</li>
							<li className="border-b boder-white py-2 mb-2 sm:mb-4 md:hidden">
								<Link
									to="/contacto"
									onClick={() => setMenuOpen(false)}
									className="font-thin hover:font-normal"
								>
									<Trans>Contacto</Trans>
								</Link>
							</li>
						</ul>
						<div className="md:hidden flex pt-4 pb-8">
							<LinkTrans
								className="self-end leading-5 transition-all duration-1000 ease-in-out text-2xl font-light"
								to=""
								onClick={(e) => {
									e.preventDefault();
									setMenuOpen(false);
									changeLanguage(language === "es" ? "en" : "es");
								}}
							>
								<Trans>lang</Trans>
							</LinkTrans>
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
