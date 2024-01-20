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
import img10 from "../../images/irc/10.jpg";
import img11 from "../../images/irc/11.jpg";
import img12 from "../../images/irc/12.jpg";
import img13 from "../../images/irc/13.jpg";
import img14 from "../../images/irc/14.jpg";
import Footer from "../../components/layout/Footer";
import Paragraph from "../../components/projects/Paragraph";
import { SEO } from "../../components/layout/SEO";

export const Head = () => (
  <SEO
    title="IRC - International Rescue Committee"
    image="https://trazovivo.com/imgs/irc.jpg"
    url="/projects/international-rescue-committee"
  />
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
      <BigText text="irc.t8" />
      <FullImage img={img11} alt="irc" />
      <FullImage img={img12} alt="irc" />
      <FullImage img={img13} alt="irc" />
      <FullImage img={img14} alt="irc" />
      <FullImage img={img10} alt="irc" />
      <BigText text="irc.t7" />
      <TwoImagesSpace space="sm" alt="irc" leftimg={img5} rightimg={img6} />
      <NextProject link="/projects/friedrich-ebert-stiftung" />
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
