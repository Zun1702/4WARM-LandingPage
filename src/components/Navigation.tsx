'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { navSlide } from '@/lib/animations';
import Image from 'next/image';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'photography', label: 'Photography', href: '#photography' },
    { id: 'videography', label: 'Videography', href: '#videography' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple scroll spy logic
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        variants={navSlide}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('#hero')}
                className="flex items-center gap-1 transition-all duration-300 hover:scale-105"
              >
                <div className="relative w-8 h-8 lg:w-10 lg:h-10">
                  <Image
                    src={isScrolled ? "/images/logo/logo-colorful.png" : "/images/logo/logo-whitecolor.png"}
                    alt="4WARM Logo"
                    fill
                    className="object-contain transition-all duration-300"
                    priority
                  />
                </div>
                <span className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? 'gradient-text' : 'text-white'
                }`}>
                  4WARM
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                      activeSection === item.id
                        ? isScrolled 
                          ? 'text-warm-red' 
                          : 'text-white'
                        : isScrolled 
                          ? 'text-primary-charcoal/70 hover:text-warm-red' 
                          : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled ? 'bg-warm-red' : 'bg-white'
                        } rounded-full`}
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset ${
                  isScrolled 
                    ? 'text-primary-charcoal/70 hover:text-warm-red focus:ring-warm-red' 
                    : 'text-white/80 hover:text-white focus:ring-white'
                }`}
              >
                <svg
                  className={`h-6 w-6 transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-45' : ''
                  }`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: {
              opacity: 1,
              height: "auto",
              transition: { duration: 0.3, ease: "easeOut" }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: { duration: 0.3, ease: "easeIn" }
            }
          }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20"
        >
          <div className="px-6 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-warm-red bg-warm-red/10'
                    : 'text-primary-charcoal/70 hover:text-warm-red hover:bg-warm-red/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
