import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, MapPin, Phone, Menu, X, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Delights', path: '/collection' },
    { name: 'Celebration Cakes', path: '/collection?category=celebration-cakes' },
    { name: 'Belgian Chocolates', path: '/collection?category=belgian-chocolates' },
    { name: 'Product Page', path: '/product' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/product') return location.pathname.startsWith('/product');
    return location.pathname + location.search === path || (path === '/collection' && location.pathname === '/collection' && !location.search);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F5]/90 backdrop-blur-md border-b border-[#EFE3DB] transition-all w-full max-w-full overflow-x-hidden">
      {/* Top Banner Notice */}
      {/* <div className="bg-[#2D2422] text-[#EAD5BE] text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#D4A373] animate-pulse" />
        <span>Freshly Baked Daily in Bangalore • Same-Day Express Delivery Available!</span>
        <span className="hidden md:inline bg-[#D4A373]/20 px-2 py-0.5 rounded text-[10px] text-[#D4A373] font-semibold border border-[#D4A373]/30">
          lil' yum guaranteed
        </span>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20 gap-2 sm:gap-4">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#A8644A] flex items-center justify-center text-white font-serif text-lg sm:text-xl font-bold shadow-md group-hover:scale-105 transition-transform shrink-0">
              L
            </div>
            <div className="shrink-0">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2D2422] block leading-none">
                Liliyum
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold text-[#A8644A] block mt-0.5 whitespace-nowrap">
                Patisserie & Cafe
              </span>
            </div>
          </Link>

          {/* Location Badge (Desktop) */}
          {/* <div className="hidden lg:flex items-center gap-2 bg-[#F3E8E1] px-3.5 py-1.5 rounded-full border border-[#E7D6CB] text-xs font-medium text-[#594943]">
            <MapPin className="w-3.5 h-3.5 text-[#A8644A]" />
            <span>Delivering across <strong>Bangalore</strong></span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
          </div> */}

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs xl:text-sm font-medium transition-colors relative py-1 whitespace-nowrap ${isActive(link.path)
                  ? 'text-[#A8644A] font-semibold'
                  : 'text-[#594943] hover:text-[#A8644A]'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#A8644A] rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* <a
              href="https://wa.me/919986350349?text=Hi%20Liliyum%20Patisserie,%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-[#2D2422] hover:bg-[#A8644A] text-[#EAD5BE] hover:text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Order via WhatsApp</span>
            </a> */}

            <Link
              to="/collection"
              className="inline-flex items-center gap-1.5 bg-[#A8644A] hover:bg-[#8C4A32] text-white px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all duration-300 shrink-0"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Order Now</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#2D2422] hover:text-[#A8644A] focus:outline-none shrink-0"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F5] border-b border-[#EFE3DB] px-4 pt-3 pb-6 space-y-3 w-full max-w-full">
          <div className="flex items-center gap-2 bg-[#F3E8E1] px-3 py-2 rounded-xl text-xs text-[#594943] mb-2">
            <MapPin className="w-4 h-4 text-[#A8644A]" />
            <span>Delivering across <strong>Bangalore</strong> (Same-Day)</span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium ${isActive(link.path)
                ? 'bg-[#F3E8E1] text-[#A8644A] font-semibold'
                : 'text-[#594943] hover:bg-[#FAF0E6]'
                }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://wa.me/919986350349?text=Hi%20Liliyum%20Patisserie,%20I%20would%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#2D2422] text-[#EAD5BE] py-2.5 rounded-xl text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-[#D4A373]" />
              <span>Order via WhatsApp (+91 99863 50349)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
