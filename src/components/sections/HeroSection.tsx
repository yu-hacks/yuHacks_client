import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/common/Button.component";
import Socials from "@/components/common/Socials.component";
import Arrow from "@/public/images/navicon.png";
import RedHackerCard from "@/public/images/RedCard.png";
import Yuhacks2023 from "@/public/images/yuhacks2023.png";
import LoginRegistration from "@/components/common/LoginRegistration.component";
import Menu from "@/public/images/coming-soon-page/Menu.png";
import validateToken, { getTokenFromStorage, setTokenInStorage } from '@/utils/token-auth'
import Navbar from "./Navbar";
import Application from "../common/Application.component";

interface Hero {
  id?: string;
}

const HeroSection: FC<Hero> = ({id}) => {

  return (
    <>
      <div id={id} className="RadicalBackground relative  w-full h-100vh bg-gradient-to-b from-[#303030] to-[#202020]	 ">
       
        <Navbar/>
        <div className="flex flex-col items-center justify-center mx-4">
          <Image src={Yuhacks2023} alt="My Image" width={237} height={44} />

          <div className="YorkUniversitySPremiereHackathon pt-4 text-center text-neutral-50 text-[39px] lg:text-[49px] sm:text-[39px] font-semibold leading-[54px]">
            York University&apos;s Premiere Hackathon
          </div>
          <div className="InPersonEventSeptember29October1 mx-8 pt-4 text-center  ">
            <span className="text-stone-300 text-[20px] lg:text-[31px] sm:text-[20px] font-medium">
              In-person Event{" "}
            </span>
            <span className="text-white text-opacity-30 text-[20px] lg:text-[31px] sm:text-[20px] font-normal">
              •
            </span>
            <span className="text-stone-300 text-[20px] lg:text-[31px] sm:text-[20px] font-regular">
              {" "}
              September 29 - October 1
            </span>
          </div>
          <Application/>
          <Image
            className="mt-16 hidden sm:block"
            src={RedHackerCard}
            alt="My Image"
            width={910}
            height={469}
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
