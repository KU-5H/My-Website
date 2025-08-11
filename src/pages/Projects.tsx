import { useState } from 'react';
import NavBar from '../components/NavBar';
import ProfilePicture from '../components/ProfileAndLinks';
import TechStack from '../components/TechStack';
import SelectedProjects from '../components/SelectedProjects';
import {myWebsiteImages, ecoDexImages, clubhubImages, textbasedAudioImages} from '../helpers/projectStackImageExporter';
import { myWebSiteText, ecoDexText, clubHubText, textBasedAudioText } from '../helpers/projectText';
import { clubHubLogo, ecoDexLogo, myWebsiteLogo, textBasedAudioLogo } from '../helpers/projectLogos';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState('My-Website');

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case 'My-Website':
        return <div> <SelectedProjects images={myWebsiteImages} selectedText={myWebSiteText} selectedLogos={myWebsiteLogo}/> </div>
      case 'EcoDex':
        return <div> <SelectedProjects images={ecoDexImages} selectedText={ecoDexText} selectedLogos={ecoDexLogo}/> </div>
      case 'ClubHub':
        return <div> <SelectedProjects images={clubhubImages} selectedText={clubHubText} selectedLogos={clubHubLogo}/> </div>
      case 'Textbased-Audio':
        return <div> <SelectedProjects images={textbasedAudioImages} selectedText={textBasedAudioText} selectedLogos={textBasedAudioLogo}/> </div>
      default:
        return null;
    }
  };

  return (
    <div className="font-sans text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-8 md:grid-cols-[1fr,3.5fr,1fr] md:grid-rows-[auto,1fr,auto]">
        <ProfilePicture />
        <div className="order-3 md:order-2 md:col-span-1 p-8 rounded-lg bg-glass">
          <h1 className="text-4xl md:text-5xl leading-tight font-bold mb-4">Projects</h1>
          <div className="flex flex-wrap justify-center items-center space-x-2 md:space-x-4 mb-4 text-sm md:text-base">
            <span
              className={`nav-link cursor-pointer ${selectedProject === 'My-Website' ? 'active' : ''}`}
              onClick={() => setSelectedProject('My-Website')}
            >
              <span className='block md:hidden'>My-Web</span>
              <span className='hidden md:block'>My-Website</span>
            </span>
            <span className="text-white">|</span>
            <span
              className={`nav-link cursor-pointer ${selectedProject === 'EcoDex' ? 'active' : ''}`}
              onClick={() => setSelectedProject('EcoDex')}
            >
              <span className='block md:hidden'>Dex</span>
              <span className='hidden md:block'>EcoDex</span>
            </span>
            <span className="text-white">|</span>
            <span
              className={`nav-link cursor-pointer ${selectedProject === 'ClubHub' ? 'active' : ''}`}
              onClick={() => setSelectedProject('ClubHub')}
            >
              <span className='block md:hidden'>Hub</span>
              <span className='hidden md:block'>ClubHub</span>
            </span>
            <span className="text-white">|</span>
            <span
              className={`nav-link cursor-pointer ${selectedProject === 'Textbased-Audio' ? 'active' : ''}`}
              onClick={() => setSelectedProject('Textbased-Audio')}
            >
              <span className='block md:hidden'>Audio</span>
              <span className='hidden md:block'>TextBased-Audio</span>
            </span>
          </div>
            {renderProjectDetails()}
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