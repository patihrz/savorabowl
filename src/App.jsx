import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // Akan kita buat
import BranchesPage from './pages/BranchesPage'; // Akan kita buat   

import AOS from 'aos';
import 'aos/dist/aos.css';

// Komponen untuk auto scroll to top saat pindah halaman
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true, // Sebelumnya true, bisa dipertimbangkan false jika animasi hanya ingin saat pertama kali elemen terlihat
    });
    // Optional: re-initialize AOS on route change if dynamic content affects element positions
    // AOS.refresh();
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* Komponen ini akan menangani scroll ke atas */}
      <MainLayout> {/* MainLayout sekarang membungkus Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/branches" element={<BranchesPage />} />
          {/* Tambahkan rute lain di sini jika ada, misal halaman 404 */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;