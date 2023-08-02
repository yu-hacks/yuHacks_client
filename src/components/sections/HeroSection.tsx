import React, { FC } from "react";
import Image from "next/image";

// COMPONENTS
// import validateToken, { getTokenFromStorage, setTokenInStorage } from '@/utils/token-auth'
// import LoginRegistration from "@/components/common/LoginRegistration.component";
// import Button from "@/components/common/Button.component";
import Navbar from "./Navbar";

// ASSETS
import RedHackerCard from "@/public/images/RedCard.png";
import Yuhacks2023 from "@/public/images/yuhacks2023.png";
// import Menu from "@/public/images/coming-soon-page/Menu.png";

const HeroSection: FC = () => {
  return (
    <>
      <div className="RadicalBackground relative  w-full h-100vh bg-gradient-to-b from-[#303030] to-[#202020]	 ">
        <Navbar />

        {/* HERO CONTENT */}
        <div className="flex flex-col items-center justify-center mx-4">
          <Image src={Yuhacks2023} alt="My Image" width={237} height={44} />
          <div className="YorkUniversitySPremiereHackathon pt-4 text-center text-neutral-50 text-[39px] lg:text-[49px] sm:text-[39px] font-semibold leading-[54px]">
            York University&apos;s Premiere Hackathon
          </div>
          <div className="InPersonEventSeptember29October1 mx-8 pt-4 text-center  ">
            <span className="text-[#A5A5A5] text-[20px] font-semibold">
              In-person Event{" "}
            </span>
            <span className="text-[#C95656] text-[26px] font-bold">•</span>
            <span className="text-[#A5A5A5] text-[20px] font-regular">
              {" "}
              Coming this Fall
            </span>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row lg:flex-row">
            <span className="text-[#767676]"><span className="text-[#C95656]">Hacker</span> and <span className="text-[#58A0D4]">Volunteer</span> Applications Coming Soon...</span>
            {/* <div className="order-3 sm:order-1">
              <Button name={"Volunteer Application"} />
            </div>

            <div className=" mt-0 lg:mx-2 md: mx-2 sm:mt-0 "></div>
            <div className="order-1 sm:order-3 mx-4">
              <Button name={"Hacker Application"} />
            </div> */}
          </div>
          <Image
            className="mt-8 hidden sm:block"
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
