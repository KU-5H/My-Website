import React from 'react';
import { useState, useRef } from 'react';
import githubLogo from '../assets/github-mark-white.svg';
import linkedinLogo from '../assets/linkedin.svg';
import memoji from '../assets/memoji.png';
import './AboutMe.css';
import NavBar from '../components/NavBar';

const AboutMe = () => {
    const [isGithubSpinning, setIsGithubSpinning] = useState(false);
    const [isLinkedinSpinning, setIsLinkedinSpinning] = useState(false);

    const githubTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const linkedinTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleGithubMouseEnter = () => {
    githubTimeoutRef.current = setTimeout(() => {
        console.log('Github spinning');
        setIsGithubSpinning(true);
    }, 3000);
    };

    const handleGithubMouseLeave = () => {
    if (githubTimeoutRef.current) {
        console.log('Github not spinning');
        clearTimeout(githubTimeoutRef.current);
    }
    setIsGithubSpinning(false);
    };

    const handleLinkedinMouseEnter = () => {
    linkedinTimeoutRef.current = setTimeout(() => {
        setIsLinkedinSpinning(true);
    }, 3000);
    };

    const handleLinkedinMouseLeave = () => {
    if (linkedinTimeoutRef.current) {
        clearTimeout(linkedinTimeoutRef.current);
    }
    setIsLinkedinSpinning(false);
    };


  return (
    <div className="font-sans text-white bg-gray-900 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-8 md:grid-cols-[auto,1fr,auto]">
        <div id="about" className="order-1 md:order-1 flex flex-col items-center space-y-4 max-w-xs">
          <div className="w-32 h-40 rounded-lg bg-glass flex items-center justify-center">
            <img src={memoji} alt="Profile Picture" className="logo" />
          </div>
          <div className="order-4 md:order-4 h-10 md:h-full p-8 rounded-lg bg-glass flex md:flex-col flex-row items-center">
            <a href="https://github.com/KU-5H" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 mb-2">
              <img src={githubLogo} alt="Github Logo" className={`h-8 md:h-16 mb-4 logo ${isGithubSpinning ? 'spin' : ''}`} onMouseEnter={handleGithubMouseEnter} onMouseLeave={handleGithubMouseLeave}/>
            </a>
            <a href="https://www.linkedin.com/in/ku5h-p4tel/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 mb-2">
              <img src={linkedinLogo} alt="Linkedin Logo" className={`h-8 md:h-16 mb-4 logo ${isLinkedinSpinning ? 'spin' : ''}`} onMouseEnter={handleLinkedinMouseEnter} onMouseLeave={handleLinkedinMouseLeave} />
            </a>
          </div>
        </div>
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
        <div id="navbar" className="order-2 md:order-3 flex flex-col items-center p-8 rounded-lg bg-glass">
          <NavBar />
        </div>
        <div id="Tech Stack" className="order-5 md:order-5 col-span-1 md:col-span-2 p-8 w-full rounded-lg bg-glass mt-4">
          <p className="text-lg">Tech Stack Section</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;