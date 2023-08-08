import React, { FC } from "react";
import Image from "next/image";

// COMPONENTS
// import validateToken, { getTokenFromStorage, setTokenInStorage } from '@/utils/token-auth'
// import LoginRegistration from "@/components/common/LoginRegistration.component";
// import Button from "@/components/common/Button.component";
import Navbar from "./Navbar";

// ASSETS
import RedHackerCard from "@/public/images/RedCard.png";
import logoTextOnly from "@/public/images/yuhacks-logo-text-only.png";
// import Menu from "@/public/images/coming-soon-page/Menu.png";

const HeroSection: FC = () => {
  return (
    <>
      <div className="w-full h-100vh bg-gradient-to-b from-[#303030] to-[#202020]">
        <Navbar />

        {/* HERO CONTENT */}
        <div 
          className="flex flex-col items-center justify-center mx-4"
          style={{
            backgroundSize: "1.75em 1.75em",
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 2.5px, rgba(255, 255, 255, 0) 2.5px)"
          }}
        >
          <Image src={logoTextOnly} alt="My Image" width={214} height={44} className="my-8"/>
          <div className="text-center text-[#EFCCCC] text-[39px] lg:text-[49px] sm:text-[39px] font-semibold leading-[54px]">
            York University&apos;s Premiere Hackathon
          </div>
          <div className="mx-8 mt1 text-center  ">
            <span className="text-[#DF9A9A] text-[20px] font-semibold">
              In-person Event{" "}
            </span>
            <span className="text-[#767676] text-[26px] font-bold">•</span>
            <span className="text-[#DF9A9A] text-[20px] font-regular">
              {" "}
              Coming this Fall
            </span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row lg:flex-row">
            <span className="text-[#767676] text-center">
              <span className="text-[#C95656]">Hacker</span> and{" "}
              <span className="text-[#58A0D4]">Volunteer</span> Applications
              Coming Soon...
            </span>
            {/* <div className="order-3 sm:order-1">
              <Button name={"Volunteer Application"} />
            </div>

            <div className=" mt-0 lg:mx-2 md: mx-2 sm:mt-0 "></div>
            <div className="order-1 sm:order-3 mx-4">
              <Button name={"Hacker Application"} />
            </div> */}
          </div>
          <Image
            className="mt-8 mb-8 sm:mb-0"
            src={RedHackerCard}
            alt="A translucent hacker nametag laying on top of a futuristic red cutting mat, with sci-fi-esque codeblocks and glowing labels surrounding it."
            width={910}
            height={469}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
