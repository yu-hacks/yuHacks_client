import Link from "next/link";
import React, { FC } from "react";
import ISectionContainer from "./ISectionContainer";

interface Props {
  // TODO - allow nav links customization
}

const INavBar: FC<Props> = () => {
  return (
    <header
      id="navbar"
      className="bg-[#F6F6F6]"
    >
      <ISectionContainer
        id="navbar-container"
        className="flex-row justify-between align-middle my-4 md:my-6"
      >
        <div id="navbar-logo-container">
          {/* TODO */}
          <span>yuHacks(2023)</span>
        </div>
        <div 
          id="navbar-links-container"
          className="hidden md:inline-flex gap-4"
        >
          <Link href="#about">About</Link>
          <Link href="#events">Events</Link>
          <Link href="#sponsors">Sponsors</Link>
          <Link href="#faq">FAQ</Link>
        </div>
        <div 
          id="navbar-menu-container" 
          className="inline-flex flex-row gap-4 justify-center align-middle"
        >
          <div 
            id="navbar-social-container"
            className="hidden flex-row gap-3 justify-center md:inline-flex"
          >
            <Link href="#">ℹ️</Link>
            <Link href="#">📷</Link>
            <Link href="#">🐦</Link>
          </div>
          <div 
            id="navbar-button-container"
            className="inline-flex flex-row gap-4 justify-center align-middle"
          >
            <div id="navbar-cta-button">
              {/* TODO */}
              <span>Portal</span>
            </div>
            <div 
              id="navbar-collapse-button"
              className="md:hidden"
            >
              {/* TODO */}
              <span>🍔</span>
            </div>
          </div>
        </div>
      </ISectionContainer>
    </header>
  );
};

export default INavBar;
