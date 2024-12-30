import React, { useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { quotes } from '../helpers/quotes';
import { personalQuotes } from '../helpers/kPatelFacts';
import { images } from '../helpers/techImageExporter';

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
    <div id="Tech Stack" className="order-5 md:order-5 col-span-1 md:col-span-3 p-4 w-full rounded-lg bg-glass mt-4 flex overflow-hidden">
      {location.pathname === '/about' || location.pathname === '/' ? (
        <div className="text-md md:text-2xl font-bold text-center whitespace-pre-wrap break-words max-w-4xl mx-auto">
          <span>{text}</span>
          <Cursor />
        </div>
      ) : location.pathname === '/projects' ? (
        <div>
          <div className="relative w-full flex">
            <div className="flex animate-swipe">
              {images.map(({ src, name, href }) => (
                <a href={href}>
                  <img src={src} alt={name} className="image2 logo" />
                </a>
              ))}
            </div>
            <div className="flex animate-swipe">
              {images.map(({ src, name, href }) => (
                <a href={href}>
                  <img src={src} alt={name} className="image2 logo" />
                </a>
              ))}
            </div>
            <div className="flex animate-swipe">
              {images.map(({ src, name, href }) => (
                <a href={href}>
                  <img src={src} alt={name} className="image2 logo" />
                </a>
              ))}
            </div>
            <div className="flex animate-swipe">
              {images.map(({ src, name, href }) => (
                <a href={href}>
                  <img src={src} alt={name} className="image2 logo" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : <div>Tech Stack</div>}
    </div>
  );
};

export default TechStack;

/* 
        <a href="mailto:kushpatel76@yahoo.com" className="text-blue-500 hover:text-blue-400">
          <img src={emailLogo} alt="Email Logo" className={`h-8 md:h-10 logo ${isEmailSpinning ? 'spin' : ''}`} onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave} />
        </a>
*/