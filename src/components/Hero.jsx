import React from 'react';
import { Trophy, Calendar } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Spline full-width, full-height background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay for readability, don't block interactions */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/80 via-white/60 to-white" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="backdrop-blur-sm bg-white/70 rounded-2xl p-6 md:p-8 shadow-lg ring-1 ring-black/5">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Book your next game on pristine football turfs
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
              Reserve hourly slots, split costs with friends, and organize tournaments — all in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center gap-2 rounded-lg bg-green-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-green-700 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                <Calendar size={18}/> Book a Slot
              </a>
              <a href="#tournament" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-3 font-medium text-gray-800 hover:bg-white/80 hover:border-gray-300 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                <Trophy size={18}/> Host Tournament
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <img src="https://i.pravatar.cc/40?img=11" alt="user" className="h-8 w-8 rounded-full ring-2 ring-white"/>
                <img src="https://i.pravatar.cc/40?img=22" alt="user" className="h-8 w-8 rounded-full ring-2 ring-white"/>
                <img src="https://i.pravatar.cc/40?img=33" alt="user" className="h-8 w-8 rounded-full ring-2 ring-white"/>
              </div>
              <span>Trusted by 3,000+ local players</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?q=80&w=1600&auto=format&fit=crop"
                alt="Football players on turf during a match"
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
