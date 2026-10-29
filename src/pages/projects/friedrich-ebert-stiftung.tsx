import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout/Layout";
import {
	FullImage,
	HeadTitle,
	BigText,
	TwoImagesSpace,
	NextProject,
	AllProject,
} from "../../components/projects";

import img1 from "../../images/pacto/1.jpg";
import img2 from "../../images/pacto/2.jpg";
import img3 from "../../images/pacto/3.jpg";
import img4 from "../../images/pacto/4.jpg";
import img5 from "../../images/pacto/5.jpg";
import img6 from "../../images/pacto/6.jpg";
import img7 from "../../images/pacto/7.jpg";
import img8 from "../../images/pacto/8.jpg";
import img9 from "../../images/pacto/9.jpg";
import img10 from "../../images/pacto/10.jpg";
import img11 from "../../images/pacto/11.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import ReactPlayer from "react-player";

export const Head = () => (
	<SEO
		title="Trazo Vivo - Friedrich Ebert Stiftung"
		image="https://trazovivo.com/mailing/FES_Mexico.jpg"
		url="/projects/friedrich-ebert-stiftung"
	/>
);

const pacto = () => {
	return (
		<Layout color="black">
			<FullImage img={img1} alt="pacto" />
			<HeadTitle title="Friedrich Ebert Stiftung">
				<Paragraph>
					<Trans>fes.t1</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>common.objetivos-de-la-colaboracion</Trans>
					<ul className="list-disc pl-4">
						<li>
							<Trans>fes.t3</Trans>
						</li>
						<li>
							<Trans>fes.t4</Trans>
						</li>
						<li>
							<Trans>fes.t5</Trans>
						</li>
						<li>
							<Trans>common.lograr-mayor-reconocimiento-de-las</Trans>
						</li>
						<li>
							<Trans>fes.t7</Trans>
						</li>
					</ul>
				</Paragraph>
				<Paragraph>
					<Trans>fes.t8</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>common.tasks</Trans>
					<ul className="list-disc pl-4">
						<li>
							<Trans>common.plataforma-digital</Trans>
						</li>
						<li>
							<Trans>common.identidad-grafica</Trans>
						</li>
						<li>
							<Trans>common.materiales-audiovisuales</Trans>
						</li>
						<li>
							<Trans>common.campana-en-redes-sociales</Trans>
						</li>
					</ul>
				</Paragraph>
			</HeadTitle>
			<FullImage img={img2} alt="pacto" />
			<BigText text="fes.t14" />
			<div className="w-full mb-8">
				<div className="player-wrapper">
					<ReactPlayer
						width="100%"
						height="100%"
						controls
						url={`https://vimeo.com/704053535`}
					></ReactPlayer>
				</div>
			</div>
			<BigText text="fes.t15" />
			<TwoImagesSpace space="sm" alt="pacto" leftimg={img3} rightimg={img4} />
			<TwoImagesSpace space="sm" alt="pacto" leftimg={img5} rightimg={img6} />
			<TwoImagesSpace space="md" alt="pacto" leftimg={img7} rightimg={img8} />
			<FullImage img={img9} alt="pacto" />
			<FullImage img={img10} alt="pacto" />
			<FullImage img={img11} alt="pacto" />
			<NextProject link="/projects/thi" />
			<AllProject link="/#projects" />
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default pacto;

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language }, ns: { in: ["index", "fes", "projects"] } }) {
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
