import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Me contacter
          </h1>

          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              Vous pouvez me contacter par email à{' '}
              <a 
                href="mailto:kadermoussa6@gmail.com"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                kadermoussa6@gmail.com
              </a>
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Ou par téléphone au{' '}
              <a 
                href="tel:+212607888981"
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                +212-607888981
              </a>
            </p>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Je vous répondrai dans les plus brefs délais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 