import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Leaf, Sparkles, Feather, ShieldCheck } from 'lucide-react';

export const WhyBhanu: React.FC = () => {
  const reasons = [
    {
      number: '01',
      title: 'Herbal Ingredients',
      description: 'Crafted with a potent blend of traditional Ayurvedic botanicals including Amla, Bhringraj, Neem, and Hibiscus.',
      icon: Leaf,
    },
    {
      number: '02',
      title: 'Scalp Nourishment',
      description: 'Deeply conditions the scalp, delivering moisture and nutrients directly to support a healthy scalp environment.',
      icon: Sparkles,
    },
    {
      number: '03',
      title: 'Stronger Hair Roots',
      description: 'Strengthens each hair strand from the root upwards, helping reduce hair breakage and hair fall naturally.',
      icon: ShieldCheck,
    },
    {
      number: '04',
      title: 'Natural-Looking Shine',
      description: 'Imparts a glossy, lustrous natural finish without greasy heaviness, leaving hair feeling silky and lively.',
      icon: Feather,
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="why-bhanu" className="relative py-24 sm:py-32 bg-gradient-to-b from-[#002719] via-[#003B24] to-[#002719] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00170e]/70 border border-[#D4AF37]/30 mb-4"
          >
            <span className="text-xs">🌿</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
              The Bhanu Advantage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF8E7] leading-tight"
          >
            Why Choose <span className="text-gold-gradient italic">BHANU?</span>
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
            className="text-base sm:text-lg text-[#FFF8E7]/80 font-light max-w-xl mx-auto"
          >
            Honoring pure botanical heritage to nurture your hair with nature’s gentlest yet most effective remedies.
          </motion.p>
        </div>

        {/* 4 Animated Glass Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative p-8 rounded-3xl bg-gradient-to-b from-[#003B24]/60 via-[#002719]/80 to-[#00170e]/90 backdrop-blur-xl border border-[#D4AF37]/25 hover:border-[#F5C542]/70 transition-all duration-500 shadow-xl hover:shadow-[#D4AF37]/20 flex flex-col justify-between"
              >
                {/* Gold Glow Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/0 via-[#D4AF37]/5 to-[#F5C542]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#D4AF37]/50 group-hover:text-[#F5C542] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#002719] border border-[#D4AF37]/40 flex items-center justify-center text-[#F5C542] group-hover:scale-110 group-hover:border-[#F5C542] transition-all duration-300 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-serif font-bold text-[#FFF8E7] group-hover:text-[#F5C542] transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm text-[#FFF8E7]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom decorative gold pill */}
                <div className="mt-8 pt-4 border-t border-[#D4AF37]/15 flex items-center justify-between text-xs text-[#D4AF37]">
                  <span className="tracking-widest uppercase text-[10px] font-semibold">100% Pure Care</span>
                  <span>🌿</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
