import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Hand, Sparkles, Clock, Calendar } from 'lucide-react';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

export const HowToUse: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Apply',
      description: 'Apply generously to scalp and hair.',
      tip: 'Part your hair in sections to ensure even scalp distribution.',
      icon: Droplet,
    },
    {
      step: '02',
      title: 'Massage',
      description: 'Massage gently for 10–15 minutes.',
      tip: 'Use circular fingertip motions to stimulate micro-circulation.',
      icon: Hand,
    },
    {
      step: '03',
      title: 'Rinse',
      description: 'Rinse with mild shampoo.',
      tip: 'Wash thoroughly with lukewarm water for shiny, lightweight locks.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="how-to-use" className="relative py-24 sm:py-32 bg-[#FFF8E7] text-[#002719] overflow-hidden">
      {/* Decorative botanical leaf accents in cream section */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#003B24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003B24]/10 border border-[#003B24]/20 mb-4"
          >
            <Clock className="w-3.5 h-3.5 text-[#003B24]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#003B24]">
              Simple 3-Step Ritual
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#002719] leading-tight"
          >
            How To <span className="text-[#8C6F19] italic font-serif">Use</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[2px] bg-[#D4AF37] mx-auto my-5"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-base sm:text-lg text-[#002719]/80 font-normal max-w-xl mx-auto"
          >
            Follow this calming Ayurvedic ritual directly from the BHANŪ packaging instructions.
          </motion.p>
        </div>

        {/* 3 Step Cards with Flow Line */}
        <div className="relative">
          
          {/* Desktop Connecting Flow Line */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-[2px] -translate-y-12 bg-gradient-to-r from-[#D4AF37]/30 via-[#D4AF37] to-[#D4AF37]/30 pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative p-8 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-xl hover:shadow-2xl hover:border-[#D4AF37] transition-all duration-300 flex flex-col items-center text-center"
                >
                  {/* Step Number Top Badge */}
                  <div className="w-12 h-12 rounded-full bg-[#002719] text-[#F5C542] font-serif font-bold text-lg flex items-center justify-center border-2 border-[#D4AF37] shadow-lg mb-6 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>

                  {/* Icon Emblem */}
                  <div className="w-16 h-16 rounded-2xl bg-[#FFF8E7] border border-[#D4AF37]/40 flex items-center justify-center text-[#003B24] mb-6 group-hover:bg-[#003B24] group-hover:text-[#F5C542] transition-colors duration-500 shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-serif font-bold text-[#002719] mb-3">
                    {item.title}
                  </h3>

                  {/* Exact Step Instruction */}
                  <p className="text-base text-[#002719]/90 font-medium mb-3">
                    {item.description}
                  </p>

                  {/* Sub-tip */}
                  <p className="text-xs text-[#002719]/65 font-normal leading-relaxed mt-auto pt-4 border-t border-[#D4AF37]/20 w-full">
                    {item.tip}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Recommended Frequency Box & Brand Motto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 max-w-2xl mx-auto p-6 rounded-3xl bg-[#002719] text-[#FFF8E7] border-2 border-[#D4AF37] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-[#003B24] text-[#F5C542] border border-[#D4AF37]/40 shadow-md">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
                Recommended Routine
              </span>
              <p className="text-lg font-serif font-bold text-[#FFF8E7] mt-0.5">
                Use 2–3 times a week for best results.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00170e] border border-[#D4AF37]/40 text-xs font-serif font-bold text-[#F5C542]">
            <img src={bhanuLogo} alt="Logo" className="w-5 h-5 rounded-full" />
            <span>Healthy Hair • Happy You</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
