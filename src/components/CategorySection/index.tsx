import React from "react";
import {Link} from "react-router-dom";
import {Heart, ArrowRight, Sparkles} from "lucide-react";

export const CategorySection: React.FC = () => {
  const categories = [
    {
      id: "cheesecakes-tarts",
      name: "Cheesecakes & Tarts",
      tagline: "New York style slow-baked cheesecakes & fruit tarts",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
      price: "₹350",
      priceUsd: "$3.5",
      desc: "A lemon citrus tart is an artisanal dessert. Made with a crisp French butter pastry shell filled with silk lemon curd, topped with blackberries and fresh orange slices."
    }, {
      id: "jar-cakes",
      name: "Raspberry Yogurt",
      tagline: "Layered tiramisu, salted caramel & dessert jars",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop",
      price: "₹450",
      priceUsd: "$4.5",
      desc: "Fresh raspberry yogurt mousse parfait - healthy enough for snacking during the day, and delicious enough to be served as a royal patisserie dessert."
    }, {
      id: "celebration-cakes",
      name: "Celebration Cakes",
      tagline: "Handcrafted birthday, anniversary & royal theme creations",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      price: "₹1,499",
      priceUsd: "$15.0",
      desc: "Multi-layered chocolate truffle and berry celebration cakes baked fresh on order date."
    }, {
      id: "belgian-chocolates",
      name: "Belgian Chocolates",
      tagline: "Single-origin 70% dark pralines, truffle bars & hampers",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
      price: "₹1,299",
      priceUsd: "$12.5",
      desc: "Handcrafted 70% single-origin dark chocolate bonbons infused with hazelnut praline."
    }
  ];

  return (<section className="py-16 sm:py-24 bg-amber-100 text-amber-950 w-full max-w-full overflow-hidden relative select-none">
    {/* Background Floating Berries Decorative Elements */}
    {/* <div className="absolute top-12 right-20 w-8 h-8 rounded-full bg-[#1A0B2E] blur-[1px] opacity-75 animate-bounce pointer-events-none hidden sm:block"/>
    <div className="absolute bottom-24 left-1/3 w-6 h-6 rounded-full bg-[#2A1244] opacity-80 animate-pulse pointer-events-none hidden sm:block"/>
    <div className="absolute top-1/2 right-12 w-5 h-5 rounded-full bg-[#120524] opacity-70 pointer-events-none hidden sm:block"/>{" "}
    */
    }
    {/* Main Container */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-amber-950 tracking-tight">
          Shop by Occasion & Indulgence
        </h2>
      </div>

      {/* Outer Layout Grid with Vertical Sidebar */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 relative">
        {/* Vertical Editorial Left Nav Bar */}
        <div className="hidden xl:flex flex-col items-center justify-between py-8 text-[11px] font-semibold tracking-widest text-[#2E1D44]/70 uppercase space-y-12 shrink-0 border-r border-[#D3C3E3] pr-6">
          {/* Circular Rotating Badge */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#2E1D44]/40 animate-spin-slow"/>
            <Heart className="w-4 h-4 text-[#2E1D44] fill-[#2E1D44]"/>
            <span className="sr-only">Love is in the cake</span>
          </div>

          <div className="flex flex-col items-center gap-12 rotate-180 [writing-mode:vertical-lr]">
            <span className="hover:text-[#2E1D44] cursor-pointer transition-colors">
              RESERVE A TABLE
            </span>
            <span className="hover:text-[#2E1D44] cursor-pointer transition-colors flex items-center gap-2">
              MENU
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E1D44]"/>
            </span>
            <span className="hover:text-[#2E1D44] cursor-pointer transition-colors">
              CONTACTS
            </span>
          </div>

          <svg className="w-4 h-4 text-[#2E1D44] fill-current cursor-pointer hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>

        {/* Editorial Showcase Content (Citrus Tart Left & Raspberry Yogurt Right) */}
        <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Item 1: CITRUS TART */}
          <div className="flex flex-col items-center lg:items-start relative group">
            {/* Circular Image with Curved SVG Text */}
            <div className="relative flex items-center justify-center my-10">
              <Link to="/collection?category=cheesecakes-tarts" className="block relative z-10">
                <img src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop" alt="Citrus Tart" className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white/80 transition-transform duration-500 group-hover:scale-105"/>
              </Link>

              {/* SVG Curved Text Overlay */}
              <svg viewBox="0 0 400 400" className="absolute -top-20 -left-10 w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] md:w-[360px] md:h-[360px] pointer-events-none z-20">
                {" "}
                <path id="curveCitrus" d="M 60,200 A 140,140 0 0,1 340,200" fill="transparent"/>
                <text className="font-serif text-3xl sm:text-4xl md:text-5xl font-black fill-[#2E1D44] tracking-widest uppercase">
                  <textPath href="#curveCitrus" startOffset="50%" textAnchor="middle" className="text-lg sm:text-2xl md:text-2xl">
                    CITRUS TART
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Price & Editorial Description (Bottom Left) */}
            {/* Price & Editorial Description (Bottom Left) */}
            <div className="max-w-xs text-center lg:text-left mt-0 lg:-mt-4">
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2E1D44]">
                  {categories[0].priceUsd}
                </span>

                <span className="text-xs text-[#2E1D44]/60 font-semibold">
                  ({categories[0].price})
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-[#2E1D44]/80 leading-relaxed font-medium uppercase tracking-wider mb-3">
                {categories[0].desc}
              </p>

              <Link to="/collection?category=cheesecakes-tarts" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E1D44] underline hover:text-[#6B3FA0] transition-colors">
                <span>Explore Cheesecakes & Tarts</span>
                <ArrowRight className="w-3.5 h-3.5"/>
              </Link>
            </div>
          </div>

          {/* Item 2: RASPBERRY YOGURT */}
          <div className="flex flex-col items-center lg:items-end relative group">
            {/* Price & Editorial Description (Top Right on Large Screens) */}
            <div className="max-w-xs text-center lg:text-right mb-4 order-2 lg:order-1">
              <div className="flex items-baseline justify-center lg:justify-end gap-2 mb-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#2E1D44]">
                  {categories[1].priceUsd}
                </span>
                <span className="text-xs text-[#2E1D44]/60 font-semibold">
                  ({categories[1].price})
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#2E1D44]/80 leading-relaxed font-medium uppercase tracking-wider mb-3">
                {categories[1].desc}
              </p>
              <Link to="/collection?category=jar-cakes" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E1D44] underline hover:text-[#6B3FA0] transition-colors">
                <span>Explore Dessert Jars</span>
                <ArrowRight className="w-3.5 h-3.5"/>
              </Link>
            </div>

            {/* Circular Image with Curved SVG Text */}
            <div className="relative flex items-center justify-center my-4 order-1 lg:order-2">
              <Link to="/collection?category=jar-cakes" className="block relative z-10">
                <img src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop" alt="Raspberry Yogurt" className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover shadow-2xl border-4 border-white/80 transition-transform duration-500 group-hover:scale-105"/>
              </Link>

              {/* SVG Curved Text Overlay */}
              <svg viewBox="0 0 400 400" className="absolute -top-10 -right-10 w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[400px] md:h-[400px] pointer-events-none z-20">
                <path id="curveRaspberry" d="M 60,200 A 140,140 0 0,1 340,200" fill="transparent"/>
                <text className="font-serif text-2xl sm:text-3xl md:text-4xl font-black fill-[#2E1D44] tracking-widest uppercase">
                  <textPath href="#curveRaspberry" startOffset="50%" textAnchor="middle">
                    RASPBERRY YOGURT
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Category Selector Quick Pills Footer */}
      {/* <div className="mt-16 pt-8 border-t border-[#D3C3E3] flex flex-wrap items-center justify-center gap-3">
        {
          categories.map((cat) => (<Link key={cat.id} to={`/collection?category=${cat.id}`} className="px-5 py-2.5 rounded-full bg-white/70 hover:bg-white text-[#2E1D44] font-serif font-bold text-sm shadow-sm hover:shadow-md transition-all border border-[#D3C3E3]">
            {cat.name}
          </Link>))
        }
      </div> */
      }
    </div>
  </section>);
};
