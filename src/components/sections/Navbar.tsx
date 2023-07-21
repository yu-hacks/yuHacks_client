"use client"
import React, { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/common/Socials.component";
import Arrow from "@/public/images/navicon.png";
import Menu from "@/public/images/coming-soon-page/Menu.png";

import validateToken, { getTokenFromStorage } from '@/utils/token-auth'


const Navbar = () => {

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
      setHydrated(true);
  }, []);


  return (
    <>

<div className="TopSection flex flex-row mx-auto overflow-none">
          <div className="Links mt-8  lg:ml-16 md:ml-8 sm:ml-8 w-[400px] h-[100px] ">
            <ul className="mt-1 flex flex-row items-center justify-between text-neutral-400 text-base font-semibold">
              <Image
                src={Arrow}
                className=" ml-8 sm:ml-8 lg:ml-0 mt-1 mr-2"
                alt="My Image"
                width={36}
                height={36}
              />

              <Link href="#About1" className="hidden sm:hidden md:block lg:block hover:opacity-60">
                About
              </Link>
              <Link href="/" className="hidden sm:hidden md:block lg:block hover:opacity-60  ">
                Schedule
              </Link>
              <Link href="/" className="hidden sm:hidden md:block lg:block hover:opacity-60">
                Sponsors
              </Link>
              <Link href="#FAQ" className="mr-4 hidden sm:hidden md:block lg:block hover:opacity-60 ">
                FAQ
              </Link>
            </ul>
          </div>

          <div
            className={`flex flex-row items-center justify-between mt-[2.3rem] mr-8 sm: mr-8 lg:mr-16 ml-auto h-[32px] w-1/6 sm:w-1/6 md:w-[370px] lg:w-[370px] `}
          >

            <div className={` mt-1 w-1/6 sm:w-1/6 md:w-[200px] lg:w-[200px] ${'hidden sm:hidden md:block lg:block'
              }`}
            >
              <Socials isDarkMode={false}/>
            </div>

            <div className={` w-1/6 sm:w-1/6 ${' block sm:block md:hidden lg:hidden ml-8'
              }`}
            >
              <Image
                src={Menu}
                alt="menu-icon"
                className=" mt-3 min-w-[40px] min-h-[40px] "
              />
            </div>

              {!hydrated ?   <div className="Portal mt-1 pl-4 pr-4 text-right text-[#A14545] hidden sm:hidden md:block lg:block text-base font-medium hover:opacity-60">
                  Loading...
                </div>  : getTokenFromStorage() && validateToken(getTokenFromStorage()) ? <Link href="/login" passHref onClick={() => { localStorage.removeItem('token'); console.log(getTokenFromStorage()) }}>
                <div className="Portal mt-1 pl-4 pr-4 text-right text-[#A14545] hidden sm:hidden md:block lg:block text-base font-medium hover:opacity-60">
                  Log Out
                </div>
              </Link> : <Link href="/login" passHref >
                <div className="Portal mt-1 pl-4 pr-4 text-right text-[#A14545] hidden sm:hidden md:block lg:block text-base font-medium hover:opacity-60">
                  Log In
                </div>
              </Link>}


            <div className="Ellipse5  w-8 h-8 bg-white bg-opacity-30 rounded-full hidden sm:hidden md:block lg:block border border-neutral-800 border-opacity-40" />
          </div>
        </div>
      
    </>
  );
};

export default Navbar;
