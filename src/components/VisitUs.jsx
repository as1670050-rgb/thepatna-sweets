import React from 'react';
import { SHOP_CONFIG } from '../data/config';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaWhatsapp, FaDirections } from 'react-icons/fa';

export const VisitUs = () => {
  return (
    <section id="visitus" className="py-24 bg-[#061611] relative">
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-[#0A2019] text-gold text-xs uppercase tracking-[0.2em] mb-4">
            <FaMapMarkerAlt className="text-xs" />
            <span>Experience The Boutique</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-4 tracking-tight">
            Visit Our Boutique in Patna
          </h2>
          
          <p className="text-ivory/70 text-sm sm:text-base font-light">
            Conveniently situated on Ashok Rajpath, steps from Tripolia Post Office. 
            Open every day until 10:00 PM for fresh takeaway and bespoke festival orders.
          </p>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Location Details + Map Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Boutique Contact & Timings Card */}
          <div className="lg:col-span-5 luxury-glass rounded-2xl p-8 flex flex-col justify-between border border-gold/30">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-medium block mb-2">
                Patna Flagship Address
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory mb-4">
                {SHOP_CONFIG.name}
              </h3>
              
              <div className="space-y-6 text-sm text-ivory/80">
                {/* Full Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#061611] text-gold border border-gold/25 mt-0.5 shrink-0">
                    <FaMapMarkerAlt className="text-base" />
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium text-sm">Full Address</h4>
                    <p className="text-xs text-ivory/70 mt-1 leading-relaxed">
                      {SHOP_CONFIG.address}
                    </p>
                    <span className="text-[11px] text-gold/80 block mt-1">
                      Landmark: {SHOP_CONFIG.landmark}
                    </span>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#061611] text-gold border border-gold/25 mt-0.5 shrink-0">
                    <FaClock className="text-base" />
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium text-sm">Opening Hours</h4>
                    <p className="text-xs text-ivory/70 mt-1">
                      {SHOP_CONFIG.openingHours}
                    </p>
                    <span className="text-[11px] text-emerald-400 font-medium block mt-1">
                      Open daily, closes 10:00 PM
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#061611] text-gold border border-gold/25 mt-0.5 shrink-0">
                    <FaPhoneAlt className="text-base" />
                  </div>
                  <div>
                    <h4 className="text-ivory font-medium text-sm">Customer Helpline</h4>
                    <a 
                      href={`tel:${SHOP_CONFIG.phoneNumber}`} 
                      className="text-xs text-gold hover:underline font-mono mt-1 block"
                    >
                      {SHOP_CONFIG.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions (Call, Directions, WhatsApp) */}
            <div className="pt-8 mt-8 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${SHOP_CONFIG.phoneNumber}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#061611] border border-gold/40 text-gold hover:bg-gold hover:text-[#050807] transition-all text-xs font-semibold uppercase tracking-wider"
              >
                <FaPhoneAlt />
                <span>Call Shop</span>
              </a>

              <a
                href={SHOP_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-[#050807] hover:shadow-gold-sm transition-all text-xs font-semibold uppercase tracking-wider"
              >
                <FaDirections />
                <span>Directions</span>
              </a>

              <a
                href={`https://wa.me/${SHOP_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F2F25] border border-emerald-500/40 text-emerald-300 hover:bg-emerald-800 transition-all text-xs font-semibold uppercase tracking-wider"
              >
                <FaWhatsapp className="text-base" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Map Frame */}
          <div className="lg:col-span-7 luxury-glass rounded-2xl overflow-hidden border border-gold/30 min-h-[380px] relative">
            <iframe
              title="The Sweet Hub Location Map Patna"
              src="https://maps.google.com/maps?q=Ramanandan+Bhawan+Ashok+Rajpath+Road+Tripolia+Patna+800006&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 filter contrast-[1.05] grayscale-[0.25]"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute bottom-3 left-3 bg-[#061611]/90 backdrop-blur-md border border-gold/40 px-3 py-1.5 rounded-lg text-[11px] text-ivory/80 pointer-events-none">
              📍 Ramanandan Bhawan, Tripolia, Patna
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
