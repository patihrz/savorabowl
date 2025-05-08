// src/pages/HomePage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeroSection from '../components/sections/home/HeroSection';
import StyledButton from '../components/common/StyledButton';

// Komponen Pembungkus Section (Reusable) - DENGAN overflow-hidden PADA CONTAINER
const SectionWrapper = ({ id, children, className = '', aosType = "fade-up", aosDelay = "0" }) => (
  <section
    id={id}
    className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`} // Padding section luar
    data-aos={aosType}
    data-aos-delay={aosDelay}
  >
    {/* Container sekarang memotong overflow dari elemen di dalamnya */}
    <div className="container mx-auto overflow-hidden"> {/* <--- overflow-hidden DI SINI */}
      {children}
    </div>
  </section>
);

// Komponen Judul Section (Reusable) - Pakai text-primary
const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`text-4xl sm:text-5xl font-serif text-center mb-12 md:mb-16 text-primary tracking-tight ${className}`} data-aos="fade-down">
    {children}
  </h2>
);

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />

      {/* Section Introduction (Harmoni Rasa Savora) */}
      <SectionWrapper id="introduction" className="bg-base-200">
        {/* PERBAIKAN: Gap dikecilkan */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"> {/* Default gap-8, lebih besar di md & lg */}
          <div data-aos="fade-right" data-aos-duration="1000" className="order-last lg:order-first">
            <img
              src="/savora-place.jpg" // GANTI GAMBAR ANDA (dari public)
              alt="Suasana Elegan Savora Bowl"
              // PERBAIKAN: Tambahkan max-w-full untuk keamanan ekstra
              className="rounded-xl shadow-2xl object-cover w-full max-w-full h-auto max-h-[700px] block"
            />
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className="lg:pl-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
              Selamat Datang di Savora
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif text-primary tracking-tight mb-6">
              Harmoni Cita Rasa <br className="hidden md:block" /> dalam Setiap Mangkuk.
            </h2>
            <p className="text-lg text-base-content leading-relaxed mb-6 opacity-90">
              Di Savora Bowl, kami percaya bahwa setiap hidangan adalah sebuah perjalanan rasa...
            </p>
            <p className="text-lg text-base-content leading-relaxed mb-8 opacity-90">
              Filosofi kami sederhana: menyajikan kebahagiaan dalam mangkuk...
            </p>
            <StyledButton onClick={() => navigate('/about')}>
              Kisah Kami Selengkapnya
            </StyledButton>
          </div>
        </div>
      </SectionWrapper>

      {/* Section Kilau Keistimewaan Savora (Highlight Keunggulan - TANPA IKON) */}
      <SectionWrapper id="highlight" className="bg-base-100">
        <SectionTitle>Kilau Keistimewaan Savora</SectionTitle>
        {/* PERBAIKAN: Jarak (gap) grid dikecilkan di layar kecil */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-6xl mx-auto"> {/* Default gap-5, lebih besar di md & lg */}
          {/* Kartu 1 */}
          <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-duration="800">
            <div className="card-body text-center px-6 py-8">
              <h3 className="card-title text-2xl font-serif font-semibold text-primary mb-3">Presentasi Menawan</h3>
              <p className="text-base-content opacity-80 leading-relaxed text-sm">Estetika pastel yang memanjakan mata, menambah nikmatnya setiap suapan.</p>
            </div>
          </div>
          {/* Kartu 2 */}
          <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
            <div className="card-body text-center px-6 py-8">
              <h3 className="card-title text-2xl font-serif font-semibold text-primary mb-3">Bahan Segar Alami</h3>
              <p className="text-base-content opacity-80 leading-relaxed text-sm">Bahan baku pilihan dari sumber terpercaya, menjamin kesegaran kualitas terbaik.</p>
            </div>
          </div>
          {/* Kartu 3 */}
          <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl overflow-hidden" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            <div className="card-body text-center px-6 py-8">
              <h3 className="card-title text-2xl font-serif font-semibold text-primary mb-3">Cita Rasa Otentik</h3>
              <p className="text-base-content opacity-80 leading-relaxed text-sm">Resep tradisional Nusantara dijaga keasliannya, dengan sentuhan inovasi modern.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section Temukan Kami di Sini (Placeholder mengarah ke Halaman Cabang) */}
      <SectionWrapper id="find-us" className="bg-base-200">
        <SectionTitle>Temukan Kami di Sini</SectionTitle>
        <p className="text-lg text-center max-w-3xl mx-auto text-base-content mb-12 opacity-90">
          Datang dan rasakan langsung keajaiban Savora Bowl. Suasana cerah dan hidangan lezat menanti Anda di setiap gerai kami.
        </p>
        <div className="text-center">
          <StyledButton onClick={() => navigate('/branches')} className="btn-wide">
            Lokasi Gerai Kami
          </StyledButton>
        </div>
      </SectionWrapper>
    </>
  );
};

export default HomePage;