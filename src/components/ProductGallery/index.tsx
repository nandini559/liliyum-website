import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const activeImage = images[selectedImageIndex] || images[0];

  return (
    <div className="flex flex-col gap-4 w-full max-w-full overflow-hidden">
      {/* Main Image Viewport */}
      <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-[#F0E6DF] shadow-md group w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt={productName}
            initial={{ opacity: 0.4, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </AnimatePresence>

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-[#594943] border border-white shadow-sm">
          {selectedImageIndex + 1} of {images.length}
        </div>
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 max-w-full no-scrollbar">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                selectedImageIndex === index
                  ? 'border-[#A8644A] ring-2 ring-[#A8644A]/20 shadow-md scale-105'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`${productName} thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
