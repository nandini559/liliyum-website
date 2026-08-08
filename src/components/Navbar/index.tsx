import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {ChevronDown, Sparkles, X} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState("pack-6");
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/"
    }, {
      name: "Menu",
      path: "/collection"
    }, {
      name: "About Us",
      path: "/about"
    }, {
      name: "Collection",
      path: "/product"
    }
  ];

  const isActive = (path : string) => {
    if (path === "/") 
      return location.pathname === "/" && !location.hash;
    if (path.startsWith("/#")) 
      return (location.pathname === "/" && location.hash === `#${path.split("#")[1]}`);
    if (path === "/product") 
      return location.pathname.startsWith("/product");
    return (location.pathname + location.search === path || (path === "/collection" && location.pathname === "/collection" && !location.search));
  };

  return (<header className="fixed top-0 z-50 w-full max-w-full px-4 sm:px-6 pt-4 pb-2 bg-gradient-to-b from-[#FAF3EA]/80 to-transparent backdrop-blur-xs select-none ">
    <div className="bg-[#3B1C10]/95 backdrop-blur-md text-white rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 flex items-center justify-between shadow-xl border border-[#522919]/50 max-w-7xl mx-auto">
      {/* Brand Logo */}
      <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
        <img src="/assets/lil_logo.webp" alt="Liliyum Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0 group-hover:scale-105 transition-transform"/>
      </Link>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 max-w-full overflow-x-auto no-scrollbar">
        {
          navItems.map((item) => {
            const active = isActive(item.path);
            return (<a key={item.name} href={item.path} className={`px-3 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
              active
                ? "bg-white text-[#3B1C10] font-semibold shadow-md"
                : "text-[#E8D6C5] hover:text-white hover:bg-white/10"}`}>
              {item.name}
            </a>);
          })
        }
      </nav>

      {/* Right Action / Mobile Menu Toggle */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <Link to="/collection" className="px-4 py-1.5 rounded-full bg-white text-[#3B1C10] hover:bg-[#F3E5D8] text-xs font-serif font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap">
          Order Now
        </Link>

        {/* Mobile Dropdown Trigger */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-1.5 rounded-full hover:bg-white/10 text-[#F3E5D8] transition-colors cursor-pointer" aria-label="Toggle Navigation Menu">
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
            isMenuOpen
              ? "rotate-180"
              : ""}`}/>
        </button>
      </div>
    </div>

    {/* Mobile Dropdown Navigation Menu */}
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
          }} className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-[#3B1C10] border border-[#522919] rounded-2xl shadow-2xl p-4 z-50 text-white max-w-[calc(100vw-2rem)]">
          <div className="flex flex-col gap-1.5 font-serif text-sm">
            {
              navItems.map((item) => {
                const active = isActive(item.path);
                return (<a key={item.name} href={item.path} onClick={() => setIsMenuOpen(false)} className={`px-4 py-2 rounded-xl transition-colors ${
                  active
                    ? "bg-white text-[#3B1C10] font-bold"
                    : "hover:bg-white/10 text-[#E8D6C5]"}`}>
                  {item.name}
                </a>);
              })
            }
            <button onClick={() => {
                setIsMenuOpen(false);
                setIsOrderModalOpen(true);
              }} className="mt-2 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F3E5D8] text-xs font-sans font-semibold text-center border border-white/10">
              Quick Order
            </button>
          </div>
        </motion.div>)
      }
    </AnimatePresence>

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

            <div className="pt-2">
              <Link to="/collection" onClick={() => setIsOrderModalOpen(false)} className="w-full py-3.5 px-6 rounded-full bg-[#3B1C10] hover:bg-[#28120A] text-white font-serif font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer text-center">
                Order via Collection Page
              </Link>
            </div>
          </motion.div>
        </div>)
      }
    </AnimatePresence>
  </header>);
};

export default Navbar;
