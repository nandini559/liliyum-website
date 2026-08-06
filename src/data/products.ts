export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  category: 'celebration-cakes' | 'belgian-chocolates' | 'cheesecakes-tarts' | 'jar-cakes';
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  description: string;
  isBestseller?: boolean;
  isLuxury?: boolean;
  badge?: string;
  variants: ProductVariant[];
  ingredients?: string;
  flavour?: string;
  preparationTime?: string;
}

export const CATEGORIES = [
  { id: 'all', name: 'All Delights', count: 12 },
  { id: 'celebration-cakes', name: 'Celebration & Theme Cakes', count: 4 },
  { id: 'belgian-chocolates', name: 'Luxury Belgian Chocolates', count: 3 },
  { id: 'cheesecakes-tarts', name: 'Cheesecakes & Tarts', count: 3 },
  { id: 'jar-cakes', name: 'Jar Cakes & Treats', count: 2 },
];

export const PRODUCTS: Product[] = [
  {
    id: 'liliyum-01',
    name: 'Belgian Dark Chocolate Truffle Cake',
    category: 'celebration-cakes',
    categoryLabel: 'Celebration & Theme Cakes',
    price: 1499,
    originalPrice: 1799,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Crafted with 70% single-origin Belgian dark chocolate, layered with moist cocoa chiffon and finished with silky chocolate ganache and hand-cut chocolate curls.',
    isBestseller: true,
    isLuxury: true,
    badge: 'Bestseller',
    flavour: '70% Belgian Dark Chocolate',
    preparationTime: 'Same Day Delivery (3-4 hours)',
    variants: [
      { id: 'v1', name: '0.5 kg (Serves 4-6)', price: 1499 },
      { id: 'v2', name: '1.0 kg (Serves 8-10)', price: 2499 },
      { id: 'v3', name: '1.5 kg (Serves 12-15)', price: 3499 }
    ]
  },
  {
    id: 'liliyum-02',
    name: 'Signature Rose & Pistachio Cake',
    category: 'celebration-cakes',
    categoryLabel: 'Celebration & Theme Cakes',
    price: 1699,
    originalPrice: 1999,
    rating: 4.95,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'An elegant fusion of subtle Kannauj rose water, crushed Iranian pistachios, and light cardamorn cream layers, adorned with edible rose petals.',
    isBestseller: true,
    badge: 'Chef Signature',
    flavour: 'Rose & Roasted Pistachio',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: '0.5 kg (Serves 4-6)', price: 1699 },
      { id: 'v2', name: '1.0 kg (Serves 8-10)', price: 2799 }
    ]
  },
  {
    id: 'liliyum-03',
    name: 'Grand Belgian Praline Chocolate Box (16 pcs)',
    category: 'belgian-chocolates',
    categoryLabel: 'Luxury Belgian Chocolates',
    price: 1299,
    rating: 5.0,
    reviewsCount: 76,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'An exquisite collection of 16 handcrafted Belgian bonbons infused with hazelnut praline, salted caramel, espresso truffle, and ruby raspberry ganache.',
    isLuxury: true,
    badge: 'Luxury Gift Box',
    flavour: 'Assorted Belgian Truffles',
    preparationTime: 'Express Delivery Available',
    variants: [
      { id: 'v1', name: 'Box of 16 Pieces', price: 1299 },
      { id: 'v2', name: 'Box of 24 Pieces', price: 1899 }
    ]
  },
  {
    id: 'liliyum-04',
    name: 'New York Baked Blueberry Cheesecake',
    category: 'cheesecakes-tarts',
    categoryLabel: 'Cheesecakes & Tarts',
    price: 1399,
    originalPrice: 1599,
    rating: 4.88,
    reviewsCount: 114,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1567327613485-f379af8017f7?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Classic dense and creamy New York cheesecake baked slow on a buttery graham crust, topped with house-made wild blueberry compote.',
    isBestseller: true,
    badge: 'Bestseller',
    flavour: 'Classic Baked & Blueberry',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: '0.5 kg (Serves 4)', price: 1399 },
      { id: 'v2', name: '1.0 kg (Serves 8)', price: 2299 }
    ]
  },
  {
    id: 'liliyum-05',
    name: 'Royal Berry & Vanilla Cream Cake',
    category: 'celebration-cakes',
    categoryLabel: 'Celebration & Theme Cakes',
    price: 1599,
    rating: 4.9,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535141192574-5d4897c13136?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Moist Madagascar vanilla bean sponge layered with fresh strawberry reduction, chantilly whip, and topped with ripe fresh berries.',
    badge: 'Fresh Fruit',
    flavour: 'Madagascar Vanilla & Fresh Berries',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: '0.5 kg', price: 1599 },
      { id: 'v2', name: '1.0 kg', price: 2599 }
    ]
  },
  {
    id: 'liliyum-06',
    name: 'Gold-Dusted Belgian Chocolate Truffle Bars Set',
    category: 'belgian-chocolates',
    categoryLabel: 'Luxury Belgian Chocolates',
    price: 999,
    rating: 4.92,
    reviewsCount: 52,
    image: 'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Trio of luxury Belgian chocolate slabs: 70% Dark Sea Salt, Roasted Almond Milk Chocolate, and Gold-Dusted Caramelized White Chocolate.',
    isLuxury: true,
    badge: '24K Gold Dust',
    flavour: 'Triple Chocolate Assortment',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: 'Set of 3 Slabs (300g)', price: 999 },
      { id: 'v2', name: 'Set of 5 Slabs (500g)', price: 1499 }
    ]
  },
  {
    id: 'liliyum-07',
    name: 'Fresh Raspberry & White Chocolate Tart',
    category: 'cheesecakes-tarts',
    categoryLabel: 'Cheesecakes & Tarts',
    price: 1199,
    rating: 4.85,
    reviewsCount: 43,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Crisp French butter pastry shell filled with velvet white chocolate ganache, topped with whole tart raspberries and mint leaves.',
    flavour: 'White Chocolate & Tart Raspberry',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: '6 inch (Serves 4)', price: 1199 },
      { id: 'v2', name: '8 inch (Serves 6-8)', price: 1799 }
    ]
  },
  {
    id: 'liliyum-08',
    name: 'Tiramisu Espresso Cream Jar Cake (Pack of 2)',
    category: 'jar-cakes',
    categoryLabel: 'Jar Cakes & Treats',
    price: 699,
    originalPrice: 799,
    rating: 4.96,
    reviewsCount: 189,
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Authentic Italian savoiardi biscuits soaked in single-origin espresso and dark rum flavor, layered with fluffy mascarpone cream and cocoa dust.',
    isBestseller: true,
    badge: 'Popular Gift',
    flavour: 'Single-Origin Espresso & Mascarpone',
    preparationTime: 'Same Day Delivery (2 hrs)',
    variants: [
      { id: 'v1', name: 'Pack of 2 Jars (200ml each)', price: 699 },
      { id: 'v2', name: 'Pack of 4 Jars (200ml each)', price: 1299 }
    ]
  },
  {
    id: 'liliyum-09',
    name: 'Salted Caramel Pecan Crunch Jar (Pack of 2)',
    category: 'jar-cakes',
    categoryLabel: 'Jar Cakes & Treats',
    price: 749,
    rating: 4.89,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Slow-cooked Himalayan pink salt caramel sponge layered with buttery toasted pecans and vanilla mousseline.',
    flavour: 'Salted Caramel & Roasted Pecan',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: 'Pack of 2 Jars', price: 749 },
      { id: 'v2', name: 'Pack of 4 Jars', price: 1399 }
    ]
  },
  {
    id: 'liliyum-10',
    name: 'Lotus Biscoff Baked Cheesecake',
    category: 'cheesecakes-tarts',
    categoryLabel: 'Cheesecakes & Tarts',
    price: 1449,
    rating: 4.94,
    reviewsCount: 130,
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1524351199678-941a58a3df50?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Creamy spiced cheesecake infused with authentic Biscoff cookie butter on a crushed Speculoos crust, topped with melt-in-mouth Biscoff drizzle.',
    isBestseller: true,
    badge: 'Trending',
    flavour: 'Belgian Speculoos Biscoff',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: '0.5 kg (Serves 4)', price: 1449 },
      { id: 'v2', name: '1.0 kg (Serves 8)', price: 2399 }
    ]
  },
  {
    id: 'liliyum-11',
    name: 'Supreme Belgian Celebration Hamper',
    category: 'belgian-chocolates',
    categoryLabel: 'Luxury Belgian Chocolates',
    price: 3499,
    originalPrice: 3999,
    rating: 5.0,
    reviewsCount: 41,
    image: 'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'The ultimate royal gift hamper containing 16-pc Belgian Truffles, 2 Jar Cakes, Almond Brittle, and Hand-poured Vanilla Scented Candle in a velvet hatbox.',
    isLuxury: true,
    badge: 'Royal Gift Set',
    flavour: 'Assorted Gourmet Selection',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: 'Grand Luxury Hamper', price: 3499 }
    ]
  },
  {
    id: 'liliyum-12',
    name: 'Opulent Crown Pistachio Theme Cake',
    category: 'celebration-cakes',
    categoryLabel: 'Celebration & Theme Cakes',
    price: 2199,
    rating: 4.97,
    reviewsCount: 65,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop'
    ],
    description: 'Custom handcrafted celebration cake featuring edible 24k gold leaf, hand-piped pastel macaron crowns, and white chocolate mousse.',
    isLuxury: true,
    badge: 'Custom Theme',
    flavour: 'Pistachio & White Mousse',
    preparationTime: 'Same Day Delivery',
    variants: [
      { id: 'v1', name: '1.0 kg (Serves 8-10)', price: 2199 },
      { id: 'v2', name: '2.0 kg (Serves 16-20)', price: 3999 }
    ]
  }
];

export const SOCIAL_REVIEWS = [
  {
    id: 1,
    name: 'Ananya Sharma',
    location: 'Indiranagar, Bangalore',
    rating: 5,
    comment: 'Ordered the Belgian Dark Chocolate Truffle cake for my husband’s birthday. The taste was divine and delivery was right on time! Unmatched quality.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    tag: 'Verified Purchase'
  },
  {
    id: 2,
    name: 'Rohan Mehta',
    location: 'Koramangala, Bangalore',
    rating: 5,
    comment: 'The Rose & Pistachio Cake is pure panache! Every layer was moist and fragrant without being overly sweet. Liliyum is our go-to patisserie.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    tag: 'Verified Purchase'
  },
  {
    id: 3,
    name: 'Priya Nambiar',
    location: 'Whitefield, Bangalore',
    rating: 5,
    comment: 'The Belgian Chocolate gift hamper made a huge impression on our corporate clients. Stunning packaging and world-class pralines.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
    tag: 'Verified Purchase'
  }
];

export const DELIVERY_SLOTS = [
  { id: 'slot-1', label: 'Morning Slot', time: '10:00 AM - 01:00 PM', price: 'FREE' },
  { id: 'slot-2', label: 'Afternoon Slot', time: '01:00 PM - 04:00 PM', price: 'FREE' },
  { id: 'slot-3', label: 'Evening Slot', time: '04:00 PM - 07:00 PM', price: 'FREE' },
  { id: 'slot-4', label: 'Midnight Express', time: '11:30 PM - 12:00 AM', price: '₹199' }
];
