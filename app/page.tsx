"use client";

import { useEffect, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { Mosaic } from "react-loading-indicators";
import Navbar from "./components/Navbar";
import ExperienceSection from "./components/ExperiencePages/ExperienceSection";
import ProjectSection from "./components/ProjectPages/ProjectSection";

// Dynamic import komponen tanpa loader individual,
// karena kita akan tampilkan loader global
const HeroSection = dynamic(() => import("./components/HeroPages/HeroSection"), {
  ssr: false,
});
const AboutSection = dynamic(
  () => import("./components/aboutPages/AboutSection"),
  { ssr: false }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // simulasi waktu render semua komponen
      setIsLoading(false);
    }, 1500); // bisa disesuaikan durasinya sesuai kebutuhan

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-[#0a0a0a]">
        <Mosaic color="#32cd32" size="large" />
      </div>
    );
  }

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <header className="relative z-20 w-full shadow-md">
        <Navbar />
      </header>

      {/* Suspense global */}
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-screen bg-[#0a0a0a]">
            <Mosaic color="#03b6fc" size="large" />
          </div>
        }>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
      </Suspense>

      {/* Footer */}
      <footer className="relative z-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} | All rights reserved
      </footer>
    </main>
  );
}
