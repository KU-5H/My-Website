import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { quotes } from '../helpers/quotes';
import { personalQuotes } from '../helpers/kPatelFacts';
import test from 'node:test';

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomPersonalQuote = () => {
  return personalQuotes[Math.floor(Math.random() * personalQuotes.length)];
};

const TechStack = () => {
  const location = useLocation();
  const [randomQuote, setRandomQuote] = useState(getRandomQuote());
  const [randomPersonalQuote, setRandomPersonalQuote] = useState(getRandomPersonalQuote())

  const [text] = useTypewriter({
    words: [location.pathname === '/' ? randomQuote : randomPersonalQuote],
    loop: 0,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
    onDelete: () => {
      if (location.pathname === '/') {
        setRandomQuote(getRandomQuote());
      } else if (location.pathname === '/about') {
        setRandomPersonalQuote(getRandomPersonalQuote());
      }
    }
  });

  return (
    <div id="Tech Stack" className="order-5 md:order-5 col-span-1 md:col-span-3 p-4 w-full rounded-lg bg-glass mt-4">

      {location.pathname === '/about' || location.pathname === '/' ? (
        <div className="text-md md:text-2xl font-bold text-center whitespace-pre-wrap break-words max-w-4xl mx-auto">
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