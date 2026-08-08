import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Utensils, CheckCircle2 } from 'lucide-react';
import { FilterBar } from '../components/FilterBar';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, type Product } from '../data/products';

export const Collection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeTag, setActiveTag] = useState<string>('all');
  const [activeSort, setActiveSort] = useState<string>('popularity');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

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

  const handleAddToCart = (product: Product) => {
    setToastMessage(`Added "${product.name}" to your order! 🍰`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Filter products by collection category & tag filters
  let filteredProducts = [...PRODUCTS];

  if (activeCategory !== 'all') {
    filteredProducts = filteredProducts.filter((p) => p.category === activeCategory);
  }

  if (activeTag !== 'all') {
    if (activeTag === 'signature') {
      filteredProducts = filteredProducts.filter(
        (p) => p.isBestseller || p.badge?.toLowerCase().includes('signature') || p.tags?.includes('signature')
      );
    } else if (activeTag === 'vegan') {
      filteredProducts = filteredProducts.filter(
        (p) => p.badge?.toLowerCase().includes('vegan') || p.tags?.includes('vegan')
      );
    } else if (activeTag === 'gluten-free') {
      filteredProducts = filteredProducts.filter(
        (p) => p.badge?.toLowerCase().includes('gluten') || p.tags?.includes('gluten-free')
      );
    } else if (activeTag === 'seasonal') {
      filteredProducts = filteredProducts.filter(
        (p) => p.badge?.toLowerCase().includes('seasonal') || p.badge?.toLowerCase().includes('romance') || p.badge?.toLowerCase().includes('fresh') || p.tags?.includes('seasonal')
      );
    }
  }

  // Sort products
  if (activeSort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  } else if (activeSort === 'popularity') {
    filteredProducts.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  const currentCategoryInfo = CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <main

      className="py-8 sm:py-16 min-h-screen w-full max-w-full overflow-x-hidden relative select-none mt-16 sm:mt-20 
      bg-gradient-to-br from-[#FFE8EF] via-[#FFF4E3] to-[#E4F5EE]">
      {/* Background Decorative Confetti Pattern matching screenshot */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-70">
        {/* Floating Confetti sprinkles */}
        <div className="absolute top-12 left-[10%] w-3 h-3 rounded-full bg-[#F45B82]/40 animate-pulse" />
        <div className="absolute top-24 left-[25%] w-2 h-4 rounded-sm bg-[#75DEC0]/50 rotate-45" />
        <div className="absolute top-16 right-[15%] w-3 h-3 rounded-full bg-[#FFD363]/60" />
        <div className="absolute top-36 right-[30%] w-2.5 h-2.5 rounded-sm bg-[#F45B82]/30 rotate-12" />
        <div className="absolute top-64 left-[5%] w-3 h-5 rounded-full bg-[#75DEC0]/40 -rotate-12" />
        <div className="absolute top-80 right-[8%] w-4 h-4 rounded-full bg-[#FFD363]/50" />
        <div className="absolute top-[600px] left-[18%] w-2 h-4 bg-[#F45B82]/30 rotate-45" />
        <div className="absolute top-[800px] right-[20%] w-3 h-3 rounded-full bg-[#75DEC0]/40" />


      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-18">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#2B1B17] tracking-tight mb-3">
            {currentCategoryInfo && currentCategoryInfo.id !== 'all'
              ? currentCategoryInfo.name
              : 'Explore Our Menu'}
          </h1>
          <p className="text-xs sm:text-base text-[#6E554C] font-medium leading-relaxed whitespace-nowrap">
            Freshly baked daily with premium ingredients, velvety layers, and handcrafted love.
          </p>
        </div>

        {/* Interactive Filter & Sort Bar */}
        <div className="w-full flex justify-center px-2 mb-[-40px] ml-24">          <div className="w-full">
          <FilterBar
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            activeTag={activeTag}
            onTagChange={setActiveTag}
            activeSort={activeSort}
            onSortChange={setActiveSort}
            totalResults={filteredProducts.length}
          />
        </div>
        </div>

        {/* Product Cards Grid - 3 Column Layout matching screenshots */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 items-stretch">
            {filteredProducts.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                index={idx}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/80 rounded-3xl border border-[#EFE4D9] my-8 shadow-xs max-w-md mx-auto">
            <Utensils className="w-12 h-12 text-[#5C3D2E] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-bold text-[#5C3D2E] mb-2">No delights found</h3>
            <p className="text-xs text-[#8C6D5D] mb-5 px-4">
              We couldn't find any items matching your selected filter combination.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setActiveTag('all');
              }}
              className="bg-[#1C1C1C] hover:bg-black text-white px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-md"
            >
              Show All Cakes
            </button>
          </div>
        )}
      </div>

      {/* Floating Add-to-Cart Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1C1C] text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#75DEC0]" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}
    </main>
  );
};
