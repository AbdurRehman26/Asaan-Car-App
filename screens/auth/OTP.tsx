
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OTP: React.FC = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="p-4 pt-12 flex items-center">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full flex items-center justify-center hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="flex-1 text-center font-bold text-lg pr-10">Verify Phone Number</h2>
      </header>

      <main className="flex-1 flex flex-col px-6 pt-8">
        <div className="flex justify-center mb-6">
          <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-[32px]">lock_person</span>
          </div>
        </div>
        
        <h1 className="text-[28px] font-bold text-center mb-3">Enter Authentication Code</h1>
        <p className="text-text-secondary text-center mb-8 px-4">
          Enter the 6-digit code we just sent to your phone number ending in <span className="text-white font-semibold">88</span>.
        </p>

        <div className="flex justify-center gap-2 mb-8">
          {[5, '', '', '', '', ''].map((val, i) => (
            <input 
              key={i}
              className={`size-12 rounded-lg text-center bg-surface-dark border ${i === 1 ? 'border-primary ring-2 ring-primary/20' : 'border-border-dark'} text-xl font-bold focus:ring-2 focus:ring-primary focus:border-transparent outline-none`}
              type="text"
              maxLength={1}
              defaultValue={val}
              autoFocus={i === 1}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 bg-surface-dark py-2 px-4 rounded-full border border-border-dark">
            <span className="material-symbols-outlined text-sm text-text-secondary">timer</span>
            <p className="text-sm text-text-secondary">
              Resend code in <span className="text-primary font-bold tabular-nums">00:{timer < 10 ? `0${timer}` : timer}</span>
            </p>
          </div>
          <button className={`text-sm font-semibold ${timer === 0 ? 'text-primary' : 'text-gray-600'}`} disabled={timer > 0}>
            Resend Code
          </button>
        </div>

        <div className="mt-auto pb-8">
          <button 
            onClick={() => navigate('/browse')}
            className="w-full bg-primary hover:bg-primary-dark py-4 rounded-xl text-lg font-bold shadow-lg transition-transform active:scale-95"
          >
            Verify & Proceed
          </button>
        </div>
      </main>

      <div className="bg-surface-dark/50 pb-8 pt-2 backdrop-blur-xl">
        <div className="grid grid-cols-3 gap-y-4 gap-x-6 p-4 max-w-sm mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, null, 0, 'back'].map((num, i) => (
            num === null ? <div key={i}></div> : (
              <button 
                key={i} 
                className="h-14 flex flex-col items-center justify-center rounded-lg active:bg-white/10"
              >
                {num === 'back' ? (
                  <span className="material-symbols-outlined">backspace</span>
                ) : (
                  <>
                    <span className="text-2xl font-medium">{num}</span>
                    {/* Added typeof check to ensure num is a number before comparison and subtraction */}
                    {typeof num === 'number' && num > 1 && num < 10 && (
                      <span className="text-[10px] text-text-secondary leading-none uppercase">
                        {['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'][num - 2]}
                      </span>
                    )}
                  </>
                )}
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default OTP;
