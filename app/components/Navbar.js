import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-sm shadow-sm">
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
  );
} 