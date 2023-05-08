import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout/Layout";
import {
	FullImage,
	HeadTitle,
	NextProject,
	AllProject,
	TextContainer,
} from "../../components/projects";

import img1 from "../../images/kh/1.jpg";
import img2 from "../../images/kh/2.jpg";
import img3 from "../../images/kh/3.jpg";
import img4 from "../../images/kh/4.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Kreuzberger Himmel" />;

const kh = () => {
	return (
		<Layout color="black">
			<FullImage img={img1} alt="kh" />
			<HeadTitle title="Kreuzberger Himmel">
				<Paragraph>
					<Trans>kh.t1</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>kh.t2</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>kh.t3</Trans>
				</Paragraph>
			</HeadTitle>
			<FullImage img={img2} alt="kh" />
			<FullImage img={img3} alt="kh" />
			<TextContainer>
				<Paragraph className="!mb-0">
					<Trans>kh.t4</Trans>
				</Paragraph>
			</TextContainer>
			<FullImage img={img4} alt="kh" />
			<NextProject link="/projects/himmel-8" />
			<AllProject link="/#projects" />
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default kh;

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
