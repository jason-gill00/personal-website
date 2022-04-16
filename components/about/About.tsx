import React from "react";
import Image from "next/image";
import iconProfile from "../../assets/icon-profile.png";
import iconHead from "../../assets/icon-head.png";
import iconHome from "../../assets/icon-home.png";
import person from "../../assets/about-person.png";

const About = () => {
  return (
    <div className="w-full h-full px-[200px] flex flex-col  justify-evenly">
      <div className="item-center">
        <h1 className="text-[45px] font-bold text-light-purple">About</h1>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-left">
          <Image src={person} width={635} height={402} />
        </div>
        <div className="w-[800px]">
          <h1 className="text-[32px] font-bold text-light-purple">Who Am I?</h1>
          <p className="text-[24px] font-medium text-slate-600 mt-2">
            Computer Engineering Student at Ryerson University. Motivated and
            driven with a passion for computers as well as a dedication to
            learning new material. Equipped with a strong work ethic, analytical
            thinking, and excellent communication skills.
          </p>
        </div>
      </div>
      <div className="flex  justify-between">
        <div className="flex flex-col w-[400px]">
          <div className="flex items-center">
            <Image src={iconProfile} width={70} height={70} />
            <h3 className="text-[24px] font-semibold text-light-purple ml-6">
              Why Software Engineering?
            </h3>
          </div>
          <p className="text-[22px] text-slate-600 font-medium mt-[24px]">
            There’s nothing more satisfying than solving a problem that’s been
            around for a while and nobody else knows how to solve. As a Software
            Developer you constantly provide solutions for users’ problems.
          </p>
        </div>
        <div className="flex flex-col w-[400px]">
          <div className="flex items-center">
            <Image src={iconHead} width={70} height={70} />
            <h3 className="text-[24px] font-semibold text-light-purple ml-6">
              What I'm Passionate About?
            </h3>
          </div>
          <p className="text-[22px] text-slate-600 font-medium mt-[24px]">
            I am passionate about learning as much as possible. Knowledge is
            power and we live in the age of knowledge. The more I learn the more
            connected I feel to the world around me.
          </p>
        </div>
        <div className="flex flex-col w-[400px]">
          <div className="flex items-center">
            <Image src={iconHome} width={70} height={70} />
            <h3 className="text-[24px] font-semibold text-light-purple ml-6">
              What I Do Outside Of Work?
            </h3>
          </div>
          <p className="text-[22px] text-slate-600 font-medium mt-[24px]">
            If I'm not at my desk coding, you can either find my at the gym,
            reading a book, or playing the violin!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
