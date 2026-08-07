import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ChevronDown, X, Sparkles} from "lucide-react";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState("pack-6");

  const navItems = [
    {
      name: "Home",
      path: "/"
    }, {
      name: "Services",
      path: "/collection"
    }, {
      name: "About Us",
      path: "#about"
    }, {
      name: "Location",
      path: "#location"
    }, {
      name: "Contact Us",
      path: "#contact"
    }
  ];

  return (<section className="relative w-full max-w-full min-h-[640px] sm:min-h-[720px] lg:min-h-[780px] bg-[#FAF3EA] text-[#3D1E16] overflow-hidden flex flex-col justify-between select-none">
    {/* BACKGROUND IMAGE */}
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <img src="/assets/cake5.webp" alt="" className="absolute inset-0 w-full h-full object-cover object-right md:object-center" draggable="false"/>{" "}
      {/* Soft subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FAF3EA]/90 via-[#FAF3EA]/65 to-transparent max-w-3xl"/>
    </div>

    {/* Your content */}

    {/* TOP FLOATING CAPSULE NAVIGATION HEADER */}
    <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 pt-4 sm:pt-6 pb-2">
      <div className="bg-[#3B1C10]/95 backdrop-blur-md text-white rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center justify-between shadow-xl border border-[#522919]/50 max-w-full">
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 max-w-full overflow-x-auto no-scrollbar">
          {/* Brand Logo */}
          <img src="/assets/lil_logo.webp" alt="logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 mr-1 sm:mr-2"></img>

          {
            navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (<a key={item.name} href={item.path} onClick={() => setActiveTab(item.name)} className={`px-3 lg:px-5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                isActive
                  ? "bg-white text-[#3B1C10] font-semibold shadow-md"
                  : "text-[#E8D6C5] hover:text-white hover:bg-white/10"}`}>
                {item.name}
              </a>);
            })
          }
        </nav>

        {/* Right Action / Mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={() => setIsOrderModalOpen(true)} className="hidden sm:inline-flex px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F3E5D8] text-xs font-medium transition-colors border border-white/10 cursor-pointer whitespace-nowrap">
            Quick Order
          </button>

          {/* Mobile Dropdown Trigger */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-1.5 rounded-full hover:bg-white/10 text-[#F3E5D8] transition-colors cursor-pointer">
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
              isMenuOpen
                ? "rotate-180"
                : ""}`}/>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {
          isMenuOpen && (<motion.div initial={{
              opacity: 0,
              y: -10,
              scale: 0.95
            }} animate={{
              opacity: 1,
              y: 0,
              scale: 1
            }} exit={{
              opacity: 0,
              y: -10,
              scale: 0.95
            }} className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#3B1C10] border border-[#522919] rounded-2xl shadow-2xl p-4 z-50 text-white max-w-[calc(100vw-2rem)]">
            <div className="flex flex-col gap-2 font-serif text-sm">
              {
                navItems.map((item) => (<a key={item.name} href={item.path} onClick={() => {
                    setActiveTab(item.name);
                    setIsMenuOpen(false);
                  }} className={`px-4 py-2 rounded-xl transition-colors ${
                  activeTab === item.name
                    ? "bg-white text-[#3B1C10] font-bold"
                    : "hover:bg-white/10 text-[#E8D6C5]"}`}>
                  {item.name}
                </a>))
              }
            </div>
          </motion.div>)
        }
      </AnimatePresence>
    </div>

    {/* HERO MAIN CONTENT (Left Aligned matching Reference Layout) */}
    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-16 pt-8 sm:pt-16 pb-16 my-auto">
      <div className="max-w-xl lg:max-w-2xl text-left w-full">
        {/* Main Headline */}
        <motion.h1 initial={{
            y: 30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            ease: "easeOut"
          }} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3B1C10] tracking-tight leading-[1.1] mb-6">
          Cakes Crafted with Passion & Panache
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p initial={{
            y: 25,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut"
          }} className="text-base sm:text-lg md:text-xl text-[#5C382A] font-normal leading-relaxed mb-8 max-w-lg">
          Bangalore's artisanal patisserie for celebration cakes, Belgian chocolates & desserts — baked fresh, delivered the same day{" "}
        </motion.p>

        {/* Primary Action Button */}
        <motion.div initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut"
          }}>
          <button onClick={() => setIsOrderModalOpen(true)} className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#3B1C10] hover:bg-[#28120A] text-[#FAF3EA] font-serif text-base sm:text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
            <span>Order Your Cake</span>
          </button>
        </motion.div>
      </div>
    </div>

    {/* QUICK ORDER MODAL */}
    <AnimatePresence>
      {
        isOrderModalOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div initial={{
              scale: 0.9,
              opacity: 0,
              y: 20
            }} animate={{
              scale: 1,
              opacity: 1,
              y: 0
            }} exit={{
              scale: 0.9,
              opacity: 0,
              y: 20
            }} className="bg-[#FAF3EA] border border-[#E6D5C3] rounded-3xl p-5 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#3B1C10]">
            <button onClick={() => setIsOrderModalOpen(false)} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-[#3B1C10] hover:bg-[#3B1C10] hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer">
              <X className="w-5 h-5"/>
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#3B1C10] text-[#FAF3EA] flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6"/>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#3B1C10]">
                  Gourmet Vanilla Cupcakes
                </h3>
                <p className="text-xs text-[#7A5445] font-serif">
                  Baked fresh daily with Madagascar vanilla bean
                </p>
              </div>
            </div>

            {/* Product Preview Card */}
            <div className="bg-white rounded-2xl p-4 border border-[#E6D5C3] shadow-sm mb-6 flex gap-4 items-center">
              <img src="/hero_cupcakes.png" alt="Vanilla Cupcakes" className="w-20 h-20 object-cover rounded-xl bg-[#F5E9D9]"/>
              <div className="flex-1">
                <h4 className="font-serif font-bold text-base text-[#3B1C10]">
                  Madagascar Vanilla Bean Cupcakes
                </h4>
                <p className="text-xs text-[#7A5445] mt-0.5">
                  Light sponge topped with fluffy buttercream swirl.
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-serif font-bold text-lg text-[#3B1C10]">
                    ₹890
                  </span>
                  <span className="text-[10px] bg-[#FAF3EA] text-[#3B1C10] px-2.5 py-0.5 rounded-full font-serif font-semibold">
                    Pack of 6
                  </span>
                </div>
              </div>
            </div>

            {/* Pack Selector */}
            <div className="mb-6">
              <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#3B1C10] mb-2">
                Select Quantity Pack
              </label>
              <div className="grid grid-cols-3 gap-2">
                {
                  [
                    {
                      id: "pack-6",
                      name: "Pack of 6"
                    }, {
                      id: "pack-12",
                      name: "Box of 12"
                    }, {
                      id: "pack-24",
                      name: "Party Box 24"
                    }
                  ].map((pack) => (<button key={pack.id} onClick={() => setSelectedPack(pack.id)} className={`py-2 px-2 text-xs font-serif font-bold rounded-xl border transition-all cursor-pointer ${
                    selectedPack === pack.id
                      ? "bg-[#3B1C10] text-white border-[#3B1C10] shadow-md"
                      : "bg-white text-[#3B1C10] border-[#E6D5C3] hover:border-[#3B1C10]"}`}>
                    {pack.name}
                  </button>))
                }
              </div>
            </div>

            {/* CTAs */}
            {/* <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleAddToCart} disabled={isAddedToCart} className="flex-1 py-3.5 px-6 rounded-full bg-[#3B1C10] hover:bg-[#28120A] text-white font-serif font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer">
                {
                  isAddedToCart
                    ? (<> {
                      " "
                    } < Check className = "w-4 h-4 text-emerald-400" /> {
                      " "
                    } < span > Added to Bag !</span>
                </>)
                    : (<> {
                      " "
                    } < ShoppingBag className = "w-4 h-4" /> {
                      " "
                    } < span > Add to Bag</span>
                  )}
              </button>

              <a href="https://wa.me/919986350349?text=Hi%20Sweet%20Cake,%20I%20want%20to%20order%20the%20Vanilla%20Bean%20Cupcakes" target="_blank" rel="noopener noreferrer" className="py-3.5 px-6 rounded-full bg-white hover:bg-[#FAF3EA] text-[#3B1C10] border border-[#E6D5C3] font-serif font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm">
                <Phone className="w-4 h-4 text-[#3B1C10]"/>
                <span>WhatsApp</span>
              </a>
            </div> */
            }
          </motion.div>
        </div>)
      }
    </AnimatePresence>
  </section>);
};

export default Hero;
