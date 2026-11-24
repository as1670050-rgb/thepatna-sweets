import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { SHOP_CONFIG } from '../data/config';
import { FaWhatsapp, FaShoppingBag, FaBars, FaTimes, FaPhoneAlt, FaStar } from 'react-icons/fa';

export const Navbar = () => {
  const { cartItemCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Signature', href: '#signature' },
    { name: 'Full Menu', href: '#menu' },
    { name: 'Luxury Hampers', href: '#giftboxes' },
    { name: 'Our Heritage', href: '#story' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit Us', href: '#visitus' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#061611] border-b border-gold/20 py-1.5 px-4 text-xs text-ivory/80 text-center flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 text-gold">
          <FaStar className="text-[11px]" />
          <span className="font-medium tracking-wide">4.4 Google Rated</span>
        </span>
        <span className="text-gold/40">•</span>
        <span className="hidden sm:inline">Tripolia, Ashok Rajpath, Patna</span>
        <span className="text-gold/40 hidden sm:inline">•</span>
        <span className="text-gold-light font-medium">Open Daily until 10:00 PM</span>
        <span className="text-gold/40 hidden md:inline">•</span>
        <a 
          href={`tel:${SHOP_CONFIG.phoneNumber}`} 
          className="hidden md:inline hover:text-gold transition-colors underline decoration-gold/40"
        >
          Call: {SHOP_CONFIG.whatsappDisplay}
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050807]/95 backdrop-blur-md shadow-luxury border-b border-gold/20 py-3'
            : 'bg-gradient-to-b from-[#050807]/90 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex flex-col group">
            <span className="font-serif text-2xl sm:text-3xl tracking-widest text-gold font-bold group-hover:text-gold-light transition-colors drop-shadow-sm">
              THE SWEET HUB
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-ivory/70 uppercase -mt-0.5 font-light">
              Patna • Luxury Sweets Boutique
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-normal text-ivory/80 hover:text-gold transition-colors tracking-wide relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Cart & WhatsApp CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Cart"
              className="relative p-2.5 rounded-full border border-gold/30 bg-emerald-surface/60 hover:border-gold hover:bg-emerald-surface transition-all text-gold flex items-center justify-center group"
            >
              <FaShoppingBag className="text-lg group-hover:scale-110 transition-transform" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-gold text-[#050807] text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-gold-sm animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Quick WhatsApp Order */}
            <a
              href={`https://wa.me/${SHOP_CONFIG.whatsappNumber}?text=${encodeURIComponent("Namaste The Sweet Hub, I would like to explore your luxury sweets and enquire about ordering.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/90 to-gold text-[#050807] font-medium text-xs tracking-wider uppercase hover:shadow-gold-md hover:from-gold-light hover:to-gold transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-base text-[#050807]" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gold hover:text-gold-light text-xl"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#061611]/98 border-b border-gold/30 px-6 py-6 backdrop-blur-xl animate-fadeIn">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-ivory text-base font-serif tracking-wide py-1 border-b border-gold/10 hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${SHOP_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-gold text-[#050807] font-medium text-sm tracking-wider uppercase"
                >
                  <FaWhatsapp className="text-lg" />
                  Order on WhatsApp
                </a>
                <a
                  href={`tel:${SHOP_CONFIG.phoneNumber}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md border border-gold/40 text-gold text-xs tracking-wider"
                >
                  <FaPhoneAlt />
                  Call: {SHOP_CONFIG.whatsappDisplay}
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
