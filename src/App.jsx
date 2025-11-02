import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SlotPicker from './components/SlotPicker';
import TournamentForm from './components/TournamentForm';

function formatDateLabel(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
}

function pitchName(id) {
  switch (id) {
    case 'central': return 'Central Park Arena';
    case 'riverside': return 'Riverside Turf';
    case 'north': return 'North Dome';
    default: return id;
  }
}

const App = () => {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [date, setDate] = useState(today);
  const [pitch, setPitch] = useState('central');
  const [selectedSlots, setSelectedSlots] = useState([]); // array of start hours (int)
  const [bookingType, setBookingType] = useState('play'); // 'play' | 'tournament'

  // Contact + tournament details
  const [form, setForm] = useState({
    name: '',
    phone: '',
    notes: '',
    tournamentName: '',
    teams: 8,
    format: '5v5'
  });

  const toggleSlot = (h) => {
    setSelectedSlots(prev => {
      const exists = prev.includes(h);
      if (exists) return prev.filter(x => x !== h).sort((a,b) => a-b);
      if (bookingType === 'play') return [h];
      return [...prev, h].sort((a,b) => a-b);
    });
  };

  const onFieldChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const canSubmit = selectedSlots.length > 0 && form.name && form.phone;

  const handleSubmit = () => {
    if (!canSubmit) return;
    const summary = {
      type: bookingType,
      date,
      pitch: pitchName(pitch),
      slots: selectedSlots,
      contact: { name: form.name, phone: form.phone },
      tournament: bookingType === 'tournament' ? {
        name: form.tournamentName || 'Untitled Cup',
        teams: Number(form.teams) || 8,
        format: form.format
      } : null,
    };
    alert(`Request received!\n\n${JSON.stringify(summary, null, 2)}`);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      <SlotPicker
        date={date}
        onDateChange={setDate}
        pitch={pitch}
        onPitchChange={setPitch}
        selectedSlots={selectedSlots}
        onToggleSlot={toggleSlot}
        multiSelect={bookingType === 'tournament'}
      />

      <div className="max-w-6xl mx-auto px-4">
        <div className="p-5 rounded-xl bg-gray-50 border border-gray-200">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-700">
            <span className="font-medium">Selection:</span>
            <span>{formatDateLabel(date)}</span>
            <span>•</span>
            <span>{pitchName(pitch)}</span>
            <span>•</span>
            <span>{selectedSlots.length ? `${selectedSlots.length} slot${selectedSlots.length>1?'s':''} selected` : 'No slot selected'}</span>
          </div>
        </div>
      </div>

      <TournamentForm
        bookingType={bookingType}
        onBookingTypeChange={setBookingType}
        name={form.name}
        phone={form.phone}
        notes={form.notes}
        tournamentName={form.tournamentName}
        teams={form.teams}
        format={form.format}
        onFieldChange={onFieldChange}
        onSubmit={handleSubmit}
        disabled={!canSubmit}
      />

      <footer id="locations" className="mt-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-gray-600 grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-green-600 text-white grid place-items-center font-bold">FT</div>
              <span className="font-semibold text-gray-900">TurfTime</span>
            </div>
            <p className="mt-3">Premium 5v5, 7v7 and 11v11 football turfs across the city.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Popular locations</h4>
            <ul className="mt-2 grid gap-1">
              <li>Central Park Arena</li>
              <li>Riverside Turf</li>
              <li>North Dome</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Contact</h4>
            <p className="mt-2">support@turftime.app<br/>+1 (555) 987-6543</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
