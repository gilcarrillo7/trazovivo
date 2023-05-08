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

import img1 from "../../images/fortinet/1.jpg";
import img2 from "../../images/fortinet/2.jpg";
import img3 from "../../images/fortinet/3.jpg";
import img4 from "../../images/fortinet/4.jpg";
import img5 from "../../images/fortinet/5.jpg";
import img6 from "../../images/fortinet/6.jpg";
import img7 from "../../images/fortinet/7.png";
import img8 from "../../images/fortinet/8.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Fortinet" />;

const fortinet = () => {
	return (
		<Layout color="white" classNameHeader="bg-black">
			<div className="bg-black">
				<FullImage img={img1} alt="fortinet" />
				<HeadTitle title="Fortinet" className="text-white">
					<Paragraph>
						<Trans>fortinet.t1</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>fortinet.t2</Trans>
					</Paragraph>
				</HeadTitle>
				<FullImage img={img2} alt="fortinet" />
				<TextContainer>
					<Paragraph>
						<Trans>fortiner.t3</Trans>
					</Paragraph>
				</TextContainer>
				<TwoImagesSpace
					space="sm"
					alt="fortinet"
					leftimg={img3}
					rightimg={img4}
				/>
				<FullImage img={img5} alt="fortinet" />
				<FullImage img={img6} alt="fortinet" />
				<TwoImagesSpace
					space="sm"
					alt="fortinet"
					leftimg={img7}
					rightimg={img8}
					leftClass="lg:px-40 sm:px-24 px-20"
				/>
				<TextContainer className="text-white">
					<Paragraph>
						<Trans>fortinet.t4</Trans>
					</Paragraph>
				</TextContainer>
				<NextProject link="/projects/cisco-comics" className="text-white" />
				<AllProject link="/#projects" className="text-white" />
			</div>
			<Footer className={""} />
		</Layout>
	);
};

export default fortinet;

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
