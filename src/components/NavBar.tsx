import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'nav-link active'
      : 'nav-link';
  };

  return (
    <nav className="h-full flex flex-col justify-center items-center space-y-4 rounded-lg p-4">
      <div className="flex flex-col items-center space-y-4">
        <Link to="/about" className={`${getLinkClass('/about')} text-white font-bold hover:text-blue-400 transition-colors duration-300 font-sans text-2xl`}>
          About Me
        </Link>
        <Link to="/projects" className={`${getLinkClass('/projects')} text-white font-bold hover:text-blue-400 transition-colors duration-300 font-sans text-2xl`}>
          Projects
        </Link>
        <Link to="/contact" className={`${getLinkClass('/contact')} text-white font-bold hover:text-blue-400 transition-colors duration-300 font-sans text-2xl`}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;