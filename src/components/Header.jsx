import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';
import logo from '../assets/images/logo_v3.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  
  // Track scroll position to add effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <header className={`py-3 sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-lg bg-dark-purple/40 shadow-glow' : 'backdrop-blur-md'
    }`}>
      <div className="relative">
        {/* Decorative top line with animated gradient */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-80"></div>
        
        {/* Animated corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-neon-purple opacity-80"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-neon-purple opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo with enhanced neon effect */}
          <Link to="/" className="flex items-center group relative">
            <div className="cyber-box-sm">
              <img 
                src={logo} 
                alt="CHIPS Logo"
                className="h-10 md:h-12 w-auto neon-logo relative z-10" 
              />
              <div className="absolute inset-0 bg-neon-purple/10 blur-md group-hover:bg-neon-purple/20 transition-all duration-500"></div>
            </div>
            <div className="ml-2 hidden md:block">
              <span className="text-xl font-bold text-transparent">
                
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation - Revamped with cyber styling */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { path: '/', label: 'HOME' },
              { path: '/about', label: 'ABOUT' },
              { path: '/poker-info', label: 'POKER' }
            ].map(link => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`nav-link ${isActive(link.path) ? 'active-nav' : ''}`}
              >
                <span className="nav-text">{link.label}</span>
                {isActive(link.path) && (
                  <div className="nav-indicator"></div>
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </nav>
          
          {/* Mobile Menu Button with Glitch Effect */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-4 cyber-button-sm relative overflow-hidden"
              aria-label="Toggle navigation menu"
            >
              <div className="relative z-10">
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </div>
              <div className="absolute inset-0 bg-neon-purple/20 blur-sm"></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation - With added cyber styling */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-neon-purple/30 cyber-box-mobile animate-fadeIn">
            <ul className="flex flex-col space-y-4 relative">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-neon-purple/40"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-neon-purple/40"></div>
              
              {[
                { path: '/', label: 'HOME' },
                { path: '/about', label: 'ABOUT' },
                { path: '/poker-info', label: 'POKER' }
              ].map((link, index) => (
                <li key={link.path} className="pl-4 relative">
                  {isActive(link.path) && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2/3 bg-neon-purple/30"></span>
                  )}
                  {link.external ? (
                    <a 
                      href={link.path} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-theme-primary hover:text-neon-purple transition-colors flex items-center"
                    >
                      {link.label}
                      <FaChevronRight className="ml-1 text-xs opacity-70" />
                    </a>
                  ) : (
                    <Link 
                      to={link.path} 
                      className={`${isActive(link.path) ? 'text-neon-purple' : 'text-theme-primary'} hover:text-neon-purple transition-colors`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      
      {/* Decorative bottom line with animated gradient */}
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent"></div>
        
        {/* Animated corner accents */}
        <div className="absolute bottom-0 left-0 w-5 h-5 border-l-[1px] border-b-[1px] border-neon-purple/40"></div>
        <div className="absolute bottom-0 right-0 w-5 h-5 border-r-[1px] border-b-[1px] border-neon-purple/40"></div>
      </div>
    </header>
  );
};

export default Header;