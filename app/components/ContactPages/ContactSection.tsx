import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Particles from '../ExperiencePages/Particles/Particles';
const CONTACT_DATA = {
  email: 'dwiaguswibisonoblora@gmail.com',
  phone: '6285700498174',
  address: 'Kudus, Jawa Tengah, Indonesia',
  gmapsEmbedSrc: 'https://maps.app.goo.gl/eJLNHWKGwuTWgPi36',
};

const ContactSection: React.FC = () => {
  const whatsappLink = `https://wa.me/${CONTACT_DATA.phone}`;

  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 lg:px-8">
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
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Judul */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sharetech neon-text font-extrabold text-white mb-12 border-b-2 border-cyan-500 pb-2 flex justify-center">
          CONTACT ME
        </h2>

        {/* GRID UTAMA */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Kolom Kiri: Info Kontak */}
          <div className="lg:col-span-2 space-y-8">
            {/* Detail Kontak */}
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-500">
                <Mail className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300 break-words">{CONTACT_DATA.email}</p>
                </div>
              </div>

              {/* Alamat */}
              <div className="flex items-start p-4 bg-gray-800 rounded-lg border-l-4 border-cyan-500">
                <MapPin className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Alamat</h3>
                  <p className="text-gray-300">{CONTACT_DATA.address}</p>
                </div>
              </div>
            </div>

            {/* Tombol WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 rounded-md text-white font-medium bg-green-500 hover:bg-green-600 transition duration-300 shadow-lg hover:scale-105"
            >
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Chat via WhatsApp
              </div>
            </a>

            {/* Tombol Email */}
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="block w-full text-center px-6 py-3 rounded-md font-medium border border-cyan-500 text-cyan-500 hover:bg-cyan-900/50 transition duration-300"
            >
              <div className="flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send an Email
              </div>
            </a>
          </div>

          {/* Kolom Kanan: Peta */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-lg shadow-2xl border-2 border-cyan-500 aspect-video">
              <iframe
                src={CONTACT_DATA.gmapsEmbedSrc}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
