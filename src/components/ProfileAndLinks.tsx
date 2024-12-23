import React from 'react';
import memoji from '../assets/memoji.png';
import githubLogo from '../assets/github-mark-white.svg';
import linkedinLogo from '../assets/linkedin.svg';
import { useState, useRef } from 'react';

const ProfilePicture = () => {
  const [isGithubSpinning, setIsGithubSpinning] = useState(false);
  const [isLinkedinSpinning, setIsLinkedinSpinning] = useState(false);

  const githubTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const linkedinTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleGithubMouseEnter = () => {
    githubTimeoutRef.current = setTimeout(() => {
      setIsGithubSpinning(true);
    }, 2000);
  };

  const handleGithubMouseLeave = () => {
    if (githubTimeoutRef.current) {
      clearTimeout(githubTimeoutRef.current);
    }
    setIsGithubSpinning(false);
  };

  const handleLinkedinMouseEnter = () => {
    linkedinTimeoutRef.current = setTimeout(() => {
      setIsLinkedinSpinning(true);
    }, 2000);
  };

  const handleLinkedinMouseLeave = () => {
    if (linkedinTimeoutRef.current) {
      clearTimeout(linkedinTimeoutRef.current);
    }
    setIsLinkedinSpinning(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4 max-w-xs">
      <div className="w-32 h-40 rounded-lg bg-glass flex items-center justify-center">
        <img src={memoji} alt="Profile Picture" className="logo" />
      </div>
      <div className="h-10 md:h-full p-8 rounded-lg bg-glass flex md:flex-col flex-row items-center">
        <a href="https://github.com/KU-5H" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 mb-2">
          <img src={githubLogo} alt="Github Logo" className={`h-8 md:h-16 mb-4 logo ${isGithubSpinning ? 'spin' : ''}`} onMouseEnter={handleGithubMouseEnter} onMouseLeave={handleGithubMouseLeave}/>
        </a>
        <a href="https://www.linkedin.com/in/ku5h-p4tel/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 mb-2">
          <img src={linkedinLogo} alt="Linkedin Logo" className={`h-8 md:h-16 mb-4 logo ${isLinkedinSpinning ? 'spin' : ''}`} onMouseEnter={handleLinkedinMouseEnter} onMouseLeave={handleLinkedinMouseLeave} />
        </a>
      </div>
    </div>
  );
};

export default ProfilePicture;