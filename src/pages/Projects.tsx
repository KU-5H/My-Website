import React from 'react';
import NavBar from '../components/NavBar';

const Projects = () => {
  return (
    <div className="font-sans text-white bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen-xl mx-auto p-8 rounded-lg bg-glass">
        <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-4">Projects</h1>
        <p className="text-lg">This is the Projects section.</p>
      </div>
      <div id="navbar" className="order-2 md:order-3 flex flex-col items-center p-8 rounded-lg bg-glass">
          <NavBar />
      </div>
    </div>
    
  );
};

export default Projects;