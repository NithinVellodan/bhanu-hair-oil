import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Droplet, ShieldCheck, HeartHandshake } from 'lucide-react';
import fullLabelsImg from '../assets/bhanu/product-front-back.jpg';
import frontLabelImg from '../assets/bhanu/product-front-label.jpg';
import backLabelImg from '../assets/bhanu/product-back-label.jpg';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

interface ProductIntroProps {
  onOrderClick: () => void;
}

export const ProductIntro: React.FC<ProductIntroProps> = ({ onOrderClick }) => {
  const [selectedLabelView, setSelectedLabelView] = useState<'both' | 'front' | 'back'>('both');

  const currentImg = selectedLabelView === 'both'
    ? fullLabelsImg
    : selectedLabelView === 'front'
      ? frontLabelImg
      : backLabelImg;

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#002719] overflow-hidden">
      {/* Background ambient gold gradient */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#003B24] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Packaging Labels Showcase with Interactive Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative group mx-auto max-w-lg lg:max-w-none">
              
              {/* Label View Switcher Tabs */}
              <div className="flex items-center justify-center gap-2 mb-4">
                {[
                  { id: 'both', label: 'Front & Back Labels' },
                  { id: 'front', label: 'Front Label (200 ml)' },
                  { id: 'back', label: 'Back Label (Details)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedLabelView(tab.id as 'both' | 'front' | 'back')}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      selectedLabelView === tab.id
                        ? 'bg-[#D4AF37] text-[#002719] shadow-lg font-bold'
                        : 'bg-[#00170e]/80 text-[#FFF8E7]/70 border border-[#D4AF37]/30 hover:text-[#FFF8E7]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Outer decorative border frame */}
              <div className="absolute -inset-3 rounded-[32px] border border-[#D4AF37]/30 group-hover:border-[#F5C542]/60 transition-colors duration-500 pointer-events-none" />
              
              {/* Image Container with Authentic Packaging Labels */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#00170e] border border-[#D4AF37]/40 flex items-center justify-center p-3 sm:p-4">
                <img
                  src={currentImg}
                  alt="BHANU Hair Oil Authentic Packaging Label"
                  className="w-full h-auto max-h-[520px] object-contain rounded-xl transform group-hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00170e]/95 border border-[#D4AF37] text-[11px] font-serif font-bold text-[#F5C542] shadow-lg">
                    ✨ Official Formulation
                  </span>
                </div>
              </div>

              {/* Bottom Strip */}
              <div className="mt-4 p-4 rounded-2xl bg-[#00170e]/90 backdrop-blur-md border border-[#D4AF37]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={bhanuLogo} alt="Logo" className="w-8 h-8 rounded-full border border-[#D4AF37]" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">Net Content</p>
                    <p className="text-sm font-serif font-bold text-[#FFF8E7]">200 ml Bottle</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">Brand Promise</p>
                  <p className="text-sm font-serif font-bold text-[#F5C542]">Healthy Hair • Happy You</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Editorial Introduction & Product Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col"
          >
            {/* Tagline / Eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[2px] w-8 bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
                Product Introduction
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FFF8E7] leading-tight mb-4">
              “Nature’s Care for <span className="text-gold-gradient italic">Your Hair</span>”
            </h2>

            {/* Self-drawing Gold Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="h-[1px] bg-gradient-to-r from-[#D4AF37] via-[#F5C542] to-transparent mb-6 max-w-xs"
            />

            {/* Exact Product Content matching label */}
            <p className="text-lg sm:text-xl text-[#FFF8E7]/90 font-light leading-relaxed mb-6">
              <strong className="font-semibold text-[#F5C542]">Bhanu Hair Oil</strong> is a rich blend of pure herbal ingredients, specially crafted to nourish your scalp, strengthen hair roots and promote longer, healthier and shinier hair naturally.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#003B24]/40 border border-[#D4AF37]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#002719] border border-[#D4AF37]/40 text-[#F5C542]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#FFF8E7] text-sm">100% Natural Blend</h3>
                  <p className="text-xs text-[#FFF8E7]/70 mt-0.5">Free from mineral oils and harsh parabens.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#003B24]/40 border border-[#D4AF37]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#002719] border border-[#D4AF37]/40 text-[#F5C542]">
                  <Droplet className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#FFF8E7] text-sm">Root-Deep Care</h3>
                  <p className="text-xs text-[#FFF8E7]/70 mt-0.5">Penetrates deeply to nourish from roots to tips.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#003B24]/40 border border-[#D4AF37]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#002719] border border-[#D4AF37]/40 text-[#F5C542]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#FFF8E7] text-sm">Rich Botanical Base</h3>
                  <p className="text-xs text-[#FFF8E7]/70 mt-0.5">Infused with Amla, Hibiscus, Bhringraj &amp; Neem.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#003B24]/40 border border-[#D4AF37]/20 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#002719] border border-[#D4AF37]/40 text-[#F5C542]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#FFF8E7] text-sm">Traditional Goodness</h3>
                  <p className="text-xs text-[#FFF8E7]/70 mt-0.5">Inspired by time-tested Ayurvedic hair wellness.</p>
                </div>
              </div>
            </div>

            {/* Highlight size badge & Action CTA */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="px-5 py-2.5 rounded-full border border-[#D4AF37] bg-[#003B24]/60 text-xs font-bold uppercase tracking-wider text-[#F5C542] flex items-center gap-2">
                <span>✨ 200 ml Standard Bottle</span>
              </div>
              <button
                onClick={onOrderClick}
                className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#F5C542] to-[#D4AF37] text-[#002719] font-bold text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>ORDER BHANŪ OIL</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
