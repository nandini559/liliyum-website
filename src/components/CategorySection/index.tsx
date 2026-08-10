import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowRight } from "lucide-react";

export const CategorySection: React.FC = () => {
  const categories = [
    {
      id: "cheesecakes-tarts",
      name: "Citrus Tart",
      title: "CITRUS TART",
      curveId: "curveCitrus",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop",
      price: "₹350",
      priceUsd: "$3.5",
      desc: "Artisanal lemon citrus tart in a crisp butter pastry shell filled with silky curd.",
      linkText: "Explore Cheesecakes & Tarts"
    },
    {
      id: "jar-cakes",
      name: "Raspberry Yogurt",
      title: "RASPBERRY YOGURT",
      curveId: "curveRaspberry",
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=800&auto=format&fit=crop",
      price: "₹450",
      priceUsd: "$4.5",
      desc: "Fresh raspberry yogurt mousse parfait - healthy snacking to royal patisserie dessert.",
      linkText: "Explore Dessert Jars"
    },
    {
      id: "celebration-cakes",
      name: "Celebration Cake",
      title: "CELEBRATION CAKE",
      curveId: "curveCelebration",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      price: "₹1,499",
      priceUsd: "$15.0",
      desc: "Multi-layered chocolate truffle and berry celebration cakes baked fresh on order.",
      linkText: "Explore Celebration Cakes"
    },
    {
      id: "belgian-chocolates",
      name: "Belgian Truffle",
      title: "BELGIAN TRUFFLE",
      curveId: "curveBelgian",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=800&auto=format&fit=crop",
      price: "₹1,299",
      priceUsd: "$12.5",
      desc: "Handcrafted 70% single-origin dark chocolate bonbons infused with hazelnut praline.",
      linkText: "Explore Belgian Chocolates"
    }
  ];

  return (






    <section className="py-16 sm:py-24 bg-amber-100 text-amber-950 w-full max-w-full overflow-hidden relative select-none">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-amber-950 tracking-tight">
            Shop by Occasion & Indulgence
          </h2>
          <p className="text-base sm:text-lg text-[#7A5A4A] max-w-2xl leading-relaxed ml-10">
            Discover something delicious for every celebration, craving, and sweet
            little moment.
          </p>
        </div>

        {/* Outer Layout Grid with Vertical Sidebar */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-12 relative">
          {/* Vertical Editorial Left Nav Bar */}
          <div className="hidden xl:flex flex-col items-center justify-between py-8 text-[11px] font-semibold tracking-widest text-[#2E1D44]/70 uppercase space-y-12 shrink-0 border-r border-[#D3C3E3] pr-6">
            {/* Circular Rotating Badge */}
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-[#2E1D44]/40 animate-spin-slow" />
              <Heart className="w-4 h-4 text-[#2E1D44] fill-[#2E1D44]" />
              <span className="sr-only">Love is in the cake</span>
            </div>

            <div className="flex flex-col items-center gap-12 rotate-180 [writing-mode:vertical-lr]">
              <span className="hover:text-[#2E1D44] cursor-pointer transition-colors">
                RESERVE A TABLE
              </span>
              <span className="hover:text-[#2E1D44] cursor-pointer transition-colors flex items-center gap-2">
                MENU
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E1D44]" />
              </span>
              <span className="hover:text-[#2E1D44] cursor-pointer transition-colors">
                CONTACTS
              </span>
            </div>

            <svg className="w-4 h-4 text-[#2E1D44] fill-current cursor-pointer hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>

          {/* 4 Equal-Sized Occasion Circles Grid */}
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
            {categories.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col items-center relative group ${index % 2 === 1 ? "lg:translate-y-8" : "lg:-translate-y-2"
                  }`}
              >
                {/* Equal-sized Circular Image */}
                <div className="relative flex items-center justify-center my-4">
                  <Link to={`/collection?category=${item.id}`} className="block relative z-10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-52 h-52 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full object-cover shadow-2xl border-4 border-white/80 transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </div>

                {/* SVG Curved Text - Positioned Completely Underneath the Image */}
                {/* <svg
                  viewBox="0 0 400 100"
                  className="w-[260px] sm:w-[280px] md:w-[300px] h-[60px] sm:h-[70px] -mt-1 mb-2 pointer-events-none shrink-0"
                >
                  <path id={item.curveId} d="M 40,15 A 180,180 0 0,0 360,15" fill="transparent" />
                  <text className="font-serif text-2xl sm:text-3xl font-black fill-[#2E1D44] tracking-widest uppercase">
                    <textPath href={`#${item.curveId}`} startOffset="50%" textAnchor="middle">
                      {item.title}
                    </textPath>
                  </text>
                </svg> */}

                {/* Price, Description, and Link Below Curved Text */}
                <div className="max-w-xs text-center mt-1">
                  <div className="flex items-baseline justify-center gap-2 mb-1">
                    <span className="font-serif text-2xl font-extrabold text-[#2E1D44]">
                      {item.priceUsd}
                    </span>
                    <span className="text-xs text-[#2E1D44]/60 font-semibold">
                      ({item.price})
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-[#2E1D44]/80 leading-snug font-medium uppercase tracking-wider mb-2">
                    {item.desc}
                  </p>

                  <Link
                    to={`/collection?category=${item.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2E1D44] underline hover:text-[#6B3FA0] transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
