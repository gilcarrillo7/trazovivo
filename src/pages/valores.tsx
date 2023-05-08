import { graphql, Link, navigate } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Footer from "../components/layout/Footer";
import InnerBigContainer from "../components/layout/InnerBigContainer";
import Layout from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import Button from "../components/shared/Button";

import Valor1 from "../images/valores/valor1.gif";
import Valor2 from "../images/valores/valor2.gif";
import Valor3 from "../images/valores/valor3.gif";
import Valor4 from "../images/valores/valor4.gif";
import Valor5 from "../images/valores/valor5.gif";

const valores = [
	{
		img: Valor1,
		title: "Juego",
		link: "juego",
		text: "valores.juego",
	},
	{
		img: Valor2,
		title: "Liderazgo",
		link: "liderazgo",
		text: "valores.liderazgo",
	},
	{
		img: Valor3,
		title: "Presente",
		link: "presente",
		text: "valores.presente",
	},
	{
		img: Valor4,
		title: "Interdependencia",
		link: "interdependencia",
		text: "valores.interdependencia",
	},
	{
		img: Valor5,
		title: "Pausa",
		link: "pausa",
		text: "valores.pausa",
	},
];

const Valor = ({
	img,
	title,
	text,
	link,
}: {
	img: any;
	title: string;
	text: string;
	link: string;
}) => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	return (
		<Link to={link}>
			<div
				ref={ref}
				className={`mb-8 transition-all duration-1000 ease-in-out ${
					inView ? "opacity-100" : "opacity-0 translate-y-8"
				}`}
			>
				<img className="w-full" alt={title} src={img} />
				<p className="text-tvpurple font-light my-2 sm:my-4 text-2xl">
					<Trans>{title}</Trans>
				</p>
				<p className="text-base sm:text-lg font-normal">
					<Trans>{text}</Trans>
				</p>
			</div>
		</Link>
	);
};

const Valores = () => {
	const { ref: ref1, inView: view1 } = useInView({ threshold: 0.3 });
	return (
		<Layout color="black">
			<InnerBigContainer>
				<div className="mt-12 sm:mt-24">
					<div className="xl:w-2/3 mb-8 sm:mb-20">
						<p
							ref={ref1}
							className={`font-light text-2xl sm:text-4xl transition-all duration-1000 ease-in-out ${
								view1 ? "opacity-100" : "opacity-0 translate-x-8"
							}`}
						>
							<Trans>
								Cambiamos el mundo en la medida en que cambiamos nuestros
							</Trans>{" "}
							<span className="text-tvpurple">
								{" "}
								<Trans>valores</Trans>.
							</span>
						</p>
					</div>
					<div className="sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-x-4 lg:gap-x-16">
						{valores.map((valor, i) => (
							<Valor
								key={`${i}${valor.text}`}
								img={valor.img}
								title={valor.title}
								text={valor.text}
								link={valor.link}
							/>
						))}
					</div>
					<div className="w-full xl:w-2/3 h-px bg-tvpink mt-8 mb-12"></div>
					<div className="text-xl text-lg sm:text-xl xl:w-2/3 font-light">
						<p className="mb-4">
							<Trans>valores.t1</Trans>.
						</p>
						<p className="mb-4">
							<Trans>valores.t2</Trans>.
						</p>
						<p className="mb-4">
							<Trans>valores.t3</Trans>{" "}
							<span className="text-tvpurple font-bold">
								{" "}
								<Trans>valores humanos</Trans>
							</span>
							.
						</p>
						<p className="mb-4 font-bold text-tvpurple">
							<Trans>valores.t4</Trans>
						</p>
						<p className="font-bold">
							<Trans>valores.t5</Trans>
						</p>

						<Button
							text="Contacto"
							variant="purple"
							className="my-20"
							action={() => navigate("/contacto")}
						/>
					</div>
				</div>
			</InnerBigContainer>
			<Footer className="bg-black text-white" />
		</Layout>
	);
};

export default Valores;

export const Head = () => <SEO title="Valores" url="/valores" />;

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
