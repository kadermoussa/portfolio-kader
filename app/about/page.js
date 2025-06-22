import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex items-center justify-center py-12">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-14">
        {/* Photo de profil */}
        <div className="flex flex-col md:flex-row items-center md:items-start mb-10">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8 flex justify-center md:justify-start w-full md:w-auto">
            <Image
              src="/images/ma-photo.png.jpg"
              alt="Photo de profil"
              width={220}
              height={220}
              className="rounded-full shadow-lg object-cover"
              priority
            />
          </div>
          <div className="w-full flex flex-col items-center md:items-start">
            <h1 className="text-4xl font-bold text-blue-700 text-center md:text-left w-full">À propos de moi</h1>
            {/* Bouton Télécharger mon CV */}
            <div className="mt-4 w-full flex justify-center md:justify-start">
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
          <section>
            <h2 className="flex items-center text-2xl font-semibold text-blue-600 mb-3 gap-2">
              <span role="img" aria-label="Diplôme">🎓</span> Parcours académique
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Technicien supérieur en génie civil, j&apos;ai enrichi mon parcours avec une licence professionnelle en conduite de travaux.<br/>
              Actuellement, je poursuis un master spécialisé en ingénierie des structures (ponts et routes) à l&apos;ENSA (2024–2026), afin de renforcer mes compétences en calcul et conception.
            </p>
          </section>

          {/* Expérience terrain */}
          <section>
            <h2 className="flex items-center text-2xl font-semibold text-blue-600 mb-3 gap-2">
              <span role="img" aria-label="Chantier">👷‍♂️</span> Expérience terrain
            </h2>
            <p className="text-gray-800 leading-relaxed text-lg">
              Avec plus de 4 ans d&apos;expérience sur chantier, j&apos;ai participé à des projets concrets tels que des villas modernes et des bâtiments R+2, incluant sous-sols et piscines.<br/>
              Ces missions m&apos;ont donné une vision réaliste et structurée des défis quotidiens de la construction.
            </p>
          </section>

          {/* Compétences logicielles */}
          <section>
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
          <section>
            <p className="text-xl text-center text-blue-800 font-medium pt-6 border-t border-blue-100">
              Mon objectif : allier rigueur technique et créativité pour concevoir des structures solides, élégantes, et adaptées à leur environnement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 