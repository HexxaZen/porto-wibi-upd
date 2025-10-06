"use client";

import React, { Suspense } from "react";
import { HexagonBackground } from "./hexxagon-background";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden text-center px-4">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div />}>
          <HexagonBackground
            hexagonSize={75}
            hexagonMargin={3}
            className="absolute inset-0"
          >
            {/* Animated content wrapper */}
            <AnimatedContent
              distance={90}
              direction="vertical"
              reverse={true}
              duration={1.2}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={1}
            >
              {/* Centered Content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mt-[50ch]">
                <img
                  src="/assets/img/hero.png"
                  alt="Background Texture"
                  className="w-[590px] max-w-full mb-8"
                />
                <div className="absolute mt-5 flex flex-col items-center justify-center">
                <h2 className="font-sharetech text-4xl md:text-5xl lg:text-6xl font-bold neon-text">
                  DWI AGUS WIBISANA
                </h2>
                <div className="font-russo text-3xl md:text-4xl lg:text-5xl font-bold neon-text mt-2">
                  FULL-STACK DEVELOPER
                </div>
                </div>
              </div>
            </AnimatedContent>
          </HexagonBackground>
        </Suspense>
      </div>
    </section>
  );
};

export default HeroSection;
