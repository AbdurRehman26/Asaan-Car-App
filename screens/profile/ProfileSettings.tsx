
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileSettings: React.FC = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Account Details',
      items: [
        { label: 'Edit Profile', sub: 'Phone, Email, Address', icon: 'person', color: 'text-blue-500' },
        { label: 'Documents & Verification', sub: '1 Document Expiring Soon', icon: 'badge', color: 'text-purple-500', alert: true }
      ]
    },
    {
      title: 'Vehicle & Service',
      items: [
        { label: 'My Vehicle', sub: 'Toyota Corolla • LEZ 1234', icon: 'directions_car', color: 'text-teal-500' },
        { label: 'Service Areas', sub: 'Manage routes and zones', icon: 'map', color: 'text-emerald-500' }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-full bg-background-dark pb-24 overflow-y-auto no-scrollbar">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background-dark/95 backdrop-blur-sm border-b border-white/5">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full flex items-center justify-center hover:bg-white/5">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center pr-10">Profile Settings</h2>
      </header>

      <div className="flex flex-col items-center pt-6 pb-8 px-4">
        <div className="relative">
          <div 
            className="size-28 rounded-full bg-gray-700 bg-center bg-cover border-4 border-surface-dark shadow-lg"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxk7gIaopTYLVFTCQ-3RGs7fy_BJGt5Fu1YRVYZXCx7oaLrycO5y-pJ9XpnqfRbPxH2NB8fd2-f4VRoHL_IcAfOBr80d1xnXyILIu1x2j9_Myh_O3HdcNaEjXOQP1hweVhr5j04Tnq3uI5ZcLcdbs_WFC4tWf0M2PTAaTmuifLnOaI5qUJz9djOdxQGzS0Kg4SHhJuHM5wsu3d8T1kkpMJIQy6M_ZCu2VSoE7jHpveletYQ3vqpu6xzmxYJubHh8OZEeomeE7t3VGt')" }}
          />
          <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-1.5 border-2 border-background-dark">
            <span className="material-symbols-outlined text-sm">edit</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <h1 className="text-2xl font-bold">Ali Khan</h1>
          <div className="flex items-center justify-center gap-2 mt-1 text-xs text-text-secondary">
            <span className="text-primary font-medium flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] fill-current">verified</span>
              Verified Driver
            </span>
            <span>•</span>
            <span>Since 2023</span>
          </div>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 bg-surface-dark rounded-full border border-gray-800">
            <span className="text-yellow-500 material-symbols-outlined text-sm fill-current">star</span>
            <span className="font-bold text-sm">4.8</span>
            <span className="text-[10px] text-text-secondary">(124 reviews)</span>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <div className="bg-surface-dark rounded-xl p-4 flex items-center justify-between border border-gray-800">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-green-500">online_prediction</span>
            </div>
            <div>
              <p className="font-semibold text-sm">You are Online</p>
              <p className="text-[10px] text-text-secondary">Receiving new ride requests</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-slate-700 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>
      </div>

      <div className="space-y-6 px-4">
        {sections.map((sec, i) => (
          <section key={i}>
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-text-secondary mb-2 ml-1">{sec.title}</h3>
            <div className="bg-surface-dark rounded-xl border border-gray-800 divide-y divide-gray-800">
              {sec.items.map((item, j) => (
                <button key={j} className="w-full flex items-center gap-4 p-4 hover:bg-white/5 transition-colors text-left group">
                  <div className={`size-8 rounded-lg bg-current/10 flex items-center justify-center ${item.color}`}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className={`text-[10px] ${item.alert ? 'text-orange-500' : 'text-text-secondary'}`}>{item.sub}</p>
                  </div>
                  {item.alert && <div className="size-2 rounded-full bg-orange-500 mr-2"></div>}
                  <span className="material-symbols-outlined text-gray-500 group-hover:text-primary">chevron_right</span>
                </button>
              ))}
            </div>
          </section>
        ))}
        
        <div className="pt-2 pb-6 flex flex-col gap-3">
          <button onClick={() => navigate('/login')} className="w-full py-3.5 bg-surface-dark border border-gray-800 rounded-xl text-sm font-semibold">
            Log Out
          </button>
          <button className="w-full py-2 text-red-500 text-xs font-medium">
            Delete Account
          </button>
          <p className="text-center text-[10px] text-gray-600 mt-2">
            AsaanCar Provider App v2.4.0 (Build 104)
          </p>
        </div>
      </div>

      <nav className="fixed bottom-0 w-full max-w-md bg-surface-dark/95 backdrop-blur-lg border-t border-white/5 pb-8 pt-2 px-6 flex justify-between z-40">
        {[
          { label: 'Home', icon: 'home', path: '/browse' },
          { label: 'Rides', icon: 'list_alt', path: '/my-offerings' },
          { label: 'Earnings', icon: 'wallet', path: '/profile' },
          { label: 'Profile', icon: 'person', path: '/profile', active: true }
        ].map((item, i) => (
          <button key={i} onClick={() => navigate(item.path)} className={`flex flex-col items-center gap-1 ${item.active ? 'text-primary' : 'text-text-secondary'}`}>
            <span className={`material-symbols-outlined ${item.active ? 'fill-current' : ''}`}>{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProfileSettings;
