import * as React from "react";
import { useInView } from "react-intersection-observer";

const TwoImagesSpace = ({
  leftimg,
  rightimg,
  alt,
  space = "sm",
  leftClass = "",
  rightClass = "",
  nores = false,
  className = "",
}: {
  leftimg: string;
  rightimg?: string;
  alt: string;
  space?: "sm" | "md" | "lg";
  leftClass?: string;
  rightClass?: string;
  nores?: boolean;
  className?: string;
}) => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.3 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.3 });
  const size = space === "lg" ? "1/3" : space === "md" ? "5/12" : "1/2";
  const between =
    space === "lg" ? "w-1/3" : space === "md" ? "w-2/12" : "hidden";
  return (
    <div className={`container pb-8 ${className}`}>
      <div
        className={`flex ${
          nores ? "flex-row" : "flex-col"
        } sm:flex-row sm:gap-6`}
      >
        <div
          className={`w-full ${
            nores ? "w-2/5 sm:w-1/3" : `sm:w-${size} px-8`
          } grow-0 mb-8 sm:mb-0 sm:px-0`}
        >
          <img
            ref={ref1}
            src={leftimg}
            alt={alt}
            className={`w-full transition-all duration-1000 ease-in-out ${leftClass} ${
              inView1 ? "opacity-100" : "opacity-0 scale-150"
            }`}
          />
        </div>
        <div className={`shrink-0 ${nores ? "w-1/5 sm:w-1/3" : between}`}></div>
        <div
          className={`w-full grow-0 ${
            nores ? "w-2/5 sm:w-1/3" : `sm:w-${size} px-8`
          } sm:px-0`}
        >
          {rightimg && (
            <img
              ref={ref2}
              src={rightimg}
              alt={alt}
              className={`w-full transition-all duration-1000 ease-in-out ${rightClass} ${
                inView2 ? "opacity-100" : "opacity-0 scale-150"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TwoImagesSpace;
