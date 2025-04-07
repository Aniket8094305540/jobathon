import React, { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';

const ImageGrid = ({ images }) => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`img-${index}`}
            className="h-80 w-auto mx-4 rounded-xl"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ImageGrid;
