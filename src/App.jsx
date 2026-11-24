import React from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SignatureCollection } from './components/SignatureCollection';
import { FullMenu } from './components/FullMenu';
import { LuxuryGiftBoxes } from './components/LuxuryGiftBoxes';
import { Story } from './components/Story';
import { Reviews } from './components/Reviews';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#050807] text-[#FAF6EE] selection:bg-[#C9A24B]/30 selection:text-[#FAF6EE]">
        {/* Sticky Luxury Navbar */}
        <Navbar />

        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Signature Collection (Strictly 6 Masterpieces) */}
        <SignatureCollection />

        {/* 3. Full Category-Based Menu */}
        <FullMenu />

        {/* 4. Luxury Gift Boxes & Wedding Hampers */}
        <LuxuryGiftBoxes />

        {/* 5. Our Story & Heritage */}
        <Story />

        {/* 6. Customer Reviews (4.4 Google Rating) */}
        <Reviews />

        {/* 7. Visit Us (Tripolia, Ashok Rajpath, Patna) */}
        <VisitUs />

        {/* 8. Luxury Footer */}
        <Footer />

        {/* Persistent Cart Drawer */}
        <CartDrawer />

        {/* Floating WhatsApp Action Button */}
        <FloatingWhatsApp />
      </div>
    </CartProvider>
  );
}

export default App;
