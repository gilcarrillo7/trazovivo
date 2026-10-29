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

import img1 from "../../images/hivos/1.jpg";
import img2 from "../../images/hivos/2.jpg";
import img3 from "../../images/hivos/3.jpg";
import img6 from "../../images/hivos/6.jpg";
import img7 from "../../images/hivos/7.jpg";
import img8 from "../../images/hivos/8.jpg";
import img9 from "../../images/hivos/9.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";
import ReactPlayer from "react-player";

export const Head = () => (
  <SEO
    title="Trazo Vivo - Hivos Futuros Urbanos"
    image="https://trazovivo.com/mailing/hivos.gif"
    url="/projects/hivos-futuros-urbanos"
  />
);

const HivosFuturosUrbanos = () => {
  return (
    <Layout color="black">
      <FullImage img={img1} alt="hivos" />
      <HeadTitle>
        <Paragraph className="text-xl sm:text-2xl mb-6 font-bold">
          <Trans>hivos.t0</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>hivos.t2</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>hivos.t3</Trans>
        </Paragraph>
        <Paragraph className="">
          <span className="font-bold">
            <Trans>hivos.t4</Trans>
          </span>
          <br />
          <Trans>hivos.t5</Trans>
        </Paragraph>
        <Paragraph className="">
          <span className="font-bold">
            <Trans>hivos.t6</Trans>
          </span>
          <br />
          <Trans>hivos.t7</Trans>
        </Paragraph>
        <Paragraph className="">
          <Trans>hivos.t8</Trans>
        </Paragraph>
        <Paragraph>
          <a
            href="https://hivos.org/program/urban-futures/results/"
            target="_blank"
            rel="noreferrer"
            className="text-[#1e90ff] font-bold"
          >
            hivos.org/program/urban-futures/results/
          </a>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="hivos" />
      <FullImage img={img3} alt="hivos" />
      <BigText text="hivos.t9" />
      <div className="w-full mb-8">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1176173945`}
          ></ReactPlayer>
        </div>
      </div>
      <div className="w-full mb-8">
        <div className="player-wrapper">
          <ReactPlayer
            width="100%"
            height="100%"
            controls
            url={`https://vimeo.com/1176175752`}
          ></ReactPlayer>
        </div>
      </div>
      <FullImage img={img6} alt="hivos" />
      <FullImage img={img7} alt="hivos" />
      <FullImage img={img8} alt="hivos" />
      <FullImage img={img9} alt="hivos" />
      <NextProject link="/projects/care-conecta" />
      <AllProject link="/#projects" />
      <Footer className={"bg-black text-white"} />
    </Layout>
  );
};

export default HivosFuturosUrbanos;

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
