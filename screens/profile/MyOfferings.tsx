
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyOfferings: React.FC = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('Active');
  const [showManage, setShowManage] = useState(false);

  const offerings = [
    {
      id: '1',
      status: 'Active',
      seats: '3/4 Seats Left',
      from: 'Gulberg III',
      to: 'DHA Phase 5',
      time: '08:30 AM - 05:30 PM',
      days: 'Mon, Tue, Wed, Thu, Fri',
      vehicle: 'Toyota Corolla (Sedan)',
      price: '15,000',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdN0oAlXhaUAY6CKmoMGQletGL9ARSfyydtE6UTHVA6Lve_ZQxJ80raR97efDdb1bsO9tiy2yq3mckWoqKRg5vRvhbxNnVPlQ3WZ8nLf2OUYhGayc6ir_IdDjEqbGY2jp47XkwxHx9qc1DxrM13QolT-uZFptt_45JzpFNrXSFO1kuOUKfY7TuFcbFgO0p8V6Uiz8LqKj_J5mFTKUVmH1X7egaq79UZ-1_JKn2Soh8oPFImiaRj_A-iN71B5Vhxd_Ba58oB58mNYmk'
    },
    {
      id: '2',
      status: 'Paused',
      seats: '2/4 Seats Left',
      from: 'Model Town',
      to: 'Johar Town',
      time: '09:00 AM - 06:00 PM',
      days: 'Mon - Fri',
      vehicle: 'Honda City (Sedan)',
      price: '14,000',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-lQQC0ZfeBjfqzd_Pu9yRbkwVg_mJU6fmm4QItWiegyVoHsXx8GHwDXOn4AWR0lms8_NLrXawGbjmcHCjlKexsgQi2uE1D-OyA9Cc4srd1yweX82x92i_8BO1DUuPmMjLsBdkZZbFDGU23GtpEILw97TtJi2BAydHMuJbwFKT3Q9Fpzu0KUH3fjUEzHgW4kmSYBFY49oAjzV_NAwwslgZMShcXQdyUkl4U_HTgG32w8i5ZCaklBq2jZCm95RVi7QAcTsJwt1dA1fV'
    }
  ];

  return (
    <div className="flex flex-col h-full bg-background-dark relative">
      <header className="sticky top-0 z-20 flex items-center bg-background-dark p-4 pb-2 justify-between border-b border-white/5">
        <h2 className="text-lg font-bold flex-1">My Offerings</h2>
        <button 
          onClick={() => navigate('/create/step1')}
          className="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center"
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      </header>

      <div className="p-4 sticky top-[60px] z-10 bg-background-dark">
        <div className="flex h-10 rounded-lg bg-surface-dark p-1">
          {['Active', 'Paused', 'History'].map((f) => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 rounded-md text-sm font-medium transition-all ${filter === f ? 'bg-primary text-white shadow-sm' : 'text-gray-400'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 p-4 space-y-4 pb-24 overflow-y-auto no-scrollbar">
        {offerings.filter(o => o.status === filter).map((o) => (
          <div key={o.id} className="bg-card-dark rounded-xl p-4 border border-white/5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${o.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'}`}></span>
                  <p className={`text-[10px] font-bold uppercase ${o.status === 'Active' ? 'text-green-400' : 'text-amber-400'}`}>{o.status}</p>
                  <span className="text-gray-600 text-xs">•</span>
                  <p className="text-text-secondary text-[10px] font-medium">{o.seats}</p>
                </div>
                <h3 className="font-bold text-sm">{o.from} <span className="text-gray-500 mx-1">➔</span> {o.to}</h3>
                <div className="space-y-1 mt-1">
                  <div className="flex items-center gap-2 text-text-secondary text-[10px]">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span>{o.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-[10px]">
                    <span className="material-symbols-outlined text-sm">calendar_today</span>
                    <span>{o.days}</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary text-[10px]">
                    <span className="material-symbols-outlined text-sm">directions_car</span>
                    <span>{o.vehicle}</span>
                  </div>
                </div>
              </div>
              <img src={o.img} className="size-24 rounded-lg object-cover" alt="Car" />
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/5">
              <span className="text-primary font-bold text-sm">PKR {o.price}<span className="text-text-secondary font-normal text-[10px]">/mo</span></span>
              <button onClick={() => setShowManage(true)} className="size-8 rounded-full hover:bg-white/5 flex items-center justify-center text-gray-500">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Management Bottom Sheet */}
      {showManage && (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowManage(false)}></div>
          <div className="relative w-full max-w-md bg-surface-dark rounded-t-2xl p-6 border-t border-white/10 animate-slide-up">
            <div className="w-12 h-1.5 bg-gray-600 rounded-full mx-auto mb-6"></div>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold">Manage Offering</h3>
              <button onClick={() => setShowManage(false)} className="text-gray-400">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-3">
                <div className="size-14 rounded-full bg-white/5 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">edit</span>
                </div>
                <span className="text-xs font-medium text-gray-300">Edit</span>
              </button>
              <button className="flex flex-col items-center gap-3">
                <div className="size-14 rounded-full bg-white/5 flex items-center justify-center text-gray-300">
                  <span className="material-symbols-outlined">pause</span>
                </div>
                <span className="text-xs font-medium text-gray-300">Pause</span>
              </button>
              <button className="flex flex-col items-center gap-3">
                <div className="size-14 rounded-full bg-red-900/20 flex items-center justify-center text-red-500">
                  <span className="material-symbols-outlined">delete</span>
                </div>
                <span className="text-xs font-medium text-red-500">Delete</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOfferings;
