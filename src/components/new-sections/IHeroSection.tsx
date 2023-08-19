import React, { FC } from "react";

import ISectionContainer from "../new/ISectionContainer";

interface Props {}

const IHeroSection: FC<Props> = () => {
  return (
    <section id="hero">
      <ISectionContainer id="hero-container" className="py-2">
        <div
          id="hero-background"
          className="flex bg-[#2C2C2C] rounded-[32px] md:rounded-[42px] h-[100vh] md:h-[85vh] w-[100%]"
        >
          <div id="hero-text" className="mx-4 mt-12 md:ml-10 md:mt-10">
            <h1 className="text-[#FDFDFD] text-[40px] md:text-[64px]">
              York <br />
              University&apos;s <br />
              Largest <br />
              Hackathon
            </h1>
            <h4 className="text-[#888888] text-[14px] md:text-[16px]">
              In-person Event • Coming this Fall
            </h4>
            <p className="text-[#737373]">
              <span className="text-[#C95656]">Hacker</span> and{" "}
              <span className="text-[#58A0D4]">Volunteer</span> Applications
              Coming Soon...
            </p>
          </div>
          <div></div>
        </div>
      </ISectionContainer>
    </section>
  );
};

export default IHeroSection;
