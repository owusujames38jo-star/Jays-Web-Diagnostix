"use client";
import { Menu, X } from "lucide-react";
import React from 'react';

export default function Navbar() {
const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
const [scrolled, setScrolled] = React.useState(false);

React.useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
  return (
    <>
{/* Navigation */}
<nav className={`fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 transition-all duration-300 ${scrolled ? 'border-b border-gray-100' : ''}`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1) !important', backdropFilter: 'blur(16px) !important', WebkitBackdropFilter: 'blur(16px) !important' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <a href="#hero" className="flex items-center gap-2 transform hover:scale-105 transition-all duration-300 cursor-pointer group">
      <div className="relative">
        <img 
          src="/logo.png" 
          alt="Jays Diagnostix Logo" 
          className="w-8 h8 sm:w-15 sm:h-15 rounded-lg transform group-hover:rotate-6 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-blue-600/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
        Diagnostix
        </span>
        <span className="text-gray-600 text-xs xs:text-xs font-normal -mt-1 group-hover:text-blue-600 transition-colors duration-300">The tool for Your Platform</span> 
      </div>
    </a>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-600 hover:text-gray-900">ABOUT</a>
        <a href="#solutions" className="text-gray-600 hover:text-gray-900">SOLUTIONS</a>
        <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </a>
      </div>
      
      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2 rounded-lg transition"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: 'rgb(75, 85, 99) !important' }} /> : <Menu className="w-6 h-6" style={{ color: 'rgb(75, 85, 99) !important' }} />}
      </button>
    </div>
    
    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <div className="md:hidden py-4 border-t border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="flex flex-col space-y-3">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-50 transition">ABOUT</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-50 transition">SOLUTIONS</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-50 transition">How it Works</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center">
            Contact Us
          </a>
        </div>
      </div>
    )}
  </div>
</nav>

</>
  );
}
