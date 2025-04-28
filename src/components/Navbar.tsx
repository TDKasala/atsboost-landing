/*'use client';

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
    <nav className="sticky top-0 z-20 w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo and Branding */
        /*<div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={40} height={40}/>
          <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight">ATSBoost</Link>
        </div>

        {/* Desktop Links */
        /*<div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/upload" className="hover:text-blue-600">Resume Upload</Link>
          <Link href="/results" className="hover:text-blue-600">ATS Results</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          {/* Dropdown for Account */
          /*<div className="relative group">
            <button className="hover:text-blue-600 inline-flex items-center gap-1 focus:outline-none">
              Account <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto min-w-[120px] transition duration-150 z-50">
              <Link href="/login" className="block px-4 py-2 hover:bg-blue-50 w-full text-left">Login</Link>
              <Link href="/register" className="block px-4 py-2 hover:bg-blue-50 w-full text-left">Register</Link>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Button (Mobile) */
        /*<button
          className="md:hidden p-2 rounded focus:outline-none z-30"
          aria-label="Open navigation menu"
          onClick={toggleNav}
        >
          {navOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
        </button>
      </div>

      {/* Mobile Menu */
      /*<div
        className={`fixed inset-0 bg-black/30 md:hidden transition-opacity ${navOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={closeNav}
        aria-hidden={!navOpen}
      />

      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white shadow-lg z-40 transition-transform duration-300 md:hidden ${
          navOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!navOpen}
      >
        <nav className="flex flex-col p-6 gap-4">
          <Link href="/" className="hover:text-blue-600" onClick={closeNav}>Home</Link>
          <Link href="/upload" className="hover:text-blue-600" onClick={closeNav}>Resume Upload</Link>
          <Link href="/results" className="hover:text-blue-600" onClick={closeNav}>ATS Results</Link>
          <Link href="/blog" className="hover:text-blue-600" onClick={closeNav}>Blog</Link>
          <Link href="/about" className="hover:text-blue-600" onClick={closeNav}>About</Link>
          <Link href="/contact" className="hover:text-blue-600" onClick={closeNav}>Contact</Link>
          <div className="border-t pt-2 mt-2 flex flex-col gap-2">
            <Link href="/login" className="hover:text-blue-600" onClick={closeNav}>Login</Link>
            <Link href="/register" className="hover:text-blue-600" onClick={closeNav}>Register</Link>
          </div>
        </nav>
      </div>
    </nav>
  );
}*/
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