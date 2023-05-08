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

import img1 from "../../images/oracle/1.jpg";
import img2 from "../../images/oracle/2.jpg";
import img3 from "../../images/oracle/3.png";
import img4 from "../../images/oracle/4.jpg";
import img5 from "../../images/oracle/5.jpg";
import img6 from "../../images/oracle/6.png";
import img7 from "../../images/oracle/7_1.png";
import img8 from "../../images/oracle/7_2.png";
import img9 from "../../images/oracle/7_3.png";
import img10 from "../../images/oracle/c1.jpg";
import img11 from "../../images/oracle/c2.jpg";
import img12 from "../../images/oracle/c3.jpg";
import Footer from "../../components/layout/Footer";
import ImageBand from "../../components/projects/ImageBand";
import PhoneCarousel from "../../components/projects/PhoneCarousel";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Oracle ERP Cloud" />;

const oracle = () => {
	return (
		<Layout color="white" classNameHeader="bg-black">
			<div className="bg-black">
				<FullImage img={img1} alt="oracle" />
				<HeadTitle title="Oracle ERP Cloud" className="text-white">
					<Paragraph>
						<Trans>oracle.t1</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>oracle.t2</Trans>
					</Paragraph>
				</HeadTitle>
				<FullImage img={img2} alt="oracle" />
				<ImageBand img={img3} alt="oracle" text="oracle.t3" />
				<TwoImagesSpace
					space="sm"
					alt="fortinet"
					leftimg={img4}
					rightimg={img5}
				/>
				<FullImage img={img6} alt="oracle" />
				<PhoneCarousel
					variant="black"
					imgsDkt={[img7, img8, img9]}
					imgsMob={[img10, img11, img12]}
				/>
				<TextContainer className="text-white">
					<Paragraph className="!mb-0">
						<Trans>oracle.t4</Trans>
					</Paragraph>
				</TextContainer>
				<NextProject link="/projects/cisco-live" className="text-white" />
				<AllProject link="/#projects" className="text-white" />
			</div>
			<Footer className={""} />
		</Layout>
	);
};

export default oracle;

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
