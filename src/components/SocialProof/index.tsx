import React from "react";
import {Play, Quote} from "lucide-react";

export const SocialProof: React.FC = () => {
  const reviews = [
    {
      id: 1,
      type: "text",
      quote: "It's rare to find a celebration cake that tastes this natural, with a flavor so pure and satisfying it instantly lifted my mood.",
      name: "SOFIA NOVAK",
      role: "Product Manager • Indiranagar",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      rotation: "-rotate-3"
    }, {
      id: 7,
      type: "text",
      quote: "Ordered for my daughter's birthday. Arrived same-day in Bangalore in perfect temperature-controlled shape. Truly world class!",
      name: "ANANYA SHARMA",
      role: "Bangalore Foodie • HSR Layout",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
      rotation: "-rotate-1"
    }, {
      id: 3,
      type: "text",
      quote: "From the very first spoonful, this ice cream & cake delivered a luxurious, melt-in-your-mouth experience that I didn't want to end.",
      name: "AMELIA CHEN",
      role: "Content Creator • Koramangala",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
      rotation: "-rotate-2"
    }, {
      id: 5,
      type: "text",
      quote: "The packaging caught my eye, but it was the velvety texture and deep, authentic taste that made me fall in love with Liliyum.",
      name: "THEO MILLER",
      role: "Brand Photographer • Whitefield",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rotation: "-rotate-3"
    }, {
      id: 5,
      type: "text",
      quote: "The tart is so soothingly beautiful, but it was the velvety texture and deep, authentic taste that made me fall in love with Liliyum.",
      name: "ANBER WITNES",
      role: "Brand Ambessador • Whitefield",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy91MnvUrhn4pCvXQr00r3nSgxCW160Rx6iy9q9N6fVQ&s=10",
      rotation: "-rotate-3"
    }, {
      id: 1,
      type: "text",
      quote: "It's my peasure to experience such great taste here, with a flavor so pure and satisfying it instantly lifted my mood.",
      name: "Kashish Mena",
      role: "ProductSeller • Indiranagar",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSxWxSHxgRj8DskQM3DXJuQb3jFKYhlrqloLMcSZlrYg&s=10",
      rotation: "-rotate-3"
    }, {
      id: 7,
      type: "text",
      quote: "Ordered for my daughter's birthday. Arrived same-day in Bangalore in perfect temperature-controlled shape. Truly world class!",
      name: "POOJA SHARMA",
      role: "Bangalore Foodie • HSR Layout",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBtea7w6towTWT6G14tgXhDDcHhDbEx8gDTdFwtPr0g&s",
      rotation: "-rotate-1"
    }
  ];

  // Duplicate list to achieve continuous infinite marquee loop
  const marqueeItems = [
    ...reviews,
    ...reviews
  ];

  return (<section className="py-20 sm:py-28 bg-[#FDE7DA] text-[#3B2C27] w-full max-w-full overflow-hidden select-none relative">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 px-4">
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#3B1C10] tracking-tight text-center mb-8">
        Sweet Notes from Customers
      </h2>
      <p className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-[#7D5A50]">
        What Our Patrons Say Across Bangalore
      </p>
    </div>

    {/* Infinite Moving Marquee Carousel Container */}
    <div className="w-full overflow-hidden py-6">
      <div className="flex gap-6 sm:gap-8 animate-marquee hover:[animation-play-state:paused] w-max px-4">
        {
          marqueeItems.map((item, idx) => (<div key={`${item.id}-${idx}`} className={`shrink-0 transition-transform duration-300 hover:scale-105 hover:z-30 hover:rotate-0 ${item.rotation}`}>
            {
              item.type === "text"
                ? (
                /* Sticky Note Text Card */
                <div className="w-72 sm:w-80 bg-[#FFF3E4] border-4 border-white rounded-3xl p-6 shadow-xl flex flex-col justify-between h-[360px] relative">
                  <div>
                    {/* Pink Quotation Mark */}
                    <Quote className="w-10 h-10 text-[#F05D5E] fill-[#F05D5E] mb-3 opacity-90"/>
                    <p className="text-xs sm:text-sm text-[#42312A] font-medium leading-relaxed line-clamp-6">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Details Footer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-[#F5E2CE]">
                    <img src={item.avatar} alt={item.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"/>
                    <div>
                      <h4 className="font-extrabold text-xs text-[#F05D5E] tracking-wider uppercase">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#7D5A50] block">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>)
                : (
                /* Photo / Video Reel Card */
                <div className="w-64 sm:w-72 h-[360px] bg-white border-4 border-white rounded-3xl overflow-hidden shadow-xl relative group cursor-pointer">
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>{" "}
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"/>{" "}
                  {/* Centered Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/40 backdrop-blur-md border border-white/60 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-white text-white ml-1"/>
                    </div>
                  </div>
                  {/* Caption Tag */}
                  {/* <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold text-[#3B2C27] shadow-sm text-center">
                    {item.caption}
                  </div> */
                  }
                </div>)
            }
          </div>))
        }
      </div>
    </div>
  </section>);
};
