interface ProjectStackProps {
    images: {
        src: string;
        name: string;
        href: string;
    }[];
}

const ProjectStack = ({images}: ProjectStackProps) => {

    return (
        <div className="relative w-full flex justify-center">
          <div className="flex gap-2 flex-wrap">
            {images.map(({ src, name, href }) => (
              <a href={href} key={name}>
                <img src={src} alt={name} className="rounded-xl logo object-contain h-5" />
              </a>
            ))}
          </div>
        </div>
      );
};

export default ProjectStack;