import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import bottleHeroImg from '../assets/bhanu/bhanu-bottle-hero.jpg';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

interface ProductShowcaseProps {
  onOrderClick: () => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOrderClick }) => {
  const floatingOrbitItems = [
    { name: 'Amla', desc: 'Nourishes roots', emoji: '🍈', top: '10%', left: '8%' },
    { name: 'Hibiscus', desc: 'Botanical bloom', emoji: '🌺', top: '12%', right: '8%' },
    { name: 'Bhringraj', desc: 'Scalp vitality', emoji: '🌿', top: '48%', left: '4%' },
    { name: 'Neem', desc: 'Deep scalp care', emoji: '🍃', top: '46%', right: '4%' },
    { name: 'Coconut Oil', desc: 'Seals moisture', emoji: '🥥', bottom: '12%', left: '10%' },
    { name: 'Black Seed', desc: 'Revitalizes', emoji: '✨', bottom: '10%', right: '10%' },
    { name: 'Fenugreek', desc: 'Silky texture', emoji: '🌾', bottom: '4%', left: '42%' },
  ];

  return (
    <section id="showcase" className="relative py-28 sm:py-36 bg-[#00170e] overflow-hidden">
      {/* Dynamic Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] bg-gradient-to-tr from-[#003B24]/40 via-[#D4AF37]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002719] border border-[#D4AF37]/40 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F5C542]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
              Harmonious Botanical Symphony
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-[#FFF8E7] leading-tight"
          >
            Nature Inside. <span className="text-gold-gradient italic">Care Outside.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mt-4 text-sm font-semibold tracking-widest uppercase text-[#D4AF37]"
          >
            <span>BHANŪ HAIR OIL</span>
            <span>•</span>
            <span>200 ml</span>
          </motion.div>
        </div>

        {/* Orbit Showcase Area */}
        <div className="relative min-h-[520px] sm:min-h-[620px] flex items-center justify-center">
          
          {/* Subtle Rotating Golden Halo */}
          <div className="absolute w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full border border-dashed border-[#D4AF37]/30 animate-spin-very-slow pointer-events-none" />
          <div className="absolute w-[240px] sm:w-[380px] h-[240px] sm:h-[380px] rounded-full border border-[#D4AF37]/20 pointer-events-none" />

          {/* Center Product Bottle with Hover Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative z-20 max-w-[240px] sm:max-w-[290px] mx-auto cursor-pointer group"
            onClick={onOrderClick}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative p-3 rounded-[36px] bg-gradient-to-b from-[#D4AF37]/30 via-[#003B24]/40 to-[#00170e]/90 border-2 border-[#D4AF37]/50 shadow-2xl backdrop-blur-sm group-hover:border-[#F5C542] transition-colors flex flex-col items-center"
            >
              <img
                src={bottleHeroImg}
                alt="BHANU Hair Oil 200ml Center Bottle"
                className="w-full h-auto max-h-[420px] object-contain rounded-2xl glow-gold-lg group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />

              <div className="w-full mt-3 p-3 rounded-2xl bg-[#00170e]/95 border border-[#D4AF37]/40 text-center shadow-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={bhanuLogo} alt="Logo" className="w-6 h-6 rounded-full" />
                  <span className="text-xs font-serif font-bold text-[#FFF8E7]">BHANŪ 200ml</span>
                </div>
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#F5C542] bg-[#003B24] px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                  ORDER NOW
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Ingredient Orbit Nodes */}
          {floatingOrbitItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + idx * 0.1 }}
              style={{
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
              }}
              animate={{
                y: [0, idx % 2 === 0 ? -12 : 12, 0],
              }}
              // @ts-expect-error Framer motion custom repeat animation
              transition={{
                duration: 4 + (idx % 3),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: idx * 0.4,
              }}
              className="absolute hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-[#002719]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl hover:border-[#F5C542] hover:scale-108 transition-all duration-300 z-30 cursor-default group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#003B24] border border-[#D4AF37]/40 flex items-center justify-center text-xl group-hover:rotate-12 transition-transform">
                {item.emoji}
              </div>
              <div>
                <div className="text-xs font-serif font-bold text-[#FFF8E7] group-hover:text-[#F5C542] transition-colors">
                  {item.name}
                </div>
                <div className="text-[10px] text-[#D4AF37]/80 font-light">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA within Showcase */}
        <div className="text-center mt-12">
          <button
            onClick={onOrderClick}
            className="px-9 py-4 rounded-full bg-gradient-to-r from-[#F5C542] via-[#D4AF37] to-[#B89326] text-[#002719] font-bold text-sm tracking-widest uppercase shadow-2xl hover:shadow-[#D4AF37]/40 transition-all transform hover:-translate-y-1 cursor-pointer inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>ORDER YOUR 200 ML BOTTLE</span>
          </button>
        </div>

      </div>
    </section>
  );
};
