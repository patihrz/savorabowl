// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Pastikan sudah install: npm install react-icons
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Sesuaikan ikon yang dipakai

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Sesuaikan link sosial media Anda
  const socialLinks = [
    { label: 'Instagram', icon: FaInstagram, url: '#' }, // Ganti #
    { label: 'Facebook', icon: FaFacebookF, url: '#' }, // Ganti #
    { label: 'Twitter', icon: FaTwitter, url: '#' },   // Ganti #
  ];

  return (
    <>
      <footer className="p-10 bg-neutral text-neutral-content">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left items-center overflow-hidden">

          {/* Kolom 1: Logo */}
          <div className="flex justify-center md:justify-start" data-aos="fade-right">
            <Link to="/" aria-label="Savora Bowl - Halaman Utama">
              <img
                src="/savora-logo.png" // Path ke logo di public
                alt="Savora Bowl Logo"
                className="h-16 sm:h-20 w-auto" // Ukuran logo footer
              />
            </Link>
          </div>

          {/* Kolom 2: Head Office & Kontak */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h6 className="font-bold uppercase tracking-wider mb-3">Savora Bowl Head Office</h6>
            <address className="text-sm leading-relaxed not-italic">
              Jl. Pastel Indah No. 1 <br />
              Kota Pelangi, Indonesia 12345 <br />
              <a href="mailto:hello@savorabowl.id" className="link link-hover mt-2 inline-block">hello@savorabowl.id</a> <br />
              <a href="tel:+6281234567890" className="link link-hover mt-1 inline-block">+62 812 3456 7890</a>
            </address>
          </div>

          {/* Kolom 3: Follow Us & Social Media */}
          <div className="flex flex-col items-center md:items-end" data-aos="fade-left" data-aos-delay="200">
            <h6 className="font-bold uppercase tracking-wider mb-3">Follow Us!</h6>
            <div className="flex gap-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Savora Bowl ${social.label}`}
                  className="text-neutral-content hover:text-primary transition-colors duration-300"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>

      {/* Bagian Copyright (Terpisah di bawah) */}
      <div className="footer footer-center px-10 py-4 bg-neutral text-neutral-content text-xs border-t border-neutral-content/10">
        <aside>
          <p>© {currentYear} Savora Bowl. All Rights Reserved.</p>
        </aside>
      </div>
    </>
  );
};

export default Footer;