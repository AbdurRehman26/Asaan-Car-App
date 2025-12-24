
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const OfferingDetails: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="flex flex-col h-full bg-background-dark pb-24">
      <header className="sticky top-0 z-30 flex items-center bg-background-dark/95 backdrop-blur-md p-4 pb-2 justify-between border-b border-white/5">
        <button onClick={() => navigate(-1)} className="size-10 flex items-center justify-center rounded-full hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="font-bold">Offering Details</h2>
        <div className="flex gap-2">
          <button className="size-10 flex items-center justify-center rounded-full"><span className="material-symbols-outlined">share</span></button>
          <button className="size-10 flex items-center justify-center rounded-full"><span className="material-symbols-outlined">bookmark_border</span></button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar">
        <div className="p-4">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdI9L4Z04NbeBs1TX8QTsFv_qtk82v-q6CG8yjzwvhFMpE5miyQo-0aE_D0KEhYL8nT3VSwZaWDM1hxyYNE9VoW95R39DmFKAPnnoz9dBcVO4XdGAGeLcDEJZYCzrTOX2TJWipOIScNimOlHBv95kbNz4zd71aSgS3oVnEUL_Zx4_kxwOtzWb0L8x_Y4lYhDhkdect5z1QrxkYx655S5he5mlS3juJUPfKK-3_mc4mCprZSwiRG3K5Dk0M5DO9bL9y2vbfxTg4K_iK" className="w-full h-full object-cover" alt="Van" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white mb-1">4 Seats Left</span>
                <h3 className="text-white text-xl font-bold">Toyota HiAce (2018)</h3>
              </div>
              <div className="flex gap-2">
                <span className="bg-white/20 p-1 rounded-lg text-white"><span className="material-symbols-outlined text-sm">ac_unit</span></span>
                <span className="bg-white/20 p-1 rounded-lg text-white"><span className="material-symbols-outlined text-sm">music_note</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h1 className="text-2xl font-bold leading-tight">Home to Office Route</h1>
              <p className="text-text-secondary text-sm mt-1">Gulshan-e-Iqbal to II Chundrigar</p>
            </div>
            <div className="text-right">
              <p className="text-primary font-bold text-xl">PKR 15k<span className="text-xs text-text-secondary font-normal">/mo</span></p>
            </div>
          </div>

          <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar">
            {[
              { icon: 'distance', label: '15 km' },
              { icon: 'schedule', label: '45 mins' },
              { icon: 'calendar_month', label: 'Mon-Fri' }
            ].map((tag, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-surface-dark px-3 py-1.5 rounded-full border border-gray-800 text-[10px] font-medium text-text-secondary">
                <span className="material-symbols-outlined text-base">{tag.icon}</span>
                <span>{tag.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-px bg-gray-800 mx-4 my-4"></div>

        <div className="px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLL2NPlXDCHtbD3yqn5KOQz4avX7M0hO6w9sPm7e_lwPkBUTkk9mii4QU3DGqQB4VNmdgaF_S0jtYn1dVKHaq8RHhOHU9vajxNJjAWvSe5X-gSDYlQR6DZjzzLOS3_8zNHM7npMILy9_cWsqhUYcCKhBEbwU3_-nKQNxcT5_rq-rzwEfDrFAKpMGQPBJ2DsWEM1_EOrzvzEzaBFKqIt2orgS2Tt2kceoRkZPXis1h_NITRzNUapFvapfFfvm81kDd57QnGZwq6TVJ3" className="size-12 rounded-full border-2 border-primary" alt="Ali" />
            <div>
              <h4 className="font-bold text-sm">Ali Khan</h4>
              <div className="flex items-center gap-1 text-[10px] text-text-secondary">
                <span className="material-symbols-outlined text-yellow-400 text-xs fill-current">star</span>
                <span className="font-bold text-white">4.8</span>
                <span>(120 reviews)</span>
              </div>
            </div>
          </div>
          <button className="text-primary text-[10px] font-bold px-3 py-1.5 bg-primary/10 rounded-lg">View Profile</button>
        </div>

        <div className="px-4 py-6">
          <h3 className="font-bold text-lg mb-4">Route Schedule</h3>
          <div className="relative pl-2 space-y-8">
            <div className="absolute top-4 bottom-4 left-[21px] w-0.5 bg-gray-700 -z-10"></div>
            
            <div className="flex gap-4">
              <div className="size-9 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10 border-4 border-background-dark">
                <span className="material-symbols-outlined text-sm">trip_origin</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-sm">Gulshan-e-Iqbal</p>
                  <span className="bg-green-900/30 text-green-400 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Pickup</span>
                </div>
                <p className="text-text-secondary text-[10px]">Near Disco Bakery</p>
                <p className="text-primary text-[10px] font-bold mt-1">08:00 AM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="size-9 rounded-full bg-red-900/20 flex items-center justify-center text-red-500 z-10 border-4 border-background-dark">
                <span className="material-symbols-outlined text-sm">location_on</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-sm">II Chundrigar Road</p>
                  <span className="bg-blue-900/30 text-blue-400 text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">Drop-off</span>
                </div>
                <p className="text-text-secondary text-[10px]">Main Branch Stop</p>
                <p className="text-primary text-[10px] font-bold mt-1">08:45 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-12">
          <h3 className="font-bold text-lg mb-3">Vehicle Features</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: 'ac_unit', label: 'Air Conditioned' },
              { icon: 'smoke_free', label: 'Non-Smoking' },
              { icon: 'music_note', label: 'Sound System' },
              { icon: 'airline_seat_recline_extra', label: 'Comfy Seats' }
            ].map((f, i) => (
              <div key={i} className="bg-surface-dark p-3 rounded-lg border border-gray-800 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-sm">{f.icon}</span>
                <span className="text-[10px] font-medium text-gray-300">{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 w-full max-w-md p-4 bg-background-dark/80 backdrop-blur-lg border-t border-white/5 z-40">
        <div className="grid grid-cols-4 gap-3">
          <button className="col-span-1 flex flex-col items-center py-2 rounded-xl bg-[#25D366]/20 text-[#25D366]">
            <span className="material-symbols-outlined text-2xl">chat</span>
            <span className="text-[8px] font-bold uppercase mt-0.5">WhatsApp</span>
          </button>
          <button onClick={() => navigate('/chat/123')} className="col-span-1 flex flex-col items-center py-2 rounded-xl bg-white/10 text-white">
            <span className="material-symbols-outlined text-2xl">mail</span>
            <span className="text-[8px] font-bold uppercase mt-0.5">Message</span>
          </button>
          <button className="col-span-2 flex items-center justify-center gap-2 rounded-xl bg-primary text-white font-bold h-12 shadow-lg">
            <span className="material-symbols-outlined">call</span>
            Call Now
          </button>
        </div>
      </footer>
    </div>
  );
};

export default OfferingDetails;
