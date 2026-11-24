import React from 'react';
import { FaCertificate, FaSeedling, FaHistory, FaHeart } from 'react-icons/fa';

export const Story = () => {
  return (
    <section id="story" className="py-24 bg-[#061611] relative overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute inset-0 bg-mandala opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-radial-emerald opacity-30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase: Shop / Sweet Artisan Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-2xl p-1 bg-gradient-to-b from-gold/40 via-gold/10 to-transparent">
              <div className="rounded-xl overflow-hidden aspect-[4/5] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop"
                  alt="The Sweet Hub Boutique & Artisanal Mithai Craftsmanship"
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating Gold Experience Badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-[#050807]/95 border border-gold/40 p-4 sm:p-5 rounded-2xl shadow-gold-md backdrop-blur-md max-w-[220px]">
              <div className="flex items-center gap-2 text-gold font-serif text-2xl font-bold">
                <FaCertificate />
                <span>100% Purity</span>
              </div>
              <p className="text-[11px] text-ivory/70 mt-1 leading-snug">
                Certified pure A2 desi ghee & genuine Kashmiri saffron in every batch.
              </p>
            </div>
          </div>

          {/* Heartfelt Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-[#0A2019] text-gold text-xs uppercase tracking-[0.2em] mb-4">
              <FaHistory className="text-xs" />
              <span>Patna's Sweet Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-6 tracking-tight leading-tight">
              A Legacy of Pure Ghee, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
                Reimagined for Royalty.
              </span>
            </h2>

            <div className="space-y-4 text-ivory/80 text-sm sm:text-base font-light leading-relaxed">
              <p>
                Nestled at <strong className="text-gold font-medium">Ramanandan Bhawan on Ashok Rajpath Road</strong>, 
                near the historic Tripolia Post Office in Mahendru, <span className="text-ivory font-normal">The Sweet Hub</span> was 
                born from an unwavering devotion to timeless Indian confectionery.
              </p>

              <p>
                We believe sweet-making is an imperial art form. Instead of crowded counters and industrial shortcuts, 
                our boutique brings calm, aristocratic refinement to Patna. Every morning before dawn, our master 
                confectioners slow-simmer whole milk in heavy brass kadhais, toast Goan cashews to golden perfection, 
                and hand-roll laddoos in fragrant, certified pure desi ghee.
              </p>

              <p>
                No synthetic food colors, no artificial chemical enhancers—just uncompromised authenticity, 
                warm Bihar hospitality, and sweets that melt like poetry on your tongue.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-gold/15">
              <div className="p-3 rounded-xl bg-[#0A2019]/50 border border-gold/15">
                <FaSeedling className="text-gold text-lg mb-1" />
                <h3 className="font-serif text-sm font-semibold text-ivory">Zero Preservatives</h3>
                <p className="text-[11px] text-ivory/60 mt-0.5">Fresh everyday, naturally</p>
              </div>

              <div className="p-3 rounded-xl bg-[#0A2019]/50 border border-gold/15">
                <FaCertificate className="text-gold text-lg mb-1" />
                <h3 className="font-serif text-sm font-semibold text-ivory">Pure Desi Ghee</h3>
                <p className="text-[11px] text-ivory/60 mt-0.5">Slow roasted perfection</p>
              </div>

              <div className="p-3 rounded-xl bg-[#0A2019]/50 border border-gold/15 col-span-2 sm:col-span-1">
                <FaHeart className="text-gold text-lg mb-1" />
                <h3 className="font-serif text-sm font-semibold text-ivory">Handcrafted Fresh</h3>
                <p className="text-[11px] text-ivory/60 mt-0.5">Open until 10:00 PM</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
