import * as React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import Button from "../shared/Button";
import { navigate } from "gatsby";

const QueHacemos = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { ref: refBtn, inView: inViewBtn } = useInView({ threshold: 0.5 });
  const { t } = useTranslation();
  return (
    <div className="w-screen bg-white">
      <div className="container sm:min-h-screen flex items-center py-16 sm:py-0">
        <div className="container sm:min-h-screen flex items-center flex-col sm:flex-row py-10 sm:py-0">
          <div
            ref={refBtn}
            className={`sm:w-2/3 lg:pr-20 text-lg sm:text-xl font-light transition-all duration-1000 ease-in-out ${
              inViewBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <p className="mb-4">
              <Trans>quehacemos.t1</Trans>
              <span className="font-bold">
                <Trans>quehacemos.t2</Trans>
              </span>
              <Trans>quehacemos.t21</Trans>
              <span className="text-tvpurple font-bold">
                <Trans>quehacemos.t22</Trans>
              </span>
              <Trans>quehacemos.t3</Trans>
            </p>
            <p className="mb-4">
              <Trans>quehacemos.t4</Trans>
              <span className="font-bold">
                <Trans>quehacemos.t5</Trans>
              </span>
              <Trans>quehacemos.t6</Trans>
            </p>
            <p className="mb-4">
              <Trans>quehacemos.t7</Trans>
              <span className="font-bold">
                <Trans>quehacemos.t8</Trans>
              </span>
              <Trans>quehacemos.t9</Trans>
            </p>
            <p className="font-bold">
              <Trans>quehacemos.t10</Trans>
            </p>
            <Button
              text={t("Contacto")}
              variant="purple"
              className={`mt-4 sm:mt-6`}
              action={() => navigate("/contacto")}
            />
          </div>
          <div
            ref={ref}
            className="pt-24 sm:py-0 sm:w-1/3 flex justify-center items-center gap-8"
          >
            <div
              className={`bg-tvyellow w-[60px] h-[60px] rounded-full hover:bg-tvpurple transition-opacity duration-1000 ease-in-out ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            ></div>
            <div
              className={`bg-tvyellow w-[60px] h-[60px] rounded-full hover:bg-tvpurple transition-opacity duration-1000 ease-in-out ${
                inView ? "opacity-100" : "opacity-0"
              } delay-300`}
            ></div>
            <div
              className={`bg-tvyellow w-[60px] h-[60px] rounded-full hover:bg-tvpurple transition-opacity duration-1000 ease-in-out ${
                inView ? "opacity-100" : "opacity-0"
              } delay-500`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueHacemos;
