/**
 * The Sweet Hub - Menu & Sweets Catalog
 * Real prices and luxury curation for Patna's premier sweets boutique.
 */

export const CATEGORIES = [
  { id: "all", label: "All Collections" },
  { id: "laddoo", label: "Laddoo" },
  { id: "barfi", label: "Barfi" },
  { id: "bengali", label: "Bengali Sweets" },
  { id: "dryfruit", label: "Dry Fruit Sweets" },
  { id: "namkeen", label: "Namkeen & Savouries" },
  { id: "giftboxes", label: "Gift Boxes" },
];

// 6 Signature Sweets strictly for the Signature Collection section
export const SIGNATURE_SWEETS = [
  {
    id: "sig-1",
    name: "Royal Kaju Katli",
    hindiName: "शाही काजू कतली",
    tagline: "Finest Goan cashews kissed with pure silver vark and fragrant green cardamom.",
    price250g: 320,
    price500g: 620,
    price1kg: 1200,
    category: "barfi",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=900&auto=format&fit=crop", // placeholder: replace with shop's signature photo
    badge: "Boutique Bestseller",
    description: "Handcrafted using 100% grade-A cashews and minimal cane sugar, finished with delicate edible silver leaf. Silky, melt-in-mouth texture."
  },
  {
    id: "sig-2",
    name: "Shahi Desi Ghee Motichoor Laddoo",
    hindiName: "मोतीचूर लड्डू",
    tagline: "Fine micro-gram droplets fried in certified A2 cow ghee, steeped in saffron syrup.",
    price250g: 190,
    price500g: 360,
    price1kg: 700,
    category: "laddoo",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop", // placeholder
    badge: "Heritage Recipe",
    description: "Prepared daily fresh from slow-cooked golden gram flour, enriched with slivered pistachios and Kashmiri saffron strands."
  },
  {
    id: "sig-3",
    name: "Kesar Malai Cham Cham",
    hindiName: "केसर मलाई चमचम",
    tagline: "Fresh Bengali chhena rolls drenched in slow-reduced rabdi and saffron glaze.",
    price250g: 220,
    price500g: 420,
    price1kg: 800,
    category: "bengali",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=900&auto=format&fit=crop", // placeholder
    badge: "Chef's Pride",
    description: "Freshly churned artisanal paneer gently simmered in sugar syrup and crowned with thick malai rabdi and toasted almonds."
  },
  {
    id: "sig-4",
    name: "Anjeer & Pistachio Delight",
    hindiName: "अंजीर पिस्ता बर्फी",
    tagline: "Zero added refined sugar confection made with royal Afghan figs and Iranian pistachios.",
    price250g: 380,
    price500g: 740,
    price1kg: 1450,
    category: "dryfruit",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=900&auto=format&fit=crop", // placeholder
    badge: "Sugar-Free Luxury",
    description: "Rich, dense, and naturally sweet barfi combining tender sundried figs, crunchy California almonds, and hand-selected pistachios."
  },
  {
    id: "sig-5",
    name: "Rajwadi Kesar Peda of Patna",
    hindiName: "राजवाड़ी केसर पेड़ा",
    tagline: "Slow-caramelised khoya infused with saffron extracts and fragrant nutmeg.",
    price250g: 210,
    price500g: 400,
    price1kg: 780,
    category: "barfi",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1505253758473-96b3015f240a?q=80&w=900&auto=format&fit=crop", // placeholder
    badge: "Patna Classic",
    description: "The time-honoured taste of Magadh: pure milk solids condensed over a gentle flame for 6 hours, pressed into gold-crested medallions."
  },
  {
    id: "sig-6",
    name: "Shahi Gulab Jamun Supreme",
    hindiName: "शाही गुलाब जामुन",
    tagline: "Stuffed with pistachios, chironji, and cardamom, soaked in royal rose nectar.",
    price250g: 180,
    price500g: 340,
    price1kg: 650,
    category: "bengali",
    isSignature: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=900&auto=format&fit=crop", // placeholder
    badge: "Evergreen Decadence",
    description: "Plump, golden-brown spheres prepared with fresh mawa and infused with fragrant organic damask rose water."
  }
];

// Full Sweets Menu
export const FULL_MENU = [
  ...SIGNATURE_SWEETS,
  // More Laddoos
  {
    id: "lad-2",
    name: "Besan Laddoo Magaz",
    category: "laddoo",
    price250g: 175,
    price500g: 330,
    price1kg: 640,
    image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=900&auto=format&fit=crop",
    description: "Coarsely ground roasted chickpeas in pure desi ghee with crunchy melon seeds."
  },
  {
    id: "lad-3",
    name: "Atta & Gond Dry Fruit Laddoo",
    category: "laddoo",
    price250g: 220,
    price500g: 420,
    price1kg: 820,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop",
    description: "Wholesome winter delicacy prepared with edible gum, roasted whole wheat, and rich dry fruits."
  },
  // More Barfis
  {
    id: "bar-2",
    name: "Pista Khoya Barfi",
    category: "barfi",
    price250g: 240,
    price500g: 460,
    price1kg: 890,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=900&auto=format&fit=crop",
    description: "Two-layered decadence of velvety mawa layered over emerald roasted pistachios."
  },
  {
    id: "bar-3",
    name: "Dodha Royal Barfi",
    category: "barfi",
    price250g: 210,
    price500g: 400,
    price1kg: 780,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=900&auto=format&fit=crop",
    description: "Fudge-textured sprouted wheat and caramelized milk enriched with cashews."
  },
  // Bengali Sweets
  {
    id: "ben-2",
    name: "Spongy Kolkata Rasgulla",
    category: "bengali",
    price250g: 150,
    price500g: 290,
    price1kg: 560,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=900&auto=format&fit=crop",
    description: "Feather-light fresh cow milk chhena spheres stewed in crystalline cardamon syrup."
  },
  {
    id: "ben-3",
    name: "Kesar Rasmalai (Pack of 4)",
    category: "bengali",
    price250g: 220,
    price500g: 420,
    price1kg: 800,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=900&auto=format&fit=crop",
    description: "Flattened chhena patties afloat in chilled, thick saffron milk studded with dry fruits."
  },
  // Dry Fruit Sweets
  {
    id: "dry-2",
    name: "Kaju Pista Roll",
    category: "dryfruit",
    price250g: 340,
    price500g: 660,
    price1kg: 1280,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=900&auto=format&fit=crop",
    description: "Silky cashew paste cylinder wrapped around a core of crushed aromatic pistachios."
  },
  {
    id: "dry-3",
    name: "Badam Katli Royale",
    category: "dryfruit",
    price250g: 360,
    price500g: 700,
    price1kg: 1350,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=900&auto=format&fit=crop",
    description: "Almond diamond fudge prepared with California blanched almonds and edible silver."
  },
  // Namkeen
  {
    id: "nam-1",
    name: "Royal Shahi Mixture",
    category: "namkeen",
    price250g: 140,
    price500g: 260,
    price1kg: 500,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=900&auto=format&fit=crop",
    description: "Crispy sev, cashew nuts, raisins, and roasted lentils tossed in royal spices."
  },
  {
    id: "nam-2",
    name: "Kaju Bhujia Crisp",
    category: "namkeen",
    price250g: 160,
    price500g: 300,
    price1kg: 580,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=900&auto=format&fit=crop",
    description: "Golden spiced besan threads infused with real cashew paste and hing."
  },
  {
    id: "nam-3",
    name: "Mathri Royale with Ajwain",
    category: "namkeen",
    price250g: 130,
    price500g: 240,
    price1kg: 460,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=900&auto=format&fit=crop",
    description: "Flaky, desi ghee shortcrust savoury discs tempered with wild carom seeds."
  },
  // Gift Boxes
  {
    id: "box-1",
    name: "The Patna Heritage Box",
    category: "giftboxes",
    price250g: 650,
    price500g: 1200,
    price1kg: 2200,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=900&auto=format&fit=crop",
    description: "Gold embossed velvet box with 4 artisan sweets and roasted nuts."
  },
  {
    id: "box-2",
    name: "Imperial Wedding Shahi Trunk",
    category: "giftboxes",
    price250g: 1100,
    price500g: 2100,
    price1kg: 3900,
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop",
    description: "Handcrafted wooden trunk packed with royal dry fruit sweets, silver coins, and saffron."
  }
];

// Luxury Gift Hampers with detailed metadata
export const LUXURY_GIFT_BOXES = [
  {
    id: "hamper-royal",
    title: "The Royal Emerald Velvet Hamper",
    tagline: "Crafted for prestigious family celebrations, Diwali & weddings.",
    sizes: ["800g (Assorted 4 Sweets)", "1.2kg (Sweets + Roasted Nuts)"],
    price: "From ₹1,450",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=900&auto=format&fit=crop", // placeholder
    features: [
      "Deep emerald velvet box with engraved gold brass lock",
      "Kaju Katli, Anjeer Barfi & Desi Ghee Motichoor",
      "Personalized calligraphy greeting note with wax seal",
      "Complimentary golden gift carry bag"
    ]
  },
  {
    id: "hamper-wedding",
    title: "Shahi Vivah Trunk & Sweet Keepsake",
    tagline: "The premier choice for Patna’s royal wedding invitations & bidai.",
    sizes: ["1.5kg Grand Trunk", "2.5kg Imperial Chest"],
    price: "From ₹2,800",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=900&auto=format&fit=crop", // placeholder
    features: [
      "Antique brass filigree frame trunk lined with raw silk",
      "Customised assortment of gold-vark sweets & saffron pedas",
      "Pre-portioned compartments for nuts & sacred sweets",
      "Custom monogram printing available for orders > 25 boxes"
    ]
  },
  {
    id: "hamper-corporate",
    title: "The Connoisseur’s Dry Fruit Casket",
    tagline: "Elegance meets pure health for executive gifting and VIP clients.",
    sizes: ["600g Compact", "1kg Executive"],
    price: "From ₹1,850",
    image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?q=80&w=900&auto=format&fit=crop", // placeholder
    features: [
      "Rigid gold-foil box with satin ribbon finish",
      "100% sugar-free dry fruit sweets & Mamra almonds",
      "Hermetically sealed for pan-India courier freshness",
      "GST billing and customized corporate ribbons"
    ]
  }
];

// Verified Google Reviews
export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    name: "Dr. Alok Verma",
    location: "Kankarbagh, Patna",
    rating: 5,
    date: "2 weeks ago",
    review: "The Sweet Hub brings Delhi and Kolkata level confectionery luxury to Patna! Their Motichoor Laddoo is melted poetry in pure desi ghee. Elegant packaging made our daughter's wedding hampers stand out completely.",
    verified: true
  },
  {
    id: 2,
    name: "Priyanka Kashyap",
    location: "Boring Road, Patna",
    rating: 5,
    date: "1 month ago",
    review: "Finally a sweet shop near Tripolia Ashok Rajpath that values boutique ambiance and supreme hygiene. The Kaju Katli was ultra thin, fresh, and not overly sweet. WhatsApp ordering was effortless!",
    verified: true
  },
  {
    id: 3,
    name: "Rajeshwar Narayan",
    location: "Tripolia, Mahendru",
    rating: 5,
    date: "3 weeks ago",
    review: "Visited at 9:30 PM just before their 10 PM closing and was greeted with warm hospitality. Every piece of Cham Cham tasted like it was prepared an hour ago. 4.4 star rating is well deserved!",
    verified: true
  },
  {
    id: 4,
    name: "Sneha Sinha",
    location: "Rajendra Nagar, Patna",
    rating: 5,
    date: "A month ago",
    review: "Sent a 2kg gift hamper to our relatives in Danapur. The gold and emerald box looked like royal jewelry. The best Indian sweets boutique in Bihar hands down.",
    verified: true
  }
];
