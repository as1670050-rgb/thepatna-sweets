import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { FaTimes, FaTrashAlt, FaPlus, FaMinus, FaWhatsapp, FaShoppingBag } from 'react-icons/fa';

export const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartItemCount,
    generateWhatsAppOrderUrl
  } = useCart();

  const [customerNotes, setCustomerNotes] = useState('');

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-in Panel */}
      <div className="relative w-full max-w-md bg-[#061611] border-l border-gold/30 h-full shadow-2xl flex flex-col z-10">
        
        {/* Header */}
        <div className="p-5 border-b border-gold/20 flex items-center justify-between bg-[#0A2019]">
          <div className="flex items-center gap-2.5">
            <FaShoppingBag className="text-gold text-lg" />
            <h3 className="font-serif text-xl font-bold text-ivory">
              Your Sweet Selection
            </h3>
            {cartItemCount > 0 && (
              <span className="text-xs bg-gold text-[#050807] font-bold px-2 py-0.5 rounded-full">
                {cartItemCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 text-ivory/60 hover:text-gold transition-colors"
            aria-label="Close cart drawer"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 text-ivory/50 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#0A2019] border border-gold/20 flex items-center justify-center text-gold/40 text-2xl mb-4">
                <FaShoppingBag />
              </div>
              <p className="font-serif text-lg text-ivory/80">Your bag is empty</p>
              <p className="text-xs text-ivory/50 mt-1 max-w-xs">
                Explore our signature collections or full menu and add handpicked sweets to your order.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 px-6 py-2.5 rounded-full bg-gold/90 text-[#050807] text-xs font-semibold uppercase tracking-wider hover:bg-gold"
              >
                Browse Sweets
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.cartItemId}
                className="luxury-glass p-3.5 rounded-xl flex gap-3.5 items-center border border-gold/20"
              >
                {/* Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-cover bg-black/40 border border-gold/20 shrink-0"
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-semibold text-ivory truncate">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] bg-[#061611] text-gold border border-gold/30 px-2 py-0.5 rounded font-medium">
                      {item.weight}
                    </span>
                    <span className="text-xs text-ivory/70 font-mono">
                      ₹{item.unitPrice} each
                    </span>
                  </div>
                  
                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 mt-2.5">
                    <div className="flex items-center border border-gold/30 rounded bg-[#061611]">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-ivory/70 hover:text-gold"
                        aria-label="Decrease quantity"
                      >
                        <FaMinus className="text-[9px]" />
                      </button>
                      <span className="px-2.5 py-0.5 text-xs font-semibold text-ivory font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-ivory/70 hover:text-gold"
                        aria-label="Increase quantity"
                      >
                        <FaPlus className="text-[9px]" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.cartItemId)}
                      className="text-red-400/60 hover:text-red-400 text-xs p-1"
                      aria-label="Remove item"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>

                {/* Line Total */}
                <div className="text-right shrink-0">
                  <div className="font-serif font-bold text-sm text-gold">
                    ₹{(item.unitPrice * item.quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
            ))
          )}

          {cart.length > 0 && (
            <div className="pt-2">
              <label className="block text-[11px] uppercase tracking-wider text-gold/80 mb-1.5 font-medium">
                Add note for shop (gift packaging / delivery time):
              </label>
              <textarea
                rows="2"
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                placeholder="e.g. Please pack in festive golden box, delivery required by 6 PM today..."
                className="w-full bg-[#030D0A] border border-gold/30 rounded-lg p-2.5 text-xs text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-gold"
              />
            </div>
          )}
        </div>

        {/* Cart Footer Checkout Actions */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-gold/20 bg-[#0A2019] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-ivory/70">Estimated Bill:</span>
              <span className="font-serif text-2xl font-bold text-gold">
                ₹{cartTotal.toLocaleString('en-IN')}
              </span>
            </div>

            <p className="text-[11px] text-ivory/50 leading-tight">
              Taxes calculated at dispatch. Pickup & Patna home delivery available.
            </p>

            {/* Direct WhatsApp Order Button */}
            <a
              href={generateWhatsAppOrderUrl(customerNotes)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold-light to-gold text-[#050807] font-semibold text-xs tracking-wider uppercase hover:shadow-gold-md hover:brightness-105 transition-all duration-300"
            >
              <FaWhatsapp className="text-lg text-[#050807]" />
              <span>Send Order Directly to WhatsApp</span>
            </a>

            <button
              onClick={clearCart}
              className="w-full text-center text-[11px] text-ivory/40 hover:text-red-400 py-1 transition-colors"
            >
              Clear Entire Bag
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
