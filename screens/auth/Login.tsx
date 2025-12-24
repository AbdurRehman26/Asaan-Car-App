
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  return (
    <div className="flex flex-col h-full bg-background-dark">
      <header className="p-4 pt-12">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full flex items-center justify-center hover:bg-white/10">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col px-6">
        <div className="flex justify-center py-4">
          <div 
            className="w-full max-w-[320px] aspect-[4/3] rounded-xl bg-center bg-cover relative overflow-hidden"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCq9vjcIzoUwS9yWM_DVyZdFscKyQU16zXk4JKVj8Y41Z-A8Qo9VaDBbulT5bT3vfoLrEDJ1uk7hTFQt0o09q7YIhb3P6Iz0sMx0S1n2kYFjiRQMYu1l0oxnIZLEvHRB2Vaw93VTTCn7b1Ar_CshHUlR679jwLM1lYJy65azzyFTHoKHurfInFNIleLnn8LrFnrFs_Pg4FsbbWlqXx4p_Hn3CpDd1IfYl7ia8dvHWa8b8AkhEaixOxkR5TwroewNwPSehAAAGySN96I")' }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="p-3 bg-primary/90 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-white text-2xl">local_taxi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 pb-8">
          <h1 className="text-white text-[32px] font-bold leading-tight pb-3">Let's get you moving.</h1>
          <p className="text-text-secondary text-base">Enter your phone number to sign in or create an account with AsaanCar.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium ml-1">Mobile Number</label>
          <div className="flex gap-3">
            <div className="flex items-center justify-center gap-2 w-[100px] h-14 rounded-xl border border-border-dark bg-surface-dark px-3">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa_S5nPatxC_3EnvwxSySogJxfn7sP2YLT6W5DZPqDs6JKNyWl_y6h0fJI77AgrLK7HM4aFOWIMJuCMcr8QfNfjU17eYpuY5IQk1AplS7fsCFWxBUgaAEV5gHUl5siqYX_aKrKVlOp9_FW2GIxTDHlJJ0t8rN3O115gf4b_icehQjje0ob5i6Fk8sOU9eAZxMK-So4y_uwVOfytboqJZFTO4CtemxN7N2dkwIK0th7XbFnv5WlLAsqbvgIX-7U5OUSef2KpOTSk3t_" className="w-6" alt="PK" />
              <span className="font-medium">+92</span>
            </div>
            <input 
              className="flex-1 rounded-xl border border-border-dark bg-surface-dark h-14 px-4 text-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="300 1234567"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <p className="text-xs text-text-secondary text-center mt-6 px-4">
          By continuing, you may receive an SMS for verification. Message and data rates may apply.
        </p>
      </main>

      <footer className="p-6 pb-12 flex flex-col gap-4">
        <button 
          onClick={() => navigate('/otp')}
          className="w-full h-14 bg-primary hover:bg-primary-dark rounded-xl flex items-center justify-center font-bold shadow-md transition-transform active:scale-95"
        >
          Send Code
          <span className="material-symbols-outlined ml-2">arrow_forward</span>
        </button>
        <div className="flex justify-center items-center gap-1 text-xs text-text-secondary">
          <span>Read our</span>
          <button className="underline decoration-1">Terms of Service</button>
          <span>&</span>
          <button className="underline decoration-1">Privacy Policy</button>
        </div>
      </footer>
    </div>
  );
};

export default Login;
