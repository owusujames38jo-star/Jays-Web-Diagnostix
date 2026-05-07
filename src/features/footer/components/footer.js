
"use client";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import React from 'react';

export default function Footer() {
  return (
    <>
{/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Diagnostix
              </span>
              <p className="text-gray-500 text-sm mt-1">© 2026 All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      </>
       );
}