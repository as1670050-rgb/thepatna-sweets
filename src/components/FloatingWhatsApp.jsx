import React, { useState } from 'react';
import { SHOP_CONFIG } from '../data/config';
import { FaWhatsapp } from 'react-icons/fa';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#0A2019] text-ivory text-xs px-3 py-2 rounded-xl border border-gold/40 shadow-xl animate-fadeIn">
          <p className="font-serif font-bold text-gold">Order on WhatsApp</p>
          <p className="text-[10px] text-ivory/70">Instant response from our boutique</p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent("Namaste The Sweet Hub! I would like to place an order or enquire about sweets.")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with The Sweet Hub on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center border-2 border-gold/40 hover:border-gold"
      >
        {/* Glowing pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
        
        <FaWhatsapp className="text-2xl sm:text-3xl filter drop-shadow" />
      </a>
    </div>
  );
};
