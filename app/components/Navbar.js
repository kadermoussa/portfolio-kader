import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
      {/* Topbar */}
      <div className="w-full bg-blue-900 text-blue-100 text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
            <a href="mailto:kadermoussa6@gmail.com" className="hover:underline">kadermoussa6@gmail.com</a>
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L21 13M7 13V6h10v7" /></svg>
            <span>0607888981 / 0630624357</span>
          </span>
        </div>
        {/* Placeholder pour réseaux sociaux plus tard */}
        <div></div>
      </div>
      {/* Navbar principale */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-sm shadow-sm" style={{marginTop: '32px'}}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo et nom */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-8 h-8">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-semibold text-steel-800 tracking-tight">
                Kader Moussa
              </span>
            </Link>

            {/* Liens de navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/"
                className="text-steel-600 hover:text-brick-600 transition-colors duration-300 font-medium"
              >
                Accueil
              </Link>
              <Link 
                href="/projects"
                className="text-steel-600 hover:text-brick-600 transition-colors duration-300 font-medium"
              >
                Projets
              </Link>
              <Link 
                href="/about"
                className="text-steel-600 hover:text-brick-600 transition-colors duration-300 font-medium"
              >
                À propos
              </Link>
              <Link 
                href="/contact"
                className="text-steel-600 hover:text-brick-600 transition-colors duration-300 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Menu mobile */}
            <button className="md:hidden text-steel-600 hover:text-brick-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
} 