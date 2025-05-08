# Savora Bowl - Website Portofolio Restoran Nusantara Modern

<p align="center">
  <img src="https://savorabowl.vercel.app/savora-logo.png" alt="Savora Bowl Logo" width="150"/>
</p>

<p align="center">
  <em>Sebuah website restoran fiktif yang menyajikan rice bowl khas Nusantara dengan gaya modern, elegan, dan fancy. Dibuat sebagai proyek latihan dan portofolio front-end.</em>
</p>

<p align="center">
  {/* GANTI placeholder LINK dengan URL deploy Anda */}
  <a href="[DEMO](https://savorabowl.vercel.app/)"><strong>Lihat Live Demo »</strong></a>
</p>


## Tentang Proyek

**Savora Bowl** adalah eksplorasi desain dan pengembangan front-end untuk sebuah konsep restoran/startup kuliner fiktif. Ide utamanya adalah menyajikan hidangan *rice bowl* yang terinspirasi dari kekayaan rasa Nusantara, namun dikemas dalam presentasi dan pengalaman pengguna yang **modern, elegan, dan mewah (fancy)**.

Proyek ini dibangun dari awal menggunakan **React** dan **Vite**, dengan fokus pada:
* **Antarmuka Pengguna (UI):** Menciptakan UI yang menarik secara visual, bersih, dan intuitif menggunakan **Tailwind CSS** dan **DaisyUI**.
* **Pengalaman Pengguna (UX):** Memberikan pengalaman Browse yang mulus dengan navigasi yang jelas, **animasi yang halus**, dan **desain responsif** penuh.
* **Konten Perkenalan:** Website ini berfungsi sebagai etalase digital awal, memperkenalkan konsep Savora Bowl, cerita di baliknya, nilai-nilai utama, dan informasi cabang (fiktif).

Tujuan utama proyek ini adalah untuk **showcase kemampuan teknis front-end** dan **sensibilitas desain** dalam membangun aplikasi web modern sebagai bagian dari portofolio pribadi. Tema visual yang diadopsi adalah **tema gelap (hitam)** yang dominan untuk memberikan kesan eksklusif, dipadukan dengan **aksen warna pastel (pink dan apricot)** untuk sentuhan kelembutan dan keunikan brand.

---

## Screenshot

**(Ganti gambar placeholder di bawah ini dengan screenshot asli proyek Anda!)**


---

## Fitur Unggulan

* **Desain Fully Responsive:** Tata letak yang dirancang cermat agar tampil optimal dan fungsional di semua ukuran layar, dari ponsel kecil hingga monitor desktop lebar.
* **Tema Gelap Elegan & Kustom:** Implementasi tema gelap yang konsisten menggunakan DaisyUI, dikustomisasi dengan palet warna hitam dan aksen pastel (pink, apricot) untuk menciptakan identitas visual yang unik dan mewah.
* **Navigasi Intuitif & Mulus:** Penggunaan React Router DOM v6 untuk perpindahan antar halaman (Home, About, Cabang) tanpa refresh, dilengkapi fitur scroll-to-top otomatis.
* **Animasi Halus & Modern:**
    * Implementasi AOS (Animate On Scroll) untuk efek *fade*, *slide*, dan *zoom* saat elemen masuk ke viewport.
    * Transisi CSS halus pada interaksi hover (link, tombol, kartu).
    * Animasi ikon hamburger kustom yang menarik di tampilan mobile.
* **Komponen UI Kustom & Reusable:**
    * Pembuatan komponen reusable seperti `SectionWrapper`, `SectionTitle`.
    * Implementasi tombol custom (`StyledButton`) dengan efek animasi border dan kilatan cahaya yang unik, diadaptasi agar sesuai dengan tema warna.
    * Penggunaan komponen DaisyUI (`navbar`, `card`, `footer`, dll.) yang di-style ulang sesuai tema.
* **Struktur Kode Terorganisir:** Penggunaan struktur folder yang jelas (components, pages, assets, etc.) untuk kemudahan pengembangan dan pemeliharaan.

---

## Teknologi & Library

* **[React.js](https://reactjs.org/) (v18+):** Library JavaScript utama untuk membangun antarmuka pengguna.
* **[Vite](https://vitejs.dev/):** Build tool generasi baru yang sangat cepat untuk development front-end. Dipilih karena kecepatan HMR (Hot Module Replacement) dan waktu build yang singkat.
* **[Tailwind CSS](https://tailwindcss.com/):** Framework CSS utility-first untuk styling yang cepat dan efisien. Memungkinkan pembuatan desain kustom tanpa meninggalkan HTML.
* **[DaisyUI](https://daisyui.com/):** Plugin Tailwind CSS yang menyediakan komponen UI siap pakai (seperti `button`, `card`, `navbar`, `footer`) dengan sistem tema yang mudah dikustomisasi. Digunakan untuk mempercepat development komponen dasar.
* **[React Router DOM](https://reactrouter.com/) (v6):** Library standar untuk implementasi routing sisi klien (client-side routing) pada aplikasi React.
* **[AOS (Animate On Scroll)](https://michalsnik.github.io/aos/):** Library JavaScript untuk menambahkan animasi halus saat elemen di-scroll masuk ke dalam viewport.
* **[React Icons](https://react-icons.github.io/react-icons/):** Library untuk menyertakan ikon populer (seperti Font Awesome) sebagai komponen React dengan mudah (digunakan di Footer).
* **JavaScript (ES6+):** Bahasa pemrograman dasar.
* **CSS3:** Untuk styling tambahan dan animasi custom (misalnya hamburger menu).
* **HTML5:** Struktur dasar markup.

---

## Instalasi & Menjalankan Proyek

Pastikan Anda memiliki [Node.js](https://nodejs.org/) (disarankan versi LTS terbaru) dan npm/yarn/pnpm terinstal.

1.  **Clone Repository:**
    ```bash
    git clone [https://github.com/EskelandLab/ANDA](https://github.com/EskelandLab/ANDA)
    cd savora-bowl
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```
    *(atau `yarn install` / `pnpm install`)*

3.  **Menjalankan Development Server:**
    ```bash
    npm run dev
    ```
    *(atau `yarn dev` / `pnpm dev`)*
    Server akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sudah terpakai). Aplikasi akan otomatis me-reload jika Anda mengubah file source code.

4.  **Build untuk Produksi (Opsional):**
    ```bash
    npm run build
    ```
    Perintah ini akan membuat folder `dist/` yang berisi file-file statis siap deploy. Anda bisa melihat preview hasil build dengan `npm run preview`.

---

## Struktur Folder Proyek
savora-bowl/
├── dist/                   # Folder hasil build (setelah npm run build)
├── node_modules/           # Dependensi proyek
├── public/                 # Aset statis (logo, gambar background, favicon, dll.)
│   ├── savora-logo.png
│   ├── hero-background.gif
│   ├── savora-place.jpg
│   └── images/
│       ├── branch-1.jpg
│       └── ...
├── src/
│   ├── assets/             # Aset yang diproses Vite (jika ada)
│   ├── components/         # Komponen UI React reusable
│   │   ├── common/         # Komponen umum (Navbar, Footer, StyledButton)
│   │   ├── layout/         # Komponen tata letak (MainLayout)
│   │   └── sections/       # Komponen spesifik per bagian halaman (HeroSection)
│   ├── pages/              # Komponen Halaman (HomePage, AboutPage, BranchesPage)
│   ├── App.jsx             # Komponen aplikasi utama (routing)
│   ├── main.jsx            # Titik masuk aplikasi React
│   └── index.css           # CSS global & direktif Tailwind
├── .eslintrc.cjs           # Konfigurasi ESLint
├── .gitignore              # File/folder yang diabaikan Git
├── index.html              # Template HTML utama
├── package-lock.json       # Pengunci versi dependensi (npm)
├── package.json            # Informasi proyek & dependensi
├── postcss.config.js       # Konfigurasi PostCSS
├── tailwind.config.js      # Konfigurasi Tailwind & DaisyUI
└── vite.config.js          # Konfigurasi Vite

---

## Potensi Pengembangan Lanjutan (Future Improvements)

Proyek ini merupakan fondasi awal. Beberapa fitur yang bisa ditambahkan di masa depan:

* Halaman Menu Lengkap dengan detail dan kategori produk.
* Fungsionalitas Keranjang Belanja (Cart).
* Proses Checkout (dummy atau terintegrasi).
* Halaman Detail Produk (jika diperlukan).
* Integrasi dengan API (dummy atau backend sungguhan) untuk data dinamis.
* Panel Admin untuk mengelola konten (jika backend dibuat).
* Optimasi performa lebih lanjut (image loading, code splitting).

---

## Penulis

* **[Patih Ramadika]**

---

## Lisensi

Proyek ini tidak memiliki lisensi spesifik (atau sebutkan jika ada, misal MIT License). Dibuat utamanya untuk tujuan pembelajaran dan portofolio.
