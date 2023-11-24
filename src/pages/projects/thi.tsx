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

import img1 from "../../images/thi/1.jpg";
import img2 from "../../images/thi/2.jpg";
import img3 from "../../images/thi/3.jpg";
import img4 from "../../images/thi/4.jpg";
import img5 from "../../images/thi/5.jpg";
import img6 from "../../images/thi/6.jpg";
import img7 from "../../images/thi/7.jpg";
import img8 from "../../images/thi/8.jpg";
import img9 from "../../images/thi/9.jpg";
import img10 from "../../images/thi/10.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import ReactPlayer from "react-player";

export const Head = () => (
  <SEO
    title="Trazo Vivo - Tu Historia Importa"
    image="https://trazovivo.com/imgs/thi.jpg"
    url="/projects/thi"
  />
);

const Thi = () => {
  return (
    <Layout color="black">
      <FullImage img={img1} alt="thi" />
      <HeadTitle title="thi.t3">
        <Paragraph>
          <span className="font-bold">
            <Trans>thi.t4</Trans>
          </span>{" "}
          <Trans>thi.t5</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>thi.t6</Trans>
          <ul className="list-disc pl-4">
            <li>
              <Trans>thi.t7</Trans>
            </li>
            <li>
              <Trans>thi.t8</Trans>
            </li>
            <li>
              <Trans>thi.t9</Trans>
            </li>
            <li>
              <Trans>thi.t10</Trans>
            </li>
            <li>
              <Trans>thi.t11</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <Trans>thi.t12</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>thi.t13</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>thi.t14</Trans>
          <ul className="list-disc pl-4">
            <li>
              <Trans>thi.t15</Trans>
            </li>
            <li>
              <Trans>thi.t16</Trans>
            </li>
            <li>
              <Trans>thi.t17</Trans>
            </li>
            <li>
              <Trans>thi.t18</Trans>
            </li>
            <li>
              <Trans>thi.t19</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <Trans>thi.t20</Trans>{" "}
          <a
            href="https://www.instagram.com/maffmakes/"
            target="_blank"
            className="font-normal text-[#14a3c7]"
          >
            @maffmakes
          </a>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="thi" />
      <BigText text="thi.t21" />
      <div className="w-full my-16 flex flex-col sm:flex-row z-30">
        <div className="sm:w-1/2 h-[30rem] sm:h-[calc(100vh-8rem)] px-4 sm:px-0 mb-8 sm:mb-8">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/777338237`}
          ></ReactPlayer>
        </div>
        <div className="sm:w-1/2 h-[30rem] sm:h-[calc(100vh-8rem)] px-4 sm:px-0">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/845894869`}
          ></ReactPlayer>
        </div>
      </div>
      <TwoImagesSpace space="sm" alt="thi" leftimg={img3} rightimg={img4} />
      <div className="h-4"></div>
      <TwoImagesSpace space="sm" alt="thi" leftimg={img5} rightimg={img6} />
      <BigText text="thi.t22" className="mt-8" />
      <div className="w-full mt-8 mb-16">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/845899383`}
          ></ReactPlayer>
        </div>
      </div>
      <FullImage img={img7} alt="thi" />
      <TwoImagesSpace
        space="lg"
        alt="thi"
        leftimg={img8}
        rightimg={img9}
        className="my-6"
        leftClass="scale-[0.85]"
        rightClass="scale-[0.85]"
      />
      <FullImage img={img10} alt="thi" />
      <NextProject link="/projects/incuba" />
      <AllProject link="/#projects" />
      <Footer className={"bg-black text-white"} />
    </Layout>
  );
};

export default Thi;

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
