import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle } from 'lucide-react';
import bottleHeroImg from '../assets/bhanu/bhanu-bottle-hero.jpg';
import bhanuLogo from '../assets/bhanu/bhanu-logo.png';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = '919207765581';
    let text = `🌿 *NEW ORDER - BHANŪ HAIR OIL*\n\n` +
      `*Product:* BHANŪ Hair Oil (200 ml Standard Bottle)\n` +
      `*Quantity:* ${quantity} Bottle(s)\n`;

    if (name.trim()) text += `*Name:* ${name.trim()}\n`;
    if (phone.trim()) text += `*Phone:* ${phone.trim()}\n`;
    if (address.trim()) text += `*Delivery Address:* ${address.trim()}\n`;

    text += `\nPlease confirm my order details and share dispatch information. Healthy Hair • Happy You!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${cleanPhone}?text=${encodedText}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#00170e]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-gradient-to-b from-[#003B24] via-[#002719] to-[#00170e] border-2 border-[#D4AF37]/50 rounded-[32px] shadow-2xl overflow-hidden z-10 p-6 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#00170e]/80 text-[#FFF8E7]/70 hover:text-[#FFF8E7] hover:bg-[#002719] border border-[#D4AF37]/30 transition-colors cursor-pointer"
              aria-label="Close Order Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-6">
              <img src={bhanuLogo} alt="Logo" className="w-11 h-11 rounded-full border border-[#D4AF37]" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#D4AF37]">
                  Direct WhatsApp Order
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#FFF8E7]">
                  Order BHANŪ Hair Oil
                </h3>
              </div>
            </div>

            {/* Product Summary Strip */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#00170e]/80 border border-[#D4AF37]/30 mb-6">
              <img
                src={bottleHeroImg}
                alt="BHANU Hair Oil"
                className="w-14 h-20 object-contain rounded-xl border border-[#D4AF37]/40 bg-[#002719]"
              />
              <div className="flex-1">
                <div className="text-base font-serif font-bold text-[#FFF8E7]">
                  BHANŪ HAIR OIL (200 ml)
                </div>
                <div className="text-xs text-[#D4AF37] mt-0.5 font-medium">
                  “Nature’s Care for Your Hair” • 100% Herbal Oil
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-2 bg-[#002719] p-1 rounded-xl border border-[#D4AF37]/40">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 rounded-lg bg-[#003B24] text-[#FFF8E7] font-bold text-sm hover:bg-[#D4AF37] hover:text-[#002719] transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="w-8 text-center font-serif font-bold text-base text-[#F5C542]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 rounded-lg bg-[#003B24] text-[#FFF8E7] font-bold text-sm hover:bg-[#D4AF37] hover:text-[#002719] transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            {/* Order Form */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#00170e]/90 border border-[#D4AF37]/30 text-[#FFF8E7] placeholder-[#FFF8E7]/40 text-sm focus:outline-none focus:border-[#F5C542] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1.5">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#00170e]/90 border border-[#D4AF37]/30 text-[#FFF8E7] placeholder-[#FFF8E7]/40 text-sm focus:outline-none focus:border-[#F5C542] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1.5">
                  Delivery Address / Location
                </label>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address, City, State, Pincode"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#00170e]/90 border border-[#D4AF37]/30 text-[#FFF8E7] placeholder-[#FFF8E7]/40 text-sm focus:outline-none focus:border-[#F5C542] transition-colors resize-none"
                />
              </div>

              {/* Submit WhatsApp Order Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] text-white font-bold text-sm sm:text-base tracking-widest uppercase shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>CONFIRM ORDER ON WHATSAPP</span>
              </button>
            </form>

            {/* Direct Quick WhatsApp Note */}
            <div className="mt-4 text-center">
              <p className="text-xs text-[#FFF8E7]/60">
                Direct WhatsApp Helpline: <strong className="text-[#25D366]">9207765581</strong> • Healthy Hair • Happy You
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
