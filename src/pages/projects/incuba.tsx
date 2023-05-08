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

import img1 from "../../images/incuba/1.png";
import img2 from "../../images/incuba/2.png";
import img3 from "../../images/incuba/3.png";
import img4 from "../../images/incuba/4.png";
import img5 from "../../images/incuba/5.png";
import img7 from "../../images/incuba/7.png";
import img8 from "../../images/incuba/8.png";
import img9 from "../../images/incuba/9.jpg";
import img10 from "../../images/incuba/10.jpg";
import img1c from "../../images/incuba/changes/1.jpg";
import img2c from "../../images/incuba/changes/2.jpg";
import img3c from "../../images/incuba/changes/3.jpg";
import img4c from "../../images/incuba/changes/4.jpg";
import img5c from "../../images/incuba/changes/5.jpg";
import img6c from "../../images/incuba/changes/6.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import TwoImagesSpaceAni from "../../components/projects/TwoImagesSpaceAni";

export const Head = () => (
	<SEO
		title="Trazo Vivo - Incuba"
		image="https://trazovivo.com/imgs/Incuba.jpg"
		url="/projects/incuba"
	/>
);

const Incuba = () => {
	return (
		<Layout color="black">
			<FullImage img={img1} alt="incuba" />
			<HeadTitle title="Incuba">
				<Paragraph>
					<Trans>incuba.t1</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>incuba.t2</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>incuba.t3</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>incuba.t4</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>incuba.t5</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>incuba.t6</Trans>
				</Paragraph>
				<Paragraph>
					<a
						className="text-[#FF8500]"
						href="https://www.incuba.ong"
						target="_blank"
					>
						www.incuba.ong
					</a>
				</Paragraph>
			</HeadTitle>
			<FullImage img={img2} alt="incuba" />
			<BigText text="incuba.t7" />
			<FullImage img={img3} alt="incuba" />
			<BigText text="incuba.t8" />
			<TwoImagesSpace space="sm" alt="incuba" leftimg={img4} rightimg={img5} />
			<TwoImagesSpaceAni
				space="sm"
				alt="incuba"
				leftimg={[img1c, img2c, img3c, img4c, img5c, img6c]}
				rightimg={img7}
			/>
			<FullImage img={img8} alt="incuba" />
			<TwoImagesSpace space="lg" alt="incuba" leftimg={img9} rightimg={img10} />
			<NextProject link="/projects/ikaro" />
			<AllProject link="/#projects" />
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default Incuba;

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
