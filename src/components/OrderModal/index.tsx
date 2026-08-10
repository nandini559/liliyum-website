import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  X,
  ShoppingBag,
  MapPin,
  Clock,
  Gift,
  Check,
  Plus,
  Minus,
  MessageSquare,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Tag,
  Phone,
  Heart,
  CheckCircle
} from 'lucide-react';
import { useOrderModal } from '../../context/OrderModalContext';
import {
  PRODUCTS,
  DELIVERY_SLOTS,
  UPSELL_ITEMS,
  type Product,
  type ProductVariant
} from '../../data/products';

export const OrderModal: React.FC = () => {
  const { isOpen, closeOrderModal, selectedProduct, setSelectedProduct } = useOrderModal();

  // Current Step: 1 = Item & Personalization, 2 = Delivery & Slot, 3 = Upsells, 4 = Review & Checkout, 5 = Success Confirmation
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Item selection state
  const [activeVariant, setActiveVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cakeMessage, setCakeMessage] = useState<string>('');
  const [occasion, setOccasion] = useState<string>('Birthday');

  // Customer & Delivery state
  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isGift, setIsGift] = useState<boolean>(false);
  const [recipientName, setRecipientName] = useState<string>('');
  const [recipientPhone, setRecipientPhone] = useState<string>('');

  const [addressLine, setAddressLine] = useState<string>('');
  const [locality, setLocality] = useState<string>('Indiranagar');
  const [pincode, setPincode] = useState<string>('560038');
  const [deliveryNote, setDeliveryNote] = useState<string>('');
  const [isPincodeValid, setIsPincodeValid] = useState<boolean>(true);

  // Slot selection state
  const [deliveryDateOption, setDeliveryDateOption] = useState<'today' | 'tomorrow' | 'custom'>('today');
  const [customDate, setCustomDate] = useState<string>('');
  const [selectedSlotId, setSelectedSlotId] = useState<string>('slot-1');

  // Upsell state
  const [selectedUpsellIds, setSelectedUpsellIds] = useState<string[]>(['upsell-1']);

  // Discount / Coupon state
  const [couponCode, setCouponCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number } | null>({
    code: 'LILIYUM10',
    percent: 10
  });
  const [couponError, setCouponError] = useState<string>('');

  // Payment method & confirmation
  const [paymentMethod, setPaymentMethod] = useState<'whatsapp' | 'online' | 'cod'>('whatsapp');
  const [orderId, setOrderId] = useState<string>('');

  const currentProduct: Product = selectedProduct || PRODUCTS[0];

  useEffect(() => {
    if (currentProduct) {
      if (currentProduct.variants && currentProduct.variants.length > 0) {
        setActiveVariant(currentProduct.variants[0]);
      } else {
        setActiveVariant({ id: 'default', name: 'Standard', price: currentProduct.price });
      }
    }
  }, [currentProduct]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Pricing Calculations
  const unitPrice = activeVariant ? activeVariant.price : currentProduct.price;
  const productSubtotal = unitPrice * quantity;

  const selectedUpsells = UPSELL_ITEMS.filter((item) => selectedUpsellIds.includes(item.id));
  const upsellsTotal = selectedUpsells.reduce((sum, item) => sum + item.price, 0);

  const selectedSlot = DELIVERY_SLOTS.find((s) => s.id === selectedSlotId) || DELIVERY_SLOTS[0];
  const deliveryFee = selectedSlot.price === 'FREE' ? 0 : 5.00;

  const grossTotal = productSubtotal + upsellsTotal + deliveryFee;
  const discountAmount = appliedDiscount ? (grossTotal * appliedDiscount.percent) / 100 : 0;
  const finalTotal = Math.max(0, grossTotal - discountAmount);

  // Toggle Upsell
  const toggleUpsell = (upsellId: string) => {
    setSelectedUpsellIds((prev) =>
      prev.includes(upsellId) ? prev.filter((id) => id !== upsellId) : [...prev, upsellId]
    );
  };

  // Coupon handling
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    const code = couponCode.trim().toUpperCase();
    if (code === 'LILIYUM10' || code === 'WELCOME10') {
      setAppliedDiscount({ code: 'LILIYUM10', percent: 10 });
    } else if (code === 'CELEBRATE15' || code === 'LILIYUM15') {
      setAppliedDiscount({ code: 'CELEBRATE15', percent: 15 });
    } else {
      setCouponError('Invalid code. Try "LILIYUM10" for 10% off!');
    }
  };

  // Form submit / WhatsApp Order text builder
  const buildWhatsAppMessage = () => {
    const dateStr =
      deliveryDateOption === 'today'
        ? 'Today (Express)'
        : deliveryDateOption === 'tomorrow'
          ? 'Tomorrow'
          : customDate || 'Custom Date';

    let msg = `*LILIYUM PATISSERIE - NEW ORDER REQ*\n`;
    msg += `--------------------------------------\n`;
    msg += `*Order ID:* LIL-${Math.floor(100000 + Math.random() * 900000)}\n`;
    msg += `*Product:* ${currentProduct.name}\n`;
    msg += `*Variant:* ${activeVariant?.name || 'Standard'}\n`;
    msg += `*Quantity:* ${quantity}\n`;
    msg += `*Occasion:* ${occasion}\n`;
    if (cakeMessage) {
      msg += `*Message on Cake:* "${cakeMessage}"\n`;
    }
    msg += `--------------------------------------\n`;
    msg += `*DELIVERY DETAILS:*\n`;
    msg += `*Customer:* ${customerName || 'Valued Guest'}\n`;
    msg += `*Phone:* ${phone || 'Not Provided'}\n`;
    if (isGift && recipientName) {
      msg += `*Recipient:* ${recipientName} (${recipientPhone})\n`;
    }
    msg += `*Address:* ${addressLine ? addressLine + ', ' : ''}${locality}, Bangalore - ${pincode}\n`;
    msg += `*Delivery Date:* ${dateStr}\n`;
    msg += `*Delivery Slot:* ${selectedSlot.label} (${selectedSlot.time})\n`;
    if (deliveryNote) {
      msg += `*Special Note:* ${deliveryNote}\n`;
    }
    msg += `--------------------------------------\n`;
    if (selectedUpsells.length > 0) {
      msg += `*ADD-ONS / UPSELLS:*\n`;
      selectedUpsells.forEach((u) => {
        msg += `• ${u.name} (${u.priceDisplay})\n`;
      });
      msg += `--------------------------------------\n`;
    }
    msg += `*PAYMENT SUMMARY:*\n`;
    msg += `Product Subtotal: $${productSubtotal.toFixed(2)}\n`;
    if (upsellsTotal > 0) msg += `Add-ons: $${upsellsTotal.toFixed(2)}\n`;
    if (deliveryFee > 0) msg += `Midnight Express Fee: $${deliveryFee.toFixed(2)}\n`;
    if (appliedDiscount) msg += `Discount (${appliedDiscount.code}): -$${discountAmount.toFixed(2)}\n`;
    msg += `*TOTAL PAYABLE:* *$${finalTotal.toFixed(2)}*\n`;
    msg += `*Payment Method:* ${paymentMethod.toUpperCase()}\n`;
    msg += `--------------------------------------\n`;
    msg += `Please confirm availability and dispatch! ✨`;

    return encodeURIComponent(msg);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `LIL-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);

    if (paymentMethod === 'whatsapp') {
      const text = buildWhatsAppMessage();
      window.open(`https://wa.me/919986350349?text=${text}`, '_blank');
    }

    setCurrentStep(5);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(4, prev + 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="bg-[#FAF7F5] border border-[#E7D6CB] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative text-[#2D2422] my-auto max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="bg-[#2D2422] text-white px-5 sm:px-7 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#A8644A] text-white flex items-center justify-center shadow-inner">
              <img src="/assets/lil_logo.webp" alt="Liliyum Logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain shrink-0 group-hover:scale-105 transition-transform" >
              </img>
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#EAD5BE]">
                {currentStep === 5 ? 'Order Confirmed!' : 'Order Your Cakes'}
              </h2>
              <p className="text-[11px] text-[#C4B09E] font-medium">
                {currentStep === 1 && 'Step 1 of 4: Select Portion & Personal Message'}
                {currentStep === 2 && 'Step 2 of 4: Delivery Address & Time Slot'}
                {currentStep === 3 && 'Step 3 of 4: Enhance Your Celebration (Add-ons)'}
                {currentStep === 4 && 'Step 4 of 4: Order Review & Instant Checkout'}
                {currentStep === 5 && `Order #${orderId} • Thank you for choosing Liliyum`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeOrderModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#EAD5BE] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Order Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar / Stepper Tabs */}
        {
          currentStep < 5 && (
            <div className="bg-[#FAF0E6] px-5 py-2.5 border-b border-[#E7D6CB] shrink-0">
              <div className="flex items-center justify-between text-xs font-semibold max-w-lg mx-auto">
                {[
                  { step: 1, label: 'Selection', icon: ShoppingBag },
                  { step: 2, label: 'Delivery', icon: MapPin },
                  { step: 3, label: 'Add-ons', icon: Gift },
                  { step: 4, label: 'Checkout', icon: ShieldCheck },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = currentStep === item.step;
                  const isCompleted = currentStep > item.step;
                  return (
                    <button
                      key={item.step}
                      type="button"
                      onClick={() => setCurrentStep(item.step)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl transition-all cursor-pointer ${isActive
                        ? 'bg-[#2D2422] text-[#EAD5BE] font-bold shadow-sm'
                        : isCompleted
                          ? 'text-[#A8644A] hover:bg-[#E7D6CB]/40'
                          : 'text-[#8C7A72] hover:bg-white/50'
                        }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">{item.label}</span>
                      <span className="sm:hidden">{item.step}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )
        }

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: PORTION & PERSONALIZATION */}
          {currentStep === 1 && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {/* Product Selector Dropdown if changing cake */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#A8644A] block mb-1.5 flex items-center justify-between">
                  <span>Selecte Your Cake:</span>
                  {/* <span className="text-[11px] text-[#7A6760] font-normal">Switch cake anytime</span> */}
                </label>
                <select
                  value={currentProduct.id}
                  onChange={(e) => {
                    const found = PRODUCTS.find((p) => p.id === e.target.value);
                    if (found) setSelectedProduct(found);
                  }}
                  className="w-full bg-white border border-[#E7D6CB] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2422] font-semibold focus:outline-none focus:ring-2 focus:ring-[#A8644A] cursor-pointer shadow-xs"
                >
                  {PRODUCTS.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — ${p.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Active Product Card Preview */}
              <div className="bg-white p-4 rounded-2xl border border-[#F0E6DF] shadow-sm flex gap-4 items-center">
                <img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl bg-[#2D2422] shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A8644A] bg-[#FAF0E6] px-2 py-0.5 rounded-md">
                      {currentProduct.categoryLabel}
                    </span>
                    {currentProduct.badge && (
                      <span className="text-[10px] font-bold uppercase text-[#2D2422] bg-[#F3E8E1] px-2 py-0.5 rounded-md">
                        {currentProduct.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2D2422] truncate">
                    {currentProduct.name}
                  </h3>
                  <p className="text-xs text-[#7A6760] line-clamp-2 mt-0.5">
                    {currentProduct.description}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-base font-extrabold text-[#2D2422]">
                      ${unitPrice.toFixed(2)}
                    </span>
                    {/* <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Freshly Baked Today
                    </span> */}
                  </div>
                </div>
              </div>

              {/* Variant / Weight Selector */}
              {currentProduct.variants && currentProduct.variants.length > 0 && (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2D2422] block mb-2">
                    Select Size / Weight Option:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {currentProduct.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setActiveVariant(v)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${activeVariant?.id === v.id
                          ? 'bg-[#2D2422] text-[#EAD5BE] border-[#2D2422] shadow-sm ring-2 ring-[#2D2422]/20'
                          : 'bg-white text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
                          }`}
                      >
                        <span className="text-xs font-bold block">{v.name}</span>
                        <span className="text-[11px] opacity-80">${v.price.toFixed(2)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity Counter */}
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-[#F0E6DF]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2D2422] block">
                    Quantity:
                  </span>
                  <span className="text-[11px] text-[#7A6760]">Number of cakes or boxes</span>
                </div>
                <div className="flex items-center gap-3 bg-[#FAF7F5] p-1 rounded-xl border border-[#E7D6CB]">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-white text-[#2D2422] hover:bg-[#A8644A] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-6 text-center font-bold text-sm text-[#2D2422]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-white text-[#2D2422] hover:bg-[#A8644A] hover:text-white flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Personalization & Occasion Form */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E6DF] space-y-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#A8644A] flex items-center gap-1.5 mb-1">
                    <Heart className="w-3.5 h-3.5" />
                    <span>Select Celebration Occasion:</span>
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {['Birthday', 'Anniversary', 'Romantic Surprise', 'Corporate', 'Housewarming', 'Just Because'].map(
                      (occ) => (
                        <button
                          key={occ}
                          type="button"
                          onClick={() => setOccasion(occ)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${occasion === occ
                            ? 'bg-[#A8644A] text-white border-[#A8644A]'
                            : 'bg-[#FAF7F5] text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
                            }`}
                        >
                          {occ}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#2D2422] flex items-center justify-between mb-1">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#A8644A]" /> Custom Piped Cake Message
                    </span>
                    <span className="text-[10px] text-[#7A6760] font-normal"> (Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={cakeMessage}
                    onChange={(e) => setCakeMessage(e.target.value)}
                    placeholder="e.g. Happy 30th Birthday Ananya! ❤️"
                    className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3.5 py-2.5 text-xs text-[#2D2422] focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
                    maxLength={60}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: DELIVERY ADDRESS & TIME SLOT */}
          {currentStep === 2 && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              {/* Customer Details Form */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E6DF] space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8644A] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Customer & Contact Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#594943] block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422] focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#594943] block mb-1">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422] focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#594943] block mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ananya@example.com"
                    className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422] focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
                  />
                </div>

                {/* Is Gift Checkbox */}
                <div className="pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-[#2D2422]">
                    <input
                      type="checkbox"
                      checked={isGift}
                      onChange={(e) => setIsGift(e.target.checked)}
                      className="w-4 h-4 rounded text-[#A8644A] focus:ring-[#A8644A]"
                    />
                    <span>This is a surprise gift for someone else!</span>
                  </label>
                </div>

                {isGift && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 bg-[#FAF7F5] p-3 rounded-xl border border-[#E7D6CB]">
                    <div>
                      <label className="text-[11px] font-semibold text-[#594943] block mb-1">Recipient Name</label>
                      <input
                        type="text"
                        value={recipientName}
                        onChange={(e) => setRecipientName(e.target.value)}
                        placeholder="Recipient's Name"
                        className="w-full bg-white border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422]"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-semibold text-[#594943] block mb-1">Recipient Phone</label>
                      <input
                        type="tel"
                        value={recipientPhone}
                        onChange={(e) => setRecipientPhone(e.target.value)}
                        placeholder="Recipient's Mobile"
                        className="w-full bg-white border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Delivery Address & Pincode */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E6DF] space-y-3.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8644A] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Delivery Address & Bangalore Pincode
                  </h4>
                  {isPincodeValid && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Same-day eligible
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-semibold text-[#594943] block mb-1">Flat / House / Building / Street *</label>
                    <input
                      type="text"
                      value={addressLine}
                      onChange={(e) => setAddressLine(e.target.value)}
                      placeholder="#102, Palm Heights, 10th Main Rd"
                      className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422] focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#594943] block mb-1">Pincode *</label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => {
                        setPincode(e.target.value);
                        setIsPincodeValid(e.target.value.length >= 6);
                      }}
                      placeholder="560038"
                      className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422] font-semibold focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
                      maxLength={6}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#594943] block mb-1">Area / Locality</label>
                    <select
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422] font-semibold"
                    >
                      <option value="Indiranagar">Indiranagar</option>
                      <option value="Koramangala">Koramangala</option>
                      <option value="HSR Layout">HSR Layout</option>
                      <option value="Whitefield">Whitefield</option>
                      <option value="Jayanagar">Jayanagar</option>
                      <option value="JP Nagar">JP Nagar</option>
                      <option value="MG Road">MG Road / Brigade Rd</option>
                      <option value="BTM Layout">BTM Layout</option>
                      <option value="Hebbal">Hebbal</option>
                      <option value="Electronic City">Electronic City</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-[#594943] block mb-1">Delivery Landmark / Note</label>
                    <input
                      type="text"
                      value={deliveryNote}
                      onChange={(e) => setDeliveryNote(e.target.value)}
                      placeholder="Near metro station / Ring bell twice"
                      className="w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422]"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Slot Selection */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#F0E6DF] space-y-3.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8644A] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Delivery Date & Preferred Time Slot
                </h4>

                {/* Date Picker Buttons */}
                <div>
                  <span className="text-[11px] font-semibold text-[#594943] block mb-1.5">Select Date:</span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryDateOption('today')}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${deliveryDateOption === 'today'
                        ? 'bg-[#A8644A] text-white border-[#A8644A]'
                        : 'bg-[#FAF7F5] text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
                        }`}
                    >
                      Today (Express)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryDateOption('tomorrow')}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${deliveryDateOption === 'tomorrow'
                        ? 'bg-[#A8644A] text-white border-[#A8644A]'
                        : 'bg-[#FAF7F5] text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
                        }`}
                    >
                      Tomorrow
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryDateOption('custom')}
                      className={`py-2 px-2 rounded-xl text-xs font-semibold border transition-all text-center ${deliveryDateOption === 'custom'
                        ? 'bg-[#A8644A] text-white border-[#A8644A]'
                        : 'bg-[#FAF7F5] text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
                        }`}
                    >
                      Custom Date
                    </button>
                  </div>

                  {deliveryDateOption === 'custom' && (
                    <input
                      type="date"
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className="mt-2.5 w-full bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422]"
                    />
                  )}
                </div>

                {/* Time Slots */}
                <div>
                  <span className="text-[11px] font-semibold text-[#594943] block mb-1.5">Select Slot:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {DELIVERY_SLOTS.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlotId(slot.id)}
                        className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between cursor-pointer ${selectedSlotId === slot.id
                          ? 'bg-[#FAF0E6] border-[#A8644A] ring-2 ring-[#A8644A]/20 shadow-xs'
                          : 'bg-[#FAF7F5] border-[#E7D6CB] hover:bg-white'
                          }`}
                      >
                        <div>
                          <span className="text-xs font-bold text-[#2D2422] block">{slot.label}</span>
                          <span className="text-[11px] text-[#7A6760]">{slot.time}</span>
                        </div>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded ${slot.price === 'FREE' ? 'bg-emerald-100 text-emerald-800' : 'bg-[#F3E8E1] text-[#A8644A]'
                            }`}
                        >
                          {slot.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: CELEBRATION UPSELLS */}
          {currentStep === 3 && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              {/* <div className="bg-gradient-to-r from-[#2D2422] to-[#4A3228] p-4 rounded-2xl text-white flex items-center justify-between shadow-md">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#EAD5BE] block">
                    Enhance Your Celebration
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">Add Handcrafted Celebration Essentials</h3>
                </div>
                <Sparkles className="w-6 h-6 text-[#EAD5BE] shrink-0" />
              </div> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {UPSELL_ITEMS.map((item) => {
                  const isSelected = selectedUpsellIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleUpsell(item.id)}
                      className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer select-none ${isSelected
                        ? 'bg-white border-[#A8644A] ring-2 ring-[#A8644A]/20 shadow-md'
                        : 'bg-white border-[#F0E6DF] hover:border-[#A8644A]/60'
                        }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-xl bg-[#2D2422] shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-[9px] font-bold uppercase text-[#A8644A] bg-[#FAF0E6] px-1.5 py-0.5 rounded">
                            {item.category}
                          </span>
                          {item.popular && (
                            <span className="text-[9px] font-bold text-[#2D2422] bg-[#F3E8E1] px-1.5 py-0.5 rounded">
                              Bestseller
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-[#2D2422] leading-tight truncate">{item.name}</h4>
                        <p className="text-[11px] text-[#7A6760] line-clamp-2 mt-0.5">{item.description}</p>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[#2D2422]">{item.priceDisplay}</span>
                          <button
                            type="button"
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-colors ${isSelected
                              ? 'bg-[#A8644A] text-white'
                              : 'bg-[#FAF7F5] text-[#2D2422] border border-[#E7D6CB] hover:bg-[#2D2422] hover:text-white'
                              }`}
                          >
                            {isSelected ? (
                              <>
                                <Check className="w-3 h-3" /> Added
                              </>
                            ) : (
                              <>
                                <Plus className="w-3 h-3" /> Add
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* STEP 4: REVIEW & CHECKOUT */}
          {currentStep === 4 && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              {/* Order Summary Recap */}
              <div className="bg-white p-4 rounded-2xl border border-[#F0E6DF] space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A8644A] flex items-center justify-between">
                  <span>Order Summary</span>
                  <button type="button" onClick={() => setCurrentStep(1)} className="text-[11px] hover:underline">
                    Edit
                  </button>
                </h4>

                <div className="flex gap-3 items-center pb-3 border-b border-[#F0E6DF]">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-14 h-14 object-cover rounded-xl bg-[#2D2422]"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-[#2D2422] truncate">{currentProduct.name}</h5>
                    <p className="text-[11px] text-[#7A6760]">
                      Variant: {activeVariant?.name || 'Standard'} • Qty: {quantity}
                    </p>
                    {cakeMessage && (
                      <p className="text-[10px] text-[#A8644A] font-semibold italic mt-0.5 truncate">
                        "{cakeMessage}"
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-bold text-[#2D2422]">${productSubtotal.toFixed(2)}</span>
                </div>

                {/* Selected Upsells list */}
                {selectedUpsells.length > 0 && (
                  <div className="space-y-1.5 pb-3 border-b border-[#F0E6DF]">
                    <span className="text-[11px] font-bold text-[#594943] block">Selected Celebration Add-ons:</span>
                    {selectedUpsells.map((u) => (
                      <div key={u.id} className="flex items-center justify-between text-xs text-[#7A6760]">
                        <span>• {u.name}</span>
                        <span className="font-semibold text-[#2D2422]">{u.priceDisplay}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Delivery details summary */}
                <div className="text-xs space-y-1 text-[#594943]">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Delivery To:</span>
                    <span className="text-[#2D2422]">
                      {locality}, Bangalore ({pincode})
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Slot:</span>
                    <span className="text-[#2D2422]">
                      {selectedSlot.label} ({selectedSlot.time})
                    </span>
                  </div>
                </div>
              </div>

              {/* Promo / Coupon Code Section */}
              <div className="bg-white p-4 rounded-2xl border border-[#F0E6DF] space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#2D2422] flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-[#A8644A]" /> Promo Discount Coupon
                </label>

                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter Promo Code (e.g. LILIYUM10)"
                    className="flex-1 bg-[#FAF7F5] border border-[#E7D6CB] rounded-xl px-3 py-2 text-xs text-[#2D2422] uppercase font-bold focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
                  />
                  <button
                    type="submit"
                    className="bg-[#2D2422] text-[#EAD5BE] hover:bg-[#A8644A] hover:text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer shrink-0"
                  >
                    Apply
                  </button>
                </form>

                {couponError && <p className="text-[11px] text-red-600 font-medium">{couponError}</p>}
                {/* {appliedDiscount && (
                  <p className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Code '{appliedDiscount.code}' applied! Saved {appliedDiscount.percent}%.
                  </p>
                )} */}
              </div>

              {/* Payment Method Picker */}
              <div className="bg-white p-4 rounded-2xl border border-[#F0E6DF] space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#2D2422] block">
                  Select Preferred Checkout Mode:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('whatsapp')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${paymentMethod === 'whatsapp'
                      ? 'bg-[#2D2422] text-[#EAD5BE] border-[#2D2422] shadow-sm'
                      : 'bg-[#FAF7F5] text-[#594943] border-[#E7D6CB]'
                      }`}
                  >
                    <span className="text-xs font-bold block flex items-center gap-1">
                      <Phone className="w-3 h-3 text-emerald-400" /> Direct WhatsApp
                    </span>
                    <span className="text-[10px] opacity-80">Instant confirmation</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('online')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${paymentMethod === 'online'
                      ? 'bg-[#2D2422] text-[#EAD5BE] border-[#2D2422] shadow-sm'
                      : 'bg-[#FAF7F5] text-[#594943] border-[#E7D6CB]'
                      }`}
                  >
                    <span className="text-xs font-bold block">Online Payment</span>
                    <span className="text-[10px] opacity-80">UPI / Card / NetBanking</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${paymentMethod === 'cod'
                      ? 'bg-[#2D2422] text-[#EAD5BE] border-[#2D2422] shadow-sm'
                      : 'bg-[#FAF7F5] text-[#594943] border-[#E7D6CB]'
                      }`}
                  >
                    <span className="text-xs font-bold block">Pay on Delivery</span>
                    <span className="text-[10px] opacity-80">Cash or UPI on door</span>
                  </button>
                </div>
              </div>

              {/* Itemized Price Breakdown */}
              <div className="bg-[#FAF0E6] p-4 rounded-2xl border border-[#E7D6CB] space-y-1.5 text-xs text-[#594943]">
                <div className="flex justify-between">
                  <span>Product Subtotal</span>
                  <span className="font-semibold text-[#2D2422]">${productSubtotal.toFixed(2)}</span>
                </div>
                {upsellsTotal > 0 && (
                  <div className="flex justify-between">
                    <span>Add-ons / Celebration Items</span>
                    <span className="font-semibold text-[#2D2422]">${upsellsTotal.toFixed(2)}</span>
                  </div>
                )}
                {deliveryFee > 0 && (
                  <div className="flex justify-between">
                    <span>Midnight Express Delivery Fee</span>
                    <span className="font-semibold text-[#2D2422]">${deliveryFee.toFixed(2)}</span>
                  </div>
                )}
                {appliedDiscount && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({appliedDiscount.code})</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#E7D6CB] flex justify-between items-baseline text-base font-extrabold text-[#2D2422]">
                  <span>Total Amount Payable:</span>
                  <span className="text-xl text-[#A8644A]">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: SUCCESS CONFIRMATION */}
          {currentStep === 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-center space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#A8644A] block mb-1">
                  Order Successfully Dispatched
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#2D2422]">Thank You for Your Order!</h3>
                <p className="text-xs text-[#7A6760] max-w-md mx-auto mt-1">
                  Your order <span className="font-bold text-[#2D2422]">#{orderId}</span> has been created. Our master pastry chefs are ready to craft your gourmet dessert!
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#F0E6DF] text-left max-w-md mx-auto text-xs space-y-1.5">
                <div className="flex justify-between border-b border-[#F0E6DF] pb-2">
                  <span className="font-semibold text-[#594943]">Estimated Delivery:</span>
                  <span className="font-bold text-[#2D2422]">
                    {deliveryDateOption === 'today' ? 'Today' : 'Tomorrow'}, {selectedSlot.time}
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="font-semibold text-[#594943]">Total Paid / Due:</span>
                  <span className="font-bold text-[#A8644A] text-sm">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={closeOrderModal}
                  className="px-6 py-3 rounded-xl bg-[#2D2422] text-[#EAD5BE] hover:bg-[#A8644A] font-bold text-xs transition-colors cursor-pointer"
                >
                  Done & Back to Website
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {
          currentStep < 5 && (
            <div className="bg-white px-5 sm:px-7 py-4 border-t border-[#E7D6CB] flex items-center justify-between shrink-0">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2.5 rounded-xl border border-[#E7D6CB] text-[#594943] hover:bg-[#FAF7F5] text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2.5 rounded-xl bg-[#A8644A] text-white hover:bg-[#8C4A32] text-xs font-bold flex items-center gap-1.5 shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  Continue <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="px-6 py-3 rounded-xl bg-[#2D2422] text-[#EAD5BE] hover:bg-[#A8644A] hover:text-white text-xs font-bold flex items-center gap-2 shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Confirm & Place Order (${finalTotal.toFixed(2)})</span>
                </button>
              )}
            </div>
          )
        }
      </motion.div >
    </div >
  );
};

export default OrderModal;
