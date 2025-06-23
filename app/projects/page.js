'use client';
import React, { useState } from 'react';
import Image from 'next/image';

export default function Projects() {
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });

  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: '', alt: '' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12">
      {/* Titre de page */}
      <section className="relative py-16 mb-12 flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 shadow-lg">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/villa-rendu1.png.png')] bg-cover bg-center" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight animate-fade-in-up">Mes Projets</h1>
          <p className="text-lg md:text-xl text-blue-100 mt-4 animate-fade-in-up delay-100">Découvrez mes réalisations en ingénierie structurelle et modélisation BIM.</p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in" onClick={closeLightbox}>
          <div className="relative max-w-3xl w-full p-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeLightbox} className="absolute top-2 right-2 text-white text-3xl font-bold z-10">&times;</button>
            <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl object-contain" />
          </div>
        </div>
      )}

      {/* Projets */}
      <div className="container mx-auto px-4">
        {/* Projet Villa */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 animate-fade-in-up">
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4 tracking-tight flex items-center gap-2">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10l1.553-1.553A2 2 0 016.414 8h11.172a2 2 0 011.414.586L21 10m-18 0v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0l9-7 9 7" /></svg>
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
                Réalisation d&apos;une villa contemporaine haut de gamme, intégrant un sous-sol, un rez-de-chaussée, un étage et une piscine. Le projet a été entièrement modélisé sous Revit, permettant une coordination optimale et une visualisation précise de chaque détail architectural et structurel.
              </p>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-blue-700">Technologies utilisées :</span>
              <span className="ml-2 text-gray-700">Revit, BIM, Coordination 3D</span>
            </div>
          </div>
        </div>

        {/* Projet Hôtelier R+4 avec sous-sol */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden mb-16 animate-fade-in-up delay-100">
          <div className="p-8">
            <h2 className="text-3xl font-extrabold text-blue-900 mb-4 tracking-tight flex items-center gap-2">
              <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1V8a2 2 0 00-2-2H9a2 2 0 00-2 2v6H6a4 4 0 00-4 4v2h5" /></svg>
              Structure d&apos;hôtel R+4 avec sous-sol – Modélisation & Analyse
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
                Étude complète d&apos;une structure à usage hôtelier composée de 4 niveaux sur sous-sol. La modélisation architecturale et structurelle a été réalisée sous Revit, puis exportée vers Robot Structural Analysis pour l&apos;analyse et le dimensionnement. Les images illustrent la structure 3D et son modèle analytique.
              </p>
              <span className="italic text-gray-400">(Les images de l&apos;analyse Robot seront ajoutées ultérieurement)</span>
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