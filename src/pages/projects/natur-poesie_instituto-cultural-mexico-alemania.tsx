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

import img1 from "../../images/npi/1.jpg";
import img2 from "../../images/npi/2.jpg";
import img3 from "../../images/npi/3.jpg";
import img4 from "../../images/npi/4.jpg";
import img5 from "../../images/npi/5.jpg";
import img6 from "../../images/npi/6.jpg";
import img7 from "../../images/npi/7.jpg";
import img8 from "../../images/npi/8.jpg";
import img9 from "../../images/npi/9.jpg";
import img10 from "../../images/npi/10.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => <SEO title="Salón Mexicano de Ultramar" />;

const npi = () => {
	return (
		<Layout color="white" classNameHeader="bg-black">
			<div className="bg-black">
				<FullImage img={img1} alt="npi" />
				<HeadTitle title="Natur Poesie" className="text-white">
					<Paragraph>
						<Trans>npi.t1</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>npi.t2</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>npi.t3</Trans>
					</Paragraph>
				</HeadTitle>
				<TwoImagesSpace space="sm" alt="npi" leftimg={img2} rightimg={img3} />
				<TwoImagesSpace space="sm" alt="npi" leftimg={img4} rightimg={img5} />
				<TextContainer className="text-white">
					<Paragraph>
						<Trans>npi.t4</Trans>
					</Paragraph>
				</TextContainer>
				<FullImage img={img6} alt="npi" />
				<FullImage img={img7} alt="npi" />
				<FullImage img={img8} alt="npi" />
				<FullImage img={img9} alt="npi" />
				<TwoImagesSpace space="sm" alt="npi" leftimg={img10} />
				<TextContainer className="text-white">
					<Paragraph>
						<Trans>npi.t5</Trans>
					</Paragraph>
					<Paragraph>
						<Trans>npi.t6</Trans>
					</Paragraph>
				</TextContainer>
				<NextProject
					link="/projects/instituto-cultural-mexico-alemania"
					className="text-white"
				/>
				<AllProject link="/#projects" className="text-white" />
			</div>
			<Footer className={""} />
		</Layout>
	);
};

export default npi;

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
