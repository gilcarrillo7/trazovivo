import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";
import Layout from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import LayoutValor from "../components/valores/LayoutValor";

const Presentacion = () => {
	return (
		<Layout color="white" classNameHeader="bg-black">
			<LayoutValor
				classVideo="bg-black"
				video="749127828"
				url="https://trazovivo.com/presentacion_comunicacion/"
				showValores={true}
				share={false}
			>
				<p className="font-bold text-tvpurple mb-4">
					<Trans>reel.t1</Trans>.
				</p>
				<p className="font-light mb-4">
					<Trans>reel.t2</Trans>.
				</p>
				<p className="font-light mb-4">
					<Trans>reel.t3</Trans>.
				</p>
				<p className="font-light text-tvpurple mb-4">
					<span className="font-bold">
						<Trans>reel.t4</Trans>.
					</span>{" "}
					<Trans>reel.t5</Trans>.
				</p>
				<p className="font-normal mb-4">
					<Trans>reel.t6</Trans>
				</p>
				<p className="font-light mb-4">
					<Trans>reel.t7</Trans>.{" "}
					<span className="font-bold text-tvpurple">
						<Trans>reel.t8</Trans>.
					</span>
				</p>
				<p className="font-light mb-4">
					<Trans>reel.t9</Trans>.
				</p>
				<p className="font-bold mb-4 text-tvpurple">
					<Trans>reel.t10</Trans>.
				</p>
			</LayoutValor>
		</Layout>
	);
};

export default Presentacion;

export const Head = () => (
	<SEO title="Presentación comunicación" url="/presentacion_comunicacion" />
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
