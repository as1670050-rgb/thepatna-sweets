import React from 'react';
import { SHOP_CONFIG } from '../data/config';
import { FaWhatsapp, FaCompass, FaStar, FaAward, FaCrown } from 'react-icons/fa';

export const Hero = () => {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const target = document.getElementById('signature');
    if (target) {
      const navOffset = 80;
      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#050807]">
      {/* Background Hero Image with Opulent Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=1920&auto=format&fit=crop"
          alt="The Sweet Hub Signature Sweets on Gold Platter"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.12] scale-105 transform motion-safe:animate-pulse transition-all duration-1000"
        />
        {/* Deep emerald and rich black luxury gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-[#061611]/75 to-[#050807]/90" />
        <div className="absolute inset-0 bg-jaali opacity-30" />
      </div>

      {/* Decorative Gold Radial Glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-radial-gold opacity-40 blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16">
        
        {/* Heritage Crown & Rating Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold/40 bg-[#0A2019]/80 backdrop-blur-md mb-6 shadow-gold-sm">
          <FaCrown className="text-gold text-xs" />
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-medium">
            Patna's Premier Sweets Boutique
          </span>
          <span className="text-gold/40">•</span>
          <div className="flex items-center gap-1 text-gold-light text-xs font-semibold">
            <FaStar className="text-[11px]" />
            <span>4.4 Rating</span>
          </div>
        </div>

        {/* Boutique Brand Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-ivory mb-5 drop-shadow-md">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ivory via-gold-light to-gold">
            The Sweet Hub
          </span>
        </h1>

        {/* Tagline specified in requirements */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-gold-light/95 max-w-2xl mx-auto mb-6 tracking-wide drop-shadow">
          “Crafted with Tradition. Served with Luxury.”
        </p>

        {/* Location & Distinction Note */}
        <p className="text-ivory/70 text-sm sm:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Welcome to Ramanandan Bhawan, Ashok Rajpath. Experience pure desi ghee artisanal mithai, 
          royal dry fruit confections, and bespoke wedding hampers crafted like fine jewelry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#signature"
            onClick={scrollToMenu}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-gold-light to-gold text-[#050807] font-semibold text-sm tracking-wider uppercase hover:shadow-gold-md hover:brightness-110 transition-all duration-300 transform hover:-translate-y-0.5 border border-gold"
          >
            <FaCompass className="text-base" />
            <span>Explore Our Collection</span>
          </a>

          <a
            href={`https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent("Namaste The Sweet Hub! I would like to order sweets from your boutique.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-emerald-surface/90 hover:bg-emerald-surface text-ivory border border-gold/50 hover:border-gold font-medium text-sm tracking-wider uppercase hover:shadow-gold-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <FaWhatsapp className="text-lg text-emerald-400" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Key Boutique Highlights */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gold/15 max-w-3xl mx-auto text-left sm:text-center">
          <div className="flex flex-col items-center">
            <span className="font-serif text-gold text-lg sm:text-xl font-bold">100% Desi Ghee</span>
            <span className="text-xs text-ivory/60 mt-0.5">Certified A2 Cow Ghee</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-gold text-lg sm:text-xl font-bold">4.4 ★ Google</span>
            <span className="text-xs text-ivory/60 mt-0.5">Patna’s Trusted Choice</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-gold text-lg sm:text-xl font-bold">Open till 10 PM</span>
            <span className="text-xs text-ivory/60 mt-0.5">Fresh Batches Daily</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-gold text-lg sm:text-xl font-bold">Ashok Rajpath</span>
            <span className="text-xs text-ivory/60 mt-0.5">Tripolia, Patna-06</span>
          </div>
        </div>

      </div>

      {/* Decorative Bottom Wave / Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050807] to-transparent pointer-events-none" />
    </section>
  );
};
