import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>(timeLeft);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextYear = new Date(now.getFullYear() + 1, 0, 1);
      const difference = nextYear.getTime() - now.getTime();

      if (difference > 0) {
        const newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
        setPrevTimeLeft(timeLeft); // Store previous time left
        setTimeLeft(newTimeLeft);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const TimeUnit = ({ value, prevValue, label }: { value: number; prevValue: number; label: string }) => (
    <div className="flex flex-col items-center mx-4">
      <AnimatePresence>
        {value !== prevValue && ( // Only animate if the value has changed
          <motion.div
            key={value}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="text-6xl md:text-8xl font-bold text-white"
          >
            {value.toString().padStart(2, '0')}
          </motion.div>
        )}
        {value === prevValue && ( // Show the current value without animation
          <div className="text-6xl md:text-8xl font-bold text-white">
            {value.toString().padStart(2, '0')}
          </div>
        )}
      </AnimatePresence>
      <div className="text-secondary text-sm md:text-base uppercase tracking-wider mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gradient-to-br from-purple-500 to-blue-500">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        Countdown to New Year!
      </h1>
      <div className="flex justify-center items-center p-4 rounded-lg backdrop-blur-sm shadow-lg">
        <TimeUnit value={timeLeft.days} prevValue={prevTimeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} prevValue={prevTimeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} prevValue={prevTimeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} prevValue={prevTimeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;