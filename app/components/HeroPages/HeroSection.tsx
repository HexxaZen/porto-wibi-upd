"use client";

import React, { Suspense } from "react";
import { HexagonBackground } from "./hexxagon-background";
import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";
import Link from "next/link";
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
                  className="w-[750px] mt-[15ch] max-w-full mb-8"
                />

                <div className="absolute mt-[20ch] flex flex-col items-center justify-center text-center">
                <h2 className="font-sharetech text-4xl md:text-5xl lg:text-6xl font-bold text-white shadow-neutral-800 mb-2">
                  DWI AGUS WIBISANA
                </h2>

                <div className="font-russo text-3xl md:text-4xl lg:text-5xl font-bold neon-text mt-2">
                  FULL-STACK DEVELOPER
                </div>

                {/* Tombol sejajar menyamping */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/"
                    className="px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-[#0a0a0a] bg-[#e8f5ff] rounded-full transition-all duration-300 ease-in-out shadow-xl hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)] hover:scale-105"
                  >
                    Hire Me !
                  </Link>

                  <Link
                    href="/"
                    className="px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-[#ededed] bg-cyan-400 rounded-full transition-all duration-300 ease-in-out shadow-xl hover:bg-[#e8f5ff] hover:text-[#0a0a0a] hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)] hover:scale-105"
                  >
                    DOWNLOAD CV
                  </Link>
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
