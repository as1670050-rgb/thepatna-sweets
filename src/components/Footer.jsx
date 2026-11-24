import React from 'react';
import { SHOP_CONFIG } from '../data/config';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaHeart, FaCrown } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#030D0A] text-ivory/80 pt-16 pb-12 border-t border-gold/25 relative overflow-hidden">
      <div className="absolute inset-0 bg-jaali opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gold/15">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FaCrown className="text-gold text-lg" />
              <span className="font-serif text-2xl font-bold tracking-widest text-gold">
                THE SWEET HUB
              </span>
            </div>
            <p className="text-xs text-gold-light/80 italic font-serif">
              "{SHOP_CONFIG.tagline}"
            </p>
            <p className="text-xs text-ivory/60 font-light leading-relaxed">
              Patna's luxury sweets boutique, preserving imperial confectionery recipes 
              with 100% pure desi ghee, natural pistachios, and saffron.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SHOP_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-[#0A2019] border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#050807] transition-all"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href={SHOP_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-[#0A2019] border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#050807] transition-all"
              >
                <FaFacebookF className="text-xs" />
              </a>
              <a
                href={`https://wa.me/${SHOP_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-[#0A2019] border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-[#050807] transition-all"
              >
                <FaWhatsapp className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-gold uppercase tracking-wider mb-4">
              Boutique Collections
            </h4>
            <ul className="space-y-2 text-xs text-ivory/70 font-light">
              <li><a href="#signature" className="hover:text-gold transition-colors">The Signature Six</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Desi Ghee Laddoos</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Royal Kaju & Pista Barfis</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Kolkata Fresh Bengali Sweets</a></li>
              <li><a href="#giftboxes" className="hover:text-gold transition-colors">Royal Wedding Trunks</a></li>
              <li><a href="#menu" className="hover:text-gold transition-colors">Artisanal Patna Namkeen</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-base font-bold text-gold uppercase tracking-wider mb-4">
              Boutique Location
            </h4>
            <p className="text-xs text-ivory/70 leading-relaxed font-light mb-3">
              {SHOP_CONFIG.address}
            </p>
            <p className="text-xs text-gold/90 font-mono">
              Phone: {SHOP_CONFIG.whatsappDisplay}
            </p>
            <p className="text-xs text-emerald-400 mt-2 font-medium">
              Open Daily: 9:00 AM – 10:00 PM
            </p>
          </div>

          {/* WhatsApp Direct Ordering Notice */}
          <div>
            <h4 className="font-serif text-base font-bold text-gold uppercase tracking-wider mb-4">
              Express WhatsApp Order
            </h4>
            <p className="text-xs text-ivory/70 font-light leading-relaxed mb-4">
              Send your order directly to our chef’s counter. Freshly weighed, packed in golden boutique boxes, and ready for pickup or local delivery in Patna.
            </p>
            <a
              href={`https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent("Namaste! I would like to order fresh sweets from The Sweet Hub Patna.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-surface border border-gold/40 text-gold hover:bg-gold hover:text-[#050807] text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <FaWhatsapp className="text-base" />
              <span>Direct WhatsApp Chat</span>
            </a>
          </div>

        </div>

        {/* Bottom Credits with specified line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <p>© {new Date().getFullYear()} {SHOP_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gold-light/80 font-serif">
            <span>Made with love in Patna</span>
            <FaHeart className="text-gold text-xs" />
          </p>
        </div>

      </div>
    </footer>
  );
};
