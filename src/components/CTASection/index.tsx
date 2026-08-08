import React from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Clock, MapPin } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-amber-100 text-[#3B1C10] relative overflow-hidden w-full max-w-full select-none border-t border-[#EFE3DB]">
      {/* Soft decorative background pastel glow accents */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#A8644A]/10 rounded-full blur-3xl pointer-events-none max-w-full" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none max-w-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#3B1C10] mb-6 leading-tight">
          Ready to Add a <span className="text-[#A8644A] italic font-serif">Lil' Yum</span> to Your Celebration?
        </h2>

        <p className="text-sm sm:text-base text-[#5C382A] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Whether you need a custom theme cake for tonight or a box of artisanal Belgian chocolates delivered in Bangalore, our patisserie chefs are at your service.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-10 w-full">
          <Link
            to="/collection"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#A8644A] hover:bg-[#8C4A32] text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/919986350349?text=Hi%20Liliyum%20Patisserie,%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-white/80 text-[#3B1C10] border border-[#E7D6CB] px-4 sm:px-7 py-4 rounded-2xl font-semibold text-xs sm:text-sm shadow-sm transition-all duration-300 max-w-full"
          >
            <Phone className="w-4 h-4 text-[#A8644A] shrink-0" />
            <span>WhatsApp </span>
          </a>
        </div>

        {/* Location & Speed Note */}
        <div className="inline-flex flex-wrap items-center justify-center gap-6 text-xs text-[#7A6760] pt-6 border-t border-[#E7D6CB]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#A8644A]" />
            <span>Orders before 4 PM delivered same day</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#A8644A]" />
            <span>Delivery across Bangalore Pin Codes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
