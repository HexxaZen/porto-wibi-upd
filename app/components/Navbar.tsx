// components/Navbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Menggunakan ikon dari lucide-react

// Definisikan item menu
const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/' },
  { name: 'EXPERIENCES', href: '/' },
  { name: 'PROJECTS', href: '/' },
  { name: 'CONTACT', href: '/' },
];

/**
 * Komponen Navbar dengan efek Fluid Glassmorphism yang Animatif dan Responsif.
 * Membutuhkan Tailwind CSS 3.x/4.x dan properti CSS kustom.
 */
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi toggle menu untuk mobile
  const toggleMenu = () => setIsOpen(!isOpen);

  // Efek Glassmorphism kustom (menggunakan CSS kustom untuk backdrop-filter)
  const glassmorphismStyle = {
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(10px) saturate(180%)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)', // Transparan sedikit
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  };

  return (
    // Navbar utama: fixed, penuh lebar, dan z-index tinggi
    <nav 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-300 rounded-full mx-auto mt-4"
      style={glassmorphismStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* LOGO - Diatur di sebelah kiri */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-black tracking-wider text-white hover:text-cyan-400 transition-colors duration-300">
              WIBISANA
            </Link>
          </div>

          {/* Menu Desktop - Diatur di sebelah kanan */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="
                  text-white 
                  px-3 py-2 
                  text-sm font-medium 
                  relative 
                  group 
                  overflow-hidden
                  transition-all duration-300 
                  hover:text-cyan-300
                "
              >
                {/* Efek Kilauan Animatif (Garis bawah yang bergerak) */}
                <span className="
                  absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 
                  transform translate-x-full 
                  group-hover:translate-x-0 
                  transition-transform duration-500
                "></span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Tombol Hamburger (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cyan-400 focus:outline-none transition-colors"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Dropdown */}
      {isOpen && (
        <div className="md:hidden" style={glassmorphismStyle}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={() => setIsOpen(false)} // Tutup menu setelah klik
                className="
                  block 
                  text-white 
                  px-3 py-2 
                  rounded-md 
                  text-base font-medium 
                  hover:bg-cyan-500/20 
                  transition-colors duration-200
                "
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;