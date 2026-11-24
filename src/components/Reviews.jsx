import React from 'react';
import { CUSTOMER_REVIEWS } from '../data/menu';
import { SHOP_CONFIG } from '../data/config';
import { FaStar, FaGoogle, FaQuoteLeft, FaCheckCircle } from 'react-icons/fa';

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#050807] relative overflow-hidden">
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Rating Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-[#0A2019] text-gold text-xs uppercase tracking-[0.2em] mb-4">
            <FaGoogle className="text-xs" />
            <span>Google Verified Patron Reviews</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-4 tracking-tight">
            Loved Across Patna
          </h2>
          
          {/* Prominent 4.4 Rating Display */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 my-4">
            <div className="flex items-center gap-1.5 text-gold text-2xl">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < 4 ? "text-gold" : "text-gold/40"} />
              ))}
            </div>
            <div className="flex items-center gap-2 text-ivory">
              <span className="font-serif text-3xl font-bold text-gold-light">4.4</span>
              <span className="text-xs text-ivory/70 uppercase tracking-widest font-light">
                Out of 5 Stars on Google Maps
              </span>
            </div>
          </div>

          <p className="text-ivory/65 text-xs sm:text-sm font-light">
            Based on {SHOP_CONFIG.ratingCount} from genuine mithai lovers in Mahendru, Kankarbagh, Boring Road, and beyond.
          </p>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* 4 Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="luxury-glass rounded-xl p-6 flex flex-col justify-between hover:border-gold/50 transition-all duration-300 relative group"
            >
              <FaQuoteLeft className="text-gold/20 text-3xl absolute top-5 right-5 group-hover:text-gold/40 transition-colors" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-gold text-xs mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-ivory/80 italic leading-relaxed font-light mb-6">
                  "{rev.review}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-gold/15 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-sm font-bold text-ivory">
                    {rev.name}
                  </h3>
                  <span className="text-[11px] text-gold/75 block">
                    {rev.location}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  <FaCheckCircle className="text-[10px]" />
                  <span>Google</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
