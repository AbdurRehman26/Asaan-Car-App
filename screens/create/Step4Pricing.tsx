
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step4Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [price, setPrice] = useState('');
  const [negotiable, setNegotiable] = useState(false);

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
          <span className="text-primary text-xs font-bold uppercase tracking-wider">Service Details</span>
          <span className="text-text-secondary text-xs">Step 4 of 4</span>
        </div>
        <div className="flex w-full gap-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-1 flex-1 rounded-full bg-primary"></div>
          ))}
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-5 pt-6 pb-32 no-scrollbar">
        <div className="flex items-center gap-3 mb-6">
          <div className="size-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">4</div>
          <h3 className="text-lg font-bold">Pricing</h3>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-text-secondary leading-relaxed">
            Set your monthly price per person for this pick & drop service.
          </p>

          <div className="flex items-center gap-4 p-5 rounded-2xl bg-surface-dark border border-border-dark focus-within:border-primary transition-all shadow-md">
            <div className="bg-primary/10 text-primary size-14 flex items-center justify-center rounded-2xl shrink-0">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
            <div className="flex flex-col flex-1 gap-1">
              <label className="text-[11px] font-bold text-text-secondary uppercase tracking-wider">Monthly Price (Per Person)</label>
              <div className="flex items-baseline gap-2">
                <span className="text-slate-400 font-bold text-xl">PKR</span>
                <input 
                  className="w-full bg-transparent border-none p-0 text-3xl font-bold tracking-tight focus:ring-0" 
                  placeholder="0" 
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <label className="flex items-start gap-4 p-4 rounded-xl cursor-pointer hover:bg-surface-dark/50 transition-colors border border-transparent">
            <div className="relative flex items-center mt-1">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={negotiable} 
                onChange={() => setNegotiable(!negotiable)} 
              />
              <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold">Negotiable Price</span>
              <span className="text-xs text-text-secondary leading-relaxed">Enable if the price can vary depending on the exact pickup location or other factors.</span>
            </div>
          </label>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full max-w-md p-4 bg-surface-dark/95 backdrop-blur-md border-t border-border-dark">
        <button 
          onClick={() => navigate('/browse')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          Review & Publish
          <span className="material-symbols-outlined">check_circle</span>
        </button>
      </footer>
    </div>
  );
};

export default Step4Pricing;
