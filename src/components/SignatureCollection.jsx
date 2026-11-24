import React, { useState } from 'react';
import { SIGNATURE_SWEETS } from '../data/menu';
import { useCart } from '../context/CartContext';
import { FaPlus, FaCheck, FaCrown } from 'react-icons/fa';

export const SignatureCollection = () => {
  const { addToCart } = useCart();
  // Manage selected weight per card: default '500g'
  const [selectedWeights, setSelectedWeights] = useState({});
  const [addedIds, setAddedIds] = useState({});

  const handleWeightChange = (sweetId, weight) => {
    setSelectedWeights(prev => ({ ...prev, [sweetId]: weight }));
  };

  const handleAdd = (sweet) => {
    const weight = selectedWeights[sweet.id] || "500g";
    addToCart(sweet, weight, 1);
    
    // Quick success animation
    setAddedIds(prev => ({ ...prev, [sweet.id]: true }));
    setTimeout(() => {
      setAddedIds(prev => ({ ...prev, [sweet.id]: false }));
    }, 1500);
  };

  const getPrice = (sweet, weight) => {
    if (weight === "250g") return sweet.price250g;
    if (weight === "1kg") return sweet.price1kg;
    return sweet.price500g;
  };

  return (
    <section id="signature" className="py-24 bg-[#050807] relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-radial-emerald opacity-30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-radial-gold opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-emerald-950/60 text-gold text-xs uppercase tracking-[0.2em] mb-4">
            <FaCrown className="text-xs" />
            <span>Masterpiece Confections</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-4 tracking-tight">
            The Signature Collection
          </h2>
          
          <p className="text-ivory/70 text-sm sm:text-base font-light leading-relaxed">
            Reserved exclusively for our six most revered creations. Each recipe is slow-crafted 
            in limited batches using pure desi ghee, Iranian pistachios, and Kashmiri saffron.
          </p>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* 6 Featured Sweets Spacious Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {SIGNATURE_SWEETS.map((sweet) => {
            const currentWeight = selectedWeights[sweet.id] || "500g";
            const price = getPrice(sweet, currentWeight);
            const isAdded = addedIds[sweet.id];

            return (
              <div
                key={sweet.id}
                className="group luxury-glass rounded-2xl overflow-hidden flex flex-col justify-between luxury-glass-hover"
              >
                {/* Product Image with Slow Zoom & Gold Vignette */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-emerald-950">
                  <img
                    src={sweet.image}
                    alt={sweet.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C241D] via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-[#061611]/90 to-[#0A2019]/90 border border-gold/40 text-gold text-[11px] font-medium tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-md shadow-sm">
                    {sweet.badge}
                  </span>

                  {/* Hindi Subtitle overlay */}
                  {sweet.hindiName && (
                    <span className="absolute bottom-3 right-4 text-xs font-serif text-gold-light/80 tracking-widest drop-shadow">
                      {sweet.hindiName}
                    </span>
                  )}
                </div>

                {/* Sweet Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold-light transition-colors mb-2">
                      {sweet.name}
                    </h3>
                    <p className="text-xs text-gold/90 italic font-serif mb-3">
                      {sweet.tagline}
                    </p>
                    <p className="text-xs text-ivory/65 leading-relaxed font-light mb-6">
                      {sweet.description}
                    </p>
                  </div>

                  {/* Weight Selector & Price Container */}
                  <div className="pt-4 border-t border-gold/15 mt-auto">
                    
                    {/* Weight Selection Tabs */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] uppercase tracking-wider text-ivory/50 font-medium">
                        Select Weight:
                      </span>
                      <div className="inline-flex rounded-lg p-0.5 bg-[#061611] border border-gold/25">
                        {["250g", "500g", "1kg"].map((w) => (
                          <button
                            key={w}
                            onClick={() => handleWeightChange(sweet.id, w)}
                            className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                              currentWeight === w
                                ? 'bg-gold text-[#050807] shadow-sm font-semibold'
                                : 'text-ivory/70 hover:text-gold'
                            }`}
                          >
                            {w}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price and Add to Bag */}
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] text-ivory/50 uppercase tracking-wider block">Price ({currentWeight})</span>
                        <div className="text-2xl font-serif font-bold text-gold">
                          ₹{price.toLocaleString('en-IN')}
                        </div>
                      </div>

                      <button
                        onClick={() => handleAdd(sweet)}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 shadow-gold-sm ${
                          isAdded
                            ? 'bg-emerald-500 text-white'
                            : 'bg-gradient-to-r from-gold/90 to-gold text-[#050807] hover:from-gold-light hover:to-gold hover:shadow-gold-md'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <FaCheck />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <FaPlus className="text-[10px]" />
                            <span>Add to Order</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note for Owner Customization */}
        <div className="mt-14 text-center">
          <p className="text-xs text-ivory/40 italic font-light">
            Note: All sweets are packed in hermetically sealed food-grade boutique boxes to preserve maximum aroma and taste.
          </p>
        </div>

      </div>
    </section>
  );
};
