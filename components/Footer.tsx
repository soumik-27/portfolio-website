
import React from 'react';
import { BIO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-4">
          Built with React & Tailwind by {BIO.name}
        </p>
        <p className="text-gray-600 text-[10px] tracking-tighter">
          &copy; {new Date().getFullYear()} Soumik Ghosh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
