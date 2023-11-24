import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { graphql, PageProps, navigate } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

import { Trans } from "react-i18next";
import { AppContext } from "../context/AppContext";

import Layout from "../components/layout/Layout";
import InnerContainer from "../components/layout/InnerContainer";
import Button from "../components/shared/Button";
import HomePoints from "../components/icons/HomePoints";
import Footer from "../components/layout/Footer";
import Frases from "../components/home/Frases";

import Testimonios from "../components/home/Testimonios";
import Clients from "../components/home/Clients";
import Projects from "../components/home/Projects";

import IlusValores from "../images/HomeIlusValores.svg";
import { SEO } from "../components/layout/SEO";

const IndexPage = (props: PageProps) => {
	const { menuOpen, setHoverReel } = useContext(AppContext);
	const { ref: refFirst, inView: viewFirst } = useInView({ threshold: 0.5 });
	const { ref: refSecond, inView: viewSecond } = useInView({ threshold: 0.5 });
	const { ref: refThird, inView: viewThird } = useInView({ threshold: 0.5 });
	const { ref: refFourth, inView: viewFourth } = useInView({ threshold: 0.5 });
	const { ref: refFifth, inView: viewFifth } = useInView({ threshold: 0.5 });

	const [openMenu, setOpenMenu] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(false);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position > 900);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	useEffect(() => {
		if (menuOpen) setOpenMenu(true);
		else setTimeout(() => setOpenMenu(false), 1000);
	}, [menuOpen]);

	return (
		<Layout
			color="white"
			classNameHeader={`${scrollPosition ? "" : "fixed"} w-screen`}
		>
			<div
				ref={refFirst}
				className={`w-screen min-h-screen bg-tvpink fixed z-0 flex items-center`}
			>
				<InnerContainer className="sm:min-h-screen flex items-center flex-col sm:flex-row py-10 sm:py-0">
					<div className="sm:w-1/2 flex justify-center sm:order-2 ">
						<HomePoints />
					</div>
					<div
						className={`mt-2 sm:mt-0 sm:w-1/2 sm:order-1 transition-all duration-1000 ease-in-out ${
							viewFirst ? "opacity-100" : "opacity-0 translate-y-8"
						}`}
					>
						<p
							className={`font-thin text-white text-2xl md:text-4xl sm:!leading-[3rem]`}
						>
							<Trans>
								Potenciamos organizaciones comprometidas con el impacto social
							</Trans>
							.
						</p>
						<Button
							text="Reel"
							variant="white"
							className={`mt-4 sm:mt-6`}
							action={() => navigate("/presentacion_comunicacion")}
							mouseOver={() => setHoverReel(true)}
							mouseLeave={() => setTimeout(() => setHoverReel(false), 1300)}
						/>
					</div>
				</InnerContainer>
			</div>
			<div className={`${openMenu ? "z-0" : "z-30"} mt-[100vh]`}>
				<div className="w-screen bg-white">
					<InnerContainer className="sm:min-h-screen flex items-center py-16 sm:py-0">
						<div
							ref={refSecond}
							className={`font-light text-3xl sm:text-4xl transition-all duration-1000 ease-in-out ${
								viewSecond ? "opacity-100" : "opacity-0 translate-y-16"
							}`}
						>
							<p className="mb-8">
								<Trans>Comunicar es algo más que solamente hablar</Trans>.
							</p>
							<p className="mb-8">
								<Trans>La</Trans>{" "}
								<span className="font-bold text-tvpurple">
									<Trans>comunicación significativa</Trans>
								</span>{" "}
								<Trans>
									involucra varias acciones a la vez, como saber escuchar,
									mostrar empatía y sobre todo, cercanía y comprensión
								</Trans>
								.
							</p>
							<Button
								text="Proyectos"
								variant="purple"
								action={() => scrollTo("#projects")}
							/>
						</div>
					</InnerContainer>
				</div>
				<div className="w-screen bg-white">
					<InnerContainer className="sm:min-h-screen py-16 sm:py-0 flex flex-col items-center">
						<img src={IlusValores} alt="Valores" className="mx-auto" />
						<Frases />
						<Button
							text="Valores"
							variant="fillpurple"
							action={() => navigate("/valores")}
						/>
					</InnerContainer>
				</div>
				<div id="projects" className="w-screen min-h-screen bg-white">
					<div className="container">
						<h1
							ref={refThird}
							className={`font-light text-3xl sm:text-4xl pt-2 sm:pt-6 mb-12 transition-all duration-700 ease-in-out delay-500 ${
								viewThird ? "opacity-100" : "opacity-0 translate-x-16"
							}`}
						>
							<Trans>Proyectos</Trans>
						</h1>
					</div>
					<Projects />
				</div>
				<div className="w-screen bg-black">
					<InnerContainer className="sm:min-h-screen flex items-center py-16 sm:py-0">
						<Testimonios />
					</InnerContainer>
				</div>
				<div className="w-screen min-h-screen bg-black">
					<div className="min-h-screen flex items-center py-16 sm:py-0">
						<div className="w-full">
							<InnerContainer>
								<p
									ref={refFourth}
									className={`text-2xl sm:text-3xl text-white font-normal mb-16 transition-all duration-700 ease-in-out delay-300 ${
										viewFourth ? "opacity-100" : "opacity-0"
									}`}
								>
									<Trans>
										Agradecemos y valoramos la confianza de nuestros clientes
									</Trans>
									.
								</p>
							</InnerContainer>
							<Clients />
							<InnerContainer>
								<div className="text-center mt-12">
									<p
										ref={refFifth}
										className={`text-white font-bold text-3xl sm:text-4xl mb-8 transition-all duration-1000 ease-in-out delay-300 ${
											viewFifth ? "opacity-100" : "opacity-0 scale-0"
										}`}
									>
										<Trans>Escríbenos y transformemos juntxs el mundo</Trans>.
									</p>
									<Button
										text="Contacto"
										variant="whiteblack"
										className="mb-16"
										action={() => navigate("/contacto")}
									/>
								</div>
							</InnerContainer>
						</div>
					</div>
				</div>
			</div>
			<Footer className="bg-white" />
		</Layout>
	);
};

export const Head = () => <SEO />;

export default IndexPage;

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
