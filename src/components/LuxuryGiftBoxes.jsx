import React, { useState } from 'react';
import { LUXURY_GIFT_BOXES } from '../data/menu';
import { SHOP_CONFIG } from '../data/config';
import { FaGift, FaWhatsapp, FaCheckCircle, FaTimes } from 'react-icons/fa';

export const LuxuryGiftBoxes = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [customNotes, setCustomNotes] = useState('');
  const [boxQuantity, setBoxQuantity] = useState('10');

  const openCustomModal = (box) => {
    setSelectedBox(box);
  };

  const closeCustomModal = () => {
    setSelectedBox(null);
    setCustomNotes('');
  };

  const handleSendCustomInquiry = (e) => {
    e.preventDefault();
    if (!selectedBox) return;

    let text = `*Namaste The Sweet Hub!* 🎁✨\n`;
    text += `I would like to enquire about customising *${selectedBox.title}*:\n\n`;
    text += `• Estimated Boxes: *${boxQuantity} units*\n`;
    if (customNotes.trim()) {
      text += `• Customisation Request: ${customNotes.trim()}\n`;
    }
    text += `\nPlease share catalogue options and bulk pricing for Patna delivery. Thank you!`;

    window.open(`https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    closeCustomModal();
  };

  return (
    <section id="giftboxes" className="py-24 bg-[#050807] relative overflow-hidden">
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-radial-gold opacity-15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-[#0A2019] text-gold text-xs uppercase tracking-[0.2em] mb-4">
            <FaGift className="text-xs" />
            <span>Royal Festivities & Weddings</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-4 tracking-tight">
            Luxury Gift Hampers
          </h2>
          
          <p className="text-ivory/70 text-sm sm:text-base font-light leading-relaxed">
            Elevate weddings, Diwali, Eid, and VIP corporate celebrations across Patna. 
            Housed in velvet-lined boxes and antique brass filigree trunks with bespoke personalization.
          </p>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Hampers Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LUXURY_GIFT_BOXES.map((box) => (
            <div
              key={box.id}
              className="luxury-glass rounded-2xl overflow-hidden flex flex-col justify-between border border-gold/25 hover:border-gold/60 transition-all duration-300 group shadow-luxury"
            >
              {/* Hamper Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/60">
                <img
                  src={box.image}
                  alt={box.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061611] via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-4 right-4 bg-gold text-[#050807] font-serif font-bold text-sm px-3 py-1 rounded-full shadow-gold-sm">
                  {box.price}
                </span>
              </div>

              {/* Hamper Details */}
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold-light transition-colors mb-2">
                    {box.title}
                  </h3>
                  <p className="text-xs text-gold/80 italic font-serif mb-5">
                    {box.tagline}
                  </p>

                  {/* Available Sizes */}
                  <div className="mb-5">
                    <span className="text-[11px] text-ivory/50 uppercase tracking-wider block mb-1.5 font-medium">
                      Available Capacities:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {box.sizes.map((s, idx) => (
                        <span key={idx} className="text-xs bg-[#061611] border border-gold/20 text-ivory/80 px-2.5 py-1 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights Checklist */}
                  <ul className="space-y-2 mb-6">
                    {box.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-ivory/70 font-light">
                        <FaCheckCircle className="text-gold text-[13px] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Customise Button */}
                <button
                  onClick={() => openCustomModal(box)}
                  className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#0C241D] to-[#0A2019] hover:from-gold hover:to-gold-light text-gold hover:text-[#050807] border border-gold/40 hover:border-gold font-medium text-xs tracking-wider uppercase transition-all duration-300 shadow-sm"
                >
                  <FaGift className="text-sm" />
                  <span>Customise Your Box</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Customise Box Modal */}
      {selectedBox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0A2019] border border-gold/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={closeCustomModal}
              className="absolute top-4 right-4 text-ivory/60 hover:text-gold p-1"
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>

            <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest mb-1">
              <FaGift />
              <span>Bespoke Concierge</span>
            </div>
            
            <h3 className="font-serif text-2xl text-ivory font-bold mb-2">
              Customise {selectedBox.title}
            </h3>
            
            <p className="text-xs text-ivory/70 mb-6 font-light">
              We personalize sweet combinations, royal velvet packaging, wax seals, and wedding card inserts for bulk and boutique gifting.
            </p>

            <form onSubmit={handleSendCustomInquiry} className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-gold/80 font-medium mb-1 tracking-wider">
                  Estimated Quantity of Boxes
                </label>
                <select
                  value={boxQuantity}
                  onChange={(e) => setBoxQuantity(e.target.value)}
                  className="w-full bg-[#061611] border border-gold/30 rounded-lg p-2.5 text-ivory text-sm focus:outline-none focus:border-gold"
                >
                  <option value="5-10 Boxes (Family Celebration)">5 – 10 Boxes (Family Celebration)</option>
                  <option value="11-25 Boxes (Wedding Invite Gifting)">11 – 25 Boxes (Wedding Invite Gifting)</option>
                  <option value="26-50 Boxes (Grand Wedding Ceremony)">26 – 50 Boxes (Grand Wedding Ceremony)</option>
                  <option value="50+ Boxes (Corporate / Large Wedding)">50+ Boxes (Corporate / Large Wedding)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase text-gold/80 font-medium mb-1 tracking-wider">
                  Preferred Sweets or Special Requests
                </label>
                <textarea
                  rows="3"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="e.g., Kaju Katli + Anjeer Barfi combination, saffron peda, bride/groom initials monogram..."
                  className="w-full bg-[#061611] border border-gold/30 rounded-lg p-3 text-ivory text-xs placeholder:text-ivory/30 focus:outline-none focus:border-gold"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-gold to-gold-light text-[#050807] font-semibold text-xs tracking-wider uppercase hover:shadow-gold-md transition-all"
                >
                  <FaWhatsapp className="text-base" />
                  <span>Send Request to Shop WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
