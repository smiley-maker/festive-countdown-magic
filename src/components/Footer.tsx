import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4 bg-[#1A1F2C] text-white mt-8">
      <a href="https://twitter.com/intent/tweet?text=Check out this New Year Countdown!" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">
        Share on Twitter
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">
        Share on Facebook
      </a>
      <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://yourwebsite.com&title=New Year Countdown" target="_blank" rel="noopener noreferrer" className="mx-2 hover:underline">
        Share on LinkedIn
      </a>
    </footer>
  );
};

export default Footer; 