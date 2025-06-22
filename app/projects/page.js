'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: '', alt: '' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in" onClick={closeLightbox}>
          <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute top-2 right-2 text-white text-3xl font-bold z-10">&times;</button>
            <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl object-contain" />
          </div>
        </div>
      )}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          Mes Projets
        </h1>

        {/* Projet Villa */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-12 animate-fade-in">
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4 tracking-tight">
              Villa contemporaine R+1 avec sous-sol et piscine
            </h2>
            
            {/* Conteneur d'images */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="relative flex-1 h-80 rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => openLightbox('/images/villa-rendu1.png.png', 'Villa R+1+SS - Vue 1')}>
                <Image
                  src="/images/villa-rendu1.png.png"
                  alt="Villa R+1+SS - Vue 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative flex-1 h-80 rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => openLightbox('/images/villa-r11+s.png', 'Villa R+1+SS - Vue 2')}>
                <Image
                  src="/images/villa-r11+s.png"
                  alt="Villa R+1+SS - Vue 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none mb-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Réalisation d'une villa contemporaine haut de gamme, intégrant un sous-sol, un rez-de-chaussée, un étage et une piscine. Le projet a été entièrement modélisé sous Revit, permettant une coordination optimale et une visualisation précise de chaque détail architectural et structurel.
              </p>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-blue-700">Technologies utilisées :</span>
              <span className="ml-2 text-gray-700">Revit, BIM, Coordination 3D</span>
            </div>
          </div>
        </div>

        {/* Projet Hôtelier R+4 avec sous-sol */}
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mb-12 animate-fade-in-up">
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4 tracking-tight">
              Structure d'hôtel R+4 avec sous-sol – Modélisation & Analyse
            </h2>
            {/* Conteneur d'images */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="relative flex-1 h-80 rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => openLightbox('/images/capture_model_structure.png', 'Structure hôtelière - Vue 3D complète')}>
                <Image
                  src="/images/capture_model_structure.png"
                  alt="Structure hôtelière - Vue 3D complète"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative flex-1 h-80 rounded-xl overflow-hidden shadow-md cursor-zoom-in" onClick={() => openLightbox('/images/capture_model_analytique.png', 'Structure hôtelière - Modèle analytique')}>
                <Image
                  src="/images/capture_model_analytique.png"
                  alt="Structure hôtelière - Modèle analytique"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            {/* Description */}
            <div className="prose max-w-none mb-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                Étude complète d'une structure à usage hôtelier composée de 4 niveaux sur sous-sol. La modélisation architecturale et structurelle a été réalisée sous Revit, puis exportée vers Robot Structural Analysis pour l'analyse et le dimensionnement. Les images illustrent la structure 3D et son modèle analytique.
              </p>
              <span className="italic text-gray-400">(Les images de l'analyse Robot seront ajoutées ultérieurement)</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-blue-700">Technologies utilisées :</span>
              <span className="ml-2 text-gray-700">Revit, Robot Structural Analysis, BIM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 