import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "react-i18next";
import Layout from "../../components/layout/Layout";
import { SEO } from "../../components/layout/SEO";
import LayoutValor from "../../components/valores/LayoutValor";

const Pausa = () => {
	return (
		<Layout color="black" classNameHeader="bg-white">
			<LayoutValor
				classVideo="bg-white"
				video="761418469"
				url="https://trazovivo.com/valores/pausa/"
			>
				<div className="font-light">
					<p className="font-bold text-tvpurple mb-4">
						<Trans>Pausa</Trans>
					</p>
					<p className="font-light mb-4">
						<Trans>pausa.t1</Trans>
					</p>

					<p className="font-light mb-4">
						<span className="font-bold text-tvpurple">
							<Trans>pausa.t2</Trans>
						</span>{" "}
						<Trans>pausa.t3</Trans>
					</p>
					<p className="font-light mb-4">
						<span className="font-bold text-tvpurple">
							<Trans>pausa.t4</Trans>
						</span>{" "}
						<Trans>pausa.t5</Trans>
					</p>
					<p className=" mb-4">
						<Trans>pausa.t6</Trans>{" "}
						<span className="font-bold text-tvpurple">
							<Trans>pausa.t7</Trans>
						</span>
					</p>
					<p className="font-bold mb-4 text-tvpurple">
						<Trans>pausa.t8</Trans>
					</p>
					<p className=" mb-4 ">
						<Trans>pausa.t9</Trans>
					</p>
				</div>
			</LayoutValor>
		</Layout>
	);
};

export default Pausa;

export const Head = () => (
	<SEO
		title="Trazo Vivo - Valores - Pausa"
		image={"https://trazovivo.com/imgs/valor5.gif"}
		description="Sólo cuando una persona se detiene a contemplar, las cosas revelan su belleza, su verdadera esencia."
		url="/valores/pausa"
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
