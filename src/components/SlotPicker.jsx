import React, { useMemo } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const hours = Array.from({ length: 16 }, (_, i) => i + 6); // 6 -> 21 inclusive for start hours

function formatHour(h) {
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour = ((h + 11) % 12) + 1; // 13 -> 1, 12 -> 12
  return `${hour}:00 ${suffix}`;
}

const SlotPicker = ({ date, onDateChange, pitch, onPitchChange, selectedSlots, onToggleSlot, multiSelect=false }) => {
  const slots = useMemo(() => hours.map(h => ({ start: h, label: `${formatHour(h)} - ${formatHour(h+1)}` })), []);
  const pitches = [
    { id: 'central', name: 'Central Park Arena' },
    { id: 'riverside', name: 'Riverside Turf' },
    { id: 'north', name: 'North Dome' },
  ];

  const isSelected = (h) => selectedSlots.includes(h);

  return (
    <section id="book" className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Find a slot</h2>
        <p className="text-gray-600 mt-1">Pick a date, location, and time to reserve your game.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
          <Calendar className="text-green-600" size={20} />
          <input
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full outline-none bg-transparent"
          />
        </label>
        <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
          <MapPin className="text-green-600" size={20} />
          <select
            value={pitch}
            onChange={(e) => onPitchChange(e.target.value)}
            className="w-full bg-transparent outline-none"
          >
            {pitches.map(p => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
        </label>
        <div className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg text-sm text-gray-600">
          <Clock className="text-green-600" size={20} />
          {multiSelect ? 'Select multiple time slots for tournaments' : 'Select one time slot for casual play'}
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {slots.map(s => (
          <button
            key={s.start}
            onClick={() => onToggleSlot(s.start)}
            className={`text-sm px-3 py-2 rounded-md border transition ${isSelected(s.start) ? 'bg-green-600 text-white border-green-600' : 'border-gray-200 hover:border-gray-300'}`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default SlotPicker;
