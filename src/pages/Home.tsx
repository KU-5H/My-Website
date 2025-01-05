import React from 'react';
import NavBar from '../components/NavBar';
import ProfilePicture from '../components/ProfileAndLinks';
import TechStack from '../components/TechStack';

const Home = () => {
    return (
        <div className="font-sans text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-8 md:grid-cols-[1fr,3.5fr,1fr] md:grid-rows-[auto,1fr,auto]">
          <ProfilePicture />
          <div className="order-3 md:order-2 md:col-span-1 p-8 rounded-lg bg-glass">
            <h1 className="text-4xl md:text-5xl leading-tight font-bold mb-4">Hi! I'm Kush Patel! 👋🏽</h1>
            <p className="max-w-lg pt-4 text-lg mx-auto">
              Hey! My names Kush Patel, and I'm a wannabe Software Developer from Toronto, Canada. 
              I occasionally make some cool projects, whenever I'm not busy with school, work, or gaming 🎮.  
              Anyways ... this is a place to put all of my projects and stuff, so feel free to look around! 😄
            </p>
            <p className="max-w-lg text-lg pt-3 mx-auto">
              Feel free to learn more about me over at the "About Me" page, or check out some of my projects on the "Projects" page! 
                If you really really want to reach out to me, you can do so on the "Contact Me" page. 😉
            </p>
          </div>
          <div className="order-2 md:order-3 flex flex-col items-center">
            <NavBar />
          </div>
          <TechStack />
        </div>
      </div>
    )
};

export default Home;