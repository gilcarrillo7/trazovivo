import { graphql } from "gatsby";
import * as React from "react";
import { Trans, useTranslation } from "react-i18next";
import Layout from "../components/layout/Layout";
import { SEO } from "../components/layout/SEO";
import LayoutValor from "../components/valores/LayoutValor";

const Presentacion = () => {
  const { t } = useTranslation();
  return (
    <Layout color="white" classNameHeader="bg-black">
      <LayoutValor
        classVideo="bg-black"
        video="904069720"
        url="https://trazovivo.com/presentacion_comunicacion/"
        showValores={true}
        share={false}
      >
        <p
          className="font-light mb-4"
          dangerouslySetInnerHTML={{ __html: t("reel.t1") }}
        />
        <p
          className="font-light mb-4"
          dangerouslySetInnerHTML={{ __html: t("reel.t2") }}
        />
        <p
          className="font-light mb-4"
          dangerouslySetInnerHTML={{ __html: t("reel.t3") }}
        />
        <p className="font-bold mb-4">
          <Trans>reel.t4</Trans>
        </p>
        <p className="font-light mb-4">
          <Trans>reel.t7</Trans>
        </p>
        <ul className="font-light text-tvpurple list-disc pl-4">
			<li className=""><Trans>reel.t8</Trans></li>
			<li className=""><Trans>reel.t9</Trans></li>
			<li className=""><Trans>reel.t10</Trans></li>
			<li className=""><Trans>reel.t11</Trans></li>
			<li className=""><Trans>reel.t12</Trans></li>
			<li className=""><Trans>reel.t13</Trans></li>
			<li className=""><Trans>reel.t14</Trans></li>
		</ul>
      </LayoutValor>
    </Layout>
  );
};

export default Presentacion;

export const Head = () => (
  <SEO title="Quiénes somos" url="/presentacion_comunicacion" />
);

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
