import React, { FC } from 'react'
import { Arvo } from 'next/font/google'
import { NextFont } from 'next/dist/compiled/@next/font';

const arvo: NextFont = Arvo({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Button: FC = () => {
  return (
    <div>
      <button className={`text-white text-base px-12 py-2 absolute bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md rounded-2xl ${arvo.className}`}>
        Login
      </button>
      <br /><br />
      <button className={`text-white text-base px-12 py-2 absolute bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md rounded-2xl ${arvo.className}`}>
        Sponsor Us
      </button>
    </div>
  )
}

export default Button