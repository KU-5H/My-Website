import React, { useState, useRef } from 'react';
import memoji from '../assets/memoji.png';
import githubLogo from '../assets/github-mark-white.svg';
import linkedinLogo from '../assets/linkedin.svg';
import emailLogo from '../assets/email.svg';
import instagramLogo from '../assets/instagram.svg'; // Add your Instagram icon here
import '../App.css';

const ProfileAndLinks = () => {
  const [isGithubSpinning, setIsGithubSpinning] = useState(false);
  const [isLinkedinSpinning, setIsLinkedinSpinning] = useState(false);
  const [isEmailSpinning, setIsEmailSpinning] = useState(false);
  const [isInstagramSpinning, setIsInstagramSpinning] = useState(false);

  const githubTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const linkedinTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const emailTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const instagramTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleEmailMouseEnter = () => {
    emailTimeoutRef.current = setTimeout(() => {
      setIsEmailSpinning(true);
    }, 2000);
  };

  const handleEmailMouseLeave = () => {
    if (emailTimeoutRef.current) {
      clearTimeout(emailTimeoutRef.current);
    }
    setIsEmailSpinning(false);
  };

  const handleInstagramMouseEnter = () => {
    instagramTimeoutRef.current = setTimeout(() => {
      setIsInstagramSpinning(true);
    }, 2000);
  };

  const handleInstagramMouseLeave = () => {
    if (instagramTimeoutRef.current) {
      clearTimeout(instagramTimeoutRef.current);
    }
    setIsInstagramSpinning(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4 max-w-xs">
      <div className="w-32 h-32 rounded-lg bg-glass flex items-center justify-center">
        <img src={memoji} alt="Profile Picture" className="logo" />
      </div>
      <div className="h-10 md:h-full p-4 bg-glass rounded-lg flex md:flex-col flex-row items-center gap-6 ml-auto">
        <a href="https://github.com/KU-5H" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
          <img src={githubLogo} alt="Github Logo" className={`h-8 md:h-10 logo ${isGithubSpinning ? 'spin' : ''}`} onMouseEnter={handleGithubMouseEnter} onMouseLeave={handleGithubMouseLeave}/>
        </a>
        <a href="https://www.linkedin.com/in/ku5h-p4tel/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
          <img src={linkedinLogo} alt="Linkedin Logo" className={`h-8 md:h-12 logo ${isLinkedinSpinning ? 'spin' : ''}`} onMouseEnter={handleLinkedinMouseEnter} onMouseLeave={handleLinkedinMouseLeave} />
        </a>
        <a href="https://www.instagram.com/ku5hp4tel/profilecard/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
          <img src={instagramLogo} alt="Instagram Logo" className={`h-8 md:h-10 logo ${isInstagramSpinning ? 'spin' : ''}`} onMouseEnter={handleInstagramMouseEnter} onMouseLeave={handleInstagramMouseLeave} />
        </a>
        <a href="mailto:kushpatel76@yahoo.com" className="text-blue-500 hover:text-blue-400">
          <img src={emailLogo} alt="Email Logo" className={`h-8 md:h-12 logo ${isEmailSpinning ? 'spin' : ''}`} onMouseEnter={handleEmailMouseEnter} onMouseLeave={handleEmailMouseLeave} />
        </a>
      </div>
    </div>
  );
};

export default ProfileAndLinks;