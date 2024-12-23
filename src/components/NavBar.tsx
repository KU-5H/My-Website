import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'cursor-pointer text-white font-bold hover:text-blue-400 transition-colors duration-300 font-sans text-2xl border-2 border-white-500 rounded-lg p-2'
      : 'cursor-pointer text-white font-bold hover:text-blue-400 transition-colors duration-300 font-sans text-2xl';
  };

  return (
    <nav className="h-full flex flex-col justify-center items-center space-y-4 rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <Link to="/about" className={getLinkClass('/about')}>
          About Me
        </Link>
        <Link to="/projects" className={getLinkClass('/projects')}>
          Projects
        </Link>
        <Link to="/contact" className={getLinkClass('/contact')}>
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;