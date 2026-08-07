import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Utensils } from 'lucide-react';
import { FilterBar } from '../components/FilterBar';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../data/products';

export const Collection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeSort, setActiveSort] = useState<string>('featured');

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [searchParams]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  // Filter logic
  let filteredProducts = [...PRODUCTS];
  if (activeCategory !== 'all') {
    filteredProducts = filteredProducts.filter((p) => p.category === activeCategory);
  }

  // Sort logic
  if (activeSort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const currentCategoryInfo = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <main className="py-12 sm:py-20  min-h-screen w-full max-w-full overflow-x-hidden relative select-none mt-20 bg-amber-100">
      {/* Background Organic Wave Accent on Bottom Right */}
      {/* <div className="absolute bottom-0 right-0 w-96 h-96 opacity-40 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full fill-[#EFE4D9]">
          <path d="M45,-60C58,-52,67,-37,71,-20C75,-3,74,16,66,32C58,48,43,61,25,68C7,75,-14,76,-32,70C-50,64,-65,51,-72,34C-79,17,-78,-4,-71,-22C-64,-40,-51,-55,-36,-64C-21,-73,-4,-76,14,-74C32,-72,32,-68,45,-60Z" transform="translate(100 100)" />
        </svg>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#5C3D2E] tracking-tight mb-3">
            {currentCategoryInfo && currentCategoryInfo.id !== 'all' ? currentCategoryInfo.name : 'Our Signature Desserts'}
          </h1>
          <p className="text-sm sm:text-base text-[#8C6D5D] font-medium leading-relaxed max-w-xl mx-auto">
            Discover our most loved desserts crafted by expert pastry chefs.
          </p>
        </div>

        {/* Filter & Sort Bar */}
        {/* <FilterBar
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          activeSort={activeSort}
          onSortChange={setActiveSort}
          totalResults={filteredProducts.length}
        /> */}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-16 items-start">
            {filteredProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-[#EFE4D9] my-8">
            <Utensils className="w-12 h-12 text-[#5C3D2E] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-bold text-[#5C3D2E] mb-2">No delights found</h3>
            <p className="text-xs text-[#8C6D5D] mb-4">Try selecting another category to discover our artisanal range.</p>
            <button
              onClick={() => handleCategoryChange('all')}
              className="bg-[#5C3D2E] text-white px-5 py-2.5 rounded-xl text-xs font-semibold"
            >
              View All Products
            </button>
          </div>
        )}

      </div>
    </main>
  );
};
