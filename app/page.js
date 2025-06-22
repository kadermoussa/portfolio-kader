import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-sans">
      <Navbar />
      
      {/* Section Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 animate-fade-in">
          <Image
            src="/images/villa-rendu1.png.png"
            alt="Hero Background"
            fill
            className="object-cover brightness-30"
            priority
          />
        </div>

        {/* Contenu Hero */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-mono text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in-right">
                J&apos;apprends, je construis, je rêve en béton armé.
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-slide-in-right-delay">
                Bienvenue dans mon univers entre art, structure et précision.
              </p>
              <Link 
                href="/projects"
                className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 animate-fade-in-up font-medium"
              >
                Voir mes projets
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </section>

      {/* Section Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-slide-in-left">
                <h2 className="font-mono text-3xl font-bold text-white">
                  L&apos;Art de l&apos;Ingénierie
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Chaque projet est une symphonie où l&apos;art rencontre la science. 
                  Dans l&apos;intersection entre créativité et précision technique, 
                  nous créons des espaces qui inspirent et durent.
                </p>
                <div className="bg-gray-900/50 p-6 rounded-lg border-l-4 border-orange-500 animate-fade-in-delay">
                  <p className="text-lg italic text-gray-200 font-mono">
                    &quot;L&apos;art de bâtir, c&apos;est l&apos;art de penser en trois dimensions.&quot;
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl animate-fade-in-up-delay">
                <Image
                  src="/images/villa-rendu1.png.png"
                  alt="Vision artistique"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projet en vedette */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 animate-fade-in-up">
              <div className="relative h-96 w-full">
                <Image
                  src="/images/villa-rendu1.png.png"
                  alt="Villa R+1+SS avec piscine"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h2 className="font-mono text-3xl font-bold text-white mb-4">
                  Villa R+1+SS avec piscine
                </h2>
                <Link 
                  href="/projects"
                  className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-300 font-medium"
                >
                  Voir le projet
                </Link>
              </div>
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
