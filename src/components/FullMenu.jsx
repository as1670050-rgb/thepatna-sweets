import React, { useState } from 'react';
import { CATEGORIES, FULL_MENU } from '../data/menu';
import { useCart } from '../context/CartContext';
import { FaPlus, FaCheck, FaUtensils } from 'react-icons/fa';

export const FullMenu = () => {
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState("all");
  const [selectedWeights, setSelectedWeights] = useState({});
  const [addedItems, setAddedItems] = useState({});

  const filteredItems = activeTab === "all"
    ? FULL_MENU
    : FULL_MENU.filter(item => item.category === activeTab);

  const handleWeightSelect = (itemId, weight) => {
    setSelectedWeights(prev => ({ ...prev, [itemId]: weight }));
  };

  const handleAddToCart = (item) => {
    const weight = selectedWeights[item.id] || "500g";
    addToCart(item, weight, 1);

    setAddedItems(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  const getItemPrice = (item, weight) => {
    if (weight === "250g") return item.price250g;
    if (weight === "1kg") return item.price1kg;
    return item.price500g;
  };

  return (
    <section id="menu" className="py-24 bg-[#061611] relative">
      <div className="absolute inset-0 bg-jaali opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-[#0A2019] text-gold text-xs uppercase tracking-[0.2em] mb-4">
            <FaUtensils className="text-xs" />
            <span>Artisanal Confectionery</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-4 tracking-tight">
            Our Complete Menu
          </h2>
          
          <p className="text-ivory/70 text-sm sm:text-base font-light">
            Explore our curated range of pure desi ghee laddoos, rich barfis, fresh Bengali delicacies, 
            premium dry fruit mithai, and royal Patna savouries.
          </p>

          <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 border ${
                activeTab === cat.id
                  ? 'bg-gold text-[#050807] border-gold shadow-gold-sm font-semibold'
                  : 'bg-[#0A2019]/70 text-ivory/80 border-gold/20 hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => {
            const currentWeight = selectedWeights[item.id] || "500g";
            const price = getItemPrice(item, currentWeight);
            const isAdded = addedItems[item.id];

            return (
              <div
                key={item.id}
                className="luxury-glass rounded-xl overflow-hidden flex flex-col justify-between hover:border-gold/50 transition-all duration-300 group"
              >
                {/* Item Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C241D] via-transparent to-transparent opacity-70" />
                  
                  {item.isSignature && (
                    <span className="absolute top-2.5 left-2.5 bg-gold/90 text-[#050807] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                      Signature
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ivory group-hover:text-gold-light transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-ivory/60 mt-1 line-clamp-2 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Weight Selector */}
                  <div className="mt-4 pt-3 border-t border-gold/15">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] text-ivory/50 uppercase tracking-wider">Weight</span>
                      <div className="flex gap-1">
                        {["250g", "500g", "1kg"].map((w) => (
                          <button
                            key={w}
                            onClick={() => handleWeightSelect(item.id, w)}
                            className={`px-2 py-0.5 text-[11px] rounded transition-all ${
                              currentWeight === w
                                ? 'bg-gold text-[#050807] font-semibold'
                                : 'bg-[#061611] text-ivory/60 hover:text-gold border border-gold/15'
                            }`}
                          >
                            {w}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price & Add */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-serif text-lg font-bold text-gold">
                          ₹{price.toLocaleString('en-IN')}
                        </span>
                        <span className="text-[10px] text-ivory/50 ml-1">/ {currentWeight}</span>
                      </div>

                      <button
                        onClick={() => handleAddToCart(item)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isAdded
                            ? 'bg-emerald-500 text-white'
                            : 'bg-gold/90 hover:bg-gold text-[#050807] hover:shadow-gold-sm'
                        }`}
                        aria-label={`Add ${item.name} to order`}
                      >
                        {isAdded ? <FaCheck className="text-xs" /> : <FaPlus className="text-xs" />}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
