import React from 'react';

interface ScrollerProps {
    images: {
        src: string;
        name: string;
        href: string;
    }[];
}


const Scroller = ({ images }: ScrollerProps) => {
  return (
    <div>
        <div className="relative w-full flex">
            <div className="flex animate-swipe">
                {images.map(({ src, name, href }) => (
                <a href={href}>
                    <img src={src} alt={name} className="scrollImages logo" />
                </a>
                ))}
            </div>
            <div className="flex animate-swipe">
                {images.map(({ src, name, href }) => (
                <a href={href}>
                    <img src={src} alt={name} className="scrollImages logo" />
                </a>
                ))}
            </div>
            <div className="flex animate-swipe">
                {images.map(({ src, name, href }) => (
                <a href={href}>
                    <img src={src} alt={name} className="scrollImages logo" />
                </a>
                ))}
            </div>
            <div className="flex animate-swipe">
                {images.map(({ src, name, href }) => (
                <a href={href}>
                    <img src={src} alt={name} className="scrollImages logo" />
                </a>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Scroller;