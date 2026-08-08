import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Check } from 'lucide-react';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
  onAddToCart?: (product: Product, e: React.MouseEvent) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0, onAddToCart }) => {
  const [added, setAdded] = React.useState(false);

  // Vibrant pastel card background colors matching reference images
  const colorThemes = {
    mint: 'bg-[#75DEC0] text-[#12392F]',
    amber: 'bg-[#FFD363] text-[#3D2F10]',
    pink: 'bg-[#FFB7C7] text-[#3D1720]',
    peach: 'bg-[#FFD1B8] text-[#4A2418]',
    lavender: 'bg-[#D8C4F1] text-[#302044]',
    lilac: 'bg-[#E6D5F5] text-[#382448]',
    sage: 'bg-[#C9D8B6] text-[#28351F]',
    sky: 'bg-[#BFDDF5] text-[#1D3448]',
  };

  // Determine card background based on product preference or cycle index
  const themeKeys: Array<'mint' | 'amber' | 'pink'> = ['mint', 'amber', 'pink'];
  const activeThemeKey = product.cardBg || themeKeys[index % themeKeys.length];
  const bgClass = colorThemes[activeThemeKey];

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAdded(true);
    if (onAddToCart) {
      onAddToCart(product, e);
    }
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      className={`rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 flex flex-col justify-between h-full shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group select-none ${bgClass}`}
    >
      <Link to={`/product`} className="flex flex-col h-full justify-between">
        <div>
          {/* Inner Rounded Dark Frame Image Container */}
          <div className="relative w-full aspect-square bg-[#14181B] rounded-[20px] sm:rounded-[24px] overflow-hidden mb-4 shadow-inner">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-[18px] sm:rounded-[22px] group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Top Right Floating White Badge */}
            {product.badge && (
              <span className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 bg-white text-[#111111] font-extrabold text-[10px] sm:text-[11px] tracking-wider px-2.5 sm:px-3 py-1 rounded-full uppercase shadow-md pointer-events-none z-10">
                {product.badge}
              </span>
            )}
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-2xl sm:text-[26px] font-extrabold text-[#151515] tracking-tight leading-tight mb-2 group-hover:text-black">
            {product.name}
          </h3>

          {/* Product Description */}
          <p className="text-xs sm:text-sm text-[#242424]/85 font-normal leading-snug line-clamp-3 mb-4 min-h-[48px]">
            {product.description}
          </p>
        </div>

        {/* Card Footer: Price & Circular Add Button */}
        <div className="flex items-center justify-between pt-2 mt-auto border-t border-black/5">
          <span className="font-serif text-xl sm:text-2xl font-black text-[#151515] tracking-tight">
            {product.priceDisplay || `$${product.price.toFixed(2)}`}
          </span>

          <button
            type="button"
            onClick={handleAddClick}
            aria-label={`Add ${product.name} to cart`}
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-200 shadow-md cursor-pointer ${added
                ? 'bg-emerald-700 text-white scale-110'
                : 'bg-[#1C1C1C] hover:bg-black text-white hover:scale-110 active:scale-95'
              }`}
          >
            {added ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5 stroke-[2.5]" />}
          </button>
        </div>
      </Link>
    </motion.div>
  );
};
