import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";
import Layout from "../../components/layout/Layout";
import { SEO } from "../../components/layout/SEO";
import LayoutValor from "../../components/valores/LayoutValor";

const Liderazgo = () => {
	return (
		<Layout color="black" classNameHeader="bg-white">
			<LayoutValor
				classVideo="bg-white"
				video="710359270"
				url="https://trazovivo.com/valores/liderazgo/"
				next="/valores/presente"
			>
				<div className="font-light">
					<p className="font-bold text-tvpurple mb-4">
						<Trans>Liderazgo</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>liderazgo.t1</Trans>
					</p>

					<p className="font-light mb-4">
						<span className="font-bold text-tvpurple">
							<Trans>liderazgo.t2</Trans>
						</span>{" "}
						<Trans>liderazgo.t3</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>liderazgo.t4</Trans>
					</p>
					<p className="font-bold mb-4 text-tvpurple">
						<Trans>liderazgo.t5</Trans>
					</p>
					<p className="font-bold mb-4 text-tvpurple">
						<Trans>liderazgo.t6</Trans>
					</p>
					<p className=" mb-4 ">
						<Trans>liderazgo.t7</Trans>
					</p>
					<p className=" mb-4 ">
						<Trans>liderazgo.t8</Trans>
					</p>
				</div>
			</LayoutValor>
		</Layout>
	);
};

export default Liderazgo;

export const Head = () => (
	<SEO
		title="Trazo Vivo - Valores - Liderazgo"
		image="https://trazovivo.com/imgs/valor2.gif"
		description="El liderazgo es aprender a contrarrestar el poder, en vez de querer ejercerlo con toda su fuerza sobre otras personas."
		url="/valores/liderazgo"
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
