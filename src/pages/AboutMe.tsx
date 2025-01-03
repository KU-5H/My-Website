import React from 'react';
import NavBar from '../components/NavBar';
import profilePicture from '../assets/ProfilePicture.jpeg';
import ProfilePicture from '../components/ProfileAndLinks';
import TechStack from '../components/TechStack';

const AboutMe = () => {
  return (
    <div className="font-sans text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-8 md:grid-cols-[1fr,3.5fr,1fr] md:grid-rows-[auto,1fr,auto]">
        <ProfilePicture />
        <div className="order-3 md:order-2 md:col-span-1 p-8 rounded-lg bg-glass">
          <h1 className="text-xl md:text-6xl leading-tight font-bold">More About Me! 🤔</h1>
          <div className="grid grid-cols-1 md:grid-cols-[2.2fr,1fr] items-center gap-4">
            <div>
              <p className="max-w-lg pt-4 text-lg mx-auto">
                Currently, I'm a Second/Third year Computer Science student at Toronto Metropolitian University, though nowadays that's nothing special 😂. 
                Though, the computer science student part is kind of a lie, since I'm currently working as a Software Developer Intern at Kijiji! 
                It's honestly a nice way to learn way more about coding in the real world. 
              </p>
              <p className="max-w-lg text-lg pt-3 mx-auto">
                Some other notable things ........ I'm super passionate about all things coding (and gaming 🎮), 
                and I'm always looking for new opportunities to learn and grow. I'm also a huge fan of the Toronto Raptors, and I'm always 
                down to talk about basketball 🏀. Take a look at some of my projects to see my work so far!
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={profilePicture}
                alt="Profile"
                className="rounded-xl bg-glass-minus-trasnition logo"
              />
            </div>
          </div>
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