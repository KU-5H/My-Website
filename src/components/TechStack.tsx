import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Scroller from '../helpers/Scroller';
import RandomQuotes from '../helpers/RandomQuotes';
import { techLanguages, techTools } from '../helpers/techImageExporter';

const TechStack = () => {
  const location = useLocation();
  const [hoveredStack, setHoveredStack] = useState<string | null>(null);

  const handleMouseEnter = (stackName: string) => {
    setHoveredStack(stackName);
  };

  const handleMouseLeave = () => {
    setHoveredStack(null);
  };

  return (
    <div className='order-5 md:order-5 col-span-1 md:col-span-3'>
      {location.pathname === '/about' || location.pathname === '/' ? (
        <RandomQuotes />
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