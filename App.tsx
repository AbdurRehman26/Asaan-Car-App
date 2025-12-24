
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './screens/auth/Welcome';
import Login from './screens/auth/Login';
import OTP from './screens/auth/OTP';
import Browse from './screens/commute/Browse';
import OfferingDetails from './screens/commute/OfferingDetails';
import Step1Route from './screens/create/Step1Route';
import Step2Schedule from './screens/create/Step2Schedule';
import Step3Vehicle from './screens/create/Step3Vehicle';
import Step4Pricing from './screens/create/Step4Pricing';
import ProfileSettings from './screens/profile/ProfileSettings';
import MyOfferings from './screens/profile/MyOfferings';
import ChatList from './screens/messages/ChatList';
import ChatScreen from './screens/messages/ChatScreen';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="max-w-md mx-auto min-h-screen bg-background-dark shadow-2xl relative flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/offering/:id" element={<OfferingDetails />} />
          <Route path="/create/step1" element={<Step1Route />} />
          <Route path="/create/step2" element={<Step2Schedule />} />
          <Route path="/create/step3" element={<Step3Vehicle />} />
          <Route path="/create/step4" element={<Step4Pricing />} />
          <Route path="/profile" element={<ProfileSettings />} />
          <Route path="/my-offerings" element={<MyOfferings />} />
          <Route path="/chats" element={<ChatList />} />
          <Route path="/chat/:id" element={<ChatScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
