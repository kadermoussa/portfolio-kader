import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-sans">
      <Navbar />
      
      {/* Section Hero */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/villa-rendu1.png.png"
            alt="Hero Background"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-900/60" />
        </div>
        {/* Contenu Hero */}
        <div className="relative z-10 text-center w-full flex flex-col items-center justify-center animate-fade-in-up">
          <h1 className="font-extrabold text-4xl md:text-6xl text-white mb-6 drop-shadow-lg tracking-tight animate-fade-in-up">
            Ingénierie &amp; Structure<br className="hidden md:block" />
            <span className="text-orange-400">Bâtir l&apos;avenir avec précision</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Bienvenue sur mon portfolio. Découvrez mes réalisations, mon expertise et ma passion pour la construction et la modélisation BIM.
          </p>
          <Link 
            href="/projects"
            className="inline-block px-10 py-4 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 font-semibold text-lg animate-fade-in-up delay-200"
          >
            Voir mes projets
          </Link>
        </div>
      </section>

      {/* Section Vision (remplacée par À propos) */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 animate-fade-in-up">
            <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-blue-200">
                <Image
                  src="/images/ma-photo.png.jpg"
                  alt="Photo de profil"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start">
              <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">À propos de moi</h2>
              <p className="text-lg text-blue-100 mb-4 text-center md:text-left">
                Technicien supérieur en génie civil passionné par la modélisation BIM et la conception de projets innovants.
              </p>
              <ul className="text-gray-200 space-y-2 text-base list-disc pl-5">
                <li>Technicien supérieur en génie civil, licence pro en conduite de travaux</li>
                <li>Master spécialisé en ingénierie des structures (ENSA 2024–2026)</li>
                <li>4+ ans d&apos;expérience sur chantier (villas, bâtiments R+2, sous-sols, piscines)</li>
                <li>Maîtrise : Revit, AutoCAD, Robot, Archicad, Blender, ETABS, SAFE, RFEM6</li>
                <li>Objectif : allier rigueur technique et créativité pour des structures solides et élégantes</li>
              </ul>
              <Link href="/about" className="mt-6 inline-block px-8 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition-colors duration-300 font-semibold animate-fade-in-up delay-200">En savoir plus</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Boutons de navigation */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link 
              href="/about"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center animate-fade-in-up font-medium"
            >
              À propos
            </Link>
            <Link 
              href="/projects"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center animate-fade-in-up-delay font-medium"
            >
              Projets
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-center animate-fade-in-up-delay-2 font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
