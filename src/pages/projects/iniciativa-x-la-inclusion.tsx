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

import img1 from "../../images/inclusion/1.jpg";
import img2 from "../../images/inclusion/2.jpg";
import img3 from "../../images/inclusion/3.jpg";
import img4 from "../../images/inclusion/4.jpg";
import img5 from "../../images/inclusion/5.jpg";
import img6 from "../../images/inclusion/6.gif";
import img7 from "../../images/inclusion/7.jpg";
import img10 from "../../images/inclusion/10.jpg";
import img11 from "../../images/inclusion/11.jpg";
import img12 from "../../images/inclusion/12.jpg";
import img13 from "../../images/inclusion/13.jpg";
import img14 from "../../images/inclusion/14.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import ReactPlayer from "react-player";

export const Head = () => (
  <SEO
    title="Trazo Vivo - Iniciativa x la Inclusión"
    image="https://trazovivo.com/imgs/inclusion.gif"
    url="/projects/iniciativa-x-la-inclusion"
  />
);

const Cfosc = () => {
  return (
    <Layout color="black">
      <FullImage img={img1} alt="inclussion" />
      <HeadTitle>
        <Paragraph className="text-xl sm:text-2xl mb-6">
          <span className="font-bold">
            <Trans>incl.t1</Trans>{" "}
          </span>
        </Paragraph>
        <Paragraph>
          <Trans>incl.t2</Trans>{" "}
          <span className="font-bold">
            <Trans>incl.t3</Trans>
          </span>{" "}
          <Trans>incl.t4</Trans>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>incl.t1</Trans>
          </span>{" "}
          <Trans>incl.t5</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>incl.t6</Trans>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>incl.t7</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>incl.t8</Trans>
            </li>
            <li>
              <Trans>incl.t9</Trans>
            </li>
            <li>
              <Trans>incl.t10</Trans>
            </li>
            <li>
              <Trans>incl.t11</Trans>
            </li>
            <li>
              <Trans>incl.t12</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>incl.t13</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>incl.t14</Trans>
            </li>
            <li>
              <Trans>incl.t15</Trans>
            </li>
            <li>
              <Trans>incl.t16</Trans>
            </li>
            <li>
              <Trans>incl.t17</Trans>
            </li>
            <li>
              <Trans>incl.t18</Trans>
            </li>
            <li>
              <Trans>incl.t19</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <a
            className="font-normal text-[#14a3c7]"
            href="https://www.inclusionchihuahua.com"
            target="_blank"
          >
            inclusionchihuahua.com
          </a>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="inclussion" />
      <BigText text="incl.t20" />
      <FullImage img={img3} alt="inclussion" />
      <TwoImagesSpace
        space="md"
        alt="inclussion"
        leftimg={img4}
        rightimg={img5}
      />
      <TwoImagesSpace
        space="md"
        alt="inclussion"
        leftimg={img6}
        rightimg={img7}
      />
			<div className="w-full mb-8">
				<div className="player-wrapper">
					<ReactPlayer
						width="100%"
						height="100%"
						controls
						url={`https://vimeo.com/963143196`}
					></ReactPlayer>
				</div>
			</div>
			<div className="w-full mb-8">
				<div className="player-wrapper">
					<ReactPlayer
						width="100%"
						height="100%"
						controls
						url={`https://vimeo.com/963145377`}
					></ReactPlayer>
				</div>
			</div>
      <FullImage img={img10} alt="inclussion" />
      <BigText text="incl.t21" />
      <FullImage img={img11} alt="inclussion" />
      <TwoImagesSpace
        space="md"
        alt="inclussion"
        leftimg={img12}
        rightimg={img13}
        className="mb-8"
      />
      <FullImage img={img14} alt="inclussion" />
      <NextProject link="/projects/cfosc" />
      <AllProject link="/#projects" />
      <Footer className={"bg-black text-white"} />
    </Layout>
  );
};

export default Cfosc;

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
