import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";
import Layout from "../../components/layout/Layout";
import { SEO } from "../../components/layout/SEO";
import LayoutValor from "../../components/valores/LayoutValor";

const Interdependencia = () => {
	return (
		<Layout color="black" classNameHeader="bg-white">
			<LayoutValor
				classVideo="bg-white"
				video="543595737"
				url="https://trazovivo.com/valores/interdependencia/"
				next="/valores/pausa"
			>
				<p className="font-bold text-tvpurple mb-4">
					<Trans>Interdependencia</Trans>
				</p>
				<p className="font-light mb-4">
					<Trans>interdependencia.t1</Trans>
				</p>

				<p className="font-light mb-4">
					<span className="font-bold text-tvpurple">
						<Trans>interdependencia.t2</Trans>
					</span>{" "}
					<Trans>interdependencia.t3</Trans>
				</p>
				<p className="font-light mb-4">
					<span className="font-bold text-tvpurple">
						<Trans>interdependencia.t4</Trans>
					</span>{" "}
					<Trans>interdependencia.t5</Trans>
				</p>
				<p className="mb-4 font-light">
					<Trans>interdependencia.t6</Trans>
				</p>
				<p className="mb-4 font-bold text-tvpurple">
					<Trans>interdependencia.t7</Trans>
				</p>
				<p className="mb-4 font-light">
					<Trans>interdependencia.t8</Trans>
				</p>
			</LayoutValor>
		</Layout>
	);
};

export default Interdependencia;

export const Head = () => (
	<SEO
		title="Trazo Vivo - Valores - Interdependencia"
		image="https://trazovivo.com/imgs/valor4.gif"
		description="Ser conscientes de nuestra dependencia de otras formas de vida, nos arraiga al mundo. El mundo es una relación."
		url="/valores/interdependencia"
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
