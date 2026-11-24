# 🍬 The Sweet Hub | Luxury Indian Sweets Boutique (Patna)

> **"Crafted with Tradition. Served with Luxury."**  
> Patna's premier high-end Indian sweets boutique located at **Ramanandan Bhawan, Ashok Rajpath Road, near Post Office, Mahendru, Tripolia, Patna, Bihar 800006**.  
> Rated **4.4 Stars on Google** • Open Daily until **10:00 PM**.

---

## 🌟 Features & Highlights

- **Luxury Aesthetic**: Deep emerald green (`#061611`), rich black, regal gold accents (`#C9A24B`), and soft ivory (`#FAF6EE`) with delicate Indian jaali patterns.
- **Mobile-First & Responsive**: Engineered for Patna smartphone shoppers with buttery-smooth interactions.
- **The Signature Collection**: Spacious grid highlighting the 6 royal masterpiece sweets with weight-based pricing (250g, 500g, 1kg).
- **Categorized Full Menu**: Smooth tabs for Laddoo, Barfi, Bengali Sweets, Dry Fruit Sweets, Namkeen & Savouries, and Gift Hampers.
- **Bespoke Luxury Gift Boxes**: Specialized wedding and festival trunks with an interactive "Customise Your Box" WhatsApp concierge.
- **Heartfelt Heritage Story**: Emphasizing 100% certified pure desi ghee, zero chemical preservatives, and daily fresh preparation.
- **Google Reviews Section**: Prominently featuring the 4.4 Google rating and authentic customer reviews.
- **Visit Us**: Embedded interactive Google Map, full address, opening hours, one-tap "Call", "Directions", and "WhatsApp" buttons.
- **Direct WhatsApp Cart Checkout**:
  - Add sweets by weight (250g, 500g, 1kg).
  - Saved persistently in React state & `localStorage`.
  - Generates pre-formatted WhatsApp order breakdown with itemized quantities, weights, and total calculated bill.
- **Floating WhatsApp Button**: Persistent on the bottom right corner of every page for instant communication.

---

## 🚀 Quick Start Guide

### 1. Requirements
- Node.js (v18 or higher recommended)
- npm or pnpm

### 2. Installation
```bash
cd sweet-hub
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize

### 1. Change Shop Phone & WhatsApp Number
Open [`src/data/config.js`](file:///c:/Users/rohit/sweet-hub/src/data/config.js) and update:
```javascript
export const SHOP_CONFIG = {
  name: "The Sweet Hub",
  whatsappNumber: "919431022345", // Replace with your 10-digit number with country code (no +)
  whatsappDisplay: "+91 94310 22345",
  phoneNumber: "+91 94310 22345",
  address: "Ramanandan Bhawan, Ashok Rajpath Road, near Post Office, Mahendru, Tripolia, Patna, Bihar 800006",
  openingHours: "Open Daily: 9:00 AM – 10:00 PM",
  // ...
};
```

### 2. Edit or Add Sweets & Prices
Open [`src/data/menu.js`](file:///c:/Users/rohit/sweet-hub/src/data/menu.js):
- **Signature Sweets**: Update the `SIGNATURE_SWEETS` array (strictly 6 items to maintain luxury spacing).
- **Full Menu**: Update `FULL_MENU` with your sweets, descriptions, categories (`laddoo`, `barfi`, `bengali`, `dryfruit`, `namkeen`, `giftboxes`), and prices for 250g, 500g, and 1kg.
- **Replace Photos**: Replace image URLs with your shop's high-resolution photography.

### 3. Change Theme Colors or Fonts
- Colors & fonts can be tuned in [`tailwind.config.js`](file:///c:/Users/rohit/sweet-hub/tailwind.config.js).
- Fonts loaded via Google Fonts in [`index.html`](file:///c:/Users/rohit/sweet-hub/index.html) (*Playfair Display*, *Cormorant Garamond*, *Poppins*).

---

## 🌐 Free Deployment Guide

### Deploying to Vercel (Recommended)
1. Push this folder to your GitHub repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import your repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Your live URL will be ready in under 60 seconds!

### Deploying to Netlify
1. Sign in to [Netlify](https://www.netlify.com).
2. Go to **Sites** -> **Add new site** -> **Import an existing project**.
3. Select your GitHub repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **"Deploy Site"**.

---

*Made with love in Patna for The Sweet Hub.*
