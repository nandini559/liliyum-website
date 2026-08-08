import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { PRODUCTS } from "../../data/products";

export const BestsellerSection: React.FC = () => {

  // 3 bestseller products matching 3 columns layout
  const displayProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="px-2">
      <section className="py-16 sm:py-24 bg-amber-200 text-amber-950 w-full max-w-full overflow-hidden select-none rounded-3xl px-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Main Section Header */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-amber-950 tracking-tight text-center mb-4">
            Our Most Loved Delights
          </h2>

          <p className="text-center text-base sm:text-lg text-[#7A5A4A] max-w-2xl mx-auto mb-12 sm:mb-16 leading-relaxed">
            Indulge in our signature creations, lovingly crafted with the finest
            ingredients and a touch of sweetness in every bite.
          </p>

          {/* 3-Column Stamp Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 sm:mb-16 items-start ">
            {
              displayProducts.map((product) => (<div key={product.id} className="flex flex-col group">
                {/* Postage Stamp Card Frame */}
                <div className="stamp-card w-full aspect-square mb-5 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-1.5">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-sm" loading="lazy" />
                </div>

                {/* Card Meta & Action Details */}
                <div className="flex items-start justify-between gap-3 px-1">
                  {/* Title & Price */}
                  <div className="flex flex-col flex-1 pr-2">
                    <Link to={`/product/${product.id}`}>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-700 leading-snug mb-1.5 line-clamp-2 group-hover:text-[#E15B3A] transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    {/* <span className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-900">
                  ₹{product.price.toLocaleString("en-IN")}
                </span> */
                    }
                  </div>

                  {/* Shopping Bag Button & Link */}
                  <div className="flex flex-col items-end shrink-0 pt-0.5">
                    <Link to={`/menu`} className="w-11 h-11 rounded-xl bg-amber-900 hover:bg-amber-950 text-white flex items-center justify-center shadow-md transition-all transform hover:scale-105 mb-1.5 cursor-pointer" aria-label={`Order ${product.name}`}>
                      <ShoppingBag className="w-5 h-5 text-white stroke-[2.2]" />
                    </Link>
                    {/* <Link to={`/product/${product.id}`} className="text-xs font-semibold text-amber-700 underline hover:text-[#E15B3A] transition-colors whitespace-nowrap">
                  More Details
                </Link> */
                    }
                  </div>
                </div>
              </div>))
            }
          </div>

          {/* Bottom Pagination Row */}
          {/* <div className="flex items-center justify-center gap-4 sm:gap-6 text-amber-900 font-bold text-sm sm:text-base">
        <button onClick={() => setCurrentPage((prev) => (
            prev > 1
            ? prev - 1
            : 10))} className="p-1 text-amber-400 hover:scale-125 transition-transform cursor-pointer" aria-label="Previous page">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]"/>
        </button>

        {
          [1, 2, 3, "...", 10].map((item, idx) => (<button key={idx} onClick={() => typeof item === "number" && setCurrentPage(item)} className={`transition-all cursor-pointer px-1 ${
            currentPage === item
              ? "text-amber-900 font-black text-base sm:text-lg scale-110"
              : "text-amber-900/80 hover:text-amber-900"}`}>
            {item}
          </button>))
        }

        <button onClick={() => setCurrentPage((prev) => (
            prev < 10
            ? prev + 1
            : 1))} className="p-1 text-amber-400 hover:scale-125 transition-transform cursor-pointer" aria-label="Next page">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]"/>
        </button>
      </div> */
          }
        </div>
      </section>
    </div>);
};
