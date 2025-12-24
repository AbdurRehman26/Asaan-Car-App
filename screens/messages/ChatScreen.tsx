
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ChatScreen: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const messages = [
    { type: 'received', text: 'Hello! I am 5 minutes away.', time: '10:02 AM' },
    { type: 'sent', text: 'Great, I am standing near the main gate.', time: '10:03 AM', read: true },
    { type: 'received', text: 'Okay, see you soon.', time: '10:04 AM' },
    { type: 'sent', location: true, time: '10:05 AM', read: false }
  ];

  return (
    <div className="flex flex-col h-screen bg-background-dark">
      <header className="flex items-center justify-between px-4 py-3 bg-background-dark/95 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <button onClick={() => navigate(-1)} className="text-white p-2 -ml-2 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">arrow_back_ios_new</span>
          </button>
          <div className="relative shrink-0">
            <div 
              className="size-10 rounded-full bg-center bg-cover border border-gray-600"
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCsi2FVaErA-usKYapVyoXSyZ-f6j_b1obc2SGtMWA-1c-RLo2Q7EsxiE-asfCms3Wo57rId8kS0nSFdD0sCJKdXs_mz2PHLr8dqRzyE7Go-cVIlzEYeuBUFum2_s-xAFjilJxPn76YK5f53jpXtc9nMG3fOOoetfzm1DE9vBkn-qgsW40RR7PobZcogtpqTdR9Z_Oo3iXJUZ7U8eqH1pN16D4PQXpquPx3FA9wy60XD7R4lSHSkhPzmeP2FO3mq1kvgaYvelIabppt")' }}
            />
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-background-dark rounded-full"></div>
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-sm font-bold truncate">Ahmed (Driver)</h1>
            <span className="text-[10px] text-text-secondary truncate">Toyota Corolla • LE-293</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="text-white p-2 rounded-full">
            <span className="material-symbols-outlined">call</span>
          </button>
          <button className="text-white p-2 rounded-full">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6 no-scrollbar">
        <div className="flex justify-center sticky top-0 z-10">
          <span className="text-[10px] font-semibold text-gray-400 bg-surface-dark/80 px-3 py-1 rounded-full">Today</span>
        </div>

        {messages.map((msg, i) => (
          <div key={i} className={`flex items-end gap-2 ${msg.type === 'sent' ? 'justify-end' : ''}`}>
            {msg.type === 'received' && (
              <div className="size-8 rounded-full bg-cover mb-1 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8Zd5mQNYK4xl1RVFUPlpdwqr-QuoGrr4J1OrfHWNOc_7hS_n8Et82iK_A5VigGzLtJWj5u8H-q8zFKSn7vpRKobowkWL4yFOt3SKR_Il2nKDnWw8gc7oUaws1-_d1ufRvfErqFTwW0FM79KQ2jWjbza-QlGo6iKvoDWnxYLWjJEU8ulHktIHakGzwjlUZ3hYJzfrkvhmbAjANgEG0ou3NupNNZdmLC6sjUYRPWJrG4b4se0d74gTtv45gjom5OnHFs9DDHnEhpSxN")' }} />
            )}
            
            <div className={`flex flex-col gap-1 max-w-[75%] ${msg.type === 'sent' ? 'items-end' : ''}`}>
              {msg.location ? (
                <div className="p-1 bg-primary text-white rounded-2xl rounded-br-sm shadow-md overflow-hidden cursor-pointer">
                  <div className="h-32 w-56 bg-slate-800 rounded-xl relative flex items-center justify-center">
                    <span className="material-symbols-outlined text-4xl text-white/50">location_on</span>
                  </div>
                  <div className="px-3 py-2 flex justify-between items-center text-[10px]">
                    <span className="font-bold">Shared Location</span>
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </div>
                </div>
              ) : (
                <div className={`px-4 py-3 rounded-2xl ${msg.type === 'sent' ? 'bg-primary text-white rounded-br-sm' : 'bg-surface-dark text-gray-100 rounded-bl-sm border border-white/5'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              )}
              <div className="flex items-center gap-1 text-[10px] text-text-secondary mt-1">
                <span>{msg.time}</span>
                {msg.type === 'sent' && (
                  <span className={`material-symbols-outlined text-[14px] ${msg.read ? 'text-primary' : 'text-gray-500'}`}>done_all</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="bg-background-dark border-t border-white/5 p-3 pb-8">
        <div className="flex items-end gap-2 max-w-4xl mx-auto">
          <button className="text-text-secondary p-2 shrink-0">
            <span className="material-symbols-outlined text-[28px]">add_circle</span>
          </button>
          <div className="flex-1 bg-surface-dark rounded-2xl flex items-center px-4 py-2">
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full p-0" placeholder="Type a message..." />
            <button className="text-text-secondary ml-2">
              <span className="material-symbols-outlined text-xl">sentiment_satisfied</span>
            </button>
          </div>
          <button className="bg-primary text-white size-11 rounded-full flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-xl">send</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatScreen;
