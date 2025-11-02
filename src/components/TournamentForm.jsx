import React from 'react';
import { Trophy, Users, Phone } from 'lucide-react';

const TournamentForm = ({
  bookingType,
  onBookingTypeChange,
  name,
  phone,
  notes,
  onFieldChange,
  tournamentName,
  teams,
  format,
  onSubmit,
  disabled
}) => {
  return (
    <section id="tournament" className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-6 flex items-start justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Complete your booking</h2>
          <p className="text-gray-600 mt-1">Enter your details and choose booking type.</p>
        </div>
        <div className="inline-flex rounded-lg border border-gray-200 overflow-hidden">
          <button
            className={`px-4 py-2 text-sm font-medium ${bookingType === 'play' ? 'bg-green-600 text-white' : 'text-gray-700'}`}
            onClick={() => onBookingTypeChange('play')}
            type="button"
          >Casual Play</button>
          <button
            className={`px-4 py-2 text-sm font-medium flex items-center gap-2 ${bookingType === 'tournament' ? 'bg-green-600 text-white' : 'text-gray-700'}`}
            onClick={() => onBookingTypeChange('tournament')}
            type="button"
          >
            <Trophy size={16}/> Tournament
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-5 border border-gray-200 rounded-xl">
          <h3 className="font-semibold text-gray-900">Contact details</h3>
          <div className="mt-4 grid gap-4">
            <label className="grid gap-1 text-sm">
              <span className="text-gray-600">Full name</span>
              <input name="name" value={name} onChange={onFieldChange} placeholder="Alex Morgan" className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-green-500" />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-gray-600">Phone</span>
              <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200">
                <Phone size={18} className="text-gray-500"/>
                <input name="phone" value={phone} onChange={onFieldChange} placeholder="+1 555 123 4567" className="w-full outline-none" />
              </div>
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-gray-600">Notes</span>
              <textarea name="notes" value={notes} onChange={onFieldChange} placeholder="Any special requests?" className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-green-500 min-h-[90px]" />
            </label>
          </div>
        </div>

        <div className="p-5 border border-gray-200 rounded-xl">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{bookingType === 'tournament' ? 'Tournament details' : 'Booking summary'}</h3>
            {bookingType === 'tournament' && (
              <span className="text-xs text-gray-500 inline-flex items-center gap-1"><Users size={14}/> Teams info</span>
            )}
          </div>

          {bookingType === 'tournament' ? (
            <div className="mt-4 grid gap-4">
              <label className="grid gap-1 text-sm">
                <span className="text-gray-600">Tournament name</span>
                <input name="tournamentName" value={tournamentName} onChange={onFieldChange} placeholder="Summer 5v5 Cup" className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-green-500" />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="text-gray-600">Number of teams</span>
                <input name="teams" value={teams} onChange={onFieldChange} type="number" min="2" max="24" className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-green-500" />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="text-gray-600">Format</span>
                <select name="format" value={format} onChange={onFieldChange} className="px-3 py-2 rounded-md border border-gray-200 outline-none focus:ring-2 focus:ring-green-500">
                  <option value="5v5">5v5</option>
                  <option value="7v7">7v7</option>
                  <option value="11v11">11v11</option>
                </select>
              </label>
            </div>
          ) : (
            <p className="mt-4 text-sm text-gray-600">Review your selection and confirm your booking.</p>
          )}

          <button
            onClick={onSubmit}
            disabled={disabled}
            className={`mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium shadow-sm transition ${disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-green-600 text-white hover:bg-green-700'}`}
          >
            {bookingType === 'tournament' ? 'Request tournament booking' : 'Confirm booking'}
          </button>
          {disabled && (
            <p className="text-xs text-amber-600 mt-2">Select at least one time slot to continue.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TournamentForm;
