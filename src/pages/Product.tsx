import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShieldCheck, Sparkles, ChevronRight, MessageCircleHeart, Info, ShoppingBag } from 'lucide-react';
import { ProductGallery } from '../components/ProductGallery';
import { DeliverySelector } from '../components/DeliverySelector';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { useOrderModal } from '../context/OrderModalContext';

export const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const { openOrderModal } = useOrderModal();

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0] || { id: 'v1', name: 'Standard', price: product.price });
  const [personalizationMessage, setPersonalizationMessage] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product.variants && product.variants.length > 0) {
      setSelectedVariant(product.variants[0]);
    }
  }, [id, product]);

  const recommendedProducts = PRODUCTS.filter((p) => p.id !== product.id && (p.category === product.category || p.isBestseller)).slice(0, 4);

  return (
    <main className="py-8 bg-[#FAF7F5] min-h-screen w-full max-w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs text-[#7A6760] mb-6 flex-wrap max-w-full">
          <Link to="/" className="hover:text-[#A8644A] transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link to="/collection" className="hover:text-[#A8644A] transition-colors">Collection</Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[#2D2422] font-semibold truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 items-start w-full">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 w-full max-w-full">
            <ProductGallery images={product.gallery} productName={product.name} />

            {/* Product Key Highlights */}
            <div className="mt-6 bg-white p-5 rounded-2xl border border-[#F0E6DF] grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#A8644A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#2D2422] block">100% Freshly Baked</span>
                  <span className="text-[11px] text-[#7A6760]">Baked on order date</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#A8644A] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#2D2422] block">Pure Belgian Cocoa</span>
                  <span className="text-[11px] text-[#7A6760]">70% single-origin dark cocoa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Ordering */}
          <div className="lg:col-span-6 space-y-6 w-full max-w-full">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8644A] bg-[#FAF0E6] px-2.5 py-1 rounded-full">
                  {product.categoryLabel}
                </span>
                {product.badge && (
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D2422] bg-[#F3E8E1] px-2.5 py-1 rounded-full border border-[#E7D6CB]">
                    {product.badge}
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2422] mb-3 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1 bg-[#FAF2EB] px-2.5 py-1 rounded-lg text-xs font-semibold text-[#8C4A32]">
                  <Star className="w-3.5 h-3.5 fill-[#D4A373] stroke-[#D4A373]" />
                  <span>{product.rating}</span>
                  <span className="text-gray-400 font-normal">({product.reviewsCount} reviews)</span>
                </div>
                <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                  Same-Day Delivery
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 pb-4 border-b border-[#F0E6DF]">
                <span className="text-3xl font-bold text-[#2D2422]">
                  ${selectedVariant.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs text-[#8C7A72] font-medium">Taxes included</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-[#594943] leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#2D2422] block mb-2">
                  Select Portion / Weight Option:
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {product.variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        selectedVariant.id === variant.id
                          ? 'bg-[#2D2422] text-[#EAD5BE] border-[#2D2422] shadow-sm ring-2 ring-[#2D2422]/20'
                          : 'bg-white text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
                      }`}
                    >
                      <span>{variant.name}</span>
                      <span className="ml-2 opacity-80">• ${variant.price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Delivery Slot Selector Component */}
            <DeliverySelector />

            {/* Personalization Field */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E6DF] space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#A8644A] flex items-center gap-1.5">
                <MessageCircleHeart className="w-3.5 h-3.5" />
                <span>Cake / Box Personalization (Optional)</span>
              </label>
              <p className="text-[11px] text-[#7A6760]">
                Add a custom piped message on cake or printed message card for your loved one.
              </p>
              <input
                type="text"
                value={personalizationMessage}
                onChange={(e) => setPersonalizationMessage(e.target.value)}
                placeholder="e.g. Happy 30th Birthday Ananya! ❤️"
                className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2422] focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
                maxLength={60}
              />
            </div>

            {/* Ordering CTA */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={() => openOrderModal(product)}
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#A8644A] hover:bg-[#8C4A32] text-white py-4 rounded-2xl font-bold text-sm shadow-lg shadow-[#A8644A]/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span>Place Order & Select Delivery Slot (${selectedVariant.price.toFixed(2)})</span>
              </button>

              <p className="text-[11px] text-[#8C7A72] text-center flex items-center justify-center gap-1">
                <Info className="w-3 h-3 text-[#A8644A]" />
                <span>Direct instant confirmation, celebration add-ons & Bangalore delivery slot!</span>
              </p>
            </div>

          </div>

        </div>


        {/* Recommended Products Section */}
        {recommendedProducts.length > 0 && (
          <div className="pt-12 border-t border-[#F0E6DF]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#A8644A] block mb-1">
                  Patisserie Recommendations
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D2422]">
                  You May Also Love
                </h2>
              </div>
              <Link
                to="/collection"
                className="text-xs font-bold text-[#A8644A] hover:underline hidden sm:inline"
              >
                View Full Collection →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((rec) => (
                <ProductCard key={rec.id} product={rec} />
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
};
