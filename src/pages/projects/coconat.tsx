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

import img1 from "../../images/coconat/1.jpg";
import img2 from "../../images/coconat/2.jpg";
import img3 from "../../images/coconat/3.jpg";
import img4 from "../../images/coconat/4.jpg";
import img5 from "../../images/coconat/5.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Coconat" />;

const coconat = () => {
	return (
		<Layout color="black">
			<FullImage img={img1} alt="coconat" />
			<HeadTitle title="Coconat">
				<p>
					<Trans>coco.t1</Trans>
				</p>
			</HeadTitle>
			<FullImage img={img2} alt="coconat" />
			<FullImage img={img3} alt="coconat" />
			<FullImage img={img4} alt="coconat" />
			<FullImage img={img5} alt="coconat" />
			<TextContainer>
				<Paragraph>
					<Trans>coco.t2</Trans>
				</Paragraph>
				<Paragraph className="!mb-0">
					<Trans>coco.t3</Trans>
				</Paragraph>
			</TextContainer>
			<NextProject link="/projects/fortinet" />
			<AllProject link="/#projects" />
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default coconat;

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
