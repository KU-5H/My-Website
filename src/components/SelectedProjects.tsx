import ProjectStack from './ProjectStack';

interface SelectedProjectsProps {
  images: {
    src: string;
    name: string;
    href: string;
  }[];
  selectedText: string;
  selectedLogos: {
    src: string;
    name: string;
    href: string;
  };
}

const SelectedProjects = ({ images, selectedText, selectedLogos }: SelectedProjectsProps) => {
  return (
    <div className="space-y-4">
      <ProjectStack images={images} />
      <div className="grid grid-cols-1 md:grid-cols-[1fr,1fr] items-center gap-2 relative rounded-lg">
        <div className="text-white text-md">
          {selectedText}
        </div>
        <div className="flex justify-center">
          <img
            src={selectedLogos.src}
            alt={selectedLogos.name}
            className="rounded-xl logo max-h-[200px]" // Set the max height for the image using Tailwind CSS
          />
        </div>
      </div>
      <div className="relative md:absolute bottom-0 left-0 w-full flex justify-center p-0 md:p-4">
        <a href={selectedLogos.href} className="nav-link font-bold mt-4 md:mt-1">
          Project Link
        </a>
      </div>
    </div>
  );
}

export default SelectedProjects;