
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatList: React.FC = () => {
  const navigate = useNavigate();

  const chats = [
    {
      id: '1',
      name: 'Ahmed Khan',
      role: 'Driver',
      lastMessage: 'I have arrived at the pickup point.',
      time: '2 min ago',
      unread: 1,
      ride: '#4521',
      online: true,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpD5EONbFCEDwUCIp41M9dMHsv_87-VbLRhBlngw7SYhf2pae74Zt8-kHKJPGPQe-hf0MK7FTUYUvUzxqKQdJu_0Bgwe01hnbpYyIjng-NT_1imrHWuSz1Z1l_QZqD0wBzHZSG-6uqe_zVKzvbTUuJoYUVAuOpM5EolrBRvKktBzUsrGo0cIgyPE1xw7xv3zaVnKcK7Y9fz9BS51AtC4FMqRR0NogBuCy8H66bbR5uxxUT53VrC0VucRnP_ZxTloJPuZKY5UyrO9MJ'
    },
    {
      id: '2',
      name: 'Sarah J.',
      role: 'Passenger',
      lastMessage: 'Great, thank you! See you soon.',
      time: '10:45 AM',
      unread: 0,
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2GNtVym2Ghi-Bk_uPJZcD0zmNW2lVb0vIsA1qVgqiAzPAYndQeQ6hxsGcE-UYPTorgBickaH_MZ9Ql1r-SFCVmkQ3oFakkQe1tvmglzw2uzXXw6KG9F11CNIEh66mzy2zT61G_gE47KHYbasb-XTbB4EIumm_AJhSQgRvW7NjDL4ZrXri-BHFl3VwviUGB3nlaK2i4PNnAixuOr3js7vLS4to4eUx6uV8Td-uOMNRH_HuUjRFsMV3-b2vMqP7rLSG4YGkgqYs_S_6'
    }
  ];

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="sticky top-0 z-20 flex items-center justify-between px-5 py-4 bg-background-dark/95 backdrop-blur-sm border-b border-white/5">
        <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
        <button className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          <span className="material-symbols-outlined text-[24px]">edit_square</span>
        </button>
      </header>

      <div className="px-4 py-2">
        <div className="relative flex items-center w-full h-12 rounded-xl bg-surface-dark border border-white/5">
          <span className="material-symbols-outlined text-[20px] text-gray-500 ml-4 mr-2">search</span>
          <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm" placeholder="Search conversations..." />
        </div>
      </div>

      <div className="flex gap-2.5 px-4 py-3 overflow-x-auto no-scrollbar">
        {['All', 'Drivers', 'Passengers', 'Support'].map((f, i) => (
          <button key={i} className={`h-9 px-5 rounded-full text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-primary' : 'bg-surface-dark border border-white/5'}`}>
            {f}
          </button>
        ))}
      </div>

      <main className="flex-1 flex flex-col overflow-y-auto no-scrollbar">
        {chats.map((chat) => (
          <div 
            key={chat.id}
            onClick={() => navigate(`/chat/${chat.id}`)}
            className="flex items-center gap-4 px-4 py-4 hover:bg-surface-dark transition-colors cursor-pointer border-b border-white/5"
          >
            <div className="relative shrink-0">
              <div 
                className="size-14 rounded-full bg-cover bg-center" 
                style={{ backgroundImage: `url("${chat.avatar}")` }}
              />
              {chat.online && <div className="absolute bottom-0 right-0 size-3.5 bg-green-500 rounded-full border-2 border-background-dark"></div>}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <div className="flex items-center gap-2 overflow-hidden">
                  <h3 className="text-base font-bold truncate">{chat.name}</h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                    {chat.role}
                  </span>
                </div>
                <span className={`text-xs font-medium ${chat.unread > 0 ? 'text-primary' : 'text-gray-500'}`}>{chat.time}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'text-gray-200 font-medium' : 'text-gray-500'}`}>
                  {chat.lastMessage}
                </p>
                {chat.unread > 0 && (
                  <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-primary text-white text-[10px] font-bold">
                    {chat.unread}
                  </span>
                )}
              </div>
              {chat.ride && (
                <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">local_taxi</span> Ride {chat.ride}
                </p>
              )}
            </div>
          </div>
        ))}
      </main>

      <nav className="shrink-0 bg-surface-dark/95 backdrop-blur-lg border-t border-white/5 pb-8 pt-2 px-6 fixed bottom-0 w-full z-40 flex justify-between">
        {[
          { label: 'Home', icon: 'home', path: '/browse' },
          { label: 'Rides', icon: 'local_taxi', path: '/browse' },
          { label: 'Chats', icon: 'chat_bubble', path: '/chats', active: true },
          { label: 'Profile', icon: 'person', path: '/profile' }
        ].map((item, i) => (
          <button key={i} onClick={() => navigate(item.path)} className={`flex flex-col items-center gap-1 ${item.active ? 'text-primary' : 'text-gray-500'}`}>
            <span className={`material-symbols-outlined ${item.active ? 'fill-current' : ''}`}>{item.icon}</span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ChatList;
