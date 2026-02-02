
import React from 'react';
import { motion } from 'framer-motion';
import { BIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="mb-20 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">Projects</h2>
          <p className="text-white/40 text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl">
            A curated showcase of software engineering projects, focusing on performant design and architectural clarity.
          </p>
        </motion.div>
        
        <div className="min-h-[400px] flex items-center justify-center border border-white/5 bg-[#050505] rounded-[2rem] sm:rounded-[3rem] px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-white/50 max-w-2xl mx-auto leading-tight italic">
              "Portfolio projects coming soon! I'm currently working on exciting projects to showcase here."
            </p>
            <div className="mt-8 flex justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-blue-500/40 animate-pulse [animation-delay:0.4s]"></span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
