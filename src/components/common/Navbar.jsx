// src/components/common/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 30); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location.pathname]);

  const toggleMobileMenu = () => { setMobileMenuOpen(!mobileMenuOpen); };

  const getNavLinkClass = (path) => {
    const baseClasses = "text-base-content hover:text-primary transition-colors duration-300 pb-1 border-b-2";
    return `${baseClasses} ${location.pathname === path ? 'border-primary text-primary' : 'border-transparent'}`;
  };

  const navbarBaseClass = "navbar fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-in-out";
  const navbarTopClasses = "bg-transparent text-base-content py-4";
  const navbarScrolledClasses = "bg-base-100/95 backdrop-blur-sm shadow-sm text-base-content py-3 md:py-4";

  return (
    <nav className={`${navbarBaseClass} ${scrolled ? navbarScrolledClasses : navbarTopClasses}`} aria-label="Navigasi Utama">
      {/* PERBAIKAN: Hapus overflow-hidden dari container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="navbar-start">
          {/* PERBAIKAN: Hapus kelas btn dari Link logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity duration-300" aria-label="Savora Bowl - Halaman Utama">
            <img
              src="/savora-logo.png" // Path ke logo di public
              alt="Savora Bowl Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto block" // Tambah 'block' untuk pastikan tidak ada spasi bawah aneh
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4 md:space-x-6">
            <li><Link to="/" className={getNavLinkClass('/')}>Home</Link></li>
            <li><Link to="/about" className={getNavLinkClass('/about')}>About</Link></li>
            <li><Link to="/branches" className={getNavLinkClass('/branches')}>Cabang</Link></li>
          </ul>
        </div>

        <div className="navbar-end flex items-center">
          <div className="lg:hidden">
            <label className="hamburger text-base-content hover:opacity-75" aria-label="Toggle menu navigasi">
              <input type="checkbox" checked={mobileMenuOpen} onChange={toggleMobileMenu} />
              <svg viewBox="0 0 32 32">
                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Dropdown Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 z-[999] overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen shadow-xl' : 'max-h-0'} bg-base-100`}>
        <div className="px-4 pt-2 pb-4 space-y-2 border-t border-base-content/10">
          <Link to="/" className={`${getNavLinkClass('/')} block w-full text-left px-3 py-2 rounded-md`}>Home</Link>
          <Link to="/about" className={`${getNavLinkClass('/about')} block w-full text-left px-3 py-2 rounded-md`}>About</Link>
          <Link to="/branches" className={`${getNavLinkClass('/branches')} block w-full text-left px-3 py-2 rounded-md`}>Cabang</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;