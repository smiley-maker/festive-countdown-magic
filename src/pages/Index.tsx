import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import Particles from '../components/Particles';
import ResolutionWall from '../components/ResolutionWall';
import Footer from '../components/Footer';
import { useTheme } from '../context/ThemeContext';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-4 relative">
      <Particles />
      <div className="relative z-10 w-full">
        <CountdownTimer />
      </div>
      <div className="relative z-10 w-full">
        <ResolutionWall />
      </div>
      <Footer />
    </div>
  );
};

export default Index;