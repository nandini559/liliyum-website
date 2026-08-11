import React from "react";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";

const CategoryPage: React.FC = () => {
  const navigate = useNavigate();

  return (<section className="relative w-full bg-amber-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#3B1C10] tracking-tight leading-[1.1] mb-6">
          Shop By Category
        </h2>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 relative">
        {/* =====================================================
              CARD 1 - FRUIT & NUT GOODNESS
          ====================================================== */
        }
        <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }} className="md:col-span-8 bg-amber-800 rounded-[28px] sm:rounded-[36px] overflow-hidden p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-black/20 group relative min-h-[300px]">
          <div className="w-full sm:w-1/2 h-56 sm:h-full min-h-[220px] relative overflow-hidden rounded-2xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpT4MoVKnDvcXoZKGWWvmE69pLRcQ9pL6rMzcjbsdoNw&s=10" alt="Local Donuts & Coffee" className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"/>
          </div>

          <div className="w-full sm:w-1/2 text-white space-y-3 z-10">
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-snug">
              Fruit & Nut Goodness
            </h3>

            <p className="text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
              Fruity flavours paired with our signature glaze-dipped signature pastries baked fresh daily.
            </p>

            <div className="pt-2">
              <button type="button" onClick={() => navigate("/menu")} className="px-6 py-2.5 rounded-full bg-[#E88B2A] hover:bg-[#D4791E] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer transform hover:scale-105 inline-flex items-center gap-2">
                <span>Browse Shop</span>
                <ChevronRight className="w-4 h-4"/>
              </button>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
              CARD 2 - HOMEMADE CUPCAKE
          ====================================================== */
        }
        <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="md:col-span-4 bg-amber-300 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-md border border-[#E6DEC3]/60 group relative overflow-hidden min-h-[300px]">
          <div className="relative z-10 space-y-2 flex flex-col items-center">
            <div className="relative mb-2">
              <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop" alt="Homemade Cupcake" className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-500"/>

              <span className="absolute -bottom-1 -right-1 bg-[#E88B2A] text-white text-[10px] font-serif italic px-2 py-0.5 rounded-full shadow-xs">
                Bakery Fresh
              </span>
            </div>

            <h4 className="font-serif italic font-bold text-2xl text-white leading-tight">
              home made cupcake
            </h4>

            <p className="text-xs text-white font-medium max-w-[200px]">
              Fluffy Madagascar vanilla sponge topped with Belgian buttercream swirl.
            </p>

            <button type="button" onClick={() => navigate("/menu")} className="mt-3 text-xs font-extrabold text-[#E88B2A] hover:underline cursor-pointer">
              Order Now →
            </button>
          </div>
        </motion.div>

        {/* =====================================================
              CARD 3 - CHOCOLATE CAKE
          ====================================================== */
        }
        <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="md:col-span-4 bg-amber-950 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl border border-black/20 group relative overflow-hidden min-h-[380px]">
          <div className="space-y-3 z-10">
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-white leading-tight">
              Chocolate Cakes
            </h3>

            <p className="text-xs text-gray-300 leading-relaxed">
              Rich 70% dark cocoa layer cake topped with silken chocolate ganache and roasted hazelnuts.
            </p>
          </div>

          <button type="button" onClick={() => navigate("/menu")} className="mt-3 text-xs font-extrabold text-white hover:underline cursor-pointer text-left">
            Order Now →
          </button>

          <div className="mt-6 relative h-40 w-full overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop" alt="Chocolate Ganache & Cocoa" className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"/>
          </div>
        </motion.div>

        {/* =====================================================
              CARD 4 - MACARONS
          ====================================================== */
        }
        <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="md:col-span-4 bg-green-300 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between shadow-md border border-[#E6DEC3]/60 group relative overflow-hidden min-h-[340px]">
          <div>
            <h4 className="font-sans font-extrabold text-4xl text-white">
              Regular Cakes
            </h4>

            <p className="text-xs text-white mt-1">
              French almond meringue shells filled with raspberry, pistachio & chocolate ganache.
            </p>
          </div>

          <button type="button" onClick={() => navigate("/menu")} className="mt-3 text-xs font-extrabold text-white hover:underline cursor-pointer text-left">
            Order Now →
          </button>

          <div className="mt-1 relative h-44 w-full overflow-hidden rounded-2xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCK01Op-EcXbeRNzlSt3n1ogE3ckEDC4P1FXeL33wdkA&s=10" alt="Macarons" className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"/>
          </div>
        </motion.div>

        {/* =====================================================
              CARD 5 - CHOCO CROISSANT
          ====================================================== */
        }
        <motion.div initial={{
            opacity: 0,
            y: 25
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="md:col-span-4 bg-amber-500 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-gray-100 group relative overflow-hidden min-h-[340px]">
          <div>
            <h4 className="font-sans font-extrabold text-3xl text-white">
              Customised Cakes
            </h4>

            <p className="text-xs text-white mt-1">
              Flaky butter croissants filled with dark chocolate ganache and amarena cherry glaze.
            </p>
          </div>

          <button type="button" onClick={() => navigate("/menu")} className="mt-3 text-xs font-extrabold text-white hover:underline cursor-pointer text-left">
            Order Now →
          </button>

          <div className="mt-4 relative h-44 w-full overflow-hidden rounded-2xl">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4qgPF2oyXiZFDpdVQ7elDHK-KJqZtKzzGFeJBP27hWQ&s=10" alt="Choco Cherry Croissants" className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"/>
          </div>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default CategoryPage;
