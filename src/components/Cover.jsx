import React from "react";
import CoverInfo from "./CoverInfo";
import cover from "../assets/cover.png";

const Cover = () => {
  return (
    <div className="relative w-full z-10">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
      <img src={cover} alt="cover" className="w-full bg-cover max-w-full" />
      <CoverInfo />
    </div>
  );
};

export default Cover;
