import React, {useState} from "react";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";

export const LuxurySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("Birthday Cakes");

  const filterTabs = [
    "Anniversary Cakes",
    "Birthday Cakes",
    "Photo Cakes",
    "Custom Cakes",
    "Theme Cakes",
    "Belgian Truffles"
  ];

  // 4 items for the left 2x2 grid
  const leftCards = [
    {
      id: "liliyum-01",
      name: "Chocolate Truffle Cake",
      priceUsd: "$40",
      priceInr: "₹1,499",
      image: "https://liliyum.com/cdn/shop/files/chocolatefudgecake_540x.jpg?v=1687780285"
    }, {
      id: "liliyum-06",
      name: "Triple Chocolate Cake",
      priceUsd: "$55",
      priceInr: "₹1,899",
      image: "https://liliyum.com/cdn/shop/products/BelgianChocolateVanillaButtercreamCake1_540x.jpg?v=1610623863"
    }, {
      id: "liliyum-03",
      name: "Dark Cocoa Velvet Cake",
      priceUsd: "$48",
      priceInr: "₹1,699",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800&auto=format&fit=crop"
    }, {
      id: "liliyum-12",
      name: "Hazelnut Praline Cake",
      priceUsd: "$52",
      priceInr: "₹1,799",
      image: "https://liliyum.com/cdn/shop/products/Blueberry-Cheese-Cake-1_45c56ba3-660c-452f-b72a-5070791ff775_540x.jpg?v=1630921221"
    }
  ];

  // Tall feature card for the right side
  const tallRightCard = {
    id: "liliyum-05",
    name: "Opulent Drip Floral Signature",
    priceUsd: "$85",
    priceInr: "₹2,499",
    image: "https://liliyum.com/cdn/shop/files/GoldenandBlackCake_720x.jpg?v=1694149686"
  };

  return (<section className="py-16 sm:py-24 bg-amber-100 text-[#3B1C10] w-full max-w-full overflow-hidden relative select-none border-t border-[#EAE0D5]">
    {/* Background Subtle Milk Splash Graphic */}
    <div className="absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none z-0">
      <svg viewBox="0 0 200 200" className="w-full h-full fill-[#3B1C10]">
        <path d="M45,-60C58,-52,67,-37,71,-20C75,-3,74,16,66,32C58,48,43,61,25,68C7,75,-14,76,-32,70C-50,64,-65,51,-72,34C-79,17,-78,-4,-71,-22C-64,-40,-51,-55,-36,-64C-21,-73,-4,-76,14,-74C32,-72,32,-68,45,-60Z" transform="translate(100 100)"/>
      </svg>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
      {/* Main Section Header */}
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#3B1C10] tracking-tight text-center mb-8">
        Royal Belgian Collection
      </h2>

      {/* Filter Pills Row */}
      {/* <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar max-w-full">
        {
          filterTabs.map((tab) => (<button key={tab} onClick={() => setActiveFilter(tab)} className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
            activeFilter === tab
              ? "bg-[#3B1C10] text-[#FAF3EA] shadow-md scale-105"
              : "bg-white/80 hover:bg-white text-[#5C382A] border border-[#E8D7C8]"}`}>
            {tab}
          </button>))
        }
      </div> */
      }

      {/* Asymmetric 12-Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12">
        {/* Left Side: 2x2 Grid of Square Cards (7 Cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {
            leftCards.map((card) => (<div key={card.id} className="flex flex-col group">
              <Link to={`/product/${card.id}`} className="block overflow-hidden rounded-2xl mb-3 shadow-sm group-hover:shadow-md transition-all">
                <img src={card.image} alt={card.name} className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
              </Link>

              <div className="flex items-center justify-between px-1">
                <Link to={`/product/${card.id}`}>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#3B1C10] group-hover:text-[#A8644A] transition-colors">
                    {card.name}
                  </h3>
                </Link>
                <span className="font-serif text-base sm:text-lg font-extrabold text-[#3B1C10]">
                  {card.priceUsd}{" "}
                  <span className="text-xs text-[#5C382A]/70 font-normal">
                    ({card.priceInr})
                  </span>
                </span>
              </div>
            </div>))
          }
        </div>

        {/* Right Side: Tall Showcase Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col group h-full">
          <Link to={`/product/${tallRightCard.id}`} className="block overflow-hidden rounded-2xl mb-3 shadow-md group-hover:shadow-lg transition-all flex-grow">
            <img src={tallRightCard.image} alt={tallRightCard.name} className="w-full h-[460px] sm:h-[540px] lg:h-[570px] object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
          </Link>

          <div className="flex items-center justify-between px-1">
            <Link to={`/product/${tallRightCard.id}`}>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3B1C10] group-hover:text-[#A8644A] transition-colors">
                {tallRightCard.name}
              </h3>
            </Link>
            <span className="font-serif text-lg sm:text-xl font-extrabold text-[#3B1C10]">
              {tallRightCard.priceUsd}{" "}
              <span className="text-xs text-[#5C382A]/70 font-normal">
                ({tallRightCard.priceInr})
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* View Full Collection CTA */}
      <div className="text-center">
        <Link to="/collection?category=belgian-chocolates" className="inline-flex items-center gap-2 bg-[#3B1C10] hover:bg-[#28120A] text-[#FAF3EA] px-8 py-3.5 rounded-full font-serif font-bold text-base shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
          <span>Explore Full Royal Belgian Line</span>
          <ArrowRight className="w-4 h-4"/>
        </Link>
      </div>
    </div>
  </section>);
};
