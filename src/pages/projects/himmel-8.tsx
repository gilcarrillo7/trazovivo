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
	TextContainer,
} from "../../components/projects";

import img1 from "../../images/h8/1.jpg";
import img2 from "../../images/h8/2.jpg";
import img3 from "../../images/h8/3.jpg";
import img4 from "../../images/h8/4.jpg";
import Footer from "../../components/layout/Footer";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Himmel 8" />;

const h8 = () => {
	return (
		<Layout color="black">
			<FullImage img={img1} alt="h8" />
			<HeadTitle title="Himmel 8">
				<p>
					<Trans>h8.t1</Trans>
				</p>
			</HeadTitle>
			<FullImage img={img2} alt="h8" />
			<FullImage img={img3} alt="h8" />
			<FullImage img={img4} alt="h8" />
			<NextProject link="/projects/coconat" />
			<AllProject link="/#projects" />
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default h8;

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
