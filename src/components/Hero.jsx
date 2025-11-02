import React from 'react';
import { Trophy, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Book your next game on pristine football turfs
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Reserve hourly slots, split costs with friends, and organize tournaments — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-green-700 transition">
                <Calendar size={18}/> Book a Slot
              </a>
              <a href="#tournament" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-medium text-gray-800 hover:bg-gray-50 transition">
                <Trophy size={18}/> Host Tournament
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop"
                alt="Football turf"
                className="w-full h-72 md:h-96 object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
