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

import img1 from "../../images/devlyn/1.jpg";
import img2 from "../../images/devlyn/2.jpg";
import img3 from "../../images/devlyn/3.jpg";
import img4 from "../../images/devlyn/4.jpg";
import img5 from "../../images/devlyn/5.gif";
import img6 from "../../images/devlyn/6.jpg";
import img7 from "../../images/devlyn/7.jpg";
import img8 from "../../images/devlyn/8.jpg";
import img9 from "../../images/devlyn/9.jpg";
import img10 from "../../images/devlyn/10.jpg";
import img11 from "../../images/devlyn/11.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import ReactPlayer from "react-player";

export const Head = () => (
  <SEO
    title="Trazo Vivo - Fundación Devlyn"
    image="https://trazovivo.com/mailing/devlyn.gif"
    url="/projects/devlyn-conecta"
  />
);

const Devlyn = () => {
  return (
    <Layout color="black">
      <FullImage img={img1} alt="devlyn" />
      <HeadTitle>
        <Paragraph className="text-xl sm:text-2xl mb-6 font-bold">
          <Trans>devlyn.t0</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>devlyn.t2</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>devlyn.t3</Trans>{" "}
          <span className="font-bold">
            <Trans>devlyn.t4</Trans>
          </span>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>devlyn.t5</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>devlyn.t6</Trans>
            </li>
            <li>
              <Trans>devlyn.t7</Trans>
            </li>
            <li>
              <Trans>devlyn.t8</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph className="">
          <Trans>devlyn.t9</Trans>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>devlyn.t10</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>devlyn.t11</Trans>
            </li>
            <li>
              <Trans>devlyn.t12</Trans>
            </li>
            <li>
              <Trans>devlyn.t13</Trans>
            </li>
            <li>
              <Trans>devlyn.t14</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>devlyn.t15</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>devlyn.t16</Trans>
            </li>
            <li>
              <Trans>devlyn.t17</Trans>
            </li>
            <li>
              <Trans>devlyn.t18</Trans>
            </li>
            <li>
              <Trans>devlyn.t19</Trans>
            </li>
            <li>
              <Trans>devlyn.t20</Trans>
            </li>
            <li>
              <Trans>devlyn.t21</Trans>
            </li>
          </ul>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="devlyn" />
      <BigText text="devlyn.t22" />
      <TwoImagesSpace space="sm" alt="devlyn" leftimg={img3} rightimg={img4} />
      <div className="container w-full my-16 flex flex-col sm:flex-row z-30 sm:gap-36">
        <div className="sm:w-1/2 px-4 sm:px-0  h-[30rem] sm:h-auto">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1077566224`}
          ></ReactPlayer>
        </div>
        <div className="sm:w-1/2 mb-8 sm:mb-0">
          <img src={img5} alt={"img3"} className={`w-full max-w-full `} />
        </div>
      </div>
      <BigText text="devlyn.t23" />
      <FullImage img={img6} alt="devlyn" />
      <FullImage img={img7} alt="devlyn" />
      <TwoImagesSpace space="sm" alt="devlyn" leftimg={img8} rightimg={img9} />
      <FullImage img={img10} alt="devlyn" />
      <FullImage img={img11} alt="devlyn" />
      <NextProject link="/projects/wingu" />
      <AllProject link="/#projects" />
      <Footer className={"bg-black text-white"} />
    </Layout>
  );
};

export default Devlyn;

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
