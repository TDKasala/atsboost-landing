'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function toggleNav() {
    setNavOpen((open) => !open);
  }

  function closeNav() {
    setNavOpen(false);
  }

  return (
    <nav className="sticky top-0 z-20 w-full bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="ATSBoost Logo" width={36} height={36}/>
          <Link href="/" className="text-2xl font-bold tracking-tight">ATSBoost</Link>
        </div>
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <li>
            <Link href="#services" className="hover:text-green-600">Services</Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-green-600">Pricing</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-600">Contact</Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-green-600">Blog</Link>
          </li>
        </ul>
        {/* Hamburger */}
        <button onClick={toggleNav} className="md:hidden p-2">
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-blue-900 text-white shadow-lg z-40 transition-transform duration-300 md:hidden ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 font-semibold">
          <Link href="#services" className="hover:text-green-600" onClick={closeNav}>Services</Link>
          <Link href="/pricing" className="hover:text-green-600" onClick={closeNav}>Pricing</Link>
          <Link href="/contact" className="hover:text-green-600" onClick={closeNav}>Contact</Link>
        </nav>
      </div>
      {/* Backdrop for mobile */}
      {navOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-40 md:hidden"
          onClick={closeNav}
        />
      )}
    </nav>
  );
}