import React, { FC } from "react";
import Image from "next/image";
import "../../styles/AboutPage1.css";
import arrow from "@/public/images/Vector.png";
import country from "@/public/images/country.png";
import img9 from "@/public/images/9.png";
import img59 from "@/public/images/59.png";
import imgdec from "@/public/images/56.3.png";
import major from "@/public/images/major.png";
import school1 from "@/public/images/school1.png";

const AboutSection: FC = () => {
  return (
    <div
      id="about-container"
      className="flex flex-col md:flex-row md:flex w-full mx-auto px-3 lg:px-20 py-6"
    >
      <div
        id="about-text-background"
        className="flex flex-col w-full mx-auto bg-white/[0.13] rounded-3xl  md:basis-2/3 lg:basis-3/4 md:mr-6"
      >
        <div id="about-text-container" className="px-8 py-12 lg:p-16">
          <Image src={arrow} alt="" className="mb-4" />
          <h3 className="font-semibold text-4xl text-[#EFCCCC] mb-10 max-w-[450px]">
            Create, Connect, Code in a 36-Hour Adventure
          </h3>
          <p className="text-lg text-[#C3C3C3] max-w-[560px] mb-4">
            yuHacks is the largest hackathon at York University. This fall, we
            are bringing hundreds of developers, designers, and ideators to
            explore what’s possible in a 36-hour hackathon.
          </p>
          <p className="text-lg text-[#C3C3C3] max-w-[560px]">
            Whether you’re an experienced hacker or someone who’s learning the
            rope, we have a place for your here and eager see what inspiring
            project you’ll bring to the presentation booth.
          </p>
        </div>
      </div>
      <div
        id="about-stats-background"
        className="flex flex-col md:flex-row w-full mx-auto bg-white/[0.13] rounded-3xl mt-6 md:mt-0 md:basis-1/3 lg:basis-1/4"
      >
        <div
          id="stats-text-container"
          className="flex flex-col justify-start align-start px-8 py-12"
        >
          <h4 className="text-[1.25rem] text-[#717171] font-semibold mb-6">
            Statistics from yuHacks 2022
          </h4>
          <div id="stats-country" className="flex flex-row mb-6">
            <div className="pr-4 shrink-0">
              <Image src={country} alt="country icon" width={40} height={40} />
            </div>
            <div>
              <Image src={img9} alt="" />
              <p className="text-[#717171] text-md font-HindMadurai mt-3">
                Countries
              </p>
            </div>
          </div>
          <div id="stats-schools" className="flex flex-row mb-6">
            <div className="pr-4 shrink-0">
              <Image src={school1} alt="country icon" width={40} height={40} />
            </div>
            <div>
              <Image src={img59} alt="" />
              <p className="text-[#717171] text-md font-HindMadurai mt-3">
                Schools around the world
              </p>
            </div>
          </div>
          <div id="stats-majors" className="flex flex-row">
            <div className="pr-4 shrink-0">
              <Image src={major} alt="country icon" width={40} height={40} />
            </div>
            <div>
              <Image src={imgdec} alt="" />
              <p className="text-[#717171] text-md font-HindMadurai mt-3">
                Countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
