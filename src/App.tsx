import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductIntro } from './components/ProductIntro';
import { WhyBhanu } from './components/WhyBhanu';
import { Ingredients } from './components/Ingredients';
import { Benefits } from './components/Benefits';
import { ProductShowcase } from './components/ProductShowcase';
import { HowToUse } from './components/HowToUse';
import { NaturalPromise } from './components/NaturalPromise';
import { PromoSection } from './components/PromoSection';
import { LifestyleSection } from './components/LifestyleSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';

export const App: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const handleOpenOrder = () => {
    // Trigger subtle golden celebration confetti
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#D4AF37', '#F5C542', '#FFF8E7', '#004d2f'],
      });
    } catch {
      // ignore
    }
    setIsOrderModalOpen(true);
  };

  const handleExploreBenefits = () => {
    const el = document.getElementById('benefits');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#002719] text-[#FFF8E7] selection:bg-[#D4AF37] selection:text-[#002719]">
      {/* 1. Sticky Navigation */}
      <Navbar onOrderClick={handleOpenOrder} />

      {/* 2. Hero Section */}
      <Hero
        onOrderClick={handleOpenOrder}
        onExploreClick={handleExploreBenefits}
      />

      {/* 3. Product Introduction */}
      <ProductIntro onOrderClick={handleOpenOrder} />

      {/* 4. Why Bhanu Hair Oil */}
      <WhyBhanu />

      {/* 5. Key Ingredients */}
      <Ingredients />

      {/* 6. Benefits */}
      <Benefits onOrderClick={handleOpenOrder} />

      {/* 7. Product Showcase */}
      <ProductShowcase onOrderClick={handleOpenOrder} />

      {/* 8. How To Use */}
      <HowToUse />

      {/* 9. Clean & Natural Promise */}
      <NaturalPromise />

      {/* 10. Premium Promotional Banner */}
      <PromoSection onOrderClick={handleOpenOrder} />

      {/* 11. Customer Experience / Lifestyle Section */}
      <LifestyleSection onOrderClick={handleOpenOrder} />

      {/* 12. Call To Action & Direct Contact */}
      <CTASection onOrderClick={handleOpenOrder} />

      {/* 13. Footer */}
      <Footer />

      {/* Interactive Order & WhatsApp Dialog */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
};

export default App;
