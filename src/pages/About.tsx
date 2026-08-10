import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Truck,
  Heart,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  MapPin,
  Clock,
  ArrowUpRight,
  Plus,
  Check,
  Utensils
} from "lucide-react";
import { useOrderModal } from "../context/OrderModalContext";
import { useNavigate } from "react-router-dom";

interface CafeGalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  badge: string;
  desc: string;
  location: string;
}

/* -------------------------------------------------------------------------- */
/* CARDWISE CAFE GALLERY CAROUSEL COMPONENT */
/* -------------------------------------------------------------------------- */
const CafeCardCarousel: React.FC<{
  items: CafeGalleryItem[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  onOpenLightbox: (item: CafeGalleryItem) => void;
  onOpenOrderModal: () => void;
}> = ({ items, activeCategory, setActiveCategory, onOpenLightbox, onOpenOrderModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["All Ambience", "Barista & Coffee", "Artisan Kitchen", "Patisserie Display", "Cozy Patio"];

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => prev === 0
        ? Math.max(0, items.length - 1)
        : prev - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (
      prev >= items.length - 1
        ? 0
        : prev + 1));
  };

  const safeIndex = Math.min(currentIndex, Math.max(0, items.length - 1));
  const currentItem = items[safeIndex] || items[0];

  return (<section className="bg-white/90 rounded-[36px] p-6 sm:p-10 border border-white/80 shadow-xl relative overflow-hidden">
    {/* Header Controls & Filter Tabs */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
      <div>
        {/* <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-serif italic font-bold tracking-widest uppercase text-[#E88B2A] bg-[#FFF0E2] px-3 py-1 rounded-full border border-[#FAD6B5]">
              Experience Liliyum Cafe
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Cardwise Carousel
            </span>
          </div> */
        }
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B1B17]">
          Patisserie Cafe & Kitchen Gallery
        </h2>
      </div>

      {/* Category Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {
          categories.map((cat) => (<button key={cat} type="button" onClick={() => {
            setActiveCategory(cat);
            setCurrentIndex(0);
          }} className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer whitespace-nowrap ${activeCategory === cat
            ? "bg-[#2B1B17] text-[#EAD5BE] shadow-md scale-105"
            : "bg-[#FAF7F5] text-[#594943] border border-[#E7D6CB] hover:bg-white"}`}>
            {cat}
          </button>))
        }
      </div>
    </div>

    {/* Carousel Wrapper with Cards Track */}
    {
      items.length > 0 && currentItem && (<div className="relative">
        {/* Main Focused Card Carousel Frame */}
        <div className="relative overflow-hidden py-2 min-h-[420px] sm:min-h-[460px]">
          <AnimatePresence mode="wait">
            <motion.div key={currentItem.id} initial={{
              opacity: 0,
              x: 50,
              scale: 0.98
            }} animate={{
              opacity: 1,
              x: 0,
              scale: 1
            }} exit={{
              opacity: 0,
              x: -50,
              scale: 0.98
            }} transition={{
              duration: 0.45,
              ease: "easeOut"
            }} className="bg-[#FAF7F5] rounded-3xl p-6 sm:p-8 border border-[#E7D6CB] shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left Card Image */}
              <div className="w-full lg:w-1/2 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl bg-black group border border-white/40">
                <img src={currentItem.image} alt={currentItem.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" /> {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="bg-black/70 backdrop-blur-md text-white font-extrabold text-[10px] sm:text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-white/20 shadow-md">
                    {currentItem.badge}
                  </span>
                  <span className="bg-white/95 backdrop-blur-md text-[#2B1B17] font-bold text-[10px] sm:text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#E88B2A]" />{" "}
                    {currentItem.location}
                  </span>
                </div>

                {/* Lightbox Enlarge Trigger */}
                <button type="button" onClick={() => onOpenLightbox(currentItem)} className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-[#2B1B17] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg transition-all transform hover:scale-105 cursor-pointer z-10">
                  <ZoomIn className="w-4 h-4 text-[#E88B2A]" />
                  <span className="hidden sm:inline">Enlarge Preview</span>
                </button>
              </div>

              {/* Right Card Content */}
              <div className="w-full lg:w-1/2 space-y-4 text-[#2B1B17]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#E88B2A] bg-[#FFF0E2] px-3 py-1 rounded-full border border-[#FAD6B5]">
                    {currentItem.category}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-400">
                    Card 0{safeIndex + 1}
                    of 0{items.length}
                  </span>
                </div>

                <h3 className="font-serif font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#2B1B17] leading-tight">
                  {currentItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E554C] font-medium leading-relaxed">
                  {currentItem.desc}
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button type="button" onClick={onOpenOrderModal} className="px-6 py-3 rounded-full bg-[#E88B2A] hover:bg-[#D4791E] text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer transform hover:scale-105 flex items-center gap-2">
                    <span>Experience Cafe & Order</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button type="button" onClick={() => onOpenLightbox(currentItem)} className="px-4 py-3 rounded-full bg-white hover:bg-gray-50 text-[#2B1B17] border border-[#E7D6CB] font-bold text-xs transition-colors cursor-pointer">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Buttons & Indicators */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E7D6CB]/40">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {
              items.map((it, idx) => (<button key={it.id} type="button" onClick={() => setCurrentIndex(idx)} className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${safeIndex === idx
                ? "w-8 bg-[#E88B2A]"
                : "w-2.5 bg-[#E88B2A]/30 hover:bg-[#E88B2A]/60"}`} aria-label={`Go to slide ${idx + 1}`} />))
            }
          </div>

          {/* Left / Right Arrow Buttons */}
          <div className="flex items-center gap-3">
            <button type="button" onClick={prevSlide} className="w-10 h-10 rounded-full bg-[#FAF7F5] hover:bg-[#2B1B17] text-[#2B1B17] hover:text-[#EAD5BE] border border-[#E7D6CB] flex items-center justify-center transition-all cursor-pointer shadow-sm" aria-label="Previous Slide">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#2B1B17] px-2">
              0{safeIndex + 1}
              / 0{items.length}
            </span>

            <button type="button" onClick={nextSlide} className="w-10 h-10 rounded-full bg-[#FAF7F5] hover:bg-[#2B1B17] text-[#2B1B17] hover:text-[#EAD5BE] border border-[#E7D6CB] flex items-center justify-center transition-all cursor-pointer shadow-sm" aria-label="Next Slide">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>)
    }
  </section>);
};

/* -------------------------------------------------------------------------- */
/* MAIN ABOUT PAGE COMPONENT */
/* -------------------------------------------------------------------------- */
export const About: React.FC = () => {
  const { openOrderModal } = useOrderModal();

  // Cafe Motion Gallery Data
  const cafeGalleryItems: CafeGalleryItem[] = [
    {
      id: "cg1",
      title: "Artisan Barista & Coffee Bar",
      category: "Barista & Coffee",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop",
      badge: "Live Espresso",
      desc: "Single-origin Ethiopian beans pulled fresh by our master baristas.",
      location: "Main Bar"
    }, {
      id: "cg2",
      title: "French Pastry Baking Kitchen",
      category: "Artisan Kitchen",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop",
      badge: "Fresh Batch",
      desc: "Laminated croissant dough resting before 6 AM morning bake.",
      location: "Bake House"
    }, {
      id: "cg3",
      title: "Liliyum Luxury Patisserie Counter",
      category: "Patisserie Display",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1000&auto=format&fit=crop",
      badge: "Glass Showcase",
      desc: "Handcrafted eclairs, macarons, and Belgian chocolate tartlets.",
      location: "Front Display"
    }, {
      id: "cg4",
      title: "Sunlit Outdoor Botanical Patio",
      category: "Cozy Patio",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
      badge: "Al-Fresco",
      desc: "Lush greenery and cozy rattan seating for peaceful afternoon high tea.",
      location: "Garden Patio"
    }, {
      id: "cg5",
      title: "70% Dark Chocolate Ganache Tempering",
      category: "Artisan Kitchen",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop",
      badge: "Chef Craft",
      desc: "Hand-tempering Belgian dark chocolate for signature cake toppings.",
      location: "Chocolatier Station"
    }, {
      id: "cg6",
      title: "Cozy Evening Lounge & Reading Nook",
      category: "Cozy Patio",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop",
      badge: "Warm Ambience",
      desc: "Soft ambient lighting and vintage velvet seating for relaxed coffee dates.",
      location: "Lounge"
    }
  ];

  const [activeCafeCategory, setActiveCafeCategory] = useState<string>("All Ambience");
  const [selectedLightboxImage, setSelectedLightboxImage] = useState<CafeGalleryItem | null>(null);

  const filteredCafeGallery = activeCafeCategory === "All Ambience"
    ? cafeGalleryItems
    : cafeGalleryItems.filter((item) => item.category === activeCafeCategory);

  // General Cake Gallery Data
  const galleryItems = [
    {
      id: "g1",
      title: "Belgian Dark Chocolate Truffle Cake",
      category: "Celebration",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
      badge: "Bestseller",
      desc: "70% single-origin Belgian dark chocolate ganache layered with moist cocoa chiffon."
    }, {
      id: "g2",
      title: "Signature Rose & Pistachio Cake",
      category: "Signature",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsX-YyECMEzppM67Ln3eE6sDfZsmO48-NFZezf61OPEQ&s=10",
      badge: "Chef Special",
      desc: "Kannauj rose water, roasted Iranian pistachios, and cardamom infused cream."
    }, {
      id: "g3",
      title: "New York Baked Blueberry Cheesecake",
      category: "Cheesecakes",
      image: "https://i0.wp.com/virginiawillis.com/wp-content/uploads/2025/07/no-bake-berry-yogurt-cheesecake-slice-scaled.jpg?fit=1920%2C2560&ssl=1",
      badge: "Classic",
      desc: "Dense baked cheesecake on a buttery graham crust topped with wild blueberry compote."
    }, {
      id: "g4",
      title: "Lotus Biscoff Speculoos Crunch",
      category: "Cheesecakes",
      image: "https://i0.wp.com/recipesbycarina.com/wp-content/uploads/2020/08/Berry-Cheesecake-Recipe-scaled.jpg?fit=1920%2C2560&ssl=1",
      badge: "Trending",
      desc: "Spiced cheesecake with cookie butter drizzle and crushed Speculoos cookies."
    }, {
      id: "g5",
      title: "Grand Belgian Praline Gift Box",
      category: "Luxury",
      image: "https://i0.wp.com/chocolategourmet.co.uk/wp-content/uploads/2022/06/65AB6200-8400-4F73-8DB7-D7A3E5CED37A-scaled.jpeg?fit=1920%2C2560&ssl=1",
      badge: "Luxury Box",
      desc: "Assorted 16-piece Belgian bonbons with hazelnut praline and salted caramel."
    }
  ];

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  const filteredGallery = activeCategoryFilter === "All"
    ? galleryItems
    : galleryItems.filter((g) => g.category === activeCategoryFilter);

  const selectedGallery = filteredGallery[activeGalleryIndex] || filteredGallery[0] || galleryItems[0];

  const upsellItems = [
    {
      id: "u1",
      name: "Luxury Handcrafted Golden Candles (Set of 6)",
      price: 4,
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=300&auto=format&fit=crop",
      desc: "Slim metallic gold drip-free birthday candles."
    }, {
      id: "u2",
      name: "Sparkler Birthday Fountain (Pack of 2)",
      price: 3,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop",
      desc: "Smokeless indoor celebration sparkling fountains."
    }, {
      id: "u3",
      name: "Assorted Belgian Truffle Box (4 Pcs)",
      price: 8,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8ZSkXb9FutBU6JOjzI0SF2r7yVjDSnBAB7AMEeEdPQ&s=10",
      desc: "Luxury mini sampler box with hazelnut pralines."
    }, {
      id: "u4",
      name: "Foil-Stamped Premium Greeting Card",
      price: 2,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=300&auto=format&fit=crop",
      desc: "Hand-lettered card with custom handwritten note inside."
    }
  ];

  const [selectedUpsells, setSelectedUpsells] = useState<string[]>(["u1"]);
  const navigate = useNavigate();

  const toggleUpsell = (id: string) => {
    if (selectedUpsells.includes(id)) {
      setSelectedUpsells(selectedUpsells.filter((item) => item !== id));
    } else {
      setSelectedUpsells([
        ...selectedUpsells,
        id
      ]);
    }
  };

  return (<main className="py-8 sm:py-16 min-h-screen w-full max-w-full overflow-x-hidden relative select-none mt-16 sm:mt-20 bg-gradient-to-br from-[#FFE8EF] via-[#FFF4E3] to-[#E4F5EE]">
    {/* Background Decor */}
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
      <div className="absolute top-10 left-[8%] w-4 h-4 rounded-full bg-[#F45B82]/30 animate-pulse" />
      <div className="absolute top-32 right-[12%] w-3 h-5 rounded-sm bg-[#75DEC0]/40 rotate-12" />
      <div className="absolute top-96 left-[15%] w-4 h-4 rounded-full bg-[#FFD363]/50" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-16 sm:space-y-24">
      {/* 1. HERO / ABOUT STORY SECTION */}
      <section className="text-center max-w-4xl mx-auto pt-4">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
          {/* <span className="text-xs font-serif font-bold italic tracking-widest uppercase text-[#E07A2E] bg-[#FFF0E2] px-4 py-1.5 rounded-full border border-[#FAD6B5] inline-block mb-3">
              Established 2018 • Bangalore
            </span> */
          }
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-black text-[#2B1B17] tracking-tight mb-5 leading-tight">
            Crafting Unforgettable Moments, One Slice at a Time
          </h1>
          <p className="text-sm sm:text-base text-[#6E554C] font-medium leading-relaxed max-w-2xl mx-auto">
            At Liliyum, we combine French pastry techniques with 100% single-origin Belgian chocolate, organic fruits, and artisan passion. Every cake is baked fresh to order for your special celebrations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 text-left">
            <div className="bg-blue-300 p-5 rounded-3xl border border-white/60 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <ShieldCheck className="w-8 h-8 text-pink-500 mb-2" />
              <h4 className="font-serif font-extrabold text-[#2B1B17] text-base">
                100% Fresh Daily
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Baked on the date of delivery
              </p>
            </div>
            <div className="bg-pink-300 p-5 rounded-3xl border border-white/60 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Award className="w-8 h-8 text-[#FFD363] mb-2" />
              <h4 className="font-serif font-extrabold text-[#2B1B17] text-base">
                Belgian Cocoa
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                70% single-origin cocoa
              </p>
            </div>
            <div className="bg-yellow-300 p-5 rounded-3xl  border-white/60 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Truck className="w-8 h-8 text-[#F45B82] mb-2" />
              <h4 className="font-serif font-extrabold text-[#2B1B17] text-base">
                Same-Day Slots
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Temperature-controlled vans
              </p>
            </div>
            <div className="bg-green-300 p-5 rounded-3xl border border-white/60 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Heart className="w-8 h-8 text-rose-500 mb-2" />
              <h4 className="font-serif font-extrabold text-[#2B1B17] text-base">
                Custom Made
              </h4>
              <p className="text-xs text-gray-600 mt-1">
                Personalized message & toppers
              </p>
            </div>
          </div>
        </motion.div>
      </section>


      {/* 4. GENERAL CAKE GALLERY SHOWCASE SECTION */}
      <section className="bg-amber-200 rounded-[36px] p-6 sm:p-10 border border-white/80 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B1B17]">
              Cake Gallery & Signature Creations
            </h2>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {
              ["All", "Signature", "Celebration", "Cheesecakes", "Luxury"].map((cat) => (<button key={cat} onClick={() => {
                setActiveCategoryFilter(cat);
                setActiveGalleryIndex(0);
              }} className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${activeCategoryFilter === cat
                ? "bg-[#1C1C1C] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                {cat}
              </button>))
            }
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-black">
            <img src={selectedGallery.image} alt={selectedGallery.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black text-[#2B1B17] uppercase tracking-wider shadow-sm">
              {selectedGallery.badge}
            </div>
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
              <h3 className="font-serif text-2xl font-bold mb-1">
                {selectedGallery.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200">
                {selectedGallery.desc}
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
              Select Creation ({filteredGallery.length}
              Items):
            </h4>
            <div className="grid grid-cols-1 gap-3 max-h-[360px] overflow-y-auto pr-1 no-scrollbar">
              {
                filteredGallery.map((item, idx) => (<button key={item.id} onClick={() => setActiveGalleryIndex(idx)} className={`flex items-center gap-4 p-3 rounded-2xl border text-left transition-all cursor-pointer ${activeGalleryIndex === idx
                  ? "bg-[#FFE8EF] border-[#F45B82] shadow-sm"
                  : "bg-white hover:bg-gray-50 border-gray-100"}`}>
                  <img src={item.image} alt={item.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F45B82] block">
                      {item.category}
                    </span>
                    <h5 className="font-serif font-bold text-sm text-[#2B1B17] line-clamp-1">
                      {item.title}
                    </h5>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </button>))
              }
            </div>
          </div>
        </div>
      </section>


      {/* 2. "SHOP BY CATEGORY" BENTO GRID SECTION */}
      <section className="relative w-full">
        <div className="text-center mb-8 sm:mb-12">
          {/* <span className="font-serif italic font-bold text-2xl sm:text-3xl text-[#E88B2A] block mb-1">
              Which One
            </span> */
          }
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] tracking-tight">
            Shop By Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 relative">
          <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="md:col-span-8 bg-amber-800 rounded-[28px] sm:rounded-[36px] overflow-hidden p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-black/20 group relative min-h-[300px]">
            <div className="w-full sm:w-1/2 h-56 sm:h-full relative overflow-hidden rounded-2xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpT4MoVKnDvcXoZKGWWvmE69pLRcQ9pL6rMzcjbsdoNw&s=10" alt="Local Donuts & Coffee" className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>

            <div className="w-full sm:w-1/2 text-white space-y-3 z-10">
              {/* <span className="font-serif italic font-semibold text-xl text-[#F0993D] block">
                Coffee
              </span> */}
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-snug">
                Fruit & Nut Goodness
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
                Fruity flavours paired with our signature glaze-dipped signature pastries baked fresh daily.
              </p>
              <div className="pt-2">
                <button type="button" onClick={() => navigate("/menu")} className="px-6 py-2.5 rounded-full bg-[#E88B2A] hover:bg-[#D4791E] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer transform hover:scale-105 inline-flex items-center gap-2">
                  <span>Browse Shop</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="md:col-span-4 bg-amber-300 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md border border-[#E6DEC3]/60 group relative overflow-hidden min-h-[300px]">
            <div className="relative z-10 space-y-2 flex flex-col items-center">
              <div className="relative mb-2">
                <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop" alt="Homemade Cupcake" className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500" />
                <span className="absolute -bottom-1 -right-1 bg-[#E88B2A] text-white text-[10px] font-serif italic px-2 py-0.5 rounded-full shadow-xs">
                  Bakery Fresh
                </span>
              </div>
              <h4 className="font-serif italic font-bold text-2xl text-white leading-tight">
                home made cupcake
              </h4>
              <p className="text-xs text-white font-medium max-w-[200px]">
                Fluffy Madagascar vanilla sponge topped with Belgian buttercream swirl.
              </p>
              <button type="button" onClick={() => navigate("/menu")} className="mt-3 text-xs font-extrabold text-[#E88B2A] hover:underline cursor-pointer">
                Order Cupcake Boxes →
              </button>
            </div>
          </motion.div>

          <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="md:col-span-4 bg-amber-950 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl border border-black/20 group relative overflow-hidden min-h-[380px]">
            <div className="space-y-3 z-10">
              {/* <span className="font-serif italic font-semibold text-xl text-[#F0993D] block">
                Breakfast
              </span> */}
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-tight">
                Chocolate Cake
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Rich 70% dark cocoa layer cake topped with silken chocolate ganache and roasted hazelnuts.
              </p>
              {/* <div className="pt-2">
                <button type="button" onClick={() => navigate("/menu")} className="px-6 py-2.5 rounded-full bg-[#E88B2A] hover:bg-[#D4791E] text-white font-bold text-xs transition-all shadow-md cursor-pointer transform hover:scale-105 inline-flex items-center gap-2">
                  <span>Browse Shop</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div> */}
            </div>
            <button type="button" onClick={() => navigate("/menu")} className="mt-3 text-xs font-extrabold text-white hover:underline cursor-pointer text-left">
              Order Cupcake Boxes →
            </button>
            <div className="mt-6 relative h-40 w-full overflow-hidden rounded-2xl ">
              <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop" alt="Chocolate Ganache & Cocoa" className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>


          <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="md:col-span-4 bg-green-300 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between shadow-md border border-[#E6DEC3]/60 group relative overflow-hidden min-h-[340px]">
            <div >

              <h4 className="font-sans font-extrabold text-4xl text-white">
                Macarons
              </h4>
              <p className="text-xs text-white mt-1">
                French almond meringue shells filled with raspberry, pistachio & chocolate ganache.
              </p>
              {/* <div className="pt-2 mt-6">
                <button type="button" onClick={() => navigate("/menu")} className="px-6 py-2.5 rounded-full bg-[#E88B2A] hover:bg-[#D4791E] text-white font-bold text-xs transition-all shadow-md cursor-pointer transform hover:scale-105 inline-flex items-center gap-2">
                  <span>Browse Shop</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div> */}
            </div>
            <button type="button" onClick={() => navigate("/menu")} className="mt-3 text-xs font-extrabold text-white hover:underline cursor-pointer text-left">
              Order Cupcake Boxes →
            </button>
            <div className="mt-1 relative h-44 w-full overflow-hidden rounded-2xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbLtLMeLg27grCqApfPd7Wpt-JVUaq5NmTKNaBD4n7g&s=10" />
            </div>
          </motion.div>


          <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="md:col-span-4 bg-amber-500 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-gray-100 group relative overflow-hidden min-h-[340px]">
            <div>
              {/* <span className="font-serif italic font-semibold text-xl text-[#E88B2A] block mb-1">
                Which One
              </span> */}
              <h4 className="font-sans font-extrabold text-3xl text-white">
                Choco Croissant
              </h4>
              <p className="text-xs text-white mt-1">
                Flaky butter croissants filled with dark chocolate ganache and amarena cherry glaze.
              </p>
              {/* <div className="pt-2 mt-6">
                <button type="button" onClick={() => navigate("/menu")} className="px-6 py-2.5 rounded-full bg-[#E88B2A] hover:bg-[#D4791E] text-white font-bold text-xs transition-all shadow-md cursor-pointer transform hover:scale-105 inline-flex items-center gap-2">
                  <span>Browse Shop</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div> */}
            </div>
            <button type="button" onClick={() => navigate("/menu")} className="mt-3 text-xs font-extrabold text-white hover:underline cursor-pointer text-left">
              Order Cupcake Boxes →
            </button>
            <div className="mt-4 relative h-44 w-full overflow-hidden rounded-2xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6SpNGWq1Cv_-v-Dvmd4x8RXxUyUUkL_dU0DlWMerLtQ&s=10" alt="Choco Cherry Croissants" className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </section>





      {/* 3. CARDWISE CAFE GALLERY CAROUSEL SECTION */}
      <CafeCardCarousel items={filteredCafeGallery} activeCategory={activeCafeCategory} setActiveCategory={setActiveCafeCategory} onOpenLightbox={item => setSelectedLightboxImage(item)} onOpenOrderModal={openOrderModal} /> {/* Interactive Lightbox Motion Modal */}
      <AnimatePresence>
        {
          selectedLightboxImage && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} animate={{
              opacity: 1,
              scale: 1
            }} exit={{
              opacity: 0,
              scale: 0.9
            }} className="bg-[#FAF7F5] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative border border-white/20 text-[#2B1B17]">
              <button type="button" onClick={() => setSelectedLightboxImage(null)} className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer">
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/9] bg-black">
                <img src={selectedLightboxImage.image} alt={selectedLightboxImage.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white font-bold text-xs uppercase px-3 py-1 rounded-full">
                  {selectedLightboxImage.badge}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E88B2A]">
                    {selectedLightboxImage.category}
                    •{" "}
                    {selectedLightboxImage.location}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#E88B2A]" />
                    Open Daily 8:00 AM - 11:00 PM
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#2B1B17]">
                  {selectedLightboxImage.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A6760] leading-relaxed">
                  {selectedLightboxImage.desc}
                </p>

                <div className="pt-4 border-t border-[#E7D6CB] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl">
                    <Utensils className="w-4 h-4 text-emerald-600" />
                    Fresh Artisan Patisserie Served Hourly
                  </div>

                  <button type="button" onClick={() => {
                    setSelectedLightboxImage(null);
                    openOrderModal();
                  }} className="px-6 py-2.5 rounded-full bg-[#E88B2A] hover:bg-[#D4791E] text-white font-bold text-xs shadow-md transition-all cursor-pointer">
                    Place Quick Cafe Order →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>)
        }
      </AnimatePresence>



      {/* 5. UPSELLS & CELEBRATION ADD-ONS SECTION */}
      {/* <section className="bg-white/90 rounded-[36px] p-6 sm:p-10 border border-white/80 shadow-lg">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#F45B82] block mb-1">
            Celebration Add-Ons
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B1B17]">
            Complete Your Party Box (Upsells)
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Add golden candles, sparklers, Belgian truffles, or luxury cards to your cake hamper.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {
            upsellItems.map((u) => {
              const isSelected = selectedUpsells.includes(u.id);
              return (<div key={u.id} onClick={() => toggleUpsell(u.id)} className={`p-4 rounded-3xl border flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${isSelected
                ? "bg-[#FFE8EF] border-[#F45B82] shadow-md ring-2 ring-[#F45B82]/20"
                : "bg-white hover:bg-gray-50 border-gray-200"}`}>
                <div>
                  <img src={u.image} alt={u.name} className="w-full h-32 object-cover rounded-2xl mb-3 shadow-xs" />
                  <h4 className="font-serif font-bold text-sm text-[#2B1B17] leading-snug mb-1">
                    {u.name}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {u.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                  <span className="font-serif font-extrabold text-base text-[#2B1B17]">
                    +${u.price.toFixed(2)}
                  </span>
                  <button type="button" className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSelected
                    ? "bg-[#F45B82] text-white"
                    : "bg-gray-100 text-gray-700"}`}>
                    {
                      isSelected
                        ? (<Check className="w-4 h-4" />)
                        : (<Plus className="w-4 h-4" />)
                    }
                  </button>
                </div>
              </div>);
            })
          }
        </div>
      </section> */}
    </div>
  </main>);
};
