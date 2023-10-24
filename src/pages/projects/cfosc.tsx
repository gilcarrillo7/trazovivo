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

import img1 from "../../images/cfosc/1.jpg";
import img2 from "../../images/cfosc/2.jpg";
import img3 from "../../images/cfosc/3.jpg";
import img4 from "../../images/cfosc/4.jpg";
import img5 from "../../images/cfosc/5.jpg";
import img6 from "../../images/cfosc/6.jpg";
import img7 from "../../images/cfosc/7.jpg";
import img8 from "../../images/cfosc/8.jpg";
import img9 from "../../images/cfosc/9.jpg";
import img10 from "../../images/cfosc/10.jpg";
import img11 from "../../images/cfosc/11.jpg";
import img12 from "../../images/cfosc/12.jpg";
import img13 from "../../images/cfosc/13.jpg";
import img14 from "../../images/cfosc/14.jpg";
import img15 from "../../images/cfosc/15.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import ReactPlayer from "react-player";

export const Head = () => (
  <SEO
    title="Trazo Vivo - Centro para el fortalecimiento de la sociedad civil"
    image="https://trazovivo.com/imgs/cfosc.jpg"
    url="/projects/thi"
  />
);

const Thi = () => {
  return (
    <Layout color="black">
      <FullImage img={img1} alt="thi" />
      <HeadTitle>
        <Paragraph className="text-xl sm:text-2xl mb-6">
          <span className="font-bold">
            <Trans>cfosc.t0</Trans>{" "}
          </span>
          <Trans>cfosc.t1</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>cfosc.t2</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>cfosc.t3</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>cfosc.t4</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>cfosc.t5</Trans>
          <span className="font-bold">
            <Trans>cfosc.t5.1</Trans>
          </span>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>cfosc.t6</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>cfosc.t7</Trans>
            </li>
            <li>
              <Trans>cfosc.t8</Trans>
            </li>
            <li>
              <Trans>cfosc.t9</Trans>
            </li>
            <li>
              <Trans>cfosc.t10</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>cfosc.t11</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>cfosc.t12</Trans>
            </li>
            <li>
              <Trans>cfosc.t13</Trans>
            </li>
            <li>
              <Trans>cfosc.t14</Trans>
            </li>
            <li>
              <Trans>cfosc.t15</Trans>
            </li>
            <li>
              <Trans>cfosc.t16</Trans>
            </li>
          </ul>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="thi" />
      <BigText text="cfosc.t17" />
      <div className="w-full my-16 flex flex-col sm:flex-row z-30 sm:gap-36">
        <div className="sm:w-1/2 mb-8 sm:mb-0">
          <img src={img3} alt={"img3"} className={`w-full max-w-full `} />
        </div>
        <div className="sm:w-1/2 px-4 sm:px-0  h-[30rem] sm:h-auto">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/843836810`}
          ></ReactPlayer>
        </div>
      </div>
      <FullImage img={img4} alt="thi" />
      <BigText text="cfosc.t18" />
      <div className="w-full my-16 flex flex-col sm:flex-row z-30 sm:gap-36">
        <div className="sm:w-1/2 mb-8 sm:mb-0">
          <img src={img5} alt={"img3"} className={`w-full max-w-full `} />
        </div>
        <div className="sm:w-1/2 px-4 sm:px-0  h-[30rem] sm:h-auto">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/876353095`}
          ></ReactPlayer>
        </div>
      </div>
      <FullImage img={img6} alt="thi" />
      <TwoImagesSpace
        space="lg"
        alt="thi"
        leftimg={img7}
        rightimg={img8}
        className="my-6"
        leftClass="scale-[0.85]"
        rightClass="scale-[0.85]"
      />
      <FullImage img={img9} alt="thi" />
      <BigText text="cfosc.t19" className="mt-8" />
      <TwoImagesSpace space="sm" alt="thi" leftimg={img10} rightimg={img11} />
      <FullImage img={img12} alt="thi" />
      <TwoImagesSpace space="sm" alt="thi" leftimg={img13} rightimg={img14} />
      <FullImage img={img15} alt="thi" />
      <NextProject link="/projects/thi" />
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
