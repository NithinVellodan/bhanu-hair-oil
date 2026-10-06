import React, { useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { Sparkles, Droplets, Leaf, Shield, Flower, Sun, Layers, HelpCircle } from 'lucide-react';
import keyIngredientsDiagram from '../assets/bhanu/key-ingredients-diagram.jpg';
import ingredientsPosterStrip from '../assets/bhanu/ingredients-poster-strip.jpg';

export const Ingredients: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'herbs' | 'oils'>('all');

  const ingredientsList = [
    {
      name: 'Amla',
      sanskrit: 'Amalaki (Indian Gooseberry)',
      description: 'Traditionally valued for nourishing hair and scalp, rich in natural goodness and cooling qualities.',
      icon: Sun,
      category: 'herbs',
      badge: 'Nutrient Rich',
      emoji: '🍈',
    },
    {
      name: 'Hibiscus',
      sanskrit: 'Japa Pushpa',
      description: 'Known for its botanical goodness and hair-care tradition, supporting natural texture and deep conditioning.',
      icon: Flower,
      category: 'herbs',
      badge: 'Botanical Bloom',
      emoji: '🌺',
    },
    {
      name: 'Bhringraj',
      sanskrit: 'Keshraj (King of Hair)',
      description: 'A popular herbal ingredient used in traditional hair care to fortify roots and nurture scalp vitality.',
      icon: Leaf,
      category: 'herbs',
      badge: 'Root Fortifier',
      emoji: '🌿',
    },
    {
      name: 'Neem',
      sanskrit: 'Nimba (Margosa)',
      description: 'Traditionally used for scalp-focused care, maintaining scalp clarity and cleanliness naturally.',
      icon: Shield,
      category: 'herbs',
      badge: 'Scalp Clarity',
      emoji: '🍃',
    },
    {
      name: 'Coconut Oil',
      sanskrit: 'Narikela Taila',
      description: 'A nourishing oil commonly used in hair care to seal in natural moisture and impart softness.',
      icon: Droplets,
      category: 'oils',
      badge: 'Pure Moisture',
      emoji: '🥥',
    },
    {
      name: 'Black Seed',
      sanskrit: 'Kalonji (Nigella Sativa)',
      description: 'A botanical ingredient valued in traditional wellness practices for revitalizing delicate hair strands.',
      icon: Sparkles,
      category: 'oils',
      badge: 'Traditional Elixir',
      emoji: '✨',
    },
    {
      name: 'Fenugreek',
      sanskrit: 'Methi Seeds',
      description: 'Traditionally used in natural hair-care routines to condition, smooth, and add bounce.',
      icon: Layers,
      category: 'oils',
      badge: 'Lustrous Softness',
      emoji: '🌾',
    },
    {
      name: 'Other Herbs',
      sanskrit: 'Herbal Blend',
      description: 'A complementary blend of herbal ingredients carefully infused to create balanced, holistic care.',
      icon: HelpCircle,
      category: 'herbs',
      badge: 'Synergistic Blend',
      emoji: '🌱',
    },
  ];

  const filteredIngredients = activeTab === 'all'
    ? ingredientsList
    : ingredientsList.filter((item) => item.category === activeTab);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="ingredients" className="relative py-24 sm:py-32 bg-[#001c12] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#003B24] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002719] border border-[#D4AF37]/30 mb-4"
          >
            <span className="text-xs">🌿</span>
            <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
              Ayurvedic Formulation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF8E7] leading-tight"
          >
            The Goodness of <span className="text-gold-gradient italic">Herbal Ingredients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-[#FFF8E7]/80 font-light mt-4 max-w-xl mx-auto"
          >
            Carefully selected ingredients inspired by nature — as featured on the BHANŪ packaging.
          </motion.p>

          {/* Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-8"
          >
            {[
              { id: 'all', label: 'All 8 Ingredients' },
              { id: 'herbs', label: 'Botanical Herbs' },
              { id: 'oils', label: 'Seeds & Nourishing Oils' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'all' | 'herbs' | 'oils')}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#F5C542] to-[#D4AF37] text-[#002719] shadow-lg shadow-[#D4AF37]/20 scale-105 font-bold'
                    : 'bg-[#002719] text-[#FFF8E7]/70 border border-[#D4AF37]/20 hover:text-[#FFF8E7] hover:border-[#D4AF37]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Authentic Packaging Key Ingredients Diagram Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#00170e] p-4 flex flex-col justify-center"
          >
            <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 flex items-center gap-2">
              <span>🌿</span>
              <span>Official Key Ingredients Section (Packaging Back Label)</span>
            </div>
            <img
              src={keyIngredientsDiagram}
              alt="Official Key Ingredients from BHANU Hair Oil packaging"
              className="w-full h-auto object-contain rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 relative rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl bg-[#00170e] p-4 flex flex-col justify-center"
          >
            <div className="text-xs uppercase tracking-widest text-[#F5C542] font-semibold mb-2 flex items-center gap-2">
              <span>✨</span>
              <span>Poster Ingredients Strip</span>
            </div>
            <img
              src={ingredientsPosterStrip}
              alt="BHANU Hair Oil Botanical Ingredients Strip"
              className="w-full h-auto object-contain rounded-2xl max-h-[300px]"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* 8 Ingredients Grid with Circular Badges */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredIngredients.map((ing) => {
            const IconComponent = ing.icon;
            return (
              <motion.div
                key={ing.name}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative p-6 rounded-3xl bg-gradient-to-b from-[#002719] to-[#00170e] border border-[#D4AF37]/25 hover:border-[#F5C542]/70 shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 flex flex-col items-center text-center"
              >
                {/* Circular Icon / Emblem Container with expanding gold ring on hover */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#003B24] via-[#002719] to-[#004d2f] border-2 border-[#D4AF37]/40 flex items-center justify-center text-3xl shadow-inner group-hover:border-[#F5C542] group-hover:scale-105 transition-all duration-500">
                    <span className="transform group-hover:rotate-12 transition-transform duration-300">
                      {ing.emoji}
                    </span>
                  </div>

                  {/* Pulsing ring on hover */}
                  <div className="absolute -inset-1 rounded-full border border-[#D4AF37]/0 group-hover:border-[#F5C542]/40 group-hover:scale-115 transition-all duration-500 pointer-events-none" />
                  
                  {/* Category mini icon */}
                  <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-[#D4AF37] text-[#002719] shadow-md">
                    <IconComponent className="w-3 h-3" />
                  </div>
                </div>

                {/* Badge */}
                <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full bg-[#003B24] text-[#D4AF37] border border-[#D4AF37]/20 mb-2">
                  {ing.badge}
                </span>

                {/* Ingredient Name */}
                <h3 className="text-xl font-serif font-bold text-[#FFF8E7] group-hover:text-[#F5C542] transition-colors mb-1">
                  {ing.name}
                </h3>

                <p className="text-[11px] font-medium text-[#D4AF37]/80 italic mb-3">
                  {ing.sanskrit}
                </p>

                {/* Description */}
                <p className="text-xs text-[#FFF8E7]/75 font-light leading-relaxed">
                  {ing.description}
                </p>

                {/* Bottom subtle accent line */}
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mt-4 group-hover:w-24 group-hover:bg-[#F5C542] transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
