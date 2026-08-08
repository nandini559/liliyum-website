import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useOrderModal } from "../../context/OrderModalContext";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openOrderModal } = useOrderModal();
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/"
    }, {
      name: "Menu",
      path: "/menu"
    }, {
      name: "About Us",
      path: "/about"
    }
  ];

  const isActive = (path: string) => {
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
        <img src="/assets/lil_logo.webp" alt="Liliyum Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0 group-hover:scale-105 transition-transform" />
      </Link>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 max-w-full overflow-x-auto no-scrollbar">
        {
          navItems.map((item) => {
            const active = isActive(item.path);
            return (<a key={item.name} href={item.path} className={`px-3 xl:px-4 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${active
              ? "bg-white text-[#3B1C10] font-semibold shadow-md"
              : "text-[#E8D6C5] hover:text-white hover:bg-white/10"}`}>
              {item.name}
            </a>);
          })
        }
      </nav>

      {/* Right Action / Mobile Menu Toggle */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          type="button"
          onClick={() => openOrderModal()}
          className="px-4 py-1.5 rounded-full bg-white text-[#3B1C10] hover:bg-[#F3E5D8] text-xs font-serif font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
        >
          Order Now
        </button>

        {/* Mobile Dropdown Trigger */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-1.5 rounded-full hover:bg-white/10 text-[#F3E5D8] transition-colors cursor-pointer" aria-label="Toggle Navigation Menu">
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMenuOpen
            ? "rotate-180"
            : ""}`} />
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
                return (<a key={item.name} href={item.path} onClick={() => setIsMenuOpen(false)} className={`px-4 py-2 rounded-xl transition-colors ${active
                  ? "bg-white text-[#3B1C10] font-bold"
                  : "hover:bg-white/10 text-[#E8D6C5]"}`}>
                  {item.name}
                </a>);
              })
            }
            <button onClick={() => {
              setIsMenuOpen(false);
              openOrderModal();
            }} className="mt-2 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#F3E5D8] text-xs font-sans font-semibold text-center border border-white/10 cursor-pointer">
              Quick Order
            </button>
          </div>
        </motion.div>)
      }
    </AnimatePresence>
  </header>);
};

export default Navbar;
