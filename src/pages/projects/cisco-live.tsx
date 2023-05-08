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

import img1 from "../../images/cisco/1.jpg";
import img2 from "../../images/cisco/2.jpg";
import img3 from "../../images/cisco/3.jpg";
import img4 from "../../images/cisco/4.jpg";
import img5 from "../../images/cisco/5.jpg";
import img6 from "../../images/cisco/6.jpg";
import img7 from "../../images/cisco/7_1.png";
import img8 from "../../images/cisco/7_2.png";
import img9 from "../../images/cisco/7_3.png";
import img10 from "../../images/cisco/c1.jpg";
import img11 from "../../images/cisco/c2.jpg";
import img12 from "../../images/cisco/c3.jpg";
import Footer from "../../components/layout/Footer";
import PhoneCarousel from "../../components/projects/PhoneCarousel";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Cisco Live" />;

const cisco = () => {
	return (
		<Layout color="white" classNameHeader="bg-black">
			<div className="bg-black">
				<FullImage img={img1} alt="cisco" />
				<HeadTitle title="cisco.t1" className="text-white">
					<Paragraph>
						<Trans>cisco.t2</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>cisco.t3</Trans>
					</Paragraph>
				</HeadTitle>
				<FullImage img={img2} alt="cisco" />
				<FullImage img={img3} alt="cisco" />
				<FullImage img={img4} alt="cisco" />
				<TwoImagesSpace space="sm" alt="cisco" leftimg={img5} rightimg={img6} />
				<PhoneCarousel
					variant="black"
					imgsDkt={[img7, img8, img9]}
					imgsMob={[img10, img11, img12]}
				/>
				<TextContainer className="text-white">
					<Paragraph>
						<Trans>cisco.t4</Trans>
					</Paragraph>
				</TextContainer>
				<NextProject link="/projects/pacto-verde" className="text-white" />
				<AllProject link="/#projects" className="text-white" />
			</div>
			<Footer className={""} />
		</Layout>
	);
};

export default cisco;

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
