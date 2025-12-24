
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step3Vehicle: React.FC = () => {
  const navigate = useNavigate();
  const [capacity, setCapacity] = useState(3);
  const [vehicleType, setVehicleType] = useState('CAR');

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="flex items-center px-4 py-4 justify-between border-b border-border-dark/50 sticky top-0 bg-background-dark z-10">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-white/5">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold">Create Offering</h2>
        <button onClick={() => navigate('/browse')} className="text-primary font-semibold text-sm">Cancel</button>
      </header>

      <div className="px-6 pt-4 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-primary text-xs font-bold uppercase">Step 3 of 4</span>
          <span className="text-text-secondary text-xs">Vehicle Details</span>
        </div>
        <div className="flex w-full gap-1.5 h-1.5">
          <div className="flex-1 rounded-full bg-primary"></div>
          <div className="flex-1 rounded-full bg-primary"></div>
          <div className="flex-1 rounded-full bg-primary"></div>
          <div className="flex-1 rounded-full bg-slate-700"></div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-5 pt-6 pb-32 no-scrollbar">
        <div className="flex flex-col gap-6 p-5 rounded-3xl bg-surface-dark border border-primary/20 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">3</div>
            <h3 className="text-xl font-bold">Vehicle Details</h3>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Vehicle Type</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { type: 'CAR', icon: 'directions_car' },
                { type: 'VAN', icon: 'airport_shuttle' },
                { type: 'BUS', icon: 'directions_bus' }
              ].map((v) => (
                <button 
                  key={v.type}
                  onClick={() => setVehicleType(v.type)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border-2 transition-all h-24 ${vehicleType === v.type ? 'border-primary bg-primary/5 text-primary' : 'border-border-dark bg-background-dark text-slate-500'}`}
                >
                  <span className="material-symbols-outlined mb-2 text-3xl">{v.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wide">{v.type}</span>
                  {vehicleType === v.type && <div className="absolute top-2 right-2 size-2 rounded-full bg-primary"></div>}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Model & Color</label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-xl">badge</span>
              <input 
                className="w-full pl-11 pr-4 py-3.5 bg-background-dark border-2 border-border-dark rounded-xl text-sm font-semibold focus:border-primary outline-none transition-all" 
                placeholder="e.g. Toyota Corolla, White"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-text-secondary ml-1">Passenger Capacity</label>
            <div className="flex items-center justify-between p-2 pl-4 rounded-xl bg-background-dark border-2 border-border-dark">
              <div className="flex flex-col">
                <span className="font-bold text-sm">Total Seats</span>
                <span className="text-[10px] text-text-secondary font-medium">Excluding driver</span>
              </div>
              <div className="flex items-center gap-1">
                <button 
                  onClick={() => setCapacity(Math.max(1, capacity - 1))}
                  className="size-10 rounded-lg bg-surface-dark text-slate-300 flex items-center justify-center hover:bg-slate-600 border border-border-dark"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <div className="w-10 text-center">
                  <span className="text-xl font-bold">{capacity}</span>
                </div>
                <button 
                  onClick={() => setCapacity(capacity + 1)}
                  className="size-10 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-dark"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full max-w-md p-4 bg-surface-dark/95 backdrop-blur-md border-t border-border-dark">
        <button 
          onClick={() => navigate('/create/step4')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          Continue to Pricing
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default Step3Vehicle;
