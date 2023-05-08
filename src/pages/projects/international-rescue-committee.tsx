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

import img1 from "../../images/irc/1.jpg";
import img2 from "../../images/irc/2.jpg";
import img3 from "../../images/irc/3.jpg";
import img4 from "../../images/irc/4.jpg";
import img5 from "../../images/irc/5.jpg";
import img6 from "../../images/irc/6.jpg";
import img7 from "../../images/irc/7.jpg";
import img8 from "../../images/irc/8.jpg";
import img9 from "../../images/irc/9.jpg";
import img10 from "../../images/irc/10.jpg";
import thumb from "../../images/irc/Thumb_Linkedin.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => (
	<SEO image={thumb} title="IRC - International Rescue Committee" />
);

const irc = () => {
	return (
		<Layout color="black">
			<FullImage img={img1} alt="irc" />
			<HeadTitle title="IRC - International Rescue Committee">
				<Paragraph>
					<Trans>irc.t1</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>irc.t2</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>irc.t3</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>irc.t4</Trans>
				</Paragraph>
				<Paragraph>
					<Trans>irc.t5</Trans>
				</Paragraph>
			</HeadTitle>
			<FullImage img={img2} alt="irc" />
			<BigText text="irc.t6" />
			<FullImage img={img3} alt="irc" />
			<FullImage img={img4} alt="irc" />
			<TwoImagesSpace space="sm" alt="irc" leftimg={img5} rightimg={img6} />
			<BigText text="irc.t7" />
			<FullImage img={img7} alt="irc" />
			<TwoImagesSpace space="sm" alt="irc" leftimg={img8} rightimg={img9} />
			<FullImage img={img10} alt="irc" />
			<NextProject link="/projects/feministisches-zentrum-migrantinnen" />
			<AllProject link="/#projects" />
			<Footer className={"bg-black text-white"} />
		</Layout>
	);
};

export default irc;

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
