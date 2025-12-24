
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step1Route: React.FC = () => {
  const navigate = useNavigate();

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
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-primary text-[11px] font-bold uppercase tracking-wider">Step 1: Route Details</span>
          <span className="text-text-secondary text-[11px]">1 of 4</span>
        </div>
        <div className="flex w-full gap-1.5 h-1.5">
          <div className="flex-1 rounded-full bg-primary"></div>
          <div className="flex-1 rounded-full bg-border-dark"></div>
          <div className="flex-1 rounded-full bg-border-dark"></div>
          <div className="flex-1 rounded-full bg-border-dark"></div>
        </div>
      </div>

      <main className="flex-1 overflow-y-auto px-5 pt-6 pb-32 no-scrollbar">
        <div className="flex items-center gap-3 mb-5">
          <div className="size-8 rounded-full bg-primary flex items-center justify-center font-bold">1</div>
          <h3 className="text-lg font-bold">Route Details</h3>
        </div>

        <div className="relative rounded-2xl bg-surface-dark border border-border-dark overflow-hidden mb-5">
          <div className="flex items-center p-5 gap-4 border-b border-border-dark">
            <span className="material-symbols-outlined text-primary bg-primary/10 rounded-full p-1" style={{ fontSize: '20px' }}>radio_button_checked</span>
            <div className="flex-1">
              <label className="text-[11px] font-bold text-text-secondary uppercase">Pick-up Point</label>
              <input className="w-full bg-transparent border-none p-0 text-sm font-semibold focus:ring-0" placeholder="Where from?" defaultValue="Home (DHA Phase 6)" />
            </div>
          </div>
          
          <div className="relative -my-3.5 ml-4 z-20">
            <button className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-surface-dark border border-border-dark text-xs font-semibold text-text-secondary">
              <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-sm font-bold">add</span>
              </div>
              Add Stop
            </button>
          </div>

          <div className="flex items-center p-5 gap-4">
            <span className="material-symbols-outlined text-red-500 bg-red-500/10 rounded-full p-1" style={{ fontSize: '20px' }}>location_on</span>
            <div className="flex-1">
              <label className="text-[11px] font-bold text-text-secondary uppercase">Drop-off Point</label>
              <input className="w-full bg-transparent border-none p-0 text-sm font-semibold focus:ring-0" placeholder="Where to?" />
            </div>
          </div>
        </div>

        <div className="w-full h-32 rounded-2xl overflow-hidden relative border border-border-dark bg-slate-800">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuChx_cfrZz2HuMW3fXrN7pU23Go_0g8AFQtYCtgFpL5cQEz73KekKmXgxIUFft5qf_1jx_q8DN9jFSVvkiM5nbmzX7AK-TGG5vjFBst5OuWJh_dQAe8-_Tijjc6KyeAT6S91nvor8PjB1pAcm3mmNnH5Qr9j5RwJnDVRkQ-_3VMPKkZqGRft99cfSod4BOCxHFsc-RgNRybn0rFfK1ZByJIyur0KdWhrS5R-lpPMQOO8-2EphOkR0HvRAJPCzOQ7TTGsHsU2mnjaIEl" className="w-full h-full object-cover opacity-80" alt="Map" />
          <div className="absolute inset-0 flex items-end justify-end p-3">
            <button className="bg-surface-dark text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 border border-border-dark">
              <span className="material-symbols-outlined text-primary text-base">edit_location_alt</span>
              Adjust on Map
            </button>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full max-w-md p-4 bg-surface-dark/95 backdrop-blur-md border-t border-border-dark">
        <button 
          onClick={() => navigate('/create/step2')}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2"
        >
          Continue
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default Step1Route;
