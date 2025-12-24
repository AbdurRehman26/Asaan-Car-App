
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step2Schedule: React.FC = () => {
  const navigate = useNavigate();
  const [returnTrip, setReturnTrip] = useState(false);

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="flex items-center px-4 py-4 justify-between border-b border-border-dark/50 sticky top-0 bg-background-dark z-10">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Schedule</h2>
        <button onClick={() => navigate('/browse')} className="text-primary font-semibold text-sm">Cancel</button>
      </header>

      <div className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-primary text-xs font-bold uppercase">Step 2 of 4</span>
          <span className="text-text-secondary text-xs">Schedule Details</span>
        </div>
        <div className="flex w-full gap-1.5">
          <div className="h-1 flex-1 rounded-full bg-primary"></div>
          <div className="h-1 flex-1 rounded-full bg-primary"></div>
          <div className="h-1 flex-1 rounded-full bg-slate-700"></div>
          <div className="h-1 flex-1 rounded-full bg-slate-700"></div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-6 pt-6 pb-32 no-scrollbar">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-1">When do you drive?</h1>
          <p className="text-text-secondary text-sm">Set your standard departure time and recurring days.</p>
        </div>

        <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-xl">schedule</span>
            </div>
            <label className="font-semibold">Departure Time</label>
          </div>
          <div className="relative bg-background-dark rounded-xl p-4 border border-border-dark">
            <input type="time" defaultValue="08:00" className="w-full bg-transparent border-none text-3xl font-bold text-center focus:ring-0" />
            <p className="text-xs text-center text-text-secondary mt-2">Pick-up will start at this time</p>
          </div>
        </div>

        <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                <span className="material-symbols-outlined text-xl">history</span>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Return Trip</label>
                <span className="text-[10px] text-text-secondary">Do you offer a ride back?</span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={returnTrip} onChange={() => setReturnTrip(!returnTrip)} />
              <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
          <div className={`transition-opacity duration-300 pt-2 border-t border-border-dark ${returnTrip ? 'opacity-100' : 'opacity-40 pointer-events-none grayscale'}`}>
            <label className="text-[10px] font-bold text-text-secondary uppercase mb-2 block">Return Departure Time</label>
            <input type="time" defaultValue="17:00" className="w-full bg-background-dark border border-border-dark rounded-xl p-4 text-3xl font-bold text-center focus:ring-0" />
          </div>
        </div>

        <div className="bg-surface-dark rounded-2xl p-5 border border-border-dark mb-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-8 rounded-full bg-green-900/30 flex items-center justify-center text-green-400">
              <span className="material-symbols-outlined text-xl">calendar_month</span>
            </div>
            <label className="font-semibold">Repeat Weekly</label>
          </div>
          <div className="flex justify-between gap-2">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
              <button 
                key={i} 
                className={`size-10 rounded-full text-xs font-bold transition-all ${i < 5 ? 'bg-primary text-white' : 'bg-slate-800 text-slate-500 border border-border-dark'}`}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center mt-3 px-1 text-[10px]">
            <span className="text-primary font-medium">Weekdays selected</span>
            <button className="text-text-secondary underline decoration-dotted">Select all days</button>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex gap-3">
          <span className="material-symbols-outlined text-primary text-xl">info</span>
          <p className="text-[11px] text-gray-300 leading-relaxed">
            Your offering will be visible to riders looking for rides on these specific days and times.
          </p>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full max-w-md p-4 bg-surface-dark/95 backdrop-blur-md border-t border-border-dark">
        <button 
          onClick={() => navigate('/create/step3')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default Step2Schedule;
