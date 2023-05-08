import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";
import Layout from "../../components/layout/Layout";
import { SEO } from "../../components/layout/SEO";
import LayoutValor from "../../components/valores/LayoutValor";

const Presente = () => {
	return (
		<Layout color="black" classNameHeader="bg-white">
			<LayoutValor
				classVideo="bg-white"
				video="761416524"
				url="https://trazovivo.com/valores/presente/"
				next="/valores/interdependencia"
			>
				<div className="font-light">
					<p className="font-bold text-tvpurple mb-4">
						<Trans>Presente</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>presente.t1</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>presente.t2</Trans>
					</p>

					<p className="font-semibold mb-4 text-tvpurple">
						<Trans>presente.t3</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>presente.t4</Trans>
					</p>
					<p className="font-semibold mb-4 text-tvpurple">
						<Trans>presente.t5</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>presente.t6</Trans>
					</p>
					<p className="font-semibold mb-4 text-tvpurple">
						<Trans>presente.t7</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>presente.t8</Trans>
					</p>
				</div>
			</LayoutValor>
		</Layout>
	);
};

export default Presente;

export const Head = () => (
	<SEO
		title="Trazo Vivo - Valores - Presente"
		image="https://trazovivo.com/imgs/valor3.gif"
		description="Sólo hay una cosa que realmente habitamos y que tiene todo el potencial imaginable: el momento presente."
		url="/valores/presente"
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
