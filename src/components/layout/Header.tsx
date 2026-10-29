import * as React from "react";
import { useContext, useEffect } from "react";
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next";
import Linkedin from "../icons/Linkedin";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "./Menu";
import { LayoutColor, textColor } from "./colors";
import { AppContext } from "../../context/AppContext";
import Logo10 from "../../images/logo10.svg";

interface IProps {
	color?: LayoutColor;
	className?: string;
	justLogo?: boolean;
}

const Header = ({
	color = "white",
	className = "",
	justLogo = false,
}: IProps) => {
	const { menuOpen, setMenuOpen } = useContext(AppContext);
	const { language, changeLanguage } = useI18next();
	const currentColor: LayoutColor = menuOpen ? "white" : color;

	// Lock body scroll while the menu is open.
	useEffect(() => {
		document.body.classList.toggle("overflow-hidden", menuOpen);
		return () => document.body.classList.remove("overflow-hidden");
	}, [menuOpen]);

	return (
		<header>
			<div className={`z-10 ${className}`}>
				<div
					className={`container relative py-4 z-30 font-light text-xl flex ${textColor[currentColor]}`}
				>
					<div className="sm:w-1/2 flex gap-2 sm:gap-4">
						<Link
							to="/"
							className="inline-flex"
							aria-label="Trazo Vivo"
							onClick={() => setMenuOpen(false)}
						>
							<Logo color={currentColor} />
						</Link>
						<img
							src={Logo10}
							alt="10 años"
							width={150}
							height={47}
							className="w-[100px] lg:w-[135px] h-auto"
						/>
					</div>
					<div
						className={`sm:w-1/2 flex items-center justify-end ${
							justLogo ? "hidden" : ""
						}`}
					>
						<div className="sm:w-60 sm:mr-12 lg:mr-24 flex justify-between">
							<div className="hidden md:flex">
								<Link
									className="self-end leading-5 transition-all duration-1000 ease-in-out"
									to="/contacto"
								>
									<Trans>Contacto</Trans>
								</Link>
							</div>
							<div className="hidden md:flex">
								<button
									type="button"
									className="self-end leading-5 transition-all duration-1000 ease-in-out"
									onClick={() =>
										changeLanguage(language === "es" ? "en" : "es")
									}
								>
									<Trans>lang</Trans>
								</button>
							</div>
							<Linkedin
								className="hidden md:inline-flex"
								color={currentColor}
							/>
						</div>
					</div>
					<Hamburger color={currentColor} />
				</div>
				<Menu />
			</div>
		</header>
	);
};

export default Header;
