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

import img1 from "../../images/care/1.jpg";
import img2 from "../../images/care/2.jpg";
import img3 from "../../images/care/3.jpg";
import img4 from "../../images/care/4.jpg";
import img5 from "../../images/care/5.jpg";
import img6 from "../../images/care/6.jpg";
import img7 from "../../images/care/7.jpg";
import img8 from "../../images/care/8.jpg";
import img9 from "../../images/care/9.jpg";
import img10 from "../../images/care/10.jpg";
import img11 from "../../images/care/11.jpg";
import img12 from "../../images/care/12.jpg";
import img13 from "../../images/care/13.jpg";
import img14 from "../../images/care/14.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import ReactPlayer from "react-player";

export const Head = () => (
  <SEO
    title="Trazo Vivo - CARE Conecta"
    image="https://trazovivo.com/mailing/care.gif"
    url="/projects/care-conecta"
  />
);

const CareConecta = () => {
  return (
    <Layout color="black">
      <FullImage img={img1} alt="care" />
      <HeadTitle>
        <Paragraph className="text-xl sm:text-2xl mb-6 font-bold">
          <Trans>care.t1</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>care.t2</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>care.t3</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>care.t4</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>care.t5</Trans>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>care.t6</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>care.t7</Trans>
            </li>
            <li>
              <Trans>care.t8</Trans>
            </li>
            <li>
              <Trans>care.t9</Trans>
            </li>
            <li>
              <Trans>care.t10</Trans>
            </li>
            <li>
              <Trans>care.t11</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>care.t12</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>care.t13</Trans>
            </li>
            <li>
              <Trans>care.t14</Trans>
            </li>
            <li>
              <Trans>care.t15</Trans>
            </li>
            <li>
              <Trans>care.t16</Trans>
            </li>
            <li>
              <Trans>care.t17</Trans>
            </li>
            <li>
              <Trans>care.t18</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <a
            href="https://care.org.gt/care-conecta/"
            target="_blank"
            rel="noreferrer"
            className="text-[#5D2263] font-bold"
          >
            care.org.gt/care-conecta/
          </a>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="care-conecta" />
      <TwoImagesSpace space="md" alt="care-conecta" leftimg={img3} rightimg={img4} />
      <FullImage img={img5} alt="care-conecta" />
      <div className="container w-full my-16 flex flex-col sm:flex-row z-30 sm:gap-36">
        <div className="sm:w-1/2 mb-8 sm:mb-0">
          <img src={img6} alt={"img3"} className={`w-full max-w-full `} />
        </div>
        <div className="sm:w-1/2 px-4 sm:px-0  h-[30rem] sm:h-auto">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1134544457`}
          ></ReactPlayer>
        </div>
      </div>
      <TwoImagesSpace space="md" alt="care-conecta" leftimg={img7} rightimg={img8} />
      <TwoImagesSpace space="md" alt="care-conecta" leftimg={img9} rightimg={img10} />
      <TwoImagesSpace space="md" alt="care-conecta" leftimg={img11} rightimg={img12} />
      <BigText text="care.t19" />
      <FullImage img={img13} alt="care-conecta" />
      <div className="w-full mb-8">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1134545692`}
          ></ReactPlayer>
        </div>
      </div>
      <FullImage img={img14} alt="care-conecta" />
      <NextProject link="/projects/fundacion-devlyn" />
      <AllProject link="/#projects" />
      <Footer className={"bg-black text-white"} />
    </Layout>
  );
};

export default CareConecta;

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
