// src/pages/BranchesPage.jsx
import React from 'react';
// Impor StyledButton (pastikan path ini benar dari src/pages/)
import StyledButton from '../components/common/StyledButton';

// Komponen Judul Section (Reusable) - Pakai text-primary
const SectionTitle = ({ children }) => (
  <h2 className="text-4xl sm:text-5xl font-serif text-center mb-12 md:mb-16 text-primary tracking-tight" data-aos="fade-down">
    {children}
  </h2>
);

// Komponen Pembungkus Section (Reusable) - Dengan overflow-hidden di container
const SectionWrapper = ({ id, children, className = '', aosType = "fade-up", aosDelay = "0" }) => (
  <section id={id} className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`} data-aos={aosType} data-aos-delay={aosDelay}>
    <div className="container mx-auto overflow-hidden"> {/* Ditambahkan overflow-hidden */}
      {children}
    </div>
  </section>
);


// Contoh Data Cabang Fiktif - Path gambar disesuaikan
const branchesData = [
  // SEMUA gambar cabang sekarang menggunakan /comingsoon.jpg
  { id: 1, name: "Savora Bowl - Grand Pastel City", address: "Mall Grand Pastel City, Lt. 3 Unit 25, Jl. Pelangi Indah No. 1, Jakarta Pusat", hours: "10:00 - 22:00", image: "/comingsoon.jpg", mapLink: "#" }, // Ganti #
  { id: 2, name: "Savora Bowl - Kemang Heights", address: "Jl. Kemang Raya No. 88, Ruko Blossom Blok C2, Jakarta Selatan", hours: "11:00 - 21:00", image: "/comingsoon.jpg", mapLink: "#" }, // Ganti #
  { id: 3, name: "Savora Bowl - Serpong Boulevard", address: "Ruko Golden Lane, Blok A5/12, BSD City, Tangerang Selatan", hours: "10:30 - 21:30", image: "/comingsoon.jpg", mapLink: "#" }, // Ganti #
];

// Komponen Kartu Cabang - Disederhanakan src gambarnya
const BranchCard = ({ branch, aosDelay }) => (
  <div
    className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl overflow-hidden"
    data-aos="fade-up"
    data-aos-delay={aosDelay}
  >
    <figure className="w-full h-56">
      <img
        // Langsung gunakan path dari branch.image
        src={branch.image} // Seharusnya ini sekarang selalu berisi "/comingsoon.jpg"
        alt={`Gerai ${branch.name}`}
        className="w-full h-full object-cover"
      />
    </figure>
    <div className="card-body p-6 text-center sm:text-left">
      <h3 className="card-title text-xl lg:text-2xl font-serif font-semibold text-primary mb-2">{branch.name}</h3>
      <p className="text-base-content opacity-90 mb-1 text-sm leading-relaxed">{branch.address}</p>
      <p className="text-base-content opacity-70 mb-4 text-sm">Jam Buka: {branch.hours}</p>
      <div className="card-actions justify-center sm:justify-start pt-2">
        {/* Tombol Lihat Peta menggunakan StyledButton */}
        <StyledButton
          onClick={() => window.open(branch.mapLink, '_blank', 'noopener,noreferrer')}
          // className="btn-sm" // Optional: jika ingin tombol lebih kecil
        >
          Lihat Peta
        </StyledButton>
      </div>
    </div>
  </div>
);

// Komponen Halaman Cabang
const BranchesPage = () => {
  return (
    <div className="bg-base-200 text-base-content">
      {/* Header Halaman Cabang */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-base-100 text-center" data-aos="fade-in">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"> {/* Tambah overflow-hidden */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary mb-4">
            Temukan Kelezatan Kami
          </h1>
          <p className="text-lg sm:text-xl text-base-content opacity-90 max-w-2xl mx-auto leading-relaxed">
            Kunjungi salah satu gerai Savora Bowl terdekat dan nikmati langsung sajian istimewa kami.
          </p>
        </div>
      </section>

      {/* Daftar Cabang */}
      {/* Pastikan SectionWrapper menggunakan definisi dengan overflow-hidden di container */}
      <SectionWrapper id="branch-list" className="bg-base-200">
        <div className="container mx-auto"> {/* Container di dalam SectionWrapper sudah overflow-hidden */}
          <SectionTitle>Gerai Savora Bowl</SectionTitle>
          {branchesData.length > 0 ? (
            // Grid disesuaikan gapnya
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              {branchesData.map((branch, index) => (
                <BranchCard key={branch.id} branch={branch} aosDelay={index * 100} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg">Informasi cabang akan segera hadir!</p>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default BranchesPage;