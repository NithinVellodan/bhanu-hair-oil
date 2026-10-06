import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Droplet, Leaf, Ban, CheckCircle } from 'lucide-react';

export const NaturalPromise: React.FC = () => {
  const promises = [
    {
      title: 'NO PARABENS',
      subtitle: 'Zero Harsh Chemicals',
      description: 'Clean Ayurvedic formulation without synthetic preservatives or irritating additives.',
      icon: Ban,
      accent: '100% Clean',
    },
    {
      title: 'NO MINERAL OIL',
      subtitle: 'Non-Greasy Pure Oils',
      description: 'Crafted without cheap fillers or heavy petroleum byproducts that clog scalp pores.',
      icon: Droplet,
      accent: 'Pure Plant Oils',
    },
    {
      title: '100% NATURAL',
      subtitle: 'Herbal Potency',
      description: 'Pure herbs and botanicals traditionally processed for maximum hair and scalp vitality.',
      icon: Leaf,
      accent: 'Ayurvedic Herbals',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#002719] via-[#001c12] to-[#002719] overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003B24] border border-[#D4AF37]/40 mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#F5C542]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
              Our Honest Commitment
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF8E7] leading-tight"
          >
            Pure Care. <span className="text-gold-gradient italic">Simple Promise.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#FFF8E7]/80 font-light mt-4 max-w-xl mx-auto"
          >
            Formulated strictly with purity and integrity in mind — only what your hair genuinely needs.
          </motion.p>
        </div>

        {/* 3 Large Glowing Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {promises.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: idx * 0.18, ease: 'easeOut' }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#003B24]/70 via-[#002719]/90 to-[#00170e] border-2 border-[#D4AF37]/35 hover:border-[#F5C542] shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
              >
                {/* Glowing Gold Halo behind badge */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full bg-[#D4AF37]/20 blur-xl group-hover:bg-[#F5C542]/35 group-hover:scale-125 transition-all duration-500 pointer-events-none" />

                {/* Badge Icon Crest */}
                <div className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-[#002719] via-[#003B24] to-[#004d2f] border-2 border-[#D4AF37] flex items-center justify-center text-[#F5C542] mb-8 group-hover:scale-110 group-hover:border-[#F5C542] transition-all duration-500 shadow-xl">
                  <Icon className="w-10 h-10 stroke-[2]" />
                  <div className="absolute -bottom-1 -right-1 p-1.5 rounded-full bg-[#D4AF37] text-[#002719]">
                    <CheckCircle className="w-4 h-4 fill-current" />
                  </div>
                </div>

                {/* Subtitle Pill */}
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37] px-3 py-1 rounded-full bg-[#001c12] border border-[#D4AF37]/30 mb-3">
                  {badge.accent}
                </span>

                {/* Main Badge Title */}
                <h3 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FFF8E7] group-hover:text-[#F5C542] transition-colors mb-2">
                  {badge.title}
                </h3>

                <p className="text-sm font-medium text-[#F5C542]/90 mb-3">
                  {badge.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#FFF8E7]/75 font-light leading-relaxed">
                  {badge.description}
                </p>

                {/* Gold corner accent */}
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-8 group-hover:w-28 group-hover:bg-[#F5C542] transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
