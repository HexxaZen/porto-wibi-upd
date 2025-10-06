import React from 'react';
import AnimatedContent from '../animations/AnimatedContent/AnimatedContent';
import Particles from './Particles/Particles';

// Data statis untuk Pengalaman Kerja
interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Laravel Developer',
    company: 'PT. Sinergi Inovasi Tekno | Jakarta',
    duration: 'Juni 2025 - September 2025',
    description: [
      'Memimpin pengembangan arsitektur mikroservice menggunakan Next.js, Node.js, dan PostgreSQL.',
      'Bertanggung jawab atas implementasi CI/CD pipelines, mengurangi waktu deployment hingga 40%.',
      'Mentoring tim junior dalam praktik kode bersih dan TDD.',
    ],
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'Merra Coffee and Talk | Kudus',
    duration: 'Desember 2024 - Juni 2025',
    description: [
      'Mengembangkan dan memelihara 5+ proyek klien menggunakan React dan Tailwind CSS.',
      'Meningkatkan performa Lighthouse dari 50 menjadi 95+ di seluruh aplikasi.',
      'Berpartisipasi aktif dalam sesi desain UX/UI untuk memastikan kelayakan teknis.',
    ],
  },
  {
    id: 3,
    title: 'Web Developer',
    company: 'Freelance | Remote',
    duration: 'Juni 2023 - Sekarang',
    description: [
      'Menyelesaikan 10+ proyek untuk klien di berbagai industri, termasuk e-commerce, pendidikan, dan kesehatan.',
      'Membangun aplikasi web responsif menggunakan React, Next.js, dan Tailwind CSS.',
      'Berkomunikasi secara efektif dengan klien untuk memahami kebutuhan mereka dan memberikan solusi yang sesuai.',
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-neutral-950 overflow-hidden">
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

      <div className="relative max-w-4xl mx-auto text-white">
        {/* Judul Utama */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 border-b-2 border-cyan-500 pb-2 text-center neon-text">
          WORK EXPERIENCES
        </h2>

        {/* Daftar Pengalaman */}
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative p-6 bg-neutral-900/80 rounded-lg shadow-xl border-l-4 border-cyan-400 transition duration-300 hover:shadow-cyan-500/20 hover:bg-cyan-900/40 backdrop-blur-md"
            >
              {/* Garis Waktu/Durasi */}
              <p className="text-sm font-semibold text-gray-400 mb-1">
                {exp.duration}
              </p>

              {/* Posisi dan Perusahaan */}
              <h3 className="text-2xl font-bold text-cyan-400 mb-1">
                {exp.title}
              </h3>
              <p className="text-lg text-gray-300 mb-4 italic">
                {exp.company}
              </p>

              {/* Deskripsi/Tanggung Jawab */}
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.description.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
