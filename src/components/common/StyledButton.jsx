// src/components/common/StyledButton.jsx
import React from 'react';

// Komponen ini menerima props standar tombol seperti onClick, children (teks tombol),
// type (button/submit), dan className tambahan jika perlu.
const StyledButton = ({ children, onClick, type = 'button', className = '', ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      // Kelas styling dari Uiverse, diadaptasi warnanya
      className={`
        relative cursor-pointer py-3 px-6 sm:py-4 sm:px-8 /* Padding disesuaikan sedikit */
        text-center inline-flex justify-center items-center /* Tambah items-center */
        text-sm sm:text-base uppercase font-semibold /* Font style disesuaikan */
        text-primary-content /* Warna teks gelap */
        bg-primary /* Warna background pink pastel */
        rounded-lg border-solid
        transition-transform duration-300 ease-in-out transform hover:scale-105 /* Efek hover dasar */
        group outline-offset-4 focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2 /* Focus style diubah */
        overflow-hidden
        ${className} /* Memungkinkan penambahan kelas dari luar */
      `}
      {...props} // Meneruskan props lain (misal: disabled)
    >
      {/* Teks Tombol */}
      <span className="relative z-20">{children}</span>

      {/* Efek Kilatan Cahaya (Shine) */}
      <span
        className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/10 rotate-12 z-10 blur-md group-hover:left-[125%] transition-all duration-700 ease-in-out" // Opacity/blur/duration disesuaikan
      ></span>

      {/* Efek Border Animasi (Warna diubah ke secondary) */}
      <span className="absolute top-0 left-0 block h-[20%] w-1/2 rounded-tl-lg border-l-2 border-t-2 border-secondary drop-shadow-xl transition-all duration-300"></span>
      <span className="absolute top-0 right-0 block h-[60%] w-1/2 rounded-tr-lg border-r-2 border-t-2 border-secondary drop-shadow-xl transition-all duration-300 group-hover:h-[90%]"></span>
      <span className="absolute bottom-0 left-0 block h-[60%] w-1/2 rounded-bl-lg border-l-2 border-b-2 border-secondary drop-shadow-xl transition-all duration-300 group-hover:h-[90%]"></span>
      <span className="absolute bottom-0 right-0 block h-[20%] w-1/2 rounded-br-lg border-r-2 border-b-2 border-secondary drop-shadow-xl transition-all duration-300"></span>
    </button>
  );
};

export default StyledButton;