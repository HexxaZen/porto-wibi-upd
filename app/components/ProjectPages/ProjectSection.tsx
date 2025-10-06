import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Particles from '../ExperiencePages/Particles/Particles'; // Asumsi path ini benar

// Data statis untuk Proyek
interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink?: string;
    imageSrc: string;
}

const projects: Project[] = [
    // ... data proyek ...
    {
        id: 1,
        title: 'BETRAYAL Fashion E-Commerce Platform',
        description: 'Mockup platform e-commerce fashion modern dengan fitur lengkap seperti katalog produk, keranjang belanja, dan proses checkout. Dibangun menggunakan Next.js dan Tailwind CSS untuk performa optimal dan desain responsif.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
        githubLink: 'https://github.com/HexxaZen/betrayal-fashion-ecommerce-nextjs',
        liveLink: '/',
        imageSrc: '/assets/img/projects/betrayal.png',
    },
    {
        id: 2,
        title: 'HRIS System PLN Nusa Daya',
        description: 'Sistem Informasi Sumber Daya Manusia (HRIS) untuk PLN Nusa Daya, mengelola data karyawan, absensi, dan cuti. Dibangun dengan Laravel untuk backend yang kuat dan antarmuka pengguna yang interaktif.',
        technologies: ['Laravel', 'PHP', 'MySQL', 'Docker'],
        githubLink: 'https://github.com/ikhsanhmr/hris_backend',
        liveLink: '/',
        imageSrc: '/assets/img/projects/HRIS_PLN.png',
    },
    {
        id: 3,
        title: 'KPI Kinerja System',
        description: 'sistem manajemen kinerja karyawan yang memungkinkan penetapan tujuan, pelacakan kemajuan, dan evaluasi kinerja. Menggunakan Laravel untuk logika backend dan untuk pengalaman pengguna yang dinamis.',
        technologies: ['Laravel', 'PHP', 'MySQL'],
        githubLink: 'https://github.com/ikhsanhmr/kinerja-pcn',
        liveLink: '/',
        imageSrc: '/assets/img/projects/kinerjaKPI.png',
    },
    {
        id: 4,
        title: 'Starplus.co.id Company Profile',
        description: 'Website profil perusahaan Starplus.co.id yang menampilkan layanan, portofolio, dan informasi kontak. Dibangun dengan Laravel, typescript dan Bootstrap untuk desain yang menarik dan responsif.',
        technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'TypeScript'],
        githubLink: 'https://github.com/ikhsanhmr/starplus',
        liveLink: 'https://starplus.co.id',
        imageSrc: '/assets/img/projects/starplus.png',
    },
    {
        id: 5,
        title: 'Merracota Inventory System',
        description: 'sistem inventaris untuk Merra Coffee Kudus, mengelola stok produk, pemasok, dan laporan penjualan. Dibangun dengan Laravel untuk backend yang andal dan antarmuka pengguna yang intuitif.',
        technologies: ['Laravel', 'PHP', 'MySQL'],
        githubLink: 'https://github.com/HexxaZen/Inventory-App',
        liveLink: 'https://merracota.my.id',
        imageSrc: '/assets/img/projects/merra.png',
    },
    {
        id: 6,
        title: 'DayComp Company Profile',
        description: 'Website profil perusahaan DayComp yang menampilkan layanan, portofolio, dan informasi kontak. Dibangun dengan HTML, CSS, dan JavaScript untuk desain yang menarik dan responsif.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        githubLink: 'https://github.com/HexxaZen/Company-Profile',
        liveLink: 'https://hexxazen.github.io/Company-Profile',
        imageSrc: '/assets/img/projects/daycomp.png',
    },
    {
        id: 7,
        title: 'CodeCoffee E-commerce Platform',
        description: 'Mockup platform e-commerce untuk produk kopi dengan fitur lengkap seperti katalog produk, keranjang belanja, dan proses checkout. Dibangun menggunakan HTML,CSS dan JavaScript untuk desain yang menarik dan responsif.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        githubLink: 'https://github.com/HexxaZen/CodeCoffee',
        liveLink: 'https://hexxazen.github.io/CodeCoffee',
        imageSrc: '/assets/img/projects/codecoffee.png',
    },
];

const ProjectSection: React.FC = () => {
    return (
        // 1. Tambahkan kelas 'relative' agar elemen 'absolute' di dalamnya terikat
        <section id="projects" className="relative py-16 px-4 sm:px-6 lg:px-8 min-h-screen bg-neutral-950">

            {/* Background Particles Container */}
            {/* Elemen ini menempati seluruh ruang section */}
            <div className="absolute inset-0 z-0 overflow-hidden">
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
                {/* Lapisan gradien agar teks lebih mudah dibaca di atas partikel */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
            </div>

            {/* Konten Utama */}
            {/* 2. Tambahkan kelas 'z-10' untuk memastikan konten berada di atas partikel (z-0) */}
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Judul Utama */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sharetech neon-text font-extrabold text-white mb-12 border-b-2 border-cyan-500 pb-2 flex justify-center">
                    MY PROJECTS
                </h2>

                {/* Grid Proyek */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group flex flex-col h-full bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-transparent transition duration-300 hover:bg-gray-700/80 hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] hover:border-cyan-500">

                            {/* Placeholder Gambar Proyek */}
                            <div className="h-48 bg-gray-700 flex items-center justify-center text-gray-500 text-sm overflow-hidden">
                                <img
                                    src={project.imageSrc}
                                    alt={`Screenshot ${project.title}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">

                                {/* Judul Proyek */}
                                <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                                    {project.title}
                                </h3>

                                {/* Deskripsi */}
                                <p className="text-gray-300 mb-4 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tautan */}
                                <div className="flex space-x-4 mb-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-400 hover:text-cyan-400 transition"
                                        aria-label={`Lihat kode ${project.title} di GitHub`}
                                    >
                                        <Github className="w-5 h-5 mr-1" />
                                        GitHub
                                    </a>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center text-gray-400 hover:text-cyan-400 transition"
                                            aria-label={`Lihat proyek ${project.title} live`}
                                        >
                                            <ExternalLink className="w-5 h-5 mr-1" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>

                                {/* Daftar Teknologi */}
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-900/50 text-cyan-300 border border-cyan-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;