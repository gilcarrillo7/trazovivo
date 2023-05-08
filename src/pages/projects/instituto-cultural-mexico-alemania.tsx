import { graphql } from "gatsby";
import * as React from "react";
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

import img1 from "../../images/icma/1.jpg";
import img2 from "../../images/icma/2.jpg";
import img3 from "../../images/icma/3.jpg";
import img4 from "../../images/icma/4.jpg";
import img5 from "../../images/icma/5.jpg";
import img6 from "../../images/icma/6.jpg";
import img7 from "../../images/icma/7.jpg";
import img8 from "../../images/icma/8.jpg";
import img9 from "../../images/icma/9.jpg";
import img10 from "../../images/icma/10.jpg";
import img11 from "../../images/icma/11.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Salón Mexicano de Ultramar" />;

const icma = () => {
	return (
		<Layout color="white" classNameHeader="bg-black">
			<div className="bg-black">
				<FullImage img={img1} alt="icma" />
				<HeadTitle title="icma.t1" className="text-white">
					<Paragraph>
						<Trans>icma.t2</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>icma.t3</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>icma.t4</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>icma.t5</Trans>
					</Paragraph>
				</HeadTitle>
				<TwoImagesSpace space="sm" alt="icma" leftimg={img2} rightimg={img3} />
				<TwoImagesSpace space="sm" alt="icma" leftimg={img4} rightimg={img5} />
				<TwoImagesSpace space="sm" alt="icma" leftimg={img6} rightimg={img7} />
				<TwoImagesSpace space="sm" alt="icma" leftimg={img8} rightimg={img9} />
				<TwoImagesSpace
					space="sm"
					alt="icma"
					leftimg={img10}
					rightimg={img11}
				/>
				<TextContainer className="text-white">
					<Paragraph>
						<Trans>icma.t6</Trans>
					</Paragraph>
				</TextContainer>
				<NextProject link="/projects/axa" className="text-white" />
				<AllProject link="/#projects" className="text-white" />
			</div>
			<Footer className={""} />
		</Layout>
	);
};

export default icma;

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
