import React from 'react';
import NavBar from '../components/NavBar';
import ProfilePicture from '../components/ProfileAndLinks';
import TechStack from '../components/TechStack';

const Projects = () => {
  return (
    <div className="font-sans text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-8 md:grid-cols-[auto,1fr,auto]">
        <ProfilePicture />
        <div className="order-3 md:order-2 md:col-span-1 p-8 rounded-lg bg-glass">
          <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-4">Projects</h1>
          <p className="text-lg">This is the Projects section.</p>
        </div>
        <div className="order-2 md:order-3 flex flex-col items-center">
          <NavBar />
        </div>
        <TechStack />
      </div>
    </div>
  );
};

export default Projects;