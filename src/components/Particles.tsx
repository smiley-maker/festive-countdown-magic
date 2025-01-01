import React from 'react';

const Particles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className={`absolute bg-white rounded-full opacity-${Math.random() > 0.5 ? '20' : '40'} animate-float`}
          style={{
            width: Math.random() * 4 + 'px',
            height: Math.random() * 4 + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
          }}
        />
      ))}
    </div>
  );
};

export default Particles;