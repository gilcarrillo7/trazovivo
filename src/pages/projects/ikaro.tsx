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

import img1 from "../../images/ikaro/1.gif";
import img2 from "../../images/ikaro/2.jpg";
import img3 from "../../images/ikaro/3.jpg";
import img4 from "../../images/ikaro/4.jpg";
import img5 from "../../images/ikaro/5.jpg";
import img6 from "../../images/ikaro/6.jpg";
import img7 from "../../images/ikaro/7.jpg";
import img8 from "../../images/ikaro/8.jpg";
import img9 from "../../images/ikaro/9.jpg";
import img10 from "../../images/ikaro/10.jpg";
import img11 from "../../images/ikaro/11.jpg";
import thumb from "../../images/ikaro/Thumb_Linkedin.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Ikaro" image={thumb} />;

const Ikaro = () => {
	return (
		<Layout color="black">
			<FullImage img={img1} alt="Ikaro" />
			<HeadTitle title="Ikaro">
				<Paragraph>
					<Trans>ikaro.t1</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>ikaro.t2</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>ikaro.t3</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>ikaro.t4</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>ikaro.t5</Trans>
				</Paragraph>
				<Paragraph>
					<a
						className="font-normal text-[#0e36c5]"
						href="https://ikaro.mx"
						target="_blank"
					>
						ikaro.mx
					</a>
				</Paragraph>
			</HeadTitle>
			<FullImage img={img2} alt="Ikaro" />
			<BigText text="ikaro.t6" />
			<FullImage img={img3} alt="Ikaro" />
			<TwoImagesSpace space="md" alt="Ikaro" leftimg={img4} rightimg={img5} />
			<FullImage img={img6} alt="Ikaro" />
			<TwoImagesSpace space="sm" alt="Ikaro" leftimg={img7} rightimg={img8} />
			<BigText text="ikaro.t7" />
			<TwoImagesSpace space="lg" alt="Ikaro" leftimg={img9} rightimg={img10} />
			<FullImage img={img11} alt="Ikaro" />
			<NextProject link="/projects/international-rescue-committee" />
			<AllProject link="/#projects" />
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default Ikaro;

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
