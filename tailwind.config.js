/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: { // Warna kustom bisa tetap ada sebagai referensi
        'brand-bg-main': '#FFFBF7',
        'brand-bg-secondary': '#FEF6EF',
        'brand-accent-primary': '#FFD6D6',
        'brand-accent-secondary': '#FFE9D6',
        'brand-border-soft': '#F5EBE0',
        'brand-dark-text': '#374151',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        "savora-super-light": { // Tema terang kita
          "primary": "#FFD6D6",        // Soft Rose Pink
          "secondary": "#FFE9D6",      // Pale Apricot
          "accent": "#F5EBE0",         // Pale Cream Grey
          "neutral": "#374151",        // Dark Neutral Grey
          "base-100": "#FFFBF7",       // Background Utama TERANG
          "base-200": "#FEF6EF",       // Background Sekunder TERANG
          "base-300": "#FDF2E9",
          "info": "#A6D8D4",
          "success": "#A8D8B0",
          "warning": "#F5DDA0",
          "error": "#FFD9D9",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.75rem",
          "base-content": "#374151",     // Teks Utama GELAP Netral
          "primary-content": "#374151",   // Teks di atas tombol primary
          "secondary-content": "#374151", // Teks di atas tombol secondary
          "accent-content": "#374151",    // Teks di atas warna accent
          "neutral-content": "#FFFBF7",   // Teks terang di atas warna neutral
        },
      },
      // Hapus tema lain dari sini
    ],
    darkTheme: false, // Pastikan false
    logs: false,
    base: true,
    styled: true,
    utils: true,
  },
}