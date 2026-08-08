import React, { useState } from 'react';
import {
  Clock,
  MapPin,
  MessageSquare,
  Gift,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Award,
  Plus,
  Check,
  Heart,
  Truck,
} from 'lucide-react';

export const About: React.FC = () => {
  // Gallery State
  const galleryItems = [
    {
      id: 'g1',
      title: 'Belgian Dark Chocolate Truffle Cake',
      category: 'Celebration',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop',
      badge: 'Bestseller',
      desc: '70% single-origin Belgian dark chocolate ganache layered with moist cocoa chiffon.'
    },
    {
      id: 'g2',
      title: 'Signature Rose & Pistachio Cake',
      category: 'Signature',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsX-YyECMEzppM67Ln3eE6sDfZsmO48-NFZezf61OPEQ&s=10',
      badge: 'Chef Special',
      desc: 'Kannauj rose water, roasted Iranian pistachios, and cardamom infused cream.'
    },
    {
      id: 'g3',
      title: 'New York Baked Blueberry Cheesecake',
      category: 'Cheesecakes',
      image: 'https://i0.wp.com/virginiawillis.com/wp-content/uploads/2025/07/no-bake-berry-yogurt-cheesecake-slice-scaled.jpg?fit=1920%2C2560&ssl=1',
      badge: 'Classic',
      desc: 'Dense baked cheesecake on a buttery graham crust topped with wild blueberry compote.'
    },
    {
      id: 'g4',
      title: 'Lotus Biscoff Speculoos Crunch',
      category: 'Cheesecakes',
      image: 'https://i0.wp.com/recipesbycarina.com/wp-content/uploads/2020/08/Berry-Cheesecake-Recipe-scaled.jpg?fit=1920%2C2560&ssl=1',
      badge: 'Trending',
      desc: 'Spiced cheesecake with cookie butter drizzle and crushed Speculoos cookies.'
    },
    {
      id: 'g5',
      title: 'Grand Belgian Praline Gift Box',
      category: 'Luxury',
      image: 'https://i0.wp.com/chocolategourmet.co.uk/wp-content/uploads/2022/06/65AB6200-8400-4F73-8DB7-D7A3E5CED37A-scaled.jpeg?fit=1920%2C2560&ssl=1',
      badge: 'Luxury Box',
      desc: 'Assorted 16-piece Belgian bonbons with hazelnut praline and salted caramel.'
    }
  ];

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');

  // Filter Gallery Items
  const filteredGallery = activeCategoryFilter === 'All'
    ? galleryItems
    : galleryItems.filter(g => g.category === activeCategoryFilter);

  const selectedGallery = filteredGallery[activeGalleryIndex] || filteredGallery[0] || galleryItems[0];

  // Variants State
  const variants = [
    { id: 'v-05', name: '0.5 kg (Serves 4-6)', basePrice: 40 },
    { id: 'v-10', name: '1.0 kg (Serves 8-10)', basePrice: 65 },
    { id: 'v-15', name: '1.5 kg (Serves 12-15)', basePrice: 90 },
    { id: 'v-20', name: '2.0 kg (Serves 16-20)', basePrice: 115 }
  ];

  const dietaryOptions = [
    { id: 'classic', label: 'Classic Standard', extraPrice: 0 },
    { id: 'eggless', label: '100% Eggless', extraPrice: 2 },
    { id: 'vegan', label: 'Vegan / Plant-Based', extraPrice: 4 },
    { id: 'gluten-free', label: 'Gluten-Free', extraPrice: 4 }
  ];

  const flavorOptions = [
    { id: 'f1', name: '70% Belgian Dark Truffle' },
    { id: 'f2', name: 'Rose & Roasted Pistachio' },
    { id: 'f3', name: 'Lotus Biscoff Speculoos' },
    { id: 'f4', name: 'Madagascar Vanilla Bean & Berry' }
  ];

  const [selectedVariant, setSelectedVariant] = useState(variants[1]);
  const [selectedDiet, setSelectedDiet] = useState(dietaryOptions[0]);
  const [selectedFlavor, setSelectedFlavor] = useState(flavorOptions[0]);

  // Delivery Slot Picker State
  const [pincode, setPincode] = useState('560038');
  const [pincodeStatus, setPincodeStatus] = useState<string | null>('Available for Express Same-Day Delivery!');
  const [selectedDate, setSelectedDate] = useState('Today');
  const [selectedSlot, setSelectedSlot] = useState('Evening (05:00 PM - 08:00 PM)');

  const deliverySlots = [
    { id: 's1', label: 'Morning Slot', time: '09:00 AM - 12:00 PM', fee: 0, tag: 'FREE' },
    { id: 's2', label: 'Afternoon Slot', time: '01:00 PM - 04:00 PM', fee: 0, tag: 'FREE' },
    { id: 's3', label: 'Evening Slot', time: '05:00 PM - 08:00 PM', fee: 0, tag: 'FREE' },
    { id: 's4', label: 'Midnight Express', time: '11:30 PM - 12:00 AM', fee: 5, tag: '+$5.00' }
  ];

  const handlePincodeCheck = (code: string) => {
    setPincode(code);
    if (code.length === 6) {
      if (code.startsWith('56')) {
        setPincodeStatus('Available for Express Same-Day Delivery in Bangalore!');
      } else {
        setPincodeStatus('Standard 24-48 hr courier shipping available for this area.');
      }
    } else {
      setPincodeStatus(null);
    }
  };

  // Personalization State
  const [cakeMessage, setCakeMessage] = useState('');
  const [selectedTopper, setSelectedTopper] = useState('Gold Acrylic "Happy Birthday"');
  const [giftNote, setGiftNote] = useState('');

  const toppers = [
    { id: 't0', label: 'No Topper', price: 0 },
    { id: 't1', label: 'Gold Acrylic "Happy Birthday"', price: 3 },
    { id: 't2', label: 'Rose Gold "Happy Anniversary"', price: 3 },
    { id: 't3', label: 'Silver Mirror "Bride to Be"', price: 3 },
    { id: 't4', label: 'Custom Name Acrylic Topper', price: 5 }
  ];

  // Upsells / Add-ons State
  const upsellItems = [
    {
      id: 'u1',
      name: 'Luxury Handcrafted Golden Candles (Set of 6)',
      price: 4,
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=300&auto=format&fit=crop',
      desc: 'Slim metallic gold drip-free birthday candles.'
    },
    {
      id: 'u2',
      name: 'Sparkler Birthday Fountain (Pack of 2)',
      price: 3,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=300&auto=format&fit=crop',
      desc: 'Smokeless indoor celebration sparkling fountains.'
    },
    {
      id: 'u3',
      name: 'Assorted Belgian Truffle Box (4 Pcs)',
      price: 8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK8ZSkXb9FutBU6JOjzI0SF2r7yVjDSnBAB7AMEeEdPQ&s=10',
      desc: 'Luxury mini sampler box with hazelnut pralines.'
    },
    {
      id: 'u4',
      name: 'Foil-Stamped Premium Greeting Card',
      price: 2,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=300&auto=format&fit=crop',
      desc: 'Hand-lettered card with custom handwritten note inside.'
    }
  ];

  const [selectedUpsells, setSelectedUpsells] = useState<string[]>(['u1']);

  const toggleUpsell = (id: string) => {
    if (selectedUpsells.includes(id)) {
      setSelectedUpsells(selectedUpsells.filter(item => item !== id));
    } else {
      setSelectedUpsells([...selectedUpsells, id]);
    }
  };

  // Calculate Total Price
  const topperObj = toppers.find(t => t.label === selectedTopper) || toppers[0];
  const slotObj = deliverySlots.find(s => s.label.includes(selectedSlot.split(' ')[0])) || deliverySlots[2];
  const upsellsTotal = selectedUpsells.reduce((acc, currId) => {
    const item = upsellItems.find(u => u.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  const totalPrice = selectedVariant.basePrice + selectedDiet.extraPrice + topperObj.price + slotObj.fee + upsellsTotal;

  // Build WhatsApp Order Link
  const whatsappPayload = encodeURIComponent(
    `Hi Liliyum Patisserie!\nI would like to place a custom cake order:\n\n` +
    `🎂 *Flavor:* ${selectedFlavor.name}\n` +
    `⚖️ *Portion:* ${selectedVariant.name}\n` +
    `🌱 *Diet Preference:* ${selectedDiet.label}\n` +
    `✍️ *Message on Cake:* ${cakeMessage || 'None'}\n` +
    `👑 *Topper:* ${selectedTopper}\n` +
    `🎁 *Gift Note:* ${giftNote || 'None'}\n` +
    `📅 *Delivery Date:* ${selectedDate}\n` +
    `🕒 *Delivery Slot:* ${selectedSlot}\n` +
    `📍 *Pincode:* ${pincode}\n` +
    `✨ *Add-ons:* ${selectedUpsells.length > 0 ? selectedUpsells.map(id => upsellItems.find(u => u.id === id)?.name).join(', ') : 'None'}\n\n` +
    `💰 *Estimated Total:* $${totalPrice.toFixed(2)}\n\nPlease confirm availability!`
  );

  return (
    <main className="py-8 sm:py-16 min-h-screen w-full max-w-full overflow-x-hidden relative select-none mt-16 sm:mt-20 bg-gradient-to-br from-[#FFE8EF] via-[#FFF4E3] to-[#E4F5EE]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-60">
        <div className="absolute top-10 left-[8%] w-4 h-4 rounded-full bg-[#F45B82]/30 animate-pulse" />
        <div className="absolute top-32 right-[12%] w-3 h-5 rounded-sm bg-[#75DEC0]/40 rotate-12" />
        <div className="absolute top-96 left-[15%] w-4 h-4 rounded-full bg-[#FFD363]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 space-y-16 sm:space-y-24">

        {/* 1. HERO / ABOUT STORY SECTION */}
        <section className="text-center max-w-4xl mx-auto pt-4">

          <h1 className="font-serif text-2xl sm:text-3xl md:text-6xl font-black text-[#2B1B17] tracking-tight mb-5 leading-tight">
            Crafting Unforgettable Moments, One Slice at a Time
          </h1>
          <p className="text-sm sm:text-sm text-[#6E554C] font-medium leading-relaxed max-w-2xl mx-auto">
            At Liliyum, we combine French pastry techniques with 100% single-origin Belgian chocolate, organic fruits, and artisan passion. Every cake is baked fresh to order for your special celebrations.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 text-left">
            <div className="bg-white/90 p-5 rounded-3xl border border-white/60 shadow-sm flex flex-col items-center text-center">
              <ShieldCheck className="w-8 h-8 text-[#75DEC0] mb-2" />
              <h4 className="font-serif font-extrabold text-[#2B1B17] text-base">100% Fresh Daily</h4>
              <p className="text-xs text-gray-600 mt-1">Baked on the date of delivery</p>
            </div>
            <div className="bg-white/90 p-5 rounded-3xl border border-white/60 shadow-sm flex flex-col items-center text-center">
              <Award className="w-8 h-8 text-[#FFD363] mb-2" />
              <h4 className="font-serif font-extrabold text-[#2B1B17] text-base">Belgian Cocoa</h4>
              <p className="text-xs text-gray-600 mt-1">70% single-origin cocoa</p>
            </div>
            <div className="bg-white/90 p-5 rounded-3xl border border-white/60 shadow-sm flex flex-col items-center text-center">
              <Truck className="w-8 h-8 text-[#F45B82] mb-2" />
              <h4 className="font-serif font-extrabold text-[#2B1B17] text-base">Same-Day Slots</h4>
              <p className="text-xs text-gray-600 mt-1">Temperature-controlled vans</p>
            </div>
            <div className="bg-white/90 p-5 rounded-3xl border border-white/60 shadow-sm flex flex-col items-center text-center">
              <Heart className="w-8 h-8 text-rose-500 mb-2" />
              <h4 className="font-serif font-extrabold text-[#2B1B17] text-base">Custom Made</h4>
              <p className="text-xs text-gray-600 mt-1">Personalized message & toppers</p>
            </div>
          </div>
        </section>

        {/* 2. GALLERY SECTION */}
        <section className="bg-white/90 rounded-[36px] p-6 sm:p-10 border border-white/80 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B1B17]">
                Cake Gallery & Signature Creations
              </h2>
            </div>
            {/* Gallery Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
              {['All', 'Signature', 'Celebration', 'Cheesecakes', 'Luxury'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategoryFilter(cat);
                    setActiveGalleryIndex(0);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer ${activeCategoryFilter === cat
                    ? 'bg-[#1C1C1C] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Layout: Large Showcase Left, Thumbnails Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Image Viewport */}
            <div className="lg:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-black">
              <img
                src={selectedGallery.image}
                alt={selectedGallery.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]" />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black text-[#2B1B17] uppercase tracking-wider shadow-sm">
                {selectedGallery.badge}
              </div>
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
                <h3 className="font-serif text-2xl font-bold mb-1">{selectedGallery.title}</h3>
                <p className="text-xs sm:text-sm text-gray-200">{selectedGallery.desc}</p>
              </div>
            </div>

            {/* Thumbnail Selector Grid */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-500">
                Select Creation ({filteredGallery.length} Items):
              </h4>
              <div className="grid grid-cols-1 gap-3 max-h-[360px] overflow-y-auto pr-1 no-scrollbar">
                {filteredGallery.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`flex items-center gap-4 p-3 rounded-2xl border text-left transition-all cursor-pointer ${activeGalleryIndex === idx
                      ? 'bg-[#FFE8EF] border-[#F45B82] shadow-sm'
                      : 'bg-white hover:bg-gray-50 border-gray-100'
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F45B82] block">
                        {item.category}
                      </span>
                      <h5 className="font-serif font-bold text-sm text-[#2B1B17] line-clamp-1">
                        {item.title}
                      </h5>
                      <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{item.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. VARIANTS & CUSTOMIZATION SECTION */}
        <section className="bg-white/90 rounded-[36px] p-6 sm:p-10 border border-white/80 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#F45B82] block mb-1">
              Custom Portion & Flavor Options
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B1B17]">
              Select Weight, Flavor & Dietary Base
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Choose your portion size, preferred flavor profile, and eggless or vegan requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Weight / Portion Selector */}
            <div className="bg-[#FAF7F5] p-5 rounded-3xl border border-[#EFE4D9] space-y-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#2B1B17] block flex items-center justify-between">
                <span>1. Portion Size (Weight):</span>
                <span className="text-[#F45B82] font-black text-sm">${selectedVariant.basePrice.toFixed(2)}</span>
              </label>
              <div className="space-y-2">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left flex items-center justify-between border transition-all cursor-pointer ${selectedVariant.id === v.id
                      ? 'bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-sm'
                      : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
                      }`}
                  >
                    <span>{v.name}</span>
                    <span>${v.basePrice.toFixed(2)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Flavor Selection */}
            <div className="bg-[#FAF7F5] p-5 rounded-3xl border border-[#EFE4D9] space-y-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#2B1B17] block">
                2. Signature Flavor Profile:
              </label>
              <div className="space-y-2">
                {flavorOptions.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFlavor(f)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left border transition-all cursor-pointer ${selectedFlavor.id === f.id
                      ? 'bg-[#F45B82] text-white border-[#F45B82] shadow-sm'
                      : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
                      }`}
                  >
                    {f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Dietary Preference */}
            <div className="bg-[#FAF7F5] p-5 rounded-3xl border border-[#EFE4D9] space-y-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-[#2B1B17] block">
                3. Dietary & Ingredient Base:
              </label>
              <div className="space-y-2">
                {dietaryOptions.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setSelectedDiet(d)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-left flex items-center justify-between border transition-all cursor-pointer ${selectedDiet.id === d.id
                      ? 'bg-[#75DEC0] text-[#12392F] border-[#75DEC0] font-black shadow-sm'
                      : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
                      }`}
                  >
                    <span>{d.label}</span>
                    <span>{d.extraPrice > 0 ? `+$${d.extraPrice.toFixed(2)}` : 'Included'}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. DELIVERY SLOT PICKER SECTION */}
        <section className="bg-white/90 rounded-[36px] p-6 sm:p-10 border border-white/80 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#F45B82] block mb-1">
              Delivery Logistics & Slot Picker
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B1B17]">
              Check Pincode & Select Delivery Slot
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Enter your area pincode to verify same-day delivery availability and reserve your time window.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Pincode & Date Selection */}
            <div className="lg:col-span-5 space-y-5 bg-[#FAF7F5] p-6 rounded-3xl border border-[#EFE4D9]">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-gray-700 block mb-2">
                  Enter Delivery Pincode:
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => handlePincodeCheck(e.target.value)}
                    placeholder="e.g. 560038"
                    maxLength={6}
                    className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-2.5 text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F45B82]"
                  />
                </div>
                {pincodeStatus && (
                  <p className="text-xs font-bold text-emerald-700 mt-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{pincodeStatus}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-gray-700 block mb-2">
                  Select Delivery Date:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Today', 'Tomorrow', 'Day After'].map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${selectedDate === date
                        ? 'bg-[#1C1C1C] text-white border-[#1C1C1C]'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Time Slot Picker Grid */}
            <div className="lg:col-span-7 space-y-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-gray-700 block">
                Select Preferred Time Slot:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverySlots.map((slot) => {
                  const isSelected = selectedSlot.includes(slot.label.split(' ')[0]);
                  return (
                    <button
                      key={slot.id}
                      onClick={() => setSelectedSlot(`${slot.label} (${slot.time})`)}
                      className={`p-4 rounded-2xl border text-left flex items-start justify-between transition-all cursor-pointer ${isSelected
                        ? 'bg-[#FFE8EF] border-[#F45B82] ring-2 ring-[#F45B82]/30 shadow-sm'
                        : 'bg-white hover:bg-gray-50 border-gray-200'
                        }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="w-4 h-4 text-[#F45B82]" />
                          <span className="font-serif font-bold text-sm text-[#2B1B17]">{slot.label}</span>
                        </div>
                        <span className="text-xs text-gray-600 font-medium">{slot.time}</span>
                      </div>
                      <span className={`text-xs font-black px-2.5 py-1 rounded-full ${slot.fee > 0 ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'
                        }`}>
                        {slot.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5. PERSONALIZATION ENGINE SECTION */}
        <section className="bg-white/90 rounded-[36px] p-6 sm:p-10 border border-white/80 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#F45B82] block mb-1">
              Personalized Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B1B17]">
              Inscriptions, Acrylic Toppers & Gift Cards
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Add piped message on cake, select premium acrylic toppers, and write custom card notes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Piped Message & Gift Note Inputs */}
            <div className="space-y-5 bg-[#FAF7F5] p-6 rounded-3xl border border-[#EFE4D9]">
              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-gray-800 block mb-1.5 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#F45B82]" />
                  <span>Custom Inscription on Cake (Max 40 Chars):</span>
                </label>
                <input
                  type="text"
                  value={cakeMessage}
                  onChange={(e) => setCakeMessage(e.target.value)}
                  placeholder="e.g. Happy 25th Birthday Priya! ❤️"
                  maxLength={40}
                  className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2.5 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F45B82]"
                />
              </div>

              <div>
                <label className="text-xs font-extrabold uppercase tracking-wider text-gray-800 block mb-1.5 flex items-center gap-2">
                  <Gift className="w-4 h-4 text-[#F45B82]" />
                  <span>Foil-Printed Gift Card Note (Optional):</span>
                </label>
                <textarea
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  placeholder="Write a warm personalized message to be printed inside the luxury gift card..."
                  rows={3}
                  className="w-full bg-white border border-gray-300 rounded-xl p-3 text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F45B82]"
                />
              </div>
            </div>

            {/* Acrylic Toppers Picker */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase tracking-wider text-gray-800 block">
                Select Premium Acrylic Topper:
              </label>
              <div className="space-y-2.5">
                {toppers.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTopper(t.label)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${selectedTopper === t.label
                      ? 'bg-[#1C1C1C] text-white border-[#1C1C1C] shadow-sm'
                      : 'bg-white hover:bg-gray-50 border-gray-200 text-gray-800'
                      }`}
                  >
                    <span className="text-xs font-bold">{t.label}</span>
                    <span className="text-xs font-extrabold">
                      {t.price > 0 ? `+$${t.price.toFixed(2)}` : 'FREE'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. UPSELLS & CELEBRATION ADD-ONS SECTION */}
        <section className="bg-white/90 rounded-[36px] p-6 sm:p-10 border border-white/80 shadow-lg">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-[#F45B82] block mb-1">
              Celebration Add-Ons
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#2B1B17]">
              Complete Your Party Box (Upsells)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Add golden candles, sparklers, Belgian truffles, or luxury cards to your cake hamper.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {upsellItems.map((u) => {
              const isSelected = selectedUpsells.includes(u.id);
              return (
                <div
                  key={u.id}
                  onClick={() => toggleUpsell(u.id)}
                  className={`p-4 rounded-3xl border flex flex-col justify-between cursor-pointer transition-all duration-300 transform hover:-translate-y-1 ${isSelected
                    ? 'bg-[#FFE8EF] border-[#F45B82] shadow-md ring-2 ring-[#F45B82]/20'
                    : 'bg-white hover:bg-gray-50 border-gray-200'
                    }`}
                >
                  <div>
                    <img
                      src={u.image}
                      alt={u.name}
                      className="w-full h-32 object-cover rounded-2xl mb-3 shadow-xs"
                    />
                    <h4 className="font-serif font-bold text-sm text-[#2B1B17] leading-snug mb-1">
                      {u.name}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mb-3">{u.desc}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
                    <span className="font-serif font-extrabold text-base text-[#2B1B17]">
                      +${u.price.toFixed(2)}
                    </span>
                    <button
                      type="button"
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-[#F45B82] text-white' : 'bg-gray-100 text-gray-700'
                        }`}
                    >
                      {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7. LIVE SUMMARY & WHATSAPP ORDER CTA */}
        <section className="bg-[#1C1C1C] text-white rounded-[36px] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-[#75DEC0] block">
                Instant Order Summary
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Experience Liliyum Artistry?
              </h2>
              <div className="space-y-1.5 text-xs sm:text-sm text-gray-300 font-medium pt-2">
                <p>• <strong>Selection:</strong> {selectedFlavor.name} ({selectedVariant.name})</p>
                <p>• <strong>Dietary Base:</strong> {selectedDiet.label}</p>
                <p>• <strong>Slot:</strong> {selectedDate} — {selectedSlot}</p>
                <p>• <strong>Personalization:</strong> {cakeMessage ? `"${cakeMessage}"` : 'None'}</p>
                <p>• <strong>Add-ons Selected:</strong> {selectedUpsells.length} Items</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 flex flex-col items-center text-center space-y-4">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-gray-400 block mb-1">
                  Calculated Total
                </span>
                <span className="font-serif text-4xl sm:text-5xl font-black text-white">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <a
                href={`https://wa.me/919986350349?text=${whatsappPayload}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#75DEC0] hover:bg-[#60ceb0] text-[#12392F] font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] shadow-lg cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Confirm & Order via WhatsApp</span>
              </a>

              <p className="text-[11px] text-gray-400">
                Direct chef confirmation & temperature-controlled delivery slot.
              </p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};
