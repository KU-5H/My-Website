import NavBar from '../components/NavBar';
import ProfilePicture from '../components/ProfileAndLinks';
import resumePDF from '../assets/Kush Patel - Resume Rev 8.pdf';

const Resume = () => {
  return (
    <div className="font-sans text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-4 p-8 md:grid-cols-[1fr,3.5fr,1fr] md:grid-rows-[auto,1fr,auto]">
        <ProfilePicture />
        <div className="order-3 md:order-2 md:col-span-1 p-8 rounded-lg bg-glass">
          <h1 className="text-4xl md:text-5xl leading-tight font-bold mb-3">Resume</h1>
          <div className="w-full bg-glass rounded-lg p-2 mb-4">
            <object data={resumePDF} type="application/pdf" width="100%" height="400"className="rounded-lg">Resume PDF</object>
          </div>          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-0">
            <a 
              href={resumePDF} 
              download="Kush_Patel_Resume.pdf" 
              className="glass-button glass-button-success px-6 py-3 font-bold text-white no-underline inline-flex items-center justify-center"
            >
              <span className="mr-2">⬇️</span>
              Download Resume
            </a>
            <a 
              href={resumePDF} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="glass-button glass-button-primary px-6 py-3 font-bold text-white no-underline inline-flex items-center justify-center"
            >
              <span className="mr-2">🔗</span>
              Open in New Tab
            </a>
          </div>
        </div>
        <div className="order-2 md:order-3 flex flex-col items-center">
          <NavBar />
        </div>
      </div>
    </div>
  );
};


export default Resume;