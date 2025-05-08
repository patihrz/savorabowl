import React from 'react';
import Navbar from '../common/Navbar'; // Kita akan buat ini setelahnya
import Footer from '../common/Footer'; // Kita akan buat ini setelahnya

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen font-sans"> {/* Menggunakan font-sans dari Tailwind config */}
      <Navbar />
      <main className="flex-grow">
        {children} {/* Konten halaman akan dirender di sini */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;