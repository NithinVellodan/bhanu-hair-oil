import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['home', 'about', 'why-bhanu', 'ingredients', 'benefits', 'showcase', 'how-to-use', 'lifestyle', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Ingredients', href: '#ingredients', id: 'ingredients' },
    { name: 'Benefits', href: '#benefits', id: 'benefits' },
    { name: 'How To Use', href: '#how-to-use', id: 'how-to-use' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#002719]/95 backdrop-blur-md border-b border-[#D4AF37]/30 py-2.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#002719]/90 via-[#002719]/50 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#D4AF37] shadow-lg group-hover:border-[#F5C542] group-hover:scale-105 transition-all">
                <img
                  src={bhanuLogo}
                  alt="BHANU Hair Oil Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-brand-title text-xl sm:text-2xl font-bold tracking-[0.16em] text-[#FFF8E7] group-hover:text-[#F5C542] transition-colors leading-tight">
                  BHANŪ
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase font-semibold">
                  HAIR OIL
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-2 text-sm font-medium tracking-wider uppercase transition-colors rounded-full ${
                      isActive
                        ? 'text-[#F5C542] font-semibold'
                        : 'text-[#FFF8E7]/80 hover:text-[#FFF8E7]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/919207765581?text=Hello%20BHANU%20Hair%20Oil,%20I%20would%20like%20to%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider text-[#FFF8E7] hover:text-[#F5C542] transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>9207765581</span>
              </a>

              <button
                onClick={onOrderClick}
                id="navbar-order-btn"
                className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F5C542] via-[#D4AF37] to-[#B89326] text-[#002719] font-bold text-xs sm:text-sm tracking-widest uppercase shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  ORDER NOW
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={onOrderClick}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#F5C542] to-[#D4AF37] text-[#002719] font-bold text-xs tracking-wider uppercase"
              >
                ORDER
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#FFF8E7] hover:text-[#D4AF37] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#002719]/98 backdrop-blur-xl border-b border-[#D4AF37]/30 shadow-2xl md:hidden px-6 py-8"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#D4AF37]/20">
                <img src={bhanuLogo} alt="Logo" className="w-8 h-8 rounded-full border border-[#D4AF37]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-semibold">
                  BHANŪ Menu
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-serif transition-colors py-1 flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-[#F5C542] font-semibold pl-2 border-l-2 border-[#D4AF37]'
                      : 'text-[#FFF8E7]/80 hover:text-[#FFF8E7]'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#D4AF37]/60">🌿</span>
                </a>
              ))}

              <div className="pt-4 border-t border-[#D4AF37]/20 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOrderClick();
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#F5C542] via-[#D4AF37] to-[#B89326] text-[#002719] font-bold text-sm tracking-widest uppercase shadow-md flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  ORDER NOW (200 ml)
                </button>
                <a
                  href="https://wa.me/919207765581?text=Hello%20BHANU%20Hair%20Oil,%20I%20would%20like%20to%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full border border-[#25D366]/40 text-[#FFF8E7] text-xs font-semibold tracking-wider flex items-center justify-center gap-2 bg-[#25D366]/10"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  Order on WhatsApp: 9207765581
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
