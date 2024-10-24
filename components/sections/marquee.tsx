import React from "react";
import React_marquee from "react-fast-marquee";

const Marquee = () => {
  return (
    <div className="flex text-white items-center">
      <div>
        High-performing individuals at companies worldwide build with Pieces
      </div>
      <React_marquee className="mt-56" speed={200}>
        <p className="">Inspired by your needs driven by results </p>
        <p className="">Inspired by your needs driven by results </p>
      </React_marquee>
    </div>
  );
};

export default Marquee;
