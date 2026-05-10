"use client";
import { Menu, X } from "lucide-react";
import React from 'react';

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
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
<nav className={`fixed top-0 w-full bg-white/10 backdrop-blur-xl z-50 transition-all duration-500 ${scrolled ? 'border-b border-white/20 shadow-lg shadow-black/5' : ''}`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.08) !important', backdropFilter: 'blur(20px) saturate(180%) !important', WebkitBackdropFilter: 'blur(20px) saturate(180%) !important' }}>
  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
    <div className="flex justify-between items-center h-20">
      <a href="#hero" className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <img 
          src="/logo.png" 
          alt="Jays Diagnostix Logo" 
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
        <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/20 to-transparent rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-all duration-500"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-blue-600 group-hover:to-indigo-700 transition-all duration-500 ease-out">
        Workflow Labs
        </span>
        <span className="text-gray-600 text-xs font-medium -mt-1 group-hover:text-blue-600 transition-colors duration-500">Operational Software Systems</span> 
      </div>
    </a>
      
      {/* Desktop Navigation */}
      <div className="text-sm hidden lg:flex items-center space-x-10">
        <a href="#features" className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 group">
          ABOUT
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a href="#solutions" className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 group">
          SOLUTIONS
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a href="#how-it-works" className="relative text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105 group">
          FEATURES
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300 ease-out"></span>
        </a>
        <a href="#contact" className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 ease-out font-medium text-sm">
          Contact Us
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        </a>
      </div>
      
      {/* Mobile Hamburger Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
      >
        {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" /> : <Menu className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />}
      </button>
    </div>
    
    {/* Mobile Menu Dropdown */}
    {mobileMenuOpen && (
      <div className="lg:hidden py-6 border-t border-white/20 bg-white/10 backdrop-blur-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08) !important', backdropFilter: 'blur(20px) saturate(180%) !important', WebkitBackdropFilter: 'blur(20px) saturate(180%) !important' }}>
        <div className="flex flex-col space-y-2 px-4">
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-gray-900 py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium">ABOUT</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-gray-900 py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium">SOLUTIONS</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-gray-900 py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium">FEATURES</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 font-medium text-center text-sm">
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
