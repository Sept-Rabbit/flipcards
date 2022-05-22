import React, { useState } from "react";

interface Props {
  source: string;
  alt: string;
  id: number;
  flipped: boolean;
  flipCard: (id: number) => void;
}

const ImageCard: React.FC<Props> = ({ source, alt, id, flipped, flipCard }) => {
  return (
    <div
      onClick={() => flipCard(id)}
      className="group h-[210px] w-[150px] cursor-pointer bg-transparent perspective "
    >
      <div
        className={`relative h-full w-full duration-300 preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full border-2 rotate-y-180 backface-hidden">
          <img src={source} alt={alt} className="object-cover w-full h-full" />
        </div>
        <div className="absolute flex items-center justify-center object-cover w-full h-full text-gray-800 bg-white backface-hidden">
          <img
            src="https://lh3.googleusercontent.com/jJrm_DVd_aujbQ8jfH6lgqzGJDzpTs-tfVQCvh1MYORofS93CXCRNVAW01dk7F2dVJPZ-26Tx6NFTvL5gipHfNSzsF2_GvP_YaOHU2S6aGiN6ewjyip4HtHOOSDmggn-mJoZFrrqWA=w1200"
            alt="white"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
