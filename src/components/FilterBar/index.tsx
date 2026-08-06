import React from 'react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { CATEGORIES } from '../../data/products';

interface FilterBarProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  activeSort: string;
  onSortChange: (sortValue: string) => void;
  totalResults: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  activeCategory,
  onCategoryChange,
  activeSort,
  onSortChange,
  totalResults,
}) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#F0E6DF] shadow-sm mb-8 w-full max-w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 w-full">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar max-w-full">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#A8644A] text-white shadow-sm'
                  : 'bg-[#FAF7F5] text-[#594943] hover:bg-[#F3E8E1] hover:text-[#A8644A]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Right side: Count & Sort Dropdown */}
        <div className="flex items-center justify-between lg:justify-end gap-4 border-t lg:border-t-0 border-[#F3E8E1] pt-3 lg:pt-0">
          <span className="text-xs text-[#7A6760] font-medium whitespace-nowrap">
            Showing <strong className="text-[#2D2422]">{totalResults}</strong> delights
          </span>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#A8644A]" />
            <div className="relative">
              <select
                value={activeSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="appearance-none bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3.5 py-1.5 pr-8 text-xs font-semibold text-[#2D2422] focus:outline-none focus:ring-2 focus:ring-[#A8644A] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
