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

  const [text] = useTypewriter({
    words: [randomQuote],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
    onDelete: () => {
      setRandomQuote(getRandomQuote());
    }
  });

  return (
    <div id="Tech Stack" className="order-5 md:order-5 col-span-1 md:col-span-3 p-4 w-full rounded-lg bg-glass mt-4">
      {location.pathname === '/about' ? (
        <div className="text-md md:text-xl font-bold text-center whitespace-pre-wrap break-words max-w-4xl mx-auto">
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