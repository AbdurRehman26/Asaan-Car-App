
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="flex items-center justify-between p-4 pt-6">
        <h2 className="text-xl font-extrabold tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>local_taxi</span>
          AsaanCar
        </h2>
        <button className="flex items-center justify-center rounded-full size-10 bg-gray-800 text-gray-300">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>language</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col px-5 pt-2">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
          <div 
            className="w-full h-full bg-center bg-cover" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLdWGg13OmvNx2Ys6-HeCoA_u3GP9BH1zxrovOXESXqYllrhujsyxCjwBsI0WZgfqFbgvSPPjirMXcGyCHZo0-YfcgXDc7ZwUzemTW_Wd1_Amw4i4eyCzqaknsBwVKXSXNdr-DmHqQvs7EZnAfpOcpgJW_el3DcMup3Z_QNw0SxVE7DxKyf3a3YAh31sEvJTHtQ9wK4qfVu7JSCfRp_Id7o8aZKGEbBQc1mDNQv8UYf6E1AiSWkwGMFmg2UqqzDs-z0syfz4gJnV9d")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 bg-background-dark/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
            <span className="text-xs font-semibold text-white">Verified Drivers</span>
          </div>
        </div>

        <div className="text-center pt-8">
          <h1 className="text-3xl font-extrabold leading-tight mb-3">
            Safar Asaan, <br/>
            <span className="text-primary">Zindagi Asaan</span>
          </h1>
          <p className="text-text-secondary text-base">
            Your daily commute, simplified. Reliable door-to-door pick & drop service without the hassle of driving.
          </p>
        </div>

        <div className="mt-8 flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
          {[
            { title: "Door-to-Door", desc: "We pick you up right from your gate. No walking to bus stops.", icon: "home_pin", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJfqIKZp2EqXK3hqx595uatmGz0sY9NyDzV-Zjooxx0ly0LRB-KPdWOhRuCOFUlUDVbRzRTA6xZ1RB9N225QZ4_k77_Pom5chniZt-d2Uu_QFF9umxV-l9XgNUAV98wQxsjB3OObrdHTacNpCFBkdny-O_CDYJS6az3-bWa1Be-L3eiQX9hm2aB6TUMuqMKn08Zsf8Ykd9MGwTKFfEQBLs_txZ7G7WAK1LB65cnMjG3M-UdlB2b_T4stBmTvAn6-B2F1Tu_4mbkKys" },
            { title: "Scheduled Rides", desc: "Fixed timings, no waiting. Plan your week in advance.", icon: "calendar_month", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuADFOC4-gTY_cNXddHYjA_9qtARBdiiTzfRkOGliRCJcx1_C4wF_EVWxuZk5t1Gv15IfVsuzR8COA-YMf9SXRD3TEiiKJpxE81UyDJaELTfiMhxlGKtX7IvDiiilcx0vb7GmaFc0N8lqBNcwxUriY27QPiamX3u10-Kv2mdgEg74S5Y_ASov2z5WvDmrfk2EEsIVx6V9CrFD2CDFIf2aZ1uUulMMgUd9QPzK3AUBP_b2APPY1jg95pJxeKrMhOA94RP5dZFpSyznNY8" }
          ].map((item, idx) => (
            <div key={idx} className="snap-center shrink-0 w-[260px] flex flex-col gap-3 p-4 rounded-xl bg-surface-dark border border-gray-800 shadow-sm">
              <div 
                className="w-full aspect-video rounded-lg bg-gray-800 bg-center bg-cover relative"
                style={{ backgroundImage: `url("${item.img}")` }}
              >
                <div className="absolute top-2 right-2 bg-primary/20 p-1.5 rounded-md text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{item.icon}</span>
                </div>
              </div>
              <h3 className="text-white text-lg font-bold">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-5 flex flex-col gap-4">
        <button 
          onClick={() => navigate('/login')}
          className="w-full bg-primary hover:bg-primary-dark text-white text-lg font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95"
        >
          Get Started
        </button>
        <div className="flex justify-center gap-2 pb-4 text-sm text-text-secondary">
          <span>Already have an account?</span>
          <button onClick={() => navigate('/login')} className="text-primary font-semibold">Log In</button>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
