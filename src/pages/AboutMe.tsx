import React from 'react';
import './AboutMe.css';
import NavBar from '../components/NavBar';
import ProfilePicture from '../components/ProfileAndLinks';
import TechStack from '../components/TechStack';

const AboutMe = () => {
  return (
    <div className="font-sans text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-8 md:grid-cols-[auto,1fr,auto]">
        <ProfilePicture />
        <div className="order-3 md:order-2 md:col-span-1 p-8 rounded-lg bg-glass">
          <h1 className="text-4xl md:text-6xl leading-tight font-bold mb-4">Hi! I'm Kush Patel! 👋🏽</h1>
          <p className="max-w-lg pt-4 text-lg mx-auto">
            I'm a Second/Third year Computer Science student at Toronto Metropolitian University, though nowadays that's nothing special 😂.
            Anyways, I'm super passionate about all things coding (and gaming 🎮), and I'm always looking for new opportunities to learn and grow.
            This is just a nice place to put all of my projects and stuff, so feel free to look around!
          </p>
          <p className="max-w-lg text-lg pt-3 mx-auto">
            Some other notable things ........ nothing really lol. Currently I'm working as a Software Developer at Kijiji, and 
            I try and make some cool projects from time to time. 
          </p>
        </div>
        <div className="order-2 md:order-3 flex flex-col items-center">
          <NavBar />
        </div>
        <TechStack />
      </div>
    </div>
  );
};

export default AboutMe;