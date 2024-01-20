import { graphql } from "gatsby";
import * as React from "react";
import { Trans } from "gatsby-plugin-react-i18next";
import Layout from "../../components/layout/Layout";
import {
  FullImage,
  HeadTitle,
  TwoImagesSpace,
  NextProject,
  AllProject,
} from "../../components/projects";

import img1 from "../../images/acercate/1.jpg";
import img2 from "../../images/acercate/2.jpg";
import img3 from "../../images/acercate/3.jpg";
import img4 from "../../images/acercate/4.jpg";
import img5 from "../../images/acercate/5.jpg";
import img6 from "../../images/acercate/6.jpg";
import img7 from "../../images/acercate/7.jpg";
import img8 from "../../images/acercate/8.jpg";
import img9 from "../../images/acercate/9.jpg";
import img10 from "../../images/acercate/10.jpg";
import img11 from "../../images/acercate/11.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => (
  <SEO
    title="Alianza Acércate"
    image="https://trazovivo.com/imgs/alianza_acercate.gif"
    url="/projects/international-rescue-committee"
  />
);

const Alianza = () => {
  return (
    <Layout color="black">
      <FullImage img={img1} alt="alianza" />
      <HeadTitle title="Alianza Acércate">
        <Paragraph>
          <Trans>al.t1</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>al.t2</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>al.t3</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>al.t4</Trans>
        </Paragraph>
        <Paragraph>
          <Trans>al.t5</Trans>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>al.t6</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>al.t7</Trans>
            </li>
            <li>
              <Trans>al.t8</Trans>
            </li>
            <li>
              <Trans>al.t9</Trans>
            </li>
            <li>
              <Trans>al.t10</Trans>
            </li>
          </ul>
        </Paragraph>
        <Paragraph>
          <span className="font-bold">
            <Trans>al.t11</Trans>
          </span>
          <ul className="list-disc pl-4">
            <li>
              <Trans>al.t12</Trans>
            </li>
            <li>
              <Trans>al.t13</Trans>
            </li>
            <li>
              <Trans>al.t14</Trans>
            </li>
            <li>
              <Trans>al.t15</Trans>
            </li>
            <li>
              <Trans>al.t16</Trans>
            </li>
          </ul>
        </Paragraph>
      </HeadTitle>
      <FullImage img={img2} alt="alianza" />
      <FullImage img={img3} alt="alianza" />
      <TwoImagesSpace space="sm" alt="alianza" leftimg={img4} rightimg={img5} />
      <TwoImagesSpace space="sm" alt="alianza" leftimg={img6} rightimg={img7} />
      <FullImage img={img8} alt="alianza" />
      <TwoImagesSpace space="sm" alt="alianza" leftimg={img9} rightimg={img10} />
      <FullImage img={img11} alt="alianza" />
      <NextProject link="/projects/international-rescue-committee" />
      <AllProject link="/#projects" />
      <Footer className={"bg-black text-white"} />
    </Layout>
  );
};

export default Alianza;

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
