// Correction forcée pour déclencher un nouveau build Vercel
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center py-12">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-14 animate-fade-in-up">
        {/* Photo de profil et titre */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10 gap-8">
          <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-blue-200 animate-fade-in">
              <Image
                src="/images/ma-photo.png.jpg"
                alt="Photo de profil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-extrabold text-blue-800 text-center md:text-left w-full mb-2 tracking-tight animate-fade-in-up">
              À propos de moi
            </h1>
            <p className="text-lg text-blue-700 text-center md:text-left animate-fade-in-up delay-100">
              Technicien supérieur en génie civil passionné par la modélisation BIM et la conception de projets innovants.
            </p>
            {/* Bouton Télécharger mon CV */}
            <div className="mt-4 w-full flex justify-center md:justify-start animate-fade-in-up delay-200">
              <a
                href="/docs/cv-kader-moussa.pdf"
                download
                className="bg-blue-700 text-white rounded px-6 py-3 font-semibold shadow hover:bg-blue-800 transition-colors duration-200 text-center"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          {/* Parcours académique */}
          <section className="animate-fade-in-up delay-100">
            <h2 className="flex items-center text-2xl font-semibold text-blue-600 mb-3 gap-2">
              <span role="img" aria-label="Diplôme">🎓</span> Parcours académique
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Technicien supérieur en génie civil, j&apos;ai enrichi mon parcours avec une licence professionnelle en conduite de travaux.<br/>
              Actuellement, je poursuis un master spécialisé en ingénierie des structures (ponts et routes) à l&apos;ENSA (2024–2026), afin de renforcer mes compétences en calcul et conception.
            </p>
          </section>

          {/* Expérience terrain */}
          <section className="animate-fade-in-up delay-200">
            <h2 className="flex items-center text-2xl font-semibold text-blue-600 mb-3 gap-2">
              <span role="img" aria-label="Chantier">👷‍♂️</span> Expérience terrain
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Avec plus de 4 ans d&apos;expérience sur chantier, j&apos;ai participé à des projets concrets tels que des villas modernes et des bâtiments R+2, incluant sous-sols et piscines.<br/>
              Ces missions m&apos;ont donné une vision réaliste et structurée des défis quotidiens de la construction.
            </p>
          </section>

          {/* Compétences logicielles */}
          <section className="animate-fade-in-up delay-300">
            <h2 className="flex items-center text-2xl font-semibold text-blue-600 mb-3 gap-2">
              <span role="img" aria-label="Outils">🛠️</span> Compétences logicielles
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Je maîtrise un ensemble complet d&apos;outils BIM et structure :<br/>
              <span className="font-semibold">Revit</span>, <span className="font-semibold">AutoCAD</span>, <span className="font-semibold">Robot Structural Analysis</span>, <span className="font-semibold">Archicad</span> et la base de <span className="font-semibold">Blender</span>.<br/>
              Et enfin je me forme sur <span className="font-semibold">ETABS</span>, <span className="font-semibold">SAFE</span> et <span className="font-semibold">RFEM6</span> (apprentissage autonome).<br/>
              Cette polyvalence me permet d&apos;adapter ma modélisation aux exigences spécifiques de chaque projet.
            </p>
          </section>

          {/* Phrase finale personnalisée */}
          <section className="animate-fade-in-up delay-400">
            <p className="text-xl text-center text-blue-800 font-medium pt-6 border-t border-blue-100">
              Mon objectif : allier rigueur technique et créativité pour concevoir des structures solides, élégantes, et adaptées à leur environnement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 