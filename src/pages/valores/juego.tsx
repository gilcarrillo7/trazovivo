import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";
import Layout from "../../components/layout/Layout";
import { SEO } from "../../components/layout/SEO";
import LayoutValor from "../../components/valores/LayoutValor";

const Juego = () => {
	return (
		<Layout color="black" classNameHeader="bg-white">
			<LayoutValor
				classVideo="bg-white"
				video="761414272"
				url="https://trazovivo.com/valores/juego/"
				next="/valores/liderazgo"
			>
				<div className="font-light">
					<p className="font-bold text-tvpurple mb-4">
						<Trans>Juego</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>juego.t1</Trans>
					</p>

					<p className="font-light mb-4">
						<Trans>juego.t2</Trans>{" "}
						<span className="font-bold text-tvpurple">
							<Trans>juego.t3</Trans>
						</span>
					</p>
					<p className="font-light mb-4">
						<Trans>juego.t4</Trans>
					</p>
					<p className="font-bold mb-4 text-tvpurple">
						<Trans>juego.t5</Trans>
					</p>
					<p className="font-bold mb-4 text-tvpurple">
						<Trans>juego.t6</Trans>
					</p>
					<p className=" mb-4 ">
						<Trans>juego.t7</Trans>
					</p>
				</div>
			</LayoutValor>
		</Layout>
	);
};

export default Juego;

export const Head = () => (
	<SEO
		title="Trazo Vivo - Valores - Juego"
		image="https://trazovivo.com/imgs/valor1.gif"
		description="El juego abre un espacio sin necesidad ni preocupaciones, no está sometido a un objetivo ni a una utilidad."
		url="/valores/juego"
	/>
);

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
