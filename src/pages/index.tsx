import React, { useContext } from "react";
import { useInView } from "react-intersection-observer";

import { graphql, PageProps, navigate } from "gatsby";

import { Trans } from "react-i18next";
import { AppContext } from "../context/AppContext";

import Layout from "../components/layout/Layout";
import InnerContainer from "../components/layout/InnerContainer";
import Button from "../components/shared/Button";
import HomePoints from "../components/icons/HomePoints";
import Footer from "../components/layout/Footer";

import Testimonios from "../components/home/Testimonios";
import Clients from "../components/home/Clients";
import Projects from "../components/home/Projects";

import { SEO } from "../components/layout/SEO";
import QueHacemos from "../components/home/QueHacemos";

const IndexPage = (props: PageProps) => {
  const { setHoverReel } = useContext(AppContext);
  const { ref: refFirst, inView: viewFirst } = useInView({ threshold: 0.5 });
  const { ref: refThird, inView: viewThird } = useInView({ threshold: 0.5 });
  const { ref: refFourth, inView: viewFourth } = useInView({ threshold: 0.5 });
  const { ref: refFifth, inView: viewFifth } = useInView({ threshold: 0.5 });

  return (
    <Layout color="white" classNameHeader={`bg-tvpink w-screen`}>
      <div
        ref={refFirst}
        className={`w-screen min-h-screen bg-tvpink z-0 flex items-center`}
      >
        <div className="container sm:min-h-screen flex items-center flex-col sm:flex-row py-10 sm:py-0">
          <div className="sm:w-1/3 flex justify-end lg:pr-20 sm:order-2 ">
            <HomePoints />
          </div>
          <div
            className={`mt-2 sm:mt-0 sm:w-2/3 sm:pr-4 md:pr-40 sm:order-1 transition-all duration-1000 ease-in-out ${
              viewFirst ? "opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <p
              className={`font-thin text-white text-3xl md:text-5xl md:!leading-[4rem]`}
            >
              <Trans>
                Potenciamos organizaciones comprometidas con el impacto social
              </Trans>
              .
            </p>
            <Button
              text="Reel"
              variant="white"
              className={`mt-4 sm:mt-6`}
              action={() => navigate("/quienes_somos")}
              mouseOver={() => setHoverReel(true)}
              mouseLeave={() => setTimeout(() => setHoverReel(false), 1300)}
            />
          </div>
        </div>
      </div>
      <QueHacemos />
      <div id="projects" className="w-screen min-h-screen bg-white">
        <div className="container">
          <h1
            ref={refThird}
            className={`font-light text-3xl sm:text-4xl pt-2 sm:pt-6 mb-12 transition-all duration-700 ease-in-out delay-500 ${
              viewThird ? "opacity-100" : "opacity-0 translate-x-16"
            }`}
          >
            <Trans>Proyectos</Trans>
          </h1>
        </div>
        <Projects />
      </div>
      <div className="w-screen bg-black">
        <InnerContainer className="sm:min-h-screen flex items-center py-16 sm:py-0">
          <Testimonios />
        </InnerContainer>
      </div>
      <div className="w-screen min-h-screen bg-black">
        <div className="min-h-screen flex items-center py-16 sm:py-0">
          <div className="w-full">
            <InnerContainer>
              <p
                ref={refFourth}
                className={`text-2xl sm:text-3xl text-white font-normal mb-16 transition-all duration-700 ease-in-out delay-300 ${
                  viewFourth ? "opacity-100" : "opacity-0"
                }`}
              >
                <Trans>
                  Agradecemos y valoramos la confianza de nuestros clientes
                </Trans>
                .
              </p>
            </InnerContainer>
            <Clients />
            <InnerContainer>
              <div className="text-center mt-12">
                <p
                  ref={refFifth}
                  className={`text-white font-bold text-3xl sm:text-4xl mb-8 transition-all duration-1000 ease-in-out delay-300 ${
                    viewFifth ? "opacity-100" : "opacity-0 scale-0"
                  }`}
                >
                  <Trans>Escríbenos y transformemos juntxs el mundo</Trans>.
                </p>
                <Button
                  text="Contacto"
                  variant="whiteblack"
                  className="mb-16"
                  action={() => navigate("/contacto")}
                />
              </div>
            </InnerContainer>
          </div>
        </div>
      </div>
      <Footer className="bg-white" />
    </Layout>
  );
};

export const Head = () => <SEO />;

export default IndexPage;

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
