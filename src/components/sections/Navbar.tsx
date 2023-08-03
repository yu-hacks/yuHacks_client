"use client";
import React, { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Socials from "@/components/common/Socials.component";
import Arrow from "@/public/images/navicon.png";
import Menu from "@/public/images/coming-soon-page/Menu.png";

import validateToken, {
  getTokenFromStorage,
  // setTokenInStorage,
} from "@/utils/token-auth";

const Navbar: FC = () => {
  return (
    <>
      <div className="TopSection flex flex-row mx-auto overflow-none mt-8">
        <div className="Links lg:ml-16 md:ml-8 ml-8">
          <ul className="mt-1 flex flex-row items-center justify-between text-neutral-400 text-base font-semibold">
            <Image
              src={Arrow}
              className=" ml-8 sm:ml-8 lg:ml-0 mt-1 mr-4"
              alt="My Image"
              width={36}
              height={36}
            />

            <Link
              href="/"
              className="hidden sm:hidden md:block lg:block hover:text-[#DF9A9A] mr-4"
            >
              About
            </Link>
            <Link
              href="/"
              className="hidden sm:hidden md:block lg:block hover:text-[#F1C480] mr-4"
            >
              Sponsors
            </Link>
            <Link
              href="/"
              className="mr-4 hidden sm:hidden md:block lg:block hover:text-[#9BC6E5] "
            >
              FAQ
            </Link>
          </ul>
        </div>

        <div className={`flex flex-row items-center justify-between mr-8 lg:mr-16 ml-auto`}>
          <div className={`mt-1 ${"md:block lg:block"}`}>
            <Socials isDarkMode={false} />
          </div>

          {/* TODO - Collapse Menu */}
          {/* <div className={` w-1/6 sm:w-1/6 ${" block sm:block md:hidden lg:hidden ml-8"}`}>
            <Image
              src={Menu}
              alt="menu-icon"
              className=" mt-3 min-w-[40px] min-h-[40px] "
            />
          </div> */}
          {
            getTokenFromStorage() && validateToken(getTokenFromStorage()) ? (
              <Link
                href="/login"
                passHref
                onClick={() => {
                  localStorage.removeItem("token");
                  console.log(getTokenFromStorage());
                }}
              >
                <div className="Portal mt-1 pl-4 pr-4 text-right text-[#A14545] hidden sm:hidden md:block lg:block text-base font-medium hover:opacity-60">
                  Log Out
                </div>
              </Link>
            ) : (
              <Link href="/">
                <div className="Portal mt-1 pl-4 pr-4 text-right text-[#A14545] hidden sm:hidden md:block lg:block text-base font-medium hover:opacity-60">
                  {/* Log In */}
                  Dashboard
                </div>
              </Link>
            )
          }

          {/* <div className="Ellipse5  w-8 h-8 bg-white bg-opacity-30 rounded-full hidden sm:hidden md:block lg:block border border-neutral-800 border-opacity-40" /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
