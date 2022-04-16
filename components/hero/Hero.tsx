import React from "react";
import Image from "next/image";
import person from "../../assets/space-person.png";
import personBackground from "../../assets/space-person-background.png";

const Hero = () => {
  return (
    <div className="w-full h-screen px-[200px] flex items-center justify-between">
      <div className="font-semibold text-[70px]">
        <h1>
          Hey, <br />
          I'm <h1 className="inline-block text-light-purple"> Jason Gill</h1>
        </h1>
        <h1>Fullstack Developer</h1>
        <div className=" shadow w-[150px]">
              <a href="#" className="w-full flex items-center justify-center mt-2 px-8 py-3 text-[20px] font-semibold rounded-2xl text-white bg-light-purple hover:bg-transparent hover:text-light-purple hover:font-semibold hover:border-solid hover:border-2 hover:border-light-purple">Contact </a>
            </div>
      </div>
      <div className="relative ">
        <div className="absolute top-[-10px] left-0 z-0 ">
          <Image src={personBackground} width={792} height={699} />
        </div>
        <div className="z-1">
          <Image src={person} width={735} height={502} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
