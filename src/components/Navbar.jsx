import React, { useState } from 'react';
import { Menu, Trophy, Calendar, MapPin } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-green-600 text-white grid place-items-center font-bold">FT</div>
          <span className="font-semibold text-gray-900">TurfTime</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#book" className="hover:text-gray-900 flex items-center gap-2"><Calendar size={18}/> Book a Slot</a>
          <a href="#tournament" className="hover:text-gray-900 flex items-center gap-2"><Trophy size={18}/> Host Tournament</a>
          <a href="#locations" className="hover:text-gray-900 flex items-center gap-2"><MapPin size={18}/> Locations</a>
        </nav>
        <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-3 text-sm text-gray-700">
            <a href="#book" onClick={() => setOpen(false)} className="py-2">Book a Slot</a>
            <a href="#tournament" onClick={() => setOpen(false)} className="py-2">Host Tournament</a>
            <a href="#locations" onClick={() => setOpen(false)} className="py-2">Locations</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
