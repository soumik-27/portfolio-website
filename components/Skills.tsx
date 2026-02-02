import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: [0.32, 0.72, 0, 1] as const
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const } }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 sm:mb-24"
        >
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">Expertise</h2>
          <p className="text-white/40 text-lg sm:text-xl">The stack behind the products.</p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
        >
          {SKILLS.map((skill) => (
            <motion.div 
              key={skill.name}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-[#080808] p-8 sm:p-10 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center transition-all duration-300 hover:border-white/20 hover:bg-[#0c0c0c]"
            >
              <div className="mb-6 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 sm:scale-110 flex items-center justify-center">
                {skill.icon}
              </div>
              <span className="text-base sm:text-lg font-medium tracking-tight text-white/50 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;