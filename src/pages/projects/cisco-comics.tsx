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

import img1 from "../../images/comics/1.jpg";
import img2 from "../../images/comics/2.jpg";
import img3 from "../../images/comics/3.jpg";
import img4 from "../../images/comics/4.jpg";
import img5 from "../../images/comics/5.jpg";
import img6 from "../../images/comics/6.jpg";
import img7 from "../../images/comics/7.jpg";
import img8 from "../../images/comics/8.jpg";
import img9 from "../../images/comics/9.jpg";
import img10 from "../../images/comics/10.jpg";
import img11 from "../../images/comics/11.jpg";
import img12 from "../../images/comics/12.jpg";
import img13 from "../../images/comics/13.jpg";
import img14 from "../../images/comics/14.jpg";
import img15 from "../../images/comics/15.jpg";
import Footer from "../../components/layout/Footer";
import MultiCarousel from "../../components/projects/MultiCarousel";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Cisco Comics" />;

const comics = () => {
	return (
		<Layout color="white" classNameHeader="bg-black">
			<div className="bg-black">
				<FullImage img={img1} alt="comics" />
				<HeadTitle title="Cisco Comics UDC" className="text-white">
					<Paragraph>
						<Trans>comics.t1</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>comics.t2</Trans>
					</Paragraph>
				</HeadTitle>
				<MultiCarousel imgs={[img2, img3, img4, img5, img6, img7]} />
				<FullImage img={img8} alt="comics" />
				<MultiCarousel imgs={[img9, img10, img11, img12, img13, img14]} />
				<FullImage img={img15} alt="comics" />
				<TextContainer className="text-white">
					<Paragraph className="!mb-0">
						<Trans>comics.t3</Trans>
					</Paragraph>
				</TextContainer>
				<NextProject link="/projects/oracle" className="text-white" />
				<AllProject link="/#projects" className="text-white" />
			</div>
			<Footer className={""} />
		</Layout>
	);
};

export default comics;

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
