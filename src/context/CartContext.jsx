import React, { createContext, useContext, useState, useEffect } from 'react';
import { SHOP_CONFIG } from '../data/config';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('sweet_hub_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('sweet_hub_cart', JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart]);

  // Add item with specified weight (250g, 500g, 1kg)
  const addToCart = (item, weight = "500g", quantity = 1) => {
    let unitPrice = item.price500g;
    if (weight === "250g") unitPrice = item.price250g;
    if (weight === "1kg") unitPrice = item.price1kg;

    const cartItemId = `${item.id}-${weight}`;

    setCart(prev => {
      const existing = prev.find(i => i.cartItemId === cartItemId);
      if (existing) {
        return prev.map(i =>
          i.cartItemId === cartItemId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      } else {
        return [
          ...prev,
          {
            cartItemId,
            id: item.id,
            name: item.name,
            weight,
            unitPrice,
            quantity,
            image: item.image,
            category: item.category
          }
        ];
      }
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
    } else {
      setCart(prev =>
        prev.map(item =>
          item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  const removeFromCart = (cartItemId) => {
    setCart(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Generate WhatsApp order URL
  const generateWhatsAppOrderUrl = (customerNotes = "") => {
    if (cart.length === 0) return `https://wa.me/${SHOP_CONFIG.whatsappNumber}`;

    let message = `*Namaste The Sweet Hub, Patna!* 🍬✨\n`;
    message += `I would like to place an order from your luxury boutique:\n\n`;
    message += `*ORDER DETAILS:*\n`;

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* (${item.weight})\n`;
      message += `   Qty: ${item.quantity} × ₹${item.unitPrice} = *₹${item.quantity * item.unitPrice}*\n`;
    });

    message += `\n━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*ESTIMATED TOTAL: ₹${cartTotal.toLocaleString('en-IN')}*\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;

    if (customerNotes.trim()) {
      message += `*Special Note:* ${customerNotes.trim()}\n\n`;
    }

    message += `📍 *Delivery/Pickup at:* Ramanandan Bhawan, Ashok Rajpath, Patna\n`;
    message += `Please confirm availability and dispatch schedule. Thank you!`;

    const encoded = encodeURIComponent(message);
    return `https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encoded}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartItemCount,
        generateWhatsAppOrderUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
