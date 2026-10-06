import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Shield, Heart } from 'lucide-react';
import bottleHeroImg from '../assets/bhanu/bhanu-bottle-hero.jpg';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

interface BenefitsProps {
  onOrderClick: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOrderClick }) => {
  const benefits = [
    {
      title: 'Helps reduce hair fall',
      description: 'Nourishing herbal extracts work in synergy to minimize breakage and hair shedding caused by dryness.',
      icon: Shield,
    },
    {
      title: 'Strengthens roots',
      description: 'Deep-penetrating natural oils reinforce hair follicles from root to tip for resilient strands.',
      icon: Sparkles,
    },
    {
      title: 'Nourishes scalp',
      description: 'Herbal actives deliver continuous hydration to soothe dry scalps and support natural vitality.',
      icon: Heart,
    },
    {
      title: 'Adds natural shine',
      description: 'Leaves locks with a radiant, natural glow and touchable softness without mineral oil buildup.',
      icon: Sparkles,
    },
    {
      title: 'Promotes healthy-looking hair',
      description: 'Regular use encourages fuller, lustrous and visibly healthy-looking hair over time.',
      icon: Shield,
    },
  ];

  return (
    <section id="benefits" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#001c12] via-[#002719] to-[#003B24] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#004d2f]/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00170e] border border-[#D4AF37]/30 mb-4"
          >
            <span className="text-xs">🌿</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
              Proven Botanical Benefits
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF8E7] leading-tight"
          >
            Stronger Hair. <span className="text-gold-gradient italic">Healthier-Looking Hair.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#FFF8E7]/80 font-light mt-4 max-w-xl mx-auto"
          >
            Verified claims directly from the BHANŪ Hair Oil bottle label.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Animated Benefits Checklist */}
          <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: 'easeOut' }}
                whileHover={{ x: 6, transition: { duration: 0.2 } }}
                className="group relative p-5 sm:p-6 rounded-2xl bg-[#002719]/80 backdrop-blur-md border border-[#D4AF37]/20 hover:border-[#F5C542]/60 shadow-lg hover:shadow-[#D4AF37]/15 transition-all duration-300 flex items-start gap-4 sm:gap-5"
              >
                {/* Animated Gold Checkmark Box */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-[#003B24] to-[#004d2f] border border-[#D4AF37]/50 flex items-center justify-center text-[#F5C542] shadow-md group-hover:bg-gradient-to-tr group-hover:from-[#F5C542] group-hover:to-[#D4AF37] group-hover:text-[#002719] transition-all duration-500">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#FFF8E7] group-hover:text-[#F5C542] transition-colors capitalize">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FFF8E7]/75 font-light leading-relaxed mt-1">
                    {benefit.description}
                  </p>
                </div>

                {/* Number tag */}
                <span className="hidden sm:block text-xs font-serif text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                  0{index + 1}
                </span>
              </motion.div>
            ))}

            {/* Quick action button */}
            <div className="pt-4">
              <button
                onClick={onOrderClick}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F5C542] via-[#D4AF37] to-[#B89326] text-[#002719] font-bold text-xs sm:text-sm tracking-widest uppercase shadow-xl hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>EXPERIENCE BHANŪ CARE</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Bottle Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Gold Ring Halo */}
              <div className="absolute -inset-4 rounded-[40px] border-2 border-dashed border-[#D4AF37]/40 animate-spin-very-slow pointer-events-none" />
              
              {/* Card Body */}
              <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-b from-[#003B24] to-[#00170e] border-2 border-[#D4AF37]/50 shadow-2xl p-4 flex flex-col items-center">
                <img
                  src={bottleHeroImg}
                  alt="BHANU Hair Oil Authentic 200ml Bottle"
                  className="w-full h-auto max-h-[420px] object-contain rounded-2xl glow-gold-sm"
                  loading="lazy"
                />

                <div className="w-full mt-4 p-4 rounded-2xl bg-[#00170e]/95 border border-[#D4AF37]/40 text-center flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-left">
                    <img src={bhanuLogo} alt="Logo" className="w-8 h-8 rounded-full border border-[#D4AF37]" />
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                        Official Packaging
                      </div>
                      <div className="font-serif font-bold text-[#FFF8E7] text-sm">
                        BHANŪ HAIR OIL (200 ml)
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-[#F5C542] bg-[#003B24] px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                    200 ml
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
