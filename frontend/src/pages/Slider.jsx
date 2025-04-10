import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate()
  
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
            <a href=" "
             className={`font-medium bg-rose-800 p-2 rounded-xl text-3xl hover:bg-rose-950 transition ${scrolled ? 'text-dblue-700' : 'text-white'}`}>Home</a>
              <a onClick={() => navigate("/profile")}
             className={`font-medium bg-rose-800 p-2 rounded-xl text-3xl hover:bg-rose-950 transition ${scrolled ? 'text-bdlue-700' : 'text-white'}`}>Profile</a>
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
};

// ImageSlider Component
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1661893870720-e2f6d09d96d7?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Expert Healthcare Services',
      description: 'Dedicated to providing the best medical care for you and your family'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Specialized Medical Professionals',
      description: 'Our team of doctors and nurses are here for you 24/7'
    },
    {
      image: 'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Modern Facilities',
      description: 'State-of-the-art equipment for accurate diagnosis and treatment'
    },
    {
      image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Personalized Care Plans',
      description: 'Healthcare solutions tailored to your individual needs'
    },
    {
      image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Preventive Healthcare',
      description: 'Regular check-ups and wellness programs to keep you healthy'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1673953510197-0950d951c6d9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Patient-Centered Approach',
      description: 'We listen to your concerns and involve you in decision-making'
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <div className="relative w-full h-screen">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-center bg-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute bottom-1/4 left-0 w-full px-10">
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">{slide.title}</h2>
              <p className="text-xl text-white drop-shadow-lg">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main App Component
const HealthApp = () => {
  return (
    <div className="relative">
      <ImageSlider />
      <Navbar />
    </div>
  );
};

export default HealthApp;