import * as React from "react";
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next";
import Helmet from "react-helmet";
import Linkedin from "../icons/Linkedin";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "./Menu";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import Logo10 from "../../images/logo10.svg";
import { navigate } from "gatsby";

interface IProps {
  color?: string;
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
  const currentColor = menuOpen ? "white" : color;

  return (
    <>
      <Helmet
        bodyAttributes={{
          class: `${menuOpen ? "overflow-hidden" : ""}`,
        }}
      />
      <header>
        <div
          className={`z-10 
					${className}
				`}
        >
          <div
            className={`container relative py-4 z-30 font-light text-xl flex text-${currentColor}`}
          >
            <div className="sm:w-1/2 flex gap-2 sm:gap-4">
              <button
                className="inline-flex"
                onClick={() => {
                  navigate("/");
                  setMenuOpen(false);
                }}
              >
                <Logo color={currentColor} />
              </button>
              <img
                src={Logo10}
                alt="10 años"
                className="w-[100px] lg:w-[135px]"
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
                  <Link
                    className="self-end leading-5 transition-all duration-1000 ease-in-out"
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                      changeLanguage(language === "es" ? "en" : "es");
                    }}
                  >
                    <Trans>lang</Trans>
                  </Link>
                </div>
                <Linkedin
                  className="hidden md:inline-flex "
                  color={currentColor}
                />
              </div>
            </div>
            <Hamburger color={currentColor} />
          </div>
          <Menu />
        </div>
      </header>
    </>
  );
};

export default Header;
