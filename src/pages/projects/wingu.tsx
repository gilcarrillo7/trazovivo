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

import img2 from "../../images/wingu/2.jpg";
import img3 from "../../images/wingu/3.jpg";
import img4 from "../../images/wingu/4.jpg";
import img5 from "../../images/wingu/5.jpg";
import img6 from "../../images/wingu/6.gif";
import img8 from "../../images/wingu/8.jpg";
import img9 from "../../images/wingu/9.jpg";
import img12 from "../../images/wingu/12.jpg";
import img13 from "../../images/wingu/13.jpg";
import img14 from "../../images/wingu/14.gif";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import ReactPlayer from "react-player";

export const Head = () => (
  <SEO
    title="Trazo Vivo - Wingu"
    image="https://trazovivo.com/mailing/wingu.gif"
    url="/projects/wingu"
  />
);

const Wingu = () => {
  return (
    <Layout color="black">
      <div className="w-screen mb-8">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            playing={true}
            muted={true}
            url={`https://vimeo.com/1046946758`}
          ></ReactPlayer>
        </div>
      </div>
      <HeadTitle>
        <Paragraph className="text-xl sm:text-2xl mb-6 font-bold">
          Wingu
        </Paragraph>
        <Paragraph className="">
          <Trans>wingu.t1</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>wingu.t2</Trans>{" "}
          <span className="text-[#0000FF]">
            <Trans>wingu.t3</Trans>
          </span>
          <Trans>wingu.t4</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>wingu.t5</Trans>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>wingu.t6</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>wingu.t7</Trans>
            </li>
            <li>
              <Trans>wingu.t8</Trans>
            </li>
            <li>
              <Trans>wingu.t9</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>wingu.t10</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>wingu.t11</Trans>
            </li>
            <li>
              <Trans>wingu.t12</Trans>
            </li>
            <li>
              <Trans>wingu.t13</Trans>
            </li>
            <li>
              <Trans>wingu.t14</Trans>
            </li>
            <li>
              <Trans>wingu.t15</Trans>
            </li>
          </ul>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="wingu" />
      <BigText text="wingu.t16" />
      <TwoImagesSpace space="sm" alt="wingu" leftimg={img3} rightimg={img4} />
      <TwoImagesSpace space="sm" alt="wingu" leftimg={img5} rightimg={img6} />
      <BigText text="wingu.t17" />
      <div className="w-full mb-8">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1046946014`}
          ></ReactPlayer>
        </div>
      </div>
      <TwoImagesSpace space="sm" alt="wingu" leftimg={img8} rightimg={img9} />
      <FullImage img={img14} alt="wingu" />
      <FullImage img={img12} alt="wingu" />
      <FullImage img={img13} alt="wingu" />
      <NextProject link="/projects/oxfam" />
      <AllProject link="/#projects" />
      <Footer className={"bg-black text-white"} />
    </Layout>
  );
};

export default Wingu;

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
