import React from 'react';
import { CATEGORIES } from '../../data/products';

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;

}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeCategory,
  onCategoryChange,

}) => {
  return (
    <div className="w-full mb-8 sm:mb-12 space-y-5">
      {/* Primary Collection / Category Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${activeCategory === cat.id
              ? 'bg-[#1C1C1C] text-white shadow-md'
              : 'bg-white/80 hover:bg-white text-[#4A3E39] border border-[#EFE4D9] hover:border-[#D5C2B2] shadow-xs'
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Secondary Controls Bar: Dietary/Style Tag Pills (Left) & Sort Dropdown (Right) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full pt-1">
        {/* Filter Pills matching the screenshot style */}
        {/* <div className="flex items-center gap-2.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {TAG_FILTERS.map((tag) => {
            const isActive = activeTag === tag.id;
            return (
              <button
                key={tag.id}
                onClick={() => onTagChange(tag.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#F45B82] text-white shadow-md shadow-pink-300/50 scale-[1.02]'
                    : 'bg-white/90 hover:bg-white text-[#333333] border border-gray-100 shadow-xs'
                }`}
              >
                {tag.label}
              </button>
            );
          })}
        </div> */}

        {/* Sort By Dropdown matching top-right screenshot control */}
        {/* <div className="flex items-center justify-end gap-2 self-end sm:self-auto">
          <span className="text-xs sm:text-sm text-gray-500 font-medium whitespace-nowrap">
            Sort by:
          </span>
          <div className="relative">
            <select
              value={activeSort}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none bg-transparent hover:bg-white/60 border-none py-1.5 pl-2 pr-7 text-xs sm:text-sm font-black text-gray-900 focus:outline-none cursor-pointer"
            >
              <option value="popularity">Popularity</option>
              <option value="rating">Top Rated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-700 absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
