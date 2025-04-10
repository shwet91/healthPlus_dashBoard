import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  // Change navbar background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className={`text-2xl font-bold ${scrolled ? 'text-blue-600' : 'text-white'}`}>
              HealthPlus
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`font-medium hover:text-blue-400 transition ${scrolled ? 'text-blue-600' : 'text-white'}`}>Home</a>
            <a href="#" className={`font-medium hover:text-blue-400 transition ${scrolled ? 'text-blue-600' : 'text-white'}`}>Services</a>
            <a href="#" className={`font-medium hover:text-blue-400 transition ${scrolled ? 'text-blue-600' : 'text-white'}`}>Doctors</a>
            <a href="#" className={`font-medium hover:text-blue-400 transition ${scrolled ? 'text-blue-600' : 'text-white'}`}>About</a>
            <a href="#" className={`font-medium hover:text-blue-400 transition ${scrolled ? 'text-blue-600' : 'text-white'}`}>Contact</a>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#" className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full hover:bg-blue-700 transition">
              Book Appointment
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className={`focus:outline-none ${scrolled ? 'text-blue-600' : 'text-white'}`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}