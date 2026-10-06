import React from 'react';
import { Sparkles, MessageCircle, ShieldCheck, Truck, Package } from 'lucide-react';
import bottleHeroImg from '../assets/bhanu/bhanu-bottle-hero.jpg';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

interface CTASectionProps {
  onOrderClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOrderClick }) => {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-gradient-to-b from-[#002719] via-[#003B24] to-[#00170e] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D4AF37]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-[40px] overflow-hidden p-8 sm:p-14 lg:p-20 bg-gradient-to-b from-[#002719]/90 via-[#003B24]/90 to-[#00170e]/95 border-2 border-[#D4AF37]/40 shadow-2xl backdrop-blur-xl">
          
          {/* Subtle gold grid texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#00170e] border border-[#D4AF37]/40 mb-6">
                <img src={bhanuLogo} alt="Logo" className="w-5 h-5 rounded-full" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
                  Order Directly From BHANŪ
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#FFF8E7] leading-tight mb-4">
                Give Your Hair the <br />
                <span className="text-gold-gradient italic">Care It Deserves.</span>
              </h2>

              {/* Subheading */}
              <p className="text-lg sm:text-2xl font-serif text-[#FFF8E7]/90 font-light mb-8 max-w-xl">
                Discover the goodness of <strong className="text-[#F5C542] font-semibold">BHANŪ Hair Oil</strong>.
              </p>

              {/* Product Specifications Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 text-xs text-[#FFF8E7]/90">
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#002719] border border-[#D4AF37]/30">
                  <Package className="w-4 h-4 text-[#F5C542]" /> 200 ml Bottle
                </span>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#002719] border border-[#D4AF37]/30">
                  <ShieldCheck className="w-4 h-4 text-[#F5C542]" /> 100% Herbal Blend
                </span>
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#002719] border border-[#D4AF37]/30">
                  <Truck className="w-4 h-4 text-[#F5C542]" /> Direct Fast Shipping
                </span>
              </div>

              {/* Primary Action Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
                <button
                  onClick={onOrderClick}
                  id="cta-order-btn"
                  className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#F5C542] via-[#D4AF37] to-[#B89326] text-[#002719] font-bold text-sm sm:text-base tracking-widest uppercase shadow-2xl hover:shadow-[#D4AF37]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>ORDER NOW</span>
                </button>

                <a
                  href="https://wa.me/919207765581?text=Hello%20BHANU%20Hair%20Oil,%20I%20would%20like%20to%20place%20an%20order%20for%20the%20200ml%20bottle."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/60 text-[#FFF8E7] text-sm font-semibold tracking-wider flex items-center justify-center gap-2.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>

              {/* Enquiries & Orders Direct Info */}
              <div className="pt-6 border-t border-[#D4AF37]/20 w-full">
                <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-4">
                  For Enquiries &amp; Orders
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
                  {/* WhatsApp Direct Link */}
                  <a
                    href="https://wa.me/919207765581"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group/link p-2 rounded-xl hover:bg-[#002719] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] group-hover/link:scale-110 transition-transform">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider text-[#FFF8E7]/60 font-medium">WhatsApp Order</div>
                      <div className="text-base font-bold text-[#FFF8E7] group-hover/link:text-[#25D366] transition-colors">
                        9207765581
                      </div>
                    </div>
                  </a>

                  {/* Instagram Link */}
                  <a
                    href="https://instagram.com/bhanuhairoil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group/link p-2 rounded-xl hover:bg-[#002719] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#E1306C]/20 border border-[#E1306C]/50 flex items-center justify-center text-[#E1306C] group-hover/link:scale-110 transition-transform">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider text-[#FFF8E7]/60 font-medium">Instagram</div>
                      <div className="text-base font-bold text-[#FFF8E7] group-hover/link:text-[#E1306C] transition-colors">
                        @bhanuhairoil
                      </div>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Bottle Visual in Card */}
            <div className="lg:col-span-4 relative flex items-center justify-center">
              <div className="relative w-full max-w-[240px] sm:max-w-[280px]">
                {/* Gold Glow */}
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/25 blur-2xl pointer-events-none" />
                
                <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-b from-[#003B24] to-[#00170e] border-2 border-[#D4AF37]/50 shadow-2xl p-4 flex flex-col items-center">
                  <img
                    src={bottleHeroImg}
                    alt="BHANU Hair Oil 200ml"
                    className="w-full h-auto max-h-[380px] object-contain rounded-2xl glow-gold-sm"
                    loading="lazy"
                  />
                  <div className="w-full mt-3 p-3 rounded-2xl bg-[#00170e]/95 text-center border border-[#D4AF37]/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={bhanuLogo} alt="Logo" className="w-6 h-6 rounded-full" />
                      <div className="text-xs font-serif font-bold text-[#FFF8E7]">200 ml Bottle</div>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-[#F5C542] font-semibold">Ready to Ship</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
