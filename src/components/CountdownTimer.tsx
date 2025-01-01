import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>(timeLeft);
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
        setConfettiCount(10); // Limit confetti count
      } else {
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

  useEffect(() => {
    const now = new Date();
    const resetDate = new Date(now.getFullYear(), 0, 2); // January 2

    if (now >= resetDate) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Reset the counter
    }
  }, []);

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
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-transparent">
      {isCelebrating && (
        <>
          <Confetti colors={[getRandomColor(), getRandomColor(), getRandomColor()]} />
          <h2 className={`text-3xl font-bold text-white mt-4 ${showMessage ? 'animate-pulse' : ''}`}>
            Happy New Year!
          </h2>
        </>
      )}
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
        {isCelebrating ? "Happy New Year!" : "Countdown to New Year!"}
      </h1>
      <div className="flex justify-center items-center p-4 rounded-lg">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg flex">
          <TimeUnit value={timeLeft.days} prevValue={prevTimeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} prevValue={prevTimeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} prevValue={prevTimeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} prevValue={prevTimeLeft.seconds} label="Seconds" />
        </div>
      </div>
      {/* Commenting out the pile-up effect */}
      {/* {Array.from({ length: confettiCount }).map((_, index) => (
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
      ))} */}
    </div>
  );
};

export default CountdownTimer;