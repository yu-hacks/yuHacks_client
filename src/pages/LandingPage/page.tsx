"use client"
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button.component';
import Socials from '@/components/common/Socials.component';
import Arrow from '@/public/images/navicon.png'
import RedHackerCard from '@/public/images/RedCard.png'
import Yuhacks2023 from '@/public/images/yuhacks2023.png'
import LoginRegistration from '@/components/common/LoginRegistration.component';
import Menu  from '@/public/images/coming-soon-page/Menu.png';

const LandingPage: FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleDivClick = () => {
    setShowPopup(!showPopup);
  };

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);
 
  return (
    <>



<div className="RadicalBackground relative  w-full h-100vh bg-gradient-to-b from-[#303030] to-[#202020]	 ">
   <div className="TopSection flex flex-row mx-auto overflow-none">

    
    <div className="Links mt-16 lg:ml-16 md:ml-8 sm:ml-8   w-[400px] h-[100px] ">

    <ul className="mt-1 flex flex-row items-center justify-between text-neutral-400 text-base font-semibold">
    
    <Image src={Arrow} className=" ml-8 sm:ml-8 lg:ml-0 mt-1 mr-2" alt="My Image" width={36} height={36}/> 

    <Link href="/" className="hidden sm:block">About</Link>
        <Link href="/" className="hidden sm:block ">Schedule</Link>
        <Link href="/" className="hidden sm:block">Sponsors</Link>
        <Link href="/" className="mr-4 hidden sm:block">FAQ</Link>
    </ul>
    </div>

        <div className={`flex flex-row items-center justify-between mt-[4.3rem] mr-8 sm: mr-8 lg:mr-16 ml-auto h-[32px] ${isSmallScreen ? 'w-1/16 ' : 'w-[320px]'}`}>

        {isSmallScreen ? <Image src={Menu} alt='menu-icon' className=' mt-3 min-w-[40px] min-h-[40px] ' /> : <Socials isDarkMode={false} />}

    <div className="Portal mt-1 pl-4 pr-4 text-right text-[#A14545] hidden sm:block text-base font-medium">Portal</div>

    <div className="Ellipse5  w-8 h-8 bg-white bg-opacity-30 rounded-full hidden sm:block border border-neutral-800 border-opacity-40" onClick={handleDivClick} />



    </div>
    {showPopup && <LoginRegistration />}

    </div>

    <div className="flex flex-col items-center justify-center mx-4"> 
    <Image src={Yuhacks2023} alt="My Image" width={237} height={44}/> 

    <div className="YorkUniversitySPremiereHackathon pt-4 text-center text-neutral-50 text-[39px] lg:text-[42px] sm:text-[39px] font-semibold leading-[54px]">York University’s Premiere Hackathon</div>
    <div className="InPersonEventSeptember29October1 mx-8 pt-4 text-center  "><span className="text-stone-300 text-[20px] lg:text-[31px] sm:text-[20px] font-medium">In-person Event </span><span className="text-white text-opacity-30 text-[20px] lg:text-[31px] sm:text-[20px] font-normal">•</span><span className="text-stone-300 text-[20px] lg:text-[31px] sm:text-[20px] font-medium"> September 29 - October 1</span></div>
    <div className="mt-8 flex flex-col sm:flex-row lg:flex-row">
      <div className="order-3 sm:order-1">
      <Button name={'Volunteer Application'} />
      </div>    
      

    <div className=" mt-0 lg:mx-2 md: mx-2 sm:mt-0 "></div>
    <div className="order-1 sm:order-3 mx-4"> 
    <Button name={'Hacker Application'} />
    </div>

    <div className="order-2 sm:order-2 mb-4 "></div>
    </div>
    <div className="mb-16"></div>
    <Image className="mt-16 hidden sm:block"src={RedHackerCard} alt="My Image" width={910} height={469}/> 

    </div>
    </div>
    
 
    </>
  )
}

export default LandingPage


