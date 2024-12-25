import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { quotes } from '../helpers/quotes';
import test from 'node:test';

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const TechStack = () => {
  const location = useLocation();
  const [randomQuote, setRandomQuote] = useState(getRandomQuote());

  useEffect(() => {
    setRandomQuote(getRandomQuote());
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomQuote(getRandomQuote());
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const [text] = useTypewriter({
    words: ['"Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the second law of thermodynamics; i.e., it always increases."'],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <div id="Tech Stack" className="order-5 md:order-5 col-span-1 md:col-span-3 p-4 w-full rounded-lg bg-glass mt-4">
      {location.pathname === '/about' ? (
        <div className="text-md md:text-xl font-bold text-center whitespace-pre-wrap break-words max-w-3xl mx-auto">
          <span>{text}</span>
          <Cursor />
        </div>
      ) : (
        <p className="text-md md:text-2xl font-bold text-center">
          Tech Stack
        </p>
      )}
    </div>
  );
}

export default TechStack;