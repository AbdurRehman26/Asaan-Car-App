
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const rides = [
    {
      id: '1',
      name: 'Ahmed K.',
      rating: 4.8,
      rides: 120,
      price: 12000,
      pickup: 'North Nazimabad, Block H',
      dropoff: 'Clifton Tower, Do Talwar',
      pickupTime: '07:30 AM',
      dropoffTime: '08:30 AM',
      vehicle: 'Honda City 2018 (White)',
      ac: true,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnmPxDoMwBxUhceDiG3-TM9uMSiNXoAzsrmqgsBkwxIXJnTjqfTV8h4IMzQvmNFlBaoim1xvcmonYeYNFgS9mQhy0WAGHBnfetwBnhX9FmbyD6RJF3_6WgjvtfLGLu7q7CUhKTnsqFGYlGN7cThezLmA7P7vw_p8vEyehzcw4McF-Xhpl13P_DOFfsgc5RFldR3n06JxMBchkSMy6wIGmFcBNm2_Qq0NPZf0A1XR1UkLs8G1tn8GgW3Adl6j-LXHqgOb7bqYO-ICbd"
    },
    {
      id: '2',
      name: 'Sarah M.',
      rating: 5.0,
      rides: 45,
      price: 14500,
      pickup: 'Gulshan-e-Iqbal, Block 4',
      dropoff: 'I.I. Chundrigar Road',
      pickupTime: '08:15 AM',
      dropoffTime: '09:00 AM',
      vehicle: 'Toyota Vitz (Silver)',
      ac: true,
      femaleOnly: true,
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeTHPs4Kd-vpJvsduoK7G7ynYlOTLLPwulHsQF21EZQktIZy-OnE7MZCBYwhaVw48bpN50g1nIqhgL2mzodfhc-QBeGMHrrOW9yDzqf_laR0jAPylqmhXgCXlRRJzSxu0qpzDKIQPl0aAZryMvhQ5GQGCV2ZhOKK3VmifEbf6HTXtdEZqTDTFXvYtNd0-cplbLyELdVM6I526F2281XvgReSYuW785F8czZlBJkOJZkmMgX0mYq9kIqlSJxSoDdas8sEKhWTXjej2g"
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-background-dark">
      <header className="shrink-0 pt-safe-top">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-input-dark">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold flex-1 text-center">Find Your Commute</h2>
          <button className="size-10 flex items-center justify-center rounded-full hover:bg-input-dark">
            <span className="material-symbols-outlined text-text-secondary">tune</span>
          </button>
        </div>
        <div className="px-4 py-2">
          <div className="flex items-center rounded-xl bg-input-dark h-12 ring-1 ring-white/5 focus-within:ring-primary overflow-hidden">
            <span className="material-symbols-outlined text-text-secondary ml-4 mr-2">search</span>
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-base placeholder:text-text-secondary" placeholder="Search pick-up or drop-off..." />
          </div>
        </div>
        <div className="flex gap-3 px-4 py-3 overflow-x-auto no-scrollbar">
          {['All', 'Morning Shift', 'Evening Shift', 'Female Only', 'AC Car'].map((filter, i) => (
            <button key={i} className={`h-9 px-4 rounded-full whitespace-nowrap text-sm font-medium ${i === 0 ? 'bg-primary' : 'bg-input-dark'}`}>
              {filter}
            </button>
          ))}
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 no-scrollbar">
        {rides.map((ride) => (
          <div 
            key={ride.id} 
            onClick={() => navigate(`/offering/${ride.id}`)}
            className="bg-card-dark rounded-2xl p-4 shadow-lg border border-white/5 flex flex-col gap-4 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src={ride.avatar} className="w-12 h-12 rounded-full border-2 border-input-dark object-cover" alt={ride.name} />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5 border-2 border-card-dark">
                    <span className="material-symbols-outlined text-[10px] text-black font-bold">check</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base flex items-center gap-1">
                    {ride.name}
                    {ride.femaleOnly && <span className="text-[8px] bg-pink-500/20 text-pink-300 px-1 rounded uppercase">Female Only</span>}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs font-medium">
                    <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                    <span>{ride.rating}</span>
                    <span className="text-text-secondary mx-1">•</span>
                    <span className="text-text-secondary font-normal">{ride.rides} rides</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-primary text-lg font-bold">PKR {ride.price.toLocaleString()}</span>
                <p className="text-text-secondary text-[10px]">/ month</p>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-3">
              <div className="relative pl-3 ml-1.5 border-l-2 border-dashed border-gray-700 space-y-4">
                <div className="relative">
                  <div className="absolute -left-[19px] top-1.5 size-3 bg-primary rounded-full ring-4 ring-card-dark"></div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-text-secondary text-xs">{ride.pickupTime}</span>
                    <span className="text-green-400 text-[8px] font-bold uppercase bg-green-400/10 px-1 rounded">Pick-up</span>
                  </div>
                  <p className="text-sm font-semibold">{ride.pickup}</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[19px] top-1.5 size-3 bg-background-dark border-2 border-primary rounded-full ring-4 ring-card-dark"></div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-text-secondary text-xs">{ride.dropoffTime}</span>
                    <span className="text-red-400 text-[8px] font-bold uppercase bg-red-400/10 px-1 rounded">Drop-off</span>
                  </div>
                  <p className="text-sm font-semibold">{ride.dropoff}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-text-secondary text-sm">directions_car</span>
                <span>{ride.vehicle}</span>
              </div>
              {ride.ac && (
                <div className="flex items-center gap-1 bg-input-dark px-2 py-0.5 rounded text-text-secondary">
                  <span className="material-symbols-outlined text-xs">ac_unit</span> AC
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2 border-t border-white/5">
              <button className="flex flex-col items-center py-2 bg-input-dark rounded-xl hover:bg-white/5">
                <span className="material-symbols-outlined text-green-400">chat</span>
                <span className="text-[10px]">WhatsApp</span>
              </button>
              <button onClick={(e) => { e.stopPropagation(); navigate('/chat/123'); }} className="flex flex-col items-center py-2 bg-input-dark rounded-xl hover:bg-white/5">
                <span className="material-symbols-outlined text-fuchsia-400">forum</span>
                <span className="text-[10px]">Message</span>
              </button>
              <button className="flex flex-col items-center py-2 bg-primary rounded-xl hover:bg-primary-dark">
                <span className="material-symbols-outlined">call</span>
                <span className="text-[10px]">Call</span>
              </button>
            </div>
          </div>
        ))}
      </main>

      <nav className="fixed bottom-0 w-full max-w-md bg-card-dark/95 backdrop-blur-lg border-t border-white/5 pb-8 pt-2 px-6 flex justify-between items-center z-50">
        {[
          { label: 'Home', icon: 'home', path: '/browse' },
          { label: 'Browse', icon: 'search', path: '/browse', active: true },
          { label: 'Bookings', icon: 'calendar_month', path: '/my-offerings' },
          { label: 'Profile', icon: 'person', path: '/profile' }
        ].map((item, i) => (
          <button key={i} onClick={() => navigate(item.path)} className={`flex flex-col items-center gap-1 ${item.active ? 'text-primary' : 'text-text-secondary'}`}>
            <span className={`material-symbols-outlined ${item.active ? 'fill-current' : ''}`}>{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <button 
        onClick={() => navigate('/create/step1')}
        className="fixed bottom-24 right-4 size-14 rounded-full bg-white text-background-dark flex items-center justify-center shadow-xl z-40 active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </div>
  );
};

export default Browse;
