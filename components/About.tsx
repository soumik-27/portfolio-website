
import React from 'react';
import { motion } from 'framer-motion';
import { BIO } from '../constants';

const About: React.FC = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: BIO.socials.linkedin },
    { name: 'GitHub', url: BIO.socials.github },
    { name: 'Twitter', url: BIO.socials.twitter }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-black border-y border-white/5">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
        >
          <div className="space-y-10">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[0.95]">
              Designing with<br/>
              <span className="text-white/20">absolute intent.</span>
            </h2>
            <div className="space-y-6 sm:space-y-8 text-lg sm:text-xl lg:text-2xl text-white/50 leading-relaxed font-light">
              <p>
                As a developer, I believe that true innovation lies at the intersection of <span className="text-white font-medium">clean code</span> and <span className="text-white font-medium">thoughtful design</span>. 
              </p>
              <p>
                My approach is rooted in simplicity and efficiency, ensuring that every line of code serves a purpose and every pixel enhances the user's experience.
              </p>
            </div>
          </div>
          
          <div id="contact" className="bg-[#050505] p-6 sm:p-10 lg:p-14 rounded-[2rem] sm:rounded-[3rem] border border-white/5 shadow-2xl scroll-mt-32">
            <div className="space-y-10">
              <div className="group overflow-hidden">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-3">Email Address</p>
                <p className="text-lg sm:text-2xl font-medium break-all group-hover:text-blue-400 transition-colors">{BIO.email}</p>
              </div>
              <div className="group overflow-hidden">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-3">Phone Number</p>
                <p className="text-lg sm:text-2xl font-medium break-all group-hover:text-blue-400 transition-colors">{BIO.phone}</p>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-3">Current Location</p>
                <p className="text-lg sm:text-2xl font-medium group-hover:text-blue-400 transition-colors">{BIO.location}</p>
              </div>
              <div className="group">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-3">Professional Bio</p>
                <p className="text-base sm:text-lg text-white/50 leading-relaxed font-light">{BIO.summary}</p>
              </div>
              
              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-6">Social Presence</p>
                <div className="flex flex-wrap gap-4">
                   {socialLinks.map(social => (
                      <a 
                        key={social.name} 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full border border-white/10 text-sm sm:text-base uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-all cursor-pointer inline-block"
                      >
                          {social.name}
                      </a>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
