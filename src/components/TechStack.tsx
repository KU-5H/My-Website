import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { quotes } from '../helpers/quotes';
import { personalQuotes } from '../helpers/kPatelFacts';
import Scroller from '../helpers/Scroller';
import { techLanguages, techTools } from '../helpers/techImageExporter';

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomPersonalQuote = () => {
  return personalQuotes[Math.floor(Math.random() * personalQuotes.length)];
};

const TechStack = () => {
  const location = useLocation();
  const [randomQuote, setRandomQuote] = useState(getRandomQuote());
  const [randomPersonalQuote, setRandomPersonalQuote] = useState(getRandomPersonalQuote());
  const [hoveredStack, setHoveredStack] = useState<string | null>(null);

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

  const handleMouseEnter = (stackName: string) => {
    setHoveredStack(stackName);
  };

  const handleMouseLeave = () => {
    setHoveredStack(null);
  };

  return (
    <div className='order-5 md:order-5 col-span-1 md:col-span-3'>
      {location.pathname === '/about' || location.pathname === '/' ? (
        <div id="Tech Stack" className="p-4 w-full rounded-lg bg-glass mt-4 flex overflow-hidden">
          <div className="text-md md:text-2xl font-bold text-center whitespace-pre-wrap break-words max-w-4xl mx-auto">
            <span>{text}</span>
            <Cursor />
          </div>
        </div>
      ) : location.pathname === '/projects' ? (
        <div>
          <div
            id="Tech Stack"
            className="p-4 w-full rounded-lg bg-glass mt-4 flex overflow-hidden"
            onMouseEnter={() => handleMouseEnter('Languages and Frameworks')}
            onMouseLeave={handleMouseLeave}
          >
            <Scroller images={techLanguages} />
          </div>
          <div
            id="Tech Stack"
            className="p-4 w-full rounded-lg bg-glass mt-4 flex overflow-hidden"
            onMouseEnter={() => handleMouseEnter('Tools and Technologies')}
            onMouseLeave={handleMouseLeave}
          >
            <Scroller images={techTools} />
          </div>
          <div className={`text-center mt-2 text-lg font-bold transition-opacity duration-500 ${hoveredStack ? 'opacity-100' : 'opacity-0'}`} style={{ height: '1rem' }}>
            {hoveredStack}
          </div>
        </div>
      ) : (
        <div id="Tech Stack" className="order-5 md:order-5 col-span-1 md:col-span-3 p-4 w-full rounded-lg bg-glass mt-4 flex overflow-hidden">
          Tech Stack
        </div>
      )}
    </div>
  );
};

export default TechStack;