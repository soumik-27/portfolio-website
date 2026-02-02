import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BIO } from '../constants';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.32, 0.72, 0, 1] as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] as const }
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-12 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.12, 0.08] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-blue-500 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.08, 0.05] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[120px]"
        />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-screen-2xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl group-hover:opacity-100 opacity-40 transition-opacity duration-1000"></div>
            
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full border border-white/10 p-1.5 bg-black/40 backdrop-blur-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.8)] transition-all duration-700 group-hover:scale-[1.05] group-hover:border-white/20">
              
              {imageError ? (
                <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl font-black text-white/40 tracking-tighter">
                    {BIO.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              ) : (
                <img 
                  src={BIO.profileImage} 
                  alt={BIO.name} 
                  onError={() => setImageError(true)}
                  className="w-full h-full rounded-full object-cover"
                />
              )}
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-white/30 font-black mb-6">
            Pioneering Visual Experiences
          </p>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-6xl sm:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-tighter mb-8 text-white leading-[0.85]"
        >
          {BIO.name.split(' ')[0]}<br/>
          <span className="text-white/10">{BIO.name.split(' ')[1]}</span>
        </motion.h1 >
        
        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-2xl lg:text-3xl font-light text-white/40 mb-12 tracking-tight max-w-3xl mx-auto px-4 leading-snug"
        >
          Transforming complex logic into <span className="text-white font-medium">fluid interactions</span> through advanced <span className="text-white font-medium">frontend engineering.</span>
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-4">
          <a 
            href="#portfolio" 
            onClick={(e) => handleScroll(e, 'portfolio')}
            className="w-full sm:w-auto px-12 py-5 bg-white text-black font-black rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-2xl text-center uppercase tracking-[0.2em] text-xs"
          >
            My Projects
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, 'about')}
            className="group flex items-center justify-center gap-3 text-white/40 hover:text-white transition-all text-sm uppercase tracking-widest font-black"
          >
            Experience
            <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;