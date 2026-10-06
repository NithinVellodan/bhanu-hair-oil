import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import promoBannerImg from '../assets/bhanu/promotional-banner.jpg';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

interface PromoSectionProps {
  onOrderClick: () => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({ onOrderClick }) => {
  return (
    <section className="relative min-h-[600px] sm:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#00170e]">
      
      {/* Background with Ken Burns Slow Zoom */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full flex items-center justify-center"
      >
        <img
          src={promoBannerImg}
          alt="BHANU Hair Oil Official Promotional Poster"
          className="w-full h-full object-cover object-center opacity-70"
          loading="lazy"
        />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002719] via-[#002719]/40 to-[#002719]/80" />
      <div className="absolute inset-0 bg-radial-gold opacity-60" />

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center"
        >
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#00170e]/90 backdrop-blur-md border border-[#D4AF37]/50 mb-6 shadow-xl">
            <img src={bhanuLogo} alt="Logo" className="w-6 h-6 rounded-full" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#F5C542] uppercase">
              PURE AYURVEDIC CARE • 200 ML
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-[#FFF8E7] leading-tight mb-4 tracking-tight drop-shadow-md">
            BHANŪ <span className="text-gold-gradient font-brand-title">HAIR OIL</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl sm:text-3xl lg:text-4xl font-serif text-[#FFF8E7] font-medium leading-relaxed max-w-2xl mb-4 drop-shadow-sm">
            For Stronger, Healthier &amp; Longer Hair
          </p>

          <p className="text-sm font-serif italic text-[#F5C542] mb-8">
            “With the Goodness of Herbal Ingredients” • Healthy Hair • Happy You
          </p>

          {/* Button */}
          <button
            onClick={onOrderClick}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#F5C542] via-[#D4AF37] to-[#B89326] text-[#002719] font-bold text-sm sm:text-base tracking-widest uppercase shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span>ORDER YOUR BOTTLE NOW</span>
          </button>
        </motion.div>
      </div>

      {/* Edge Blends */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-[#002719] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#002719] to-transparent pointer-events-none" />
    </section>
  );
};
