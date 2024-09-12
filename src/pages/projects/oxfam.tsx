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

import img1 from "../../images/oxfam/1.jpg";
import img2 from "../../images/oxfam/2.jpg";
import img3 from "../../images/oxfam/3.jpg";
import img4 from "../../images/oxfam/4.jpg";
import img5 from "../../images/oxfam/5.jpg";
import img6 from "../../images/oxfam/6.jpg";
import img7 from "../../images/oxfam/7.jpg";
import img8 from "../../images/oxfam/8.jpg";
import img9 from "../../images/oxfam/9.jpg";
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

const Oxfam = () => {
  return (
    <Layout color="black">
      <FullImage img={img1} alt="oxfam" />
      <HeadTitle>
        <Paragraph className="text-xl sm:text-2xl mb-6">
          <span className="font-bold">
            <Trans>oxfam.t1</Trans>{" "}
          </span>
        </Paragraph>
        <Paragraph>
          <Trans>oxfam.t2</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>oxfam.t3</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>oxfam.t4</Trans>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>oxfam.t5</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>oxfam.t6</Trans>
            </li>
            <li>
              <Trans>oxfam.t7</Trans>
            </li>
            <li>
              <Trans>oxfam.t8</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>oxfam.t9</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>oxfam.t10</Trans>
            </li>
            <li>
              <Trans>oxfam.t11</Trans>
            </li>
            <li>
              <Trans>oxfam.t12</Trans>
            </li>
            <li>
              <Trans>oxfam.t13</Trans>
            </li>
            <li>
              <Trans>oxfam.t14</Trans>
            </li>
          </ul>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="oxfam" />
      <BigText text="oxfam.t15" />
      <TwoImagesSpace space="sm" alt="oxfam" leftimg={img3} rightimg={img4} />
      <TwoImagesSpace space="sm" alt="oxfam" leftimg={img5} rightimg={img6} />
      <BigText text="oxfam.t16" />
      <div className="w-full mb-8">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1008401068`}
          ></ReactPlayer>
        </div>
      </div>
      <div className="w-full mb-8">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1008403773`}
          ></ReactPlayer>
        </div>
      </div>
      <div className="w-full my-16 flex flex-col sm:flex-row z-30">
        <div className="sm:w-1/2 h-[30rem] sm:h-[calc(100vh-8rem)] px-4 sm:px-0 mb-8 sm:mb-8">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1008404432`}
          ></ReactPlayer>
        </div>
        <div className="sm:w-1/2 h-[30rem] sm:h-[calc(100vh-8rem)] px-4 sm:px-0">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1008404155`}
          ></ReactPlayer>
        </div>
      </div>
      <FullImage img={img7} alt="oxfam" />
      <FullImage img={img8} alt="oxfam" />
      <FullImage img={img9} alt="oxfam" />
      <NextProject link="/projects/iniciativa-x-la-inclusion" />
      <AllProject link="/#projects" />
      <Footer className={"bg-black text-white"} />
    </Layout>
  );
};

export default Oxfam;

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
