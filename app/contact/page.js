import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Bandeau titre */}
      <section className="relative py-16 mb-12 flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 shadow-lg">
        <div className="absolute inset-0 opacity-30 bg-[url('/images/villa-rendu1.png.png')] bg-cover bg-center" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight animate-fade-in-up">Me contacter</h1>
          <p className="text-lg md:text-xl text-blue-100 mt-4 animate-fade-in-up delay-100">N&apos;hésitez pas à me joindre pour toute question ou collaboration.</p>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-10 animate-fade-in-up">
          <div className="space-y-8 text-center">
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-2 animate-fade-in-up">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a8 8 0 11-16 0 8 8 0 0116 0z" /></svg>
              </span>
              <p className="text-lg text-gray-700 leading-relaxed">
                Par email&nbsp;:
                <a 
                  href="mailto:kadermoussa6@gmail.com"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline ml-1"
                >
                  kadermoussa6@gmail.com
                </a>
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-2 animate-fade-in-up delay-100">
                <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L21 13M7 13V6h10v7" /></svg>
              </span>
              <p className="text-lg text-gray-700 leading-relaxed">
                Par téléphone&nbsp;:
                <a 
                  href="tel:0607888981"
                  className="text-blue-600 hover:text-blue-800 font-semibold ml-1"
                >
                  0607888981
                </a>
                <span className="mx-2">/</span>
                <a 
                  href="tel:0630624357"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  0630624357
                </a>
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-100 animate-fade-in-up delay-200">
              <p className="text-base text-blue-700 font-medium">
                Je vous répondrai dans les plus brefs délais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 