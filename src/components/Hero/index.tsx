import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Hero: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedPack, setSelectedPack] = useState("pack-6");
  const navigate = useNavigate();
  return (
    <section className="relative w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 select-none">
      {/* Warm Rounded Card Container matching Reference Design */}
      <div className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] bg-[#EBE0D0] text-[#3D1E16] rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden px-6 sm:px-12 lg:px-16 py-12 lg:py-16 flex items-center justify-between shadow-sm">

        {/* Organic Background Blobs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Soft pink outer accent blob */}
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-[350px] sm:w-[500px] lg:w-[650px] h-[350px] sm:h-[500px] lg:h-[650px] bg-[#F7E5E0]/60 rounded-full blur-3xl" />

          {/* Inner organic white blob backdrop behind cake */}
          {/* <div
            className="absolute top-1/2 right-2 lg:right-10 -translate-y-1/2 w-[300px] sm:w-[420px] lg:w-[540px] h-[300px] sm:h-[420px] lg:h-[540px] bg-white/70 backdrop-blur-sm"
            style={{ borderRadius: "55% 45% 65% 35% / 45% 55% 45% 55%" }}
          /> */}
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start text-left max-w-xl lg:max-w-2xl">
            {/* Main Headline */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#3B1C10] tracking-tight leading-[1.1] mb-6"
            >
              Cakes Crafted with Passion & Panache
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-[#5C382A] font-normal leading-relaxed mb-8 sm:mb-10 max-w-lg"
            >
              Bangalore's artisanal patisserie for celebration cakes, Belgian chocolates &
              desserts — baked fresh, delivered the same day            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-5 sm:gap-8"
            >
              {/* Primary Pill Button */}
              <button
                onClick={() => navigate("/menu")}
                className="px-8 py-4 rounded-full bg-[#523326] hover:bg-[#3B1C10] text-[#FAF3EA] font-serif font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Explore Our Menu
              </button>


            </motion.div>
          </div>

          {/* RIGHT HERO CAKE IMAGE COLUMN */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-6 lg:mt-0">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative z-10 flex justify-center"
            >
              {/* Floating Cake Image */}
              <img
                src="/hero_display_cake.png"
                alt="Freshly Baked Gourmet Celebration Cake"
                className="w-full max-w-sm sm:max-w-lg lg:max-w-3xl object-contain transform hover:scale-[1.03] transition-transform duration-500 rounded-full"
              />
            </motion.div>
          </div>

        </div>
      </div>

      {/* QUICK ORDER MODAL */}
      <AnimatePresence>
        {isOrderModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-[#FAF3EA] border border-[#E6D5C3] rounded-3xl p-5 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#3B1C10]"
            >
              <button
                onClick={() => setIsOrderModalOpen(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-[#3B1C10] hover:bg-[#3B1C10] hover:text-white flex items-center justify-center transition-colors shadow-sm cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#3B1C10] text-[#FAF3EA] flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-[#3B1C10]">
                    Gourmet Vanilla Cupcakes
                  </h3>
                  <p className="text-xs text-[#7A5445] font-serif">
                    Baked fresh daily with Madagascar vanilla bean
                  </p>
                </div>
              </div>

              {/* Product Preview Card */}
              <div className="bg-white rounded-2xl p-4 border border-[#E6D5C3] shadow-sm mb-6 flex gap-4 items-center">
                <img
                  src="/hero_cupcakes.png"
                  alt="Vanilla Cupcakes"
                  className="w-20 h-20 object-cover rounded-xl bg-[#F5E9D9]"
                />
                <div className="flex-1">
                  <h4 className="font-serif font-bold text-base text-[#3B1C10]">
                    Madagascar Vanilla Bean Cupcakes
                  </h4>
                  <p className="text-xs text-[#7A5445] mt-0.5">
                    Light sponge topped with fluffy buttercream swirl.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-serif font-bold text-lg text-[#3B1C10]">
                      ₹890
                    </span>
                    <span className="text-[10px] bg-[#FAF3EA] text-[#3B1C10] px-2.5 py-0.5 rounded-full font-serif font-semibold">
                      Pack of 6
                    </span>
                  </div>
                </div>
              </div>

              {/* Pack Selector */}
              <div className="mb-6">
                <label className="block text-xs font-serif font-bold uppercase tracking-wider text-[#3B1C10] mb-2">
                  Select Quantity Pack
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "pack-6", name: "Pack of 6" },
                    { id: "pack-12", name: "Box of 12" },
                    { id: "pack-24", name: "Party Box 24" },
                  ].map((pack) => (
                    <button
                      key={pack.id}
                      onClick={() => setSelectedPack(pack.id)}
                      className={`py-2 px-2 text-xs font-serif font-bold rounded-xl border transition-all cursor-pointer ${selectedPack === pack.id
                        ? "bg-[#3B1C10] text-white border-[#3B1C10] shadow-md"
                        : "bg-white text-[#3B1C10] border-[#E6D5C3] hover:border-[#3B1C10]"
                        }`}
                    >
                      {pack.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
