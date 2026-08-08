export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: "celebration-cakes" | "luxury-indulgence" | "cheesecakes" | "jar-cakes";
  categoryLabel: string;
  price: number;
  priceDisplay?: string;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  description: string;
  isBestseller?: boolean;
  isLuxury?: boolean;
  badge?: string;
  tags?: string[]; // e.g. ["signature", "vegan", "gluten-free", "seasonal", "top-rated"]
  cardBg?: "mint" | "amber" | "pink" | "peach" | "lavender" | "lilac" | "sage" | "sky";
  variants: ProductVariant[];
  ingredients?: string;
  flavour?: string;
  preparationTime?: string;
}

export const CATEGORIES = [
  {
    id: "all",
    name: "All Cakes",
    count: 12
  },
  {
    id: "celebration-cakes",
    name: "Celebration & Theme Cakes",
    count: 5
  },
  {
    id: "luxury-indulgence",
    name: "Luxury Indulgence",
    count: 3
  },
  {
    id: "cheesecakes",
    name: "Cheesecakes",
    count: 3
  },
  {
    id: "jar-cakes",
    name: "Jar Cakes & Treats",
    count: 2
  }
];

export const TAG_FILTERS = [
  { id: "all", label: "All Cakes" },
  { id: "signature", label: "Signature" },
  { id: "vegan", label: "Vegan" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "seasonal", label: "Seasonal" }
];

export const PRODUCTS: Product[] = [
  {
    id: "matcha-drift",
    name: "Matcha Centered Vanilla Sponge Cake",
    category: "celebration-cakes",
    categoryLabel: "Celebration & Theme Cakes",
    price: 42.00,
    priceDisplay: "$42.00",
    rating: 4.95,
    reviewsCount: 142,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsX-YyECMEzppM67Ln3eE6sDfZsmO48-NFZezf61OPEQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsX-YyECMEzppM67Ln3eE6sDfZsmO48-NFZezf61OPEQ&s=10"
    ],
    description: "Stone-ground matcha layers balanced with smooth milk cream and gentle cocoa notes for a clean, calming finish.",
    isBestseller: true,

    tags: ["vegan"],
    cardBg: "peach",
    flavour: "Stone-Ground Matcha & Milk Cream",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cake", price: 42.00 }
    ]
  },
  {
    id: "amber-honey",
    name: "Amber Chocolate Honey Delight",
    category: "celebration-cakes",
    categoryLabel: "Celebration & Theme Cakes",
    price: 38.00,
    priceDisplay: "$38.00",
    rating: 4.98,
    reviewsCount: 184,
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Honey-soaked layers combined with soft vanilla cream and toasted grain notes for warm, lingering sweetness.",
    isBestseller: true,

    tags: ["signature", "top-rated"],
    cardBg: "sky",
    flavour: "Raw Honey & Vanilla Bean Cream",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cake", price: 38.00 }
    ]
  },
  {
    id: "scarlet-bloom",
    name: "Scarlet Bloom",
    category: "celebration-cakes",
    categoryLabel: "Celebration & Theme Cakes",
    price: 45.00,
    priceDisplay: "$45.00",
    rating: 4.90,
    reviewsCount: 112,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2u-EOrECJx9WSkQpx2P92MBKxQ0MQD1kZE7Ws_qCSKA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2u-EOrECJx9WSkQpx2P92MBKxQ0MQD1kZE7Ws_qCSKA&s=10"
    ],
    description: "Light sponge cake layered with berry cream and finished with fragrant floral sugar accents.",
    isBestseller: true,

    tags: ["seasonal", "signature"],
    cardBg: "pink",
    flavour: "Wild Berry Cream & Floral Accents",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cake", price: 45.00 }
    ]
  },
  {
    id: "dark-eclipse",
    name: "Dark Eclipse",
    category: "luxury-indulgence",
    categoryLabel: "Luxury Indulgence",
    price: 40.00,
    priceDisplay: "$40.00",
    rating: 4.92,
    reviewsCount: 165,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FwwEBR0peiVyRsJ4YD9s2yyFeF6eZ8tDZDOidYh9BQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FwwEBR0peiVyRsJ4YD9s2yyFeF6eZ8tDZDOidYh9BQ&s=10"
    ],
    description: "Cocoa sponge with soft caramel layers and smooth vanilla finish throughout.",
    isLuxury: true,

    tags: ["signature"],
    cardBg: "pink",
    flavour: "70% Dark Cocoa & Salted Caramel",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Slice/Cake", price: 40.00 }
    ]
  },
  {
    id: "citrus-lift",
    name: "Citrus Lift",
    category: "cheesecakes",
    categoryLabel: "Cheesecakes",
    price: 44.00,
    priceDisplay: "$44.00",
    rating: 4.89,
    reviewsCount: 98,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFjt5BovpNz_qeXjJcFBHFgBElW3Z1DWYY8bgA2dBvA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFjt5BovpNz_qeXjJcFBHFgBElW3Z1DWYY8bgA2dBvA&s=10"
    ],
    description: "Bright lemon cream layered with fresh berries and a crisp, buttery crumble base.",

    tags: ["gluten-free", "seasonal"],
    cardBg: "mint",
    flavour: "Meyer Lemon & Berry Crumble",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cheesecake", price: 44.00 }
    ]
  },
  {
    id: "golden-peach",
    name: "Golden Peach",
    category: "celebration-cakes",
    categoryLabel: "Celebration & Theme Cakes",
    price: 40.00,
    priceDisplay: "$40.00",
    rating: 4.88,
    reviewsCount: 84,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-E8xcFFDx7fDS5QCCdpOe3oeJpvYumaamRrqnSQHbag&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-E8xcFFDx7fDS5QCCdpOe3oeJpvYumaamRrqnSQHbag&s=10"
    ],
    description: "Juicy peach slices layered with soft cake and lightly whipped cream for balance.",

    tags: ["seasonal"],
    cardBg: "lilac",
    flavour: "Golden Peach & Whipped Vanilla",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cake", price: 40.00 }
    ]
  },


  {
    id: "Chocolaty Creme Candy Cake",
    name: "Chocolaty Creme Candy Cake",
    category: "celebration-cakes",
    categoryLabel: "Celebration & Theme Cakes",
    price: 40.00,
    priceDisplay: "$40.00",
    rating: 4.88,
    reviewsCount: 84,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_IBhkpqoCy5ack7BswigDcPymNT6atAw2fpp1tqrFg&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_IBhkpqoCy5ack7BswigDcPymNT6atAw2fpp1tqrFg&s=10"
    ],
    description: "Juicy slices layered with soft cake and lightly whipped cream for balance.",

    tags: ["seasonal"],
    cardBg: "pink",
    flavour: "Golden Peach & Whipped Vanilla",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cake", price: 40.00 }
    ]
  },


  {
    id: "Peach Butterscotch Berry",
    name: "Peach Butterscotch Berry",
    category: "celebration-cakes",
    categoryLabel: "Celebration & Theme Cakes",
    price: 40.00,
    priceDisplay: "$40.00",
    rating: 4.88,
    reviewsCount: 84,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhOPs2Qm12z3JSdQendpdYD7NIV98YvjR5NSYORKvqA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhOPs2Qm12z3JSdQendpdYD7NIV98YvjR5NSYORKvqA&s=10"
    ],
    description: "Juicy peach slices layered with soft cake and lightly whipped cream for balance.",

    tags: ["seasonal"],
    cardBg: "amber",
    flavour: "Golden Peach & Whipped Vanilla",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cake", price: 40.00 }
    ]
  },

  {
    id: "belgian-dark-truffle",
    name: "Belgian Dark Truffle",
    category: "luxury-indulgence",
    categoryLabel: "Luxury Indulgence",
    price: 48.00,
    priceDisplay: "$48.00",
    rating: 4.97,
    reviewsCount: 210,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqlFJldb7Bp76qExOtWOD1wYj5xtvbWuWR5CRQ9MK0Q&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHqlFJldb7Bp76qExOtWOD1wYj5xtvbWuWR5CRQ9MK0Q&s=10"
    ],
    description: "70% single-origin Belgian dark chocolate ganache layered with cocoa chiffon and hand-cut chocolate curls.",
    isLuxury: true,

    tags: ["signature"],
    cardBg: "amber",
    flavour: "Belgian Dark Chocolate",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cake", price: 48.00 }
    ]
  },
  {
    id: "ny-baked-cheesecake",
    name: "New York Baked Cheesecake",
    category: "cheesecakes",
    categoryLabel: "Cheesecakes",
    price: 46.00,
    priceDisplay: "$46.00",
    rating: 4.93,
    reviewsCount: 156,
    image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Dense and creamy classic New York cheesecake baked slow on a buttery graham crust with berry compote.",

    tags: ["signature", "top-rated"],
    cardBg: "amber",
    flavour: "Vanilla Bean & Graham Crust",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cheesecake", price: 46.00 }
    ]
  },
  {
    id: "biscoff-dream",
    name: "Biscoff Speculoos Crunch",
    category: "cheesecakes",
    categoryLabel: "Cheesecakes",
    price: 43.00,
    priceDisplay: "$43.00",
    rating: 4.94,
    reviewsCount: 130,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAMPGwv9OXkp9Ojd5iIYldf0qmUPrlqpYqEUODojRMA&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAMPGwv9OXkp9Ojd5iIYldf0qmUPrlqpYqEUODojRMA&s=10"
    ],
    description: "Creamy cheesecake infused with authentic Biscoff cookie butter on a crisp speculoos crust with caramel drizzle.",
    isBestseller: true,

    tags: ["signature"],
    cardBg: "sky",
    flavour: "Belgian Speculoos Biscoff",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Standard Cheesecake", price: 43.00 }
    ]
  },
  {
    id: "espresso-tiramisu-jar",
    name: "Espresso Tiramisu Jar",
    category: "jar-cakes",
    categoryLabel: "Jar Cakes & Treats",
    price: 24.00,
    priceDisplay: "$24.00",
    rating: 4.96,
    reviewsCount: 189,
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Italian savoiardi biscuits soaked in espresso, layered with fluffy mascarpone cream and cocoa dust in a glass jar.",

    tags: ["vegan", "signature"],
    cardBg: "pink",
    flavour: "Single-Origin Espresso & Mascarpone",
    preparationTime: "Express Delivery",
    variants: [
      { id: "v1", name: "Glass Jar 200ml", price: 24.00 }
    ]
  },
  {
    id: "salted-caramel-jar",
    name: "Salted Caramel Pecan Jar",
    category: "jar-cakes",
    categoryLabel: "Jar Cakes & Treats",
    price: 26.00,
    priceDisplay: "$26.00",
    rating: 4.89,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Himalayan pink salt caramel sponge layered with buttery toasted pecans and vanilla mousseline.",

    tags: ["gluten-free"],
    cardBg: "mint",
    flavour: "Salted Caramel & Roasted Pecan",
    preparationTime: "Express Delivery",
    variants: [
      { id: "v1", name: "Glass Jar 200ml", price: 26.00 }
    ]
  },
  {
    id: "grand-praline",
    name: "Grand Praline Chocolate ",
    category: "luxury-indulgence",
    categoryLabel: "Luxury Indulgence",
    price: 52.00,
    priceDisplay: "$52.00",
    rating: 5.0,
    reviewsCount: 94,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8ZSkXb9FutBU6JOjzI0SF2r7yVjDSnBAB7AMEeEdPQ&s=10",
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8ZSkXb9FutBU6JOjzI0SF2r7yVjDSnBAB7AMEeEdPQ&s=10"
    ],
    description: "16 handcrafted Belgian bonbons infused with hazelnut praline, salted caramel, and ruby raspberry ganache.",
    isLuxury: true,

    tags: ["signature"],
    cardBg: "amber",
    flavour: "Assorted Belgian Truffles",
    preparationTime: "Same Day Delivery",
    variants: [
      { id: "v1", name: "Box of 16 Pieces", price: 52.00 }
    ]
  }
];

export const SOCIAL_REVIEWS = [
  {
    id: 1,
    name: "Ananya Sharma",
    location: "Indiranagar, Bangalore",
    rating: 5,
    comment: "Ordered the Belgian Dark Chocolate Truffle cake for my husband’s birthday. The taste was divine and delivery was right on time! Unmatched quality.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    tag: "Verified Purchase"
  },
  {
    id: 2,
    name: "Rohan Mehta",
    location: "Koramangala, Bangalore",
    rating: 5,
    comment: "The Rose & Pistachio Cake is pure panache! Every layer was moist and fragrant without being overly sweet. Liliyum is our go-to patisserie.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    tag: "Verified Purchase"
  },
  {
    id: 3,
    name: "Priya Nambiar",
    location: "Whitefield, Bangalore",
    rating: 5,
    comment: "The Belgian Chocolate gift hamper made a huge impression on our corporate clients. Stunning packaging and world-class pralines.",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    tag: "Verified Purchase"
  }
];

export const DELIVERY_SLOTS = [
  {
    id: "slot-1",
    label: "Morning Slot",
    time: "10:00 AM - 01:00 PM",
    price: "FREE"
  },
  {
    id: "slot-2",
    label: "Afternoon Slot",
    time: "01:00 PM - 04:00 PM",
    price: "FREE"
  },
  {
    id: "slot-3",
    label: "Evening Slot",
    time: "04:00 PM - 07:00 PM",
    price: "FREE"
  },
  {
    id: "slot-4",
    label: "Midnight Express",
    time: "11:30 PM - 12:00 AM",
    price: "$5.00"
  }
];

export interface UpsellItem {
  id: string;
  name: string;
  category: string;
  price: number;
  priceDisplay: string;
  image: string;
  description: string;
  popular?: boolean;
}

export const UPSELL_ITEMS: UpsellItem[] = [
  {
    id: "upsell-1",
    name: "Gold Glitter Birthday Candle Set",
    category: "Candles",
    price: 3.50,
    priceDisplay: "$3.50",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=300&auto=format&fit=crop",
    description: "Set of 12 premium metallic gold slow-burning birthday candles",
    popular: true
  },
  {
    id: "upsell-2",
    name: "Elegant 'Happy Birthday' Acrylic Topper",
    category: "Toppers",
    price: 4.50,
    priceDisplay: "$4.50",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSK-uTQ5JH4HbgWnkkNP7z8DHJo4UF_XWFJTLuQoluw&s=10",
    description: "Reusable mirror-gold acrylic cake topper for celebration photos",
    popular: true
  },
  {
    id: "upsell-3",
    name: "Luxury Velvet Ribbon Gift Packaging & Bag",
    category: "Packaging",
    price: 6.00,
    priceDisplay: "$6.00",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=300&auto=format&fit=crop",
    description: "Signature Liliyum gift box with silk ribbon seal & complimentary note card"
  },
  {
    id: "upsell-4",
    name: "Handcrafted Fresh Rose Bouquet",
    category: "Flowers",
    price: 12.00,
    priceDisplay: "$12.00",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=300&auto=format&fit=crop",
    description: "Freshly cut red & pastel roses tied with artisan twine"
  },
  {
    id: "upsell-5",
    name: "Sparkling Celebration Fountain Fireworks Candle",
    category: "Candles",
    price: 5.00,
    priceDisplay: "$5.00",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=300&auto=format&fit=crop",
    description: "Safe 45-second smokeless golden fountain sparkler for cake cutting"
  },
  {
    id: "upsell-6",
    name: "Belgian Dark Chocolate Truffle Box (4pcs)",
    category: "Chocolates",
    price: 9.50,
    priceDisplay: "$9.50",
    image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=300&auto=format&fit=crop",
    description: "70% single-origin dark cocoa pralines handcrafted by our master chef"
  }
];

