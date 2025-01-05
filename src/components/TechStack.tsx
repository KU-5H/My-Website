import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Scroller from './Scroller';
import RandomQuotes from './RandomQuotes';
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
            onMouseEnter={() => handleMouseEnter('Languages and Frameworks I\'ve worked with')}
            onMouseLeave={handleMouseLeave}
          >
            <Scroller images={techLanguages} />
          </div>
          <div
            id="Tech Stack"
            className="p-4 w-full rounded-lg bg-glass mt-4 flex overflow-hidden"
            onMouseEnter={() => handleMouseEnter('Tools and Technologies I\'ve worked with')}
            onMouseLeave={handleMouseLeave}
          >
            <Scroller images={techTools} />
          </div>
          <div className={`text-center mt-2 text-lg font-bold transition-opacity duration-500 ${hoveredStack ? 'opacity-100' : 'opacity-0'}`} style={{ height: '1rem' }}>
            {hoveredStack}
          </div>
        </div>
      ) : (
        <div id="Tech Stack" className="p-4 w-full rounded-lg bg-glass mt-4 flextext-md md:text-2xl font-bold text-center whitespace-pre-wrap break-words mx-auto">
          Have any Questions? Inquiries? Feel free to reach out and we can have a chat! 📧
        </div>
      )}
    </div>
  );
};

export default TechStack;