'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LogoLoop from '../aboutPages/LogoLoop/LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiGithub,
} from 'react-icons/si';
import TiltedCard from './TiltedCard/TiltedCard';
import Link from 'next/link';
import Particles from '../ExperiencePages/Particles/Particles';

const techLogos = [
  // --- Frontend Stack ---
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://www.typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },

  // --- Backend Stack ---
  { node: <SiLaravel />, title: 'Laravel', href: 'https://laravel.com' },
  { node: <SiPhp />, title: 'PHP', href: 'https://www.php.net' },

  // --- Databases ---
  { node: <SiMysql />, title: 'MySQL', href: 'https://www.mysql.com' },
  { node: <SiPostgresql />, title: 'PostgreSQL', href: 'https://www.postgresql.org' },

  // --- Tools ---
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
];

const AboutSection: React.FC = () => {
  return (
    <section className="relative z-10 w-full min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20">
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#00b2ed', '#22c0f5']}
          particleCount={600}
          particleSpread={20}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
        </div>
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#e8f5ff]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10 font-sharetech neon-text">
            ABOUT ME
          </h2>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-10 text-justify lg:text-left">

            {/* --- KOLOM KIRI: DESKRIPSI --- */}
            <div className="lg:w-3/5 w-full order-2 lg:order-1 flex justify-between">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed rounded-lg backdrop-blur-sm shadow-2xl ">
                A results-oriented, high-performance full-stack web developer specializing in Laravel and Next.js.
                I am proficient in both front-end and back-end development, with significant contributions to large-scale
                applications such as PLN Nusa Daya's HRIS and Performance KPI application. My technical competencies include
                RESTful APIs, React, TypeScript, MySQL, and Tailwind CSS. I am supported by strong soft skills, including
                problem-solving, communication, and teamwork.
              </p>
            </div>

            {/* --- KOLOM KANAN: TILTED CARD --- */}
            {/* Menggunakan 'lg:w-2/5' untuk memberikan ruang bagi kartu. 'order-1 lg:order-2' memastikan kartu muncul di atas teks pada mobile. */}
            {/* 'mx-auto' dan 'flex justify-center' memastikan kartu berada di tengah pada layar kecil. */}
            <div className="lg:w-2/5 w-full flex justify-center order-1 lg:order-2 rounded-full">
              <TiltedCard
                imageSrc="/assets/img/wibi.jpg"
                altText="Wibisana"
                captionText="Kendrick Lamar - GNX"
                containerHeight="400px"
                containerWidth="400px"
                imageHeight="400px"
                imageWidth="400px"
                rotateAmplitude={30}
                scaleOnHover={1.25}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Kendrick Lamar - GNX
                  </p>
                }
              />
            </div>
          </div>
          {/* --- AKHIR CONTAINER FLEX UTAMA --- */}
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}>
          <div className="mt-10 w-full h-32 sm:h-40 md:h-48 lg:h-56">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">My Technical Skills:</h2>
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={60}
              gap={24}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology logos"
            />
          </div>

          {/* Button */}
          <Link
            href="/"
            className="inline-block mt-8 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold 
             text-[#0a0a0a] bg-[#e8f5ff] rounded-full 
             transition-all duration-300 ease-in-out 
             shadow-xl hover:bg-cyan-400 hover:text-white 
             hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)] 
             hover:scale-105"
          >
            See My Projects
          </Link>
          </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;