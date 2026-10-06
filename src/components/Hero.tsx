import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Droplets, Leaf } from 'lucide-react';
import bottleHeroImg from '../assets/bhanu/bhanu-bottle-hero.jpg';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

interface HeroProps {
  onOrderClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderClick, onExploreClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-0 overflow-hidden bg-gradient-to-b from-[#001c12] via-[#002719] to-[#003B24]"
    >
      {/* Ambient Lighting & Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] bg-gradient-to-tr from-[#D4AF37]/15 via-[#004d2f]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#004d2f]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#F5C542]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Botanical SVG Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Floating Leaves Animation Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#D4AF37]/20 text-2xl select-none"
            initial={{
              x: `${15 * i + 10}vw`,
              y: '-10vh',
              rotate: 0,
              opacity: 0,
            }}
            animate={{
              y: '110vh',
              x: `${15 * i + (i % 2 === 0 ? 15 : 5)}vw`,
              rotate: 360,
              opacity: [0, 0.4, 0.6, 0.4, 0],
            }}
            transition={{
              duration: 16 + i * 4,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2.5,
            }}
          >
            🌿
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Column: Brand Typography & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left pt-6 lg:pt-0">
            
            {/* Official Logo Crest & Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#003B24]/90 border border-[#D4AF37]/50 shadow-lg mb-6"
            >
              <img src={bhanuLogo} alt="Logo" className="w-5 h-5 rounded-full" />
              <span className="text-[11px] sm:text-xs tracking-[0.25em] font-bold text-[#FFF8E7] uppercase">
                NATURE’S CARE FOR YOUR HAIR
              </span>
            </motion.div>

            {/* Main Brand Heading with authentic Macron BHANŪ */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
              className="relative"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight text-[#FFF8E7] leading-[0.95] mb-2">
                BHANŪ
              </h1>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light tracking-widest text-[#D4AF37] mb-6 flex items-center justify-center lg:justify-start gap-4">
                <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <span className="text-gold-gradient font-brand-title">HAIR OIL</span>
                <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#FFF8E7] font-medium leading-snug max-w-xl mb-4"
            >
              For Stronger, Healthier &amp; Longer Hair
            </motion.p>

            {/* Supporting Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37]/20 via-[#F5C542]/10 to-transparent border-l-2 border-[#D4AF37] mb-8"
            >
              <p className="text-base sm:text-lg text-[#F5C542] font-serif font-semibold italic">
                “With the Goodness of Herbal Ingredients”
              </p>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 text-xs text-[#FFF8E7]/90"
            >
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#002719]/90 border border-[#D4AF37]/40 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F5C542]" /> 100% Natural Herbal Oil
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#002719]/90 border border-[#D4AF37]/40 shadow-sm">
                <Droplets className="w-3.5 h-3.5 text-[#F5C542]" /> 200 ml Bottle
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#002719]/90 border border-[#D4AF37]/40 shadow-sm">
                <Leaf className="w-3.5 h-3.5 text-[#F5C542]" /> No Parabens • No Mineral Oil
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOrderClick}
                id="hero-order-btn"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#F5C542] via-[#D4AF37] to-[#B89326] text-[#002719] font-bold text-sm sm:text-base tracking-widest uppercase shadow-2xl hover:shadow-[#D4AF37]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span>ORDER NOW</span>
              </button>

              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#D4AF37]/60 hover:border-[#F5C542] text-[#FFF8E7] hover:text-[#F5C542] hover:bg-[#D4AF37]/10 text-sm font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>EXPLORE BENEFITS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Authentic BHANU Bottle Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* 100% Natural Circular Rotating Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 1.1, type: 'spring' }}
              className="absolute -top-4 -right-2 sm:right-4 lg:-right-2 z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#D4AF37] bg-[#00170e]/95 backdrop-blur-md p-1 shadow-2xl flex flex-col items-center justify-center text-center"
            >
              <div className="w-full h-full rounded-full border border-dashed border-[#D4AF37]/60 flex flex-col items-center justify-center p-2">
                <span className="text-xs">🌿</span>
                <span className="text-[10px] sm:text-xs font-serif font-extrabold tracking-wider text-[#F5C542] leading-tight">
                  100%
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold tracking-widest text-[#FFF8E7] uppercase">
                  NATURAL
                </span>
              </div>
            </motion.div>

            {/* Glowing Golden Aura behind bottle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.4, 0.75, 0.4], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#D4AF37]/35 via-[#F5C542]/25 to-transparent blur-2xl pointer-events-none"
            />

            {/* Product Bottle Container with Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.45, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-xs sm:max-w-sm"
            >
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 0.5, 0, -0.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative group cursor-pointer"
                onClick={onOrderClick}
              >
                {/* Bottle Frame with authentic design */}
                <div className="relative rounded-[36px] overflow-hidden p-3 bg-gradient-to-b from-[#D4AF37]/30 via-[#003B24]/50 to-[#00170e]/90 border-2 border-[#D4AF37]/50 shadow-2xl backdrop-blur-md group-hover:border-[#F5C542] transition-colors duration-500 flex flex-col items-center">
                  
                  {/* Authentic bottle visual */}
                  <img
                    src={bottleHeroImg}
                    alt="BHANU Hair Oil 200ml Authentic Bottle"
                    className="w-full h-auto max-h-[440px] object-contain rounded-2xl glow-gold-sm transition-transform duration-700 group-hover:scale-103"
                    loading="eager"
                  />

                  {/* Bottle Overlay Tag */}
                  <div className="w-full mt-3 bg-[#00170e]/90 backdrop-blur-md rounded-2xl p-3 border border-[#D4AF37]/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={bhanuLogo} alt="Logo" className="w-7 h-7 rounded-full" />
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                          BHANŪ HAIR OIL
                        </div>
                        <div className="text-xs font-serif font-bold text-[#FFF8E7]">
                          200 ml Standard Bottle
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-xs font-bold text-[#F5C542]">
                      100% Herbal
                    </span>
                  </div>
                </div>

                {/* Reflection Shadow under bottle */}
                <div className="w-3/4 mx-auto h-4 bg-[#D4AF37]/25 rounded-full blur-md mt-4" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#002719] to-transparent pointer-events-none" />
    </section>
  );
};
