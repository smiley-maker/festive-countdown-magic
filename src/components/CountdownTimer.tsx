import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isCelebrating, setIsCelebrating] = useState(false);
  const [confettiCount, setConfettiCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextYear = new Date(now.getFullYear() + 1, 0, 1);
      const difference = nextYear.getTime() - now.getTime();

      if (difference <= 0) {
        setIsCelebrating(true);
        setShowMessage(true);
        setConfettiCount(100); // Increased confetti count for a better effect
      } else {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
        setTimeLeft(newTimeLeft);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []); // No dependencies, runs once on mount

  useEffect(() => {
    const now = new Date();
    const resetDate = new Date(now.getFullYear(), 0, 2); // January 2
    const celebrationStartDate = new Date(now.getFullYear(), 0, 1, 0, 0, 0); // Midnight January 1
    const celebrationEndDate = new Date(now.getFullYear(), 0, 2, 0, 0, 0); // Midnight January 2

    // Check if we are in the celebration period
    if (now >= celebrationStartDate && now < celebrationEndDate) {
      setIsCelebrating(true);
    } else {
      setIsCelebrating(false); // Reset celebration state
    }

    // Check if we are past the reset date
    if (now >= resetDate) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Reset the counter
    }
  }, []); // This effect runs once on mount

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-4">
      <div className="text-6xl md:text-8xl font-bold text-white font-digital">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-secondary text-sm md:text-base uppercase tracking-wider mt-2">
        {label}
      </div>
    </div>
  );

  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-transparent">
      {isCelebrating && (
        <>
          <Confetti colors={[getRandomColor(), getRandomColor(), getRandomColor()]} />
          <h2 className={`text-3xl font-bold text-white mt-4 ${showMessage ? 'animate-pulse' : ''} font-orbitron`}>
            {currentYear}
          </h2>
        </>
      )}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 font-orbitron">
        {isCelebrating || (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) ? "Happy New Year!" : "Countdown to New Year!"}
      </h1>
      <div className="flex justify-center items-center p-4 rounded-lg">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg flex">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
      {Array.from({ length: confettiCount }).map((_, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: Math.random() * 10 + 'px',
            height: Math.random() * 10 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
          }}
        />
      ))}
    </div>
  );
};

export default CountdownTimer;