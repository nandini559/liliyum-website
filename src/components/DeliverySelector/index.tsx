import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import { DELIVERY_SLOTS } from '../../data/products';

export const DeliverySelector: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<'today' | 'tomorrow' | 'later'>('today');
  const [selectedSlot, setSelectedSlot] = useState<string>('slot-1');
  const [pincode, setPincode] = useState<string>('560038');
  const [isPincodeChecked, setIsPincodeChecked] = useState<boolean>(true);

  const handlePincodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pincode.trim().length >= 6) {
      setIsPincodeChecked(true);
    }
  };

  return (
    <div className="bg-[#FAF7F5] p-4 sm:p-6 rounded-2xl border border-[#E7D6CB] space-y-5 w-full max-w-full overflow-hidden">
      
      {/* Header & Pincode */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#A8644A] flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            <span>Bangalore Delivery Check</span>
          </label>
          {isPincodeChecked && (
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Same-day eligible
            </span>
          )}
        </div>

        <form onSubmit={handlePincodeSubmit} className="flex gap-2 w-full">
          <input
            type="text"
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value);
              setIsPincodeChecked(false);
            }}
            placeholder="Enter Bangalore Pincode (e.g. 560038)"
            className="flex-1 min-w-0 bg-white border border-[#E7D6CB] rounded-xl px-3 sm:px-3.5 py-2 text-xs text-[#2D2422] font-semibold focus:outline-none focus:ring-2 focus:ring-[#A8644A]"
            maxLength={6}
          />
          <button
            type="submit"
            className="bg-[#2D2422] text-[#EAD5BE] hover:bg-[#A8644A] hover:text-white px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-colors shrink-0"
          >
            Verify
          </button>
        </form>
      </div>

      {/* Date Selector */}
      <div>
        <span className="text-xs font-semibold text-[#594943] mb-2 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[#A8644A]" />
          <span>Select Delivery Date:</span>
        </span>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full">
          <button
            type="button"
            onClick={() => setSelectedDate('today')}
            className={`py-2 px-1.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all text-center whitespace-nowrap overflow-hidden text-ellipsis ${
              selectedDate === 'today'
                ? 'bg-[#A8644A] text-white border-[#A8644A] shadow-sm'
                : 'bg-white text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
            }`}
          >
            Today (Express)
          </button>

          <button
            type="button"
            onClick={() => setSelectedDate('tomorrow')}
            className={`py-2 px-1.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all text-center whitespace-nowrap overflow-hidden text-ellipsis ${
              selectedDate === 'tomorrow'
                ? 'bg-[#A8644A] text-white border-[#A8644A] shadow-sm'
                : 'bg-white text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
            }`}
          >
            Tomorrow
          </button>

          <button
            type="button"
            onClick={() => setSelectedDate('later')}
            className={`py-2 px-1.5 sm:px-3 rounded-xl text-[11px] sm:text-xs font-semibold border transition-all text-center whitespace-nowrap overflow-hidden text-ellipsis ${
              selectedDate === 'later'
                ? 'bg-[#A8644A] text-white border-[#A8644A] shadow-sm'
                : 'bg-white text-[#594943] border-[#E7D6CB] hover:border-[#A8644A]'
            }`}
          >
            Pick Date
          </button>
        </div>
      </div>

      {/* Time Slot Picker */}
      <div>
        <span className="text-xs font-semibold text-[#594943] block mb-2 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#A8644A]" />
          <span>Select Preferred Delivery Slot:</span>
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {DELIVERY_SLOTS.map((slot) => (
            <button
              key={slot.id}
              type="button"
              onClick={() => setSelectedSlot(slot.id)}
              className={`p-3 rounded-xl text-left border transition-all flex items-center justify-between ${
                selectedSlot === slot.id
                  ? 'bg-white border-[#A8644A] ring-2 ring-[#A8644A]/20 shadow-sm'
                  : 'bg-white/60 border-[#E7D6CB] hover:bg-white'
              }`}
            >
              <div>
                <span className="text-xs font-bold text-[#2D2422] block">{slot.label}</span>
                <span className="text-[11px] text-[#7A6760]">{slot.time}</span>
              </div>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                slot.price === 'FREE' ? 'bg-emerald-100 text-emerald-800' : 'bg-[#F3E8E1] text-[#A8644A]'
              }`}>
                {slot.price}
              </span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
