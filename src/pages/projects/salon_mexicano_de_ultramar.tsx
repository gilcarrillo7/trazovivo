import { graphql } from "gatsby";
import * as React from "react";
import ReactPlayer from "react-player/lazy";
import { Trans } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout/Layout";
import {
	FullImage,
	HeadTitle,
	TwoImagesSpace,
	NextProject,
	AllProject,
	TextContainer,
} from "../../components/projects";

import img2 from "../../images/smu/2.jpg";
import img3 from "../../images/smu/3.jpg";
import img4 from "../../images/smu/4.jpg";
import img5 from "../../images/smu/5.jpg";
import img6 from "../../images/smu/6.jpg";
import img7 from "../../images/smu/7.jpg";
import img8 from "../../images/smu/8.jpg";
import img9 from "../../images/smu/9.jpg";
import img10 from "../../images/smu/10.jpg";
import img11 from "../../images/smu/11.jpg";
import img12 from "../../images/smu/12.jpg";
import img13 from "../../images/smu/13.jpg";
import thumb from "../../images/smu/THUMB.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

const smu = () => {
	return (
		<Layout color="white" classNameHeader="bg-black">
			<div className="bg-black">
				<div className="w-full mb-8">
					<div className="player-wrapper">
						<ReactPlayer
							width="100%"
							height="100%"
							controls
							playing
							url={`https://vimeo.com/641865097`}
						></ReactPlayer>
					</div>
				</div>
				<HeadTitle title="smu.t1" className="text-white">
					<Paragraph>
						<Trans>smu.t2</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>smu.t3</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>smu.t4</Trans>
					</Paragraph>
				</HeadTitle>
				<TwoImagesSpace space="sm" alt="smu" leftimg={img2} rightimg={img3} />
				<TwoImagesSpace space="sm" alt="smu" leftimg={img4} rightimg={img5} />
				<FullImage img={img6} alt="smu" />
				<TwoImagesSpace space="sm" alt="smu" leftimg={img7} rightimg={img8} />
				<TwoImagesSpace space="sm" alt="smu" leftimg={img9} rightimg={img10} />
				<FullImage img={img11} alt="smu" />
				<TwoImagesSpace space="sm" alt="smu" leftimg={img12} rightimg={img13} />
				<TextContainer className="text-white">
					<Paragraph>
						<Trans>smu.t5</Trans>
					</Paragraph>
				</TextContainer>
				<NextProject
					link="/projects/natur-poesie_instituto-cultural-mexico-alemania"
					className="text-white"
				/>
				<AllProject link="/#projects" className="text-white" />
			</div>
			<Footer className={""} />
		</Layout>
	);
};

export default smu;

export const Head = () => (
	<SEO title="Salón Mexicano de Ultramar" image={thumb} />
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
