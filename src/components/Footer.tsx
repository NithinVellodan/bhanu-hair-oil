import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'How To Use', href: '#how-to-use' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#00170e] text-[#FFF8E7] pt-20 pb-12 border-t border-[#D4AF37]/20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#D4AF37]/15">
          
          {/* Brand Info with Official Logo */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37] shadow-lg">
                <img src={bhanuLogo} alt="BHANU Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-brand-title text-2xl font-bold tracking-[0.16em] text-[#FFF8E7]">
                  BHANŪ
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
                  HAIR OIL
                </span>
              </div>
            </div>

            <p className="text-base font-serif italic text-[#D4AF37] mb-2">
              “Nature’s Care for Your Hair”
            </p>

            <p className="text-xs text-[#F5C542] font-semibold tracking-wider uppercase mb-4">
              Healthy Hair • Happy You
            </p>

            <p className="text-xs text-[#FFF8E7]/70 font-light leading-relaxed max-w-sm mb-6">
              A rich blend of pure herbal ingredients (Amla, Hibiscus, Bhringraj, Neem, Coconut Oil, Black Seed, Fenugreek, Other Herbs) specially crafted for stronger, healthier and longer hair naturally.
            </p>

            {/* Social & Contact Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919207765581"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#002719] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-[#002719] transition-all"
                title="WhatsApp: 9207765581"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com/bhanuhairoil"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#002719] border border-[#E1306C]/40 flex items-center justify-center text-[#E1306C] hover:bg-[#E1306C] hover:text-white transition-all"
                title="Instagram: @bhanuhairoil"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-6">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-3 text-sm text-[#FFF8E7]/75">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#F5C542] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 group-hover:bg-[#F5C542] transition-colors" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 rounded-2xl bg-[#002719] border border-[#D4AF37]/20 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold">Net Content</div>
                <div className="text-sm font-serif font-bold text-[#FFF8E7] mt-0.5">200 ml Bottle</div>
              </div>
              <span className="text-[10px] font-bold text-[#F5C542] bg-[#003B24] px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                100% Natural
              </span>
            </div>
          </div>

          {/* Direct Orders & Helpline */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end md:text-right">
            <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#D4AF37] mb-6">
              Orders &amp; Enquiries
            </h4>
            
            <a
              href="https://wa.me/919207765581"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-[#FFF8E7] hover:text-[#25D366] transition-colors mb-1"
            >
              +91 9207765581
            </a>
            
            <a
              href="https://instagram.com/bhanuhairoil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#D4AF37] hover:text-[#F5C542] transition-colors mb-6"
            >
              @bhanuhairoil
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="mt-auto px-4 py-2.5 rounded-full bg-[#002719] border border-[#D4AF37]/40 text-xs font-semibold text-[#FFF8E7] hover:text-[#F5C542] hover:border-[#F5C542] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8E7]/50 gap-4">
          <p>© 2026 BHANŪ Hair Oil. All Rights Reserved.</p>
          
          <div className="flex items-center gap-2 text-[11px] text-[#D4AF37]/70">
            <span>🌿 Pure Herbal Formulation</span>
            <span>•</span>
            <span>Healthy Hair • Happy You</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
