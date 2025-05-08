// src/pages/AboutPage.jsx
import React from 'react';

// Komponen Judul Section (Reusable) - Pakai text-primary
const SectionTitle = ({ children, className = '' }) => (
  <h2 className={`text-3xl sm:text-4xl font-serif text-center mb-10 md:mb-12 text-primary tracking-tight ${className}`} data-aos="fade-down">
    {children}
  </h2>
);

// Komponen Pembungkus Section (Reusable) - Dengan overflow-hidden di container
const SectionWrapper = ({ id, children, className = '', aosType = "fade-up", aosDelay = "0" }) => (
  <section id={id} className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${className}`} data-aos={aosType} data-aos-delay={aosDelay}>
    <div className="container mx-auto overflow-hidden"> {/* Ditambahkan overflow-hidden */}
      {children}
    </div>
  </section>
);


const AboutPage = () => {
  return (
    <div className="bg-base-100 text-base-content">

      {/* IMPROVEMENT: Header Halaman dengan Gambar Background */}
      <section
        className="hero min-h-[40vh] md:min-h-[50vh] pt-24 md:pt-32 relative bg-base-200" // Beri min-height
        style={{ backgroundImage: `url('https://via.placeholder.com/1600x600/FEF6EF/CACACA?text=Savora+Atmosphere')` }} // GANTI GAMBAR ANDA
        data-aos="fade-in"
      >
        <div className="hero-overlay bg-black/20"></div> {/* Overlay tipis */}
        <div className="hero-content text-center text-neutral-content relative z-10"> {/* text-neutral-content agar kontras */}
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-white"> {/* Teks putih di atas overlay */}
              Tentang Savora Bowl
            </h1>
            <p className="mb-5 text-lg sm:text-xl text-gray-200 leading-relaxed">
              Perjalanan kami dalam menyajikan kelezatan Nusantara dengan sentuhan modern dan penuh cinta.
            </p>
          </div>
        </div>
      </section>

      {/* Section Cerita Kami (Layout diperbaiki sedikit) */}
      <SectionWrapper id="our-story" className="bg-base-100">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div data-aos="fade-right" data-aos-duration="900">
            <img
              src="/rahasia.jpg" // GANTI GAMBAR ANDA
              alt="Inspirasi di balik Savora Bowl"
              className="rounded-xl shadow-xl object-cover w-full h-full max-h-[700px]"
            />
          </div>
          <div className="space-y-5 text-base leading-relaxed text-base-content opacity-95 lg:pl-8" data-aos="fade-left" data-aos-duration="900" data-aos-delay="100">
            <h2 className="text-3xl sm:text-4xl font-serif text-primary tracking-tight mb-4"> {/* Judul di sini, bukan SectionTitle */}
              Kisah di Balik Setiap Mangkuk
            </h2>
            <p>
              Savora Bowl lahir dari kecintaan mendalam terhadap kekayaan kuliner Nusantara...
            </p>
            <p>
              Perjalanan kami dimulai dari dapur sederhana, bereksperimen dengan resep-resep warisan keluarga...
            </p>
            <p>
              Nama "Savora" sendiri berasal dari kata "savor" yang berarti menikmati setiap rasa...
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* IMPROVEMENT: Section Filosofi/Nilai Kami Menggunakan Card */}
      <SectionWrapper id="our-philosophy" className="bg-base-200">
        <SectionTitle>Filosofi Savora</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {[
            { title: "Kualitas Terbaik", description: "Bahan segar pilihan dan resep otentik adalah fondasi kami.", delay: "0" },
            { title: "Inovasi Berakar Tradisi", description: "Menghadirkan cita rasa klasik Nusantara dengan sentuhan modern.", delay: "150" },
            { title: "Kepuasan Pelanggan", description: "Pelayanan hangat dan pengalaman bersantap yang menyenangkan.", delay: "300" },
          ].map((value, index) => (
            // Menggunakan struktur Card DaisyUI
            <div
              key={index}
              className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out" // Card dengan background base-100
              data-aos="fade-up"
              data-aos-delay={value.delay}
            >
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-serif font-semibold text-primary mb-3"> {/* Judul nilai */}
                  {value.title}
                </h3>
                <p className="text-base-content opacity-80 leading-relaxed text-sm"> {/* Deskripsi nilai */}
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* IMPROVEMENT: Section Komitmen Kualitas dengan Gambar */}
      <SectionWrapper id="our-commitment" className="bg-base-100">
         <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
           <div className="space-y-5 text-base leading-relaxed text-base-content opacity-95 lg:pr-8" data-aos="fade-right" data-aos-duration="900">
             <h2 className="text-3xl sm:text-4xl font-serif text-primary tracking-tight mb-4">Dedikasi Kami untuk Kualitas</h2>
             <p>
               Kualitas adalah napas Savora Bowl. Kami memastikan setiap langkah, dari pemilihan bahan hingga penyajian, memenuhi standar tertinggi untuk kepuasan Anda.
             </p>
             <ul className="list-disc list-inside space-y-2 pl-2 text-sm">
               <li><span className="font-semibold">Bahan Baku Segar:</span> Dipilih ketat dari pemasok tepercaya.</li>
               <li><span className="font-semibold">Resep Otentik:</span> Menghormati warisan rasa Nusantara.</li>
               <li><span className="font-semibold">Proses Higienis:</span> Standar kebersihan tanpa kompromi.</li>
               <li><span className="font-semibold">Tanpa Pengawet Buatan:</span> Mengutamakan kelezatan alami.</li>
             </ul>
           </div>
           <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="100">
             <img
               src="/rempah.jpg" // GANTI GAMBAR ANDA (misal: bahan baku)
               alt="Komitmen Kualitas Savora Bowl"
               className="rounded-xl shadow-xl object-cover w-full h-full max-h-[500px]"
             />
           </div>
         </div>
       </SectionWrapper>

    </div>
  );
};

export default AboutPage;
