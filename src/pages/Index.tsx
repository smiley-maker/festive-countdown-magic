import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Particles from '../components/Particles';
import ResolutionWall from '../components/ResolutionWall';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] flex flex-col items-center justify-start p-4">
      <Particles />
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-12 text-center relative z-10">
        New Year Countdown
      </h1>
      <div className="relative z-10 w-full">
        <CountdownTimer />
        <ResolutionWall />
      </div>
    </div>
  );
};

export default Index;