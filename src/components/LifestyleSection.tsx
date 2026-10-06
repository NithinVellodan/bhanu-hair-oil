import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import lifestyleImg from '../assets/bhanu/lifestyle-model-crop.jpg';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

interface LifestyleSectionProps {
  onOrderClick: () => void;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ onOrderClick }) => {
  return (
    <section id="lifestyle" className="relative py-24 sm:py-32 bg-[#002719] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#003B24] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Authentic Editorial Model Photography with Curved Mask & Gold Accent */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              
              {/* Outer Decorative Floating Ring */}
              <div className="absolute -inset-4 rounded-[40px] border border-[#D4AF37]/30 group-hover:border-[#F5C542]/60 transition-colors duration-500 pointer-events-none" />

              {/* Main Image with Smooth Curved Mask */}
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#00170e] border-2 border-[#D4AF37]/40 flex items-center justify-center p-2">
                <img
                  src={lifestyleImg}
                  alt="BHANU Hair Oil Model with long silky hair"
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl transform group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Subtle dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00170e]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Floating quote pill */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#00170e]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs sm:text-sm font-serif italic text-[#FFF8E7] leading-snug">
                      “Healthy Hair • Happy You”
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-[#F5C542] font-semibold mt-0.5 block">
                      BHANŪ Daily Hair Wellness
                    </span>
                  </div>
                  <img src={bhanuLogo} alt="Logo" className="w-8 h-8 rounded-full border border-[#D4AF37]" />
                </div>
              </div>

              {/* Floating Leaf Icon Seal */}
              <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-[#002719] border-2 border-[#D4AF37] flex items-center justify-center text-2xl shadow-xl">
                🌿
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Typography and Care Routine Insights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-8 bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
                Holistic Self-Care
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF8E7] leading-tight mb-6">
              “Healthy Hair <br />
              <span className="text-gold-gradient italic">Starts With Care”</span>
            </h2>

            {/* Editorial Body Text */}
            <p className="text-base sm:text-lg text-[#FFF8E7]/85 font-light leading-relaxed mb-6">
              In the fast-paced rhythm of modern life, true hair wellness begins when you pause to give your scalp and hair the gentle, wholesome nourishment they deserve. Making BHANŪ Hair Oil a treasured part of your weekly self-care routine helps you reconnect with the timeless botanical wisdom of Ayurveda.
            </p>

            <p className="text-sm sm:text-base text-[#FFF8E7]/75 font-light leading-relaxed mb-8">
              A peaceful scalp massage with our rich herbal infusion relaxes the mind, encourages natural blood circulation, and conditions every strand with deep botanical vitality.
            </p>

            {/* 3 Editorial Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-[#003B24]/40 border border-[#D4AF37]/20 flex flex-col items-start">
                <span className="text-xl mb-2">🌿</span>
                <span className="font-serif font-bold text-sm text-[#FFF8E7]">Natural Care</span>
                <span className="text-[11px] text-[#FFF8E7]/70 mt-0.5">Gentle on scalp &amp; roots</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#003B24]/40 border border-[#D4AF37]/20 flex flex-col items-start">
                <span className="text-xl mb-2">✨</span>
                <span className="font-serif font-bold text-sm text-[#FFF8E7]">Herbal Goodness</span>
                <span className="text-[11px] text-[#FFF8E7]/70 mt-0.5">8 botanical actives</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#003B24]/40 border border-[#D4AF37]/20 flex flex-col items-start">
                <span className="text-xl mb-2">🌸</span>
                <span className="font-serif font-bold text-sm text-[#FFF8E7]">Everyday Hair Care</span>
                <span className="text-[11px] text-[#FFF8E7]/70 mt-0.5">2–3 times a week</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOrderClick}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F5C542] via-[#D4AF37] to-[#B89326] text-[#002719] font-bold text-xs sm:text-sm tracking-widest uppercase shadow-xl hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>START YOUR RITUAL TODAY</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
