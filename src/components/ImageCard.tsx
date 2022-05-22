import React, { useState } from "react";

interface Props {
  source: string;
  alt: string;
}
const ImageCard: React.FC<Props> = ({ source, alt }) => {
  const [flip, setFlip] = useState<boolean>(false);

  const flipCard = () => {
    setFlip(!flip);
  };

  console.log(flip);

  return (
    <div
      onClick={flipCard}
      className="group h-[210px] w-[150px] cursor-pointer bg-transparent perspective "
    >
      <div
        className={`relative h-full w-full duration-1000 preserve-3d ${
          flip ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full border-2 rotate-y-180 backface-hidden">
          <img
            src={source}
            alt={alt}
            className="object-contain w-full h-full"
          />
        </div>
        <div className="absolute w-full h-full bg-gray-100 backface-hidden"></div>
      </div>
    </div>
  );
};

export default ImageCard;
