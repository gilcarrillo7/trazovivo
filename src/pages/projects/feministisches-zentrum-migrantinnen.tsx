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

import img1 from "../../images/fzm/1.jpg";
import img2 from "../../images/fzm/2.jpg";
import img3 from "../../images/fzm/3.jpg";
import img4 from "../../images/fzm/4.jpg";
import img5 from "../../images/fzm/5.png";
import img6 from "../../images/fzm/6.png";
import img7 from "../../images/fzm/7.png";
import img8 from "../../images/fzm/8.jpg";
import img9 from "../../images/fzm/9.jpg";
import img10 from "../../images/fzm/10.jpg";
import thumb from "../../images/fzm/Thumb_Linkedin.jpg";
import Footer from "../../components/layout/Footer";
import PhoneCarousel from "../../components/projects/PhoneCarousel";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => (
	<SEO title="FZM - Feministisches Zentrum für Migrant*innen" image={thumb} />
);

const fzm = () => {
	return (
		<Layout color="black">
			<FullImage img={img1} alt="fzm" />
			<HeadTitle title="FZM - Feministisches Zentrum für Migrant*innen">
				<Paragraph>
					<Trans>fzm.t1</Trans>
				</Paragraph>
				<Paragraph>
					<a
						className="font-normal text-[#966846]"
						href="https://www.fzm-berlin.com/"
						target="_blank"
					>
						fzm-berlin.com
					</a>
				</Paragraph>
				<Paragraph>
					<Trans>fzm.t2</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>fzm.t3</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>fzm.t4</Trans>
				</Paragraph>
			</HeadTitle>
			<TwoImagesSpace
				space="lg"
				alt="fzm"
				leftimg={img2}
				rightimg={img3}
				nores={true}
			/>
			<BigText text="fzm.t5" />
			<FullImage img={img4} alt="fzm" />
			<PhoneCarousel
				variant="white"
				imgsDkt={[img5, img6, img7]}
				imgsMob={[img5, img6, img7]}
			/>
			<BigText text="fzm.t6" />
			<FullImage img={img8} alt="fzm" />
			<TwoImagesSpace space="lg" alt="fzm" leftimg={img9} rightimg={img10} />
			<NextProject link="/projects/salon_mexicano_de_ultramar" />
			<AllProject link="/#projects" />
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default fzm;

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
