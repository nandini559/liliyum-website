import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../../data/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index = 0 }) => {
  // 4 distinct organic pastel blob background shapes & colors matching the reference image
  const blobStyles = [
    { bg: 'bg-[#E5D4C7]', radius: 'rounded-[55%_45%_50%_50%/50%_60%_40%_50%]' },
    { bg: 'bg-[#F3C5CD]', radius: 'rounded-[45%_55%_55%_45%/60%_40%_60%_40%]' },
    { bg: 'bg-[#F8E7C6]', radius: 'rounded-[50%_50%_40%_60%/45%_55%_45%_55%]' },
    { bg: 'bg-[#DBECCB]', radius: 'rounded-[60%_40%_50%_50%/50%_45%_55%_45%]' },
  ];

  const style = blobStyles[index % blobStyles.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center group w-full max-w-full cursor-pointer select-none"
    >
      <Link to={`/product/${product.id}`} className="w-full flex flex-col items-center">
        {/* Soft Organic Pastel Blob Image Container */}
        <div
          className={`w-56 h-56 sm:w-64 sm:h-64 ${style.bg} ${style.radius} flex items-center justify-center p-5 mb-4 transition-transform duration-500 group-hover:scale-105 shadow-sm relative overflow-hidden`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-44 h-44 sm:w-52 sm:h-52 object-cover rounded-2xl drop-shadow-md group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Short Description Below Blob */}
        <p className="text-xs sm:text-sm text-[#6E5446] font-medium text-center leading-snug max-w-xs px-2 mb-2 line-clamp-2 min-h-[38px] flex items-center justify-center">
          {product.description}
        </p>

        {/* Product Price */}
        <div className="font-serif text-2xl sm:text-3xl font-extrabold text-[#5C3D2E] text-center">
          ₹{product.price.toLocaleString('en-IN')}
        </div>
      </Link>
    </motion.div>
  );
};

