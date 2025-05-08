// src/components/sections/home/HeroSection.jsx
import React from 'react';
// Hapus import Link jika tidak dipakai lagi di file ini
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; // Impor useNavigate untuk navigasi
import StyledButton from '../../common/StyledButton'; // Impor tombol custom (pastikan path benar)

// Path ke gambar background hero dari folder 'public'
const heroImageUrl = '/hero-background.gif'; // Pastikan file ada di public/

const HeroSection = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <section
      id="home"
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${heroImageUrl})`,
        backgroundColor: '#FEF6EF', // Warna base-200 sebagai fallback
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay Gelap Tipis untuk Kontras Teks Terang */}
      <div className="hero-overlay bg-black bg-opacity-30 absolute inset-0"></div>

      <div className="hero-content text-center relative z-10 py-24 md:py-36 text-white">
        <div className="max-w-2xl mx-auto">
          <h1
            className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-white"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Savora Bowl
          </h1>
          <p
            className="mb-10 text-lg sm:text-xl text-gray-100 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Kelezatan Lembut Nusantara, <br className="hidden sm:block" />
            Tersaji Indah dalam Nuansa Modern untuk Hari Cerah Anda.
          </p>

          {/* ===== PERUBAHAN DI SINI ===== */}
          {/* Mengganti Link dengan StyledButton + onClick navigate */}
          <StyledButton
            onClick={() => navigate('/about')} // Navigasi ke halaman /about
            className="btn-wide" // Menjaga agar tombol tetap lebar
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="800"
          >
            Jelajahi Rasa Kami
          </StyledButton>
          {/* ============================== */}

        </div>
      </div>
    </section>
  );
};
export default HeroSection;