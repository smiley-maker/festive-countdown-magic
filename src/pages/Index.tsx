import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Particles from '../components/Particles';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] flex flex-col items-center justify-center p-4">
      <Particles />
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center">
        New Year Countdown
      </h1>
      <CountdownTimer />
      <p className="text-secondary mt-12 text-center">
        Counting down to {new Date().getFullYear() + 1}
      </p>
    </div>
  );
};

export default Index;