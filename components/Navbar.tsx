
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIO } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Portfolio', id: 'portfolio' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        <div 
          className={`
            relative flex justify-between items-center transition-all duration-700 
            px-6 sm:px-10 py-4
            rounded-[1.5rem] sm:rounded-[2rem]
            border border-white/10
            ${scrolled || isMobileMenuOpen 
              ? 'glass-nav border-t-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] scale-[1.02]' 
              : 'bg-white/5 border-transparent'}
            overflow-hidden
          `}
        >
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl sm:text-2xl font-bold tracking-tighter z-10"
          >
            <a 
              href="#hero" 
              onClick={(e) => scrollToSection(e, 'hero')}
              className="hover:opacity-60 transition-opacity"
            >
              S<span className="text-white/20">G</span>
            </a>
          </motion.div>
          
          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 text-[13px] uppercase tracking-[0.25em] font-bold text-white/40 z-10">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="hover:text-white transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4 z-10">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden sm:block"
            >
              <a 
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className={`
                  text-[12px] uppercase tracking-widest font-black px-6 py-3 rounded-xl 
                  border border-white/10 transition-all duration-500
                  ${scrolled 
                    ? 'bg-white text-black border-white shadow-xl' 
                    : 'bg-white/5 hover:bg-white hover:text-black'}
                `}
              >
                Connect
              </a>
            </motion.div>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-white rounded-full block transition-transform"
              ></motion.span>
              <motion.span 
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-[2px] bg-white rounded-full block"
              ></motion.span>
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-white rounded-full block transition-transform"
              ></motion.span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full left-4 right-4 mt-4 p-10 glass-nav border border-white/10 rounded-[2rem] md:hidden overflow-hidden shadow-2xl z-40 backdrop-blur-3xl"
          >
            <ul className="flex flex-col gap-10 items-center">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className="text-[16px] uppercase tracking-[0.4em] font-black text-white/50 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-6 border-t border-white/5 w-full text-center">
                <a 
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="text-sm uppercase tracking-widest font-black text-white bg-white/10 px-8 py-4 rounded-2xl block"
                >
                  Contact Soumik
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
