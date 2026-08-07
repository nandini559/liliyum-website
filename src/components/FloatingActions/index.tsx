import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const whatsappMessage = encodeURIComponent(
    'Hi Liliyum Patisserie, I would like to place an order!'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none pointer-events-auto">
      {/* WhatsApp Button */}
      {/* <a
        href={`https://wa.me/919986350349?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
        aria-label="Contact us on WhatsApp"
      >
        <Phone className="w-5 h-5 fill-white text-white shrink-0" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          WhatsApp
        </span>
      </a> */}

      {/* Go to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#3B1C10] hover:bg-[#28120A] text-[#FAF3EA] flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#522919]/40 cursor-pointer"
          aria-label="Go to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </div>
  );
};

export default FloatingActions;
