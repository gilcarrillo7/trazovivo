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
} from "../../components/projects";

import img1 from "../../images/axa/1.jpg";
import img2 from "../../images/axa/2.jpg";
import img3 from "../../images/axa/3.jpg";
import img4 from "../../images/axa/4.jpg";
import img5 from "../../images/axa/5.jpg";
import img6 from "../../images/axa/6.jpg";
import img7 from "../../images/axa/7.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="AXA" />;

const axa = () => {
	return (
		<Layout color="black" classNameHeader="bg-white">
			<div className="bg-white">
				<FullImage img={img1} alt="axa" />
				<HeadTitle title="AXA" className="text-black">
					<Paragraph>
						<Trans>axa.t1</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>axa.t2</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>axa.t3</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>axa.t4</Trans>
					</Paragraph>
				</HeadTitle>
				<FullImage img={img2} alt="axa" />
				<FullImage img={img3} alt="axa" />
				<FullImage img={img4} alt="axa" />
				<FullImage img={img5} alt="axa" />
				<TwoImagesSpace space="sm" alt="axa" leftimg={img6} rightimg={img7} />
				<NextProject
					link="/projects/kreuzberger-himmel"
					className="text-black"
				/>
				<AllProject link="/#projects" className="text-black" />
			</div>
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default axa;

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
