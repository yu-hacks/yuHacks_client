"use client"
import ChallengeCard from '@/components/common/ChallengeCard.component'
import React, { useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import bgImg from '@/public/images/wireframe-decor-grey.png'

const AboutPage2 = () => {
  useEffect(() => {
    const adjustFontSize = () => {
      const screenHeight = window.innerHeight;
      const baseFontSize = 16; // Adjust this value as per your requirement
      const scaleFactor = 0.025; // Adjust this value to fine-tune the scaling

      if (screenHeight < 420) {
        const fontSize = screenHeight < 380 ? Math.min(400 * 0.03, baseFontSize) : Math.min(400 * scaleFactor, baseFontSize);
        document.documentElement.style.fontSize = fontSize + 'px';
      } else {
        document.documentElement.style.fontSize = baseFontSize + 'px';
      }
    };

    // Call the adjustFontSize function initially and on window resize
    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, []);

  return (
    <div className={`h-screen flex justify-center items-center bg-[#202020]`}>
      <div className={`flex lg:flex-row flex-col shrink-0 h-5/6 w-10/12 items-center justify-between bg-white bg-opacity-[0.13] rounded-[32px] shadow-lg backdrop-blur-md`}>
        <article className='md:ml-16 ml-9 mt-10 sm:mt-0 pr-11 lg:h-full lg:w-[40%] h-[40%] w-full flex flex-col justify-evenly'>
          <div>
            <IoIosArrowForward className='text-[#58A0D4] sm:w-10 sm:h-10 xl:w-16 xl:h-16 md:w-12 md:h-12 h-9 w-9' />
            <h1 className='sm:ml-3 lg:ml-4 md:ml-3 ml-3 mt-1 font-HindMadurai md:text-5xl sm:text-2xl text-xl text-[#FBFBFB]'>Level up by tackling interesting challenges (TBD)</h1>
          </div>
          <article className='sm:ml-3 lg:ml-4 md:ml-3 ml-3 sm:mt-0 mt-5'>
            <p className='text-[#C3C3C3] font-HindMadurai md:text-xl xl:text-2xl text-sm'>[The format of the hackathon]</p>
            <p className='text-[#C3C3C3] sm:mt-4 mt-1 font-HindMadurai md:text-xl xl:text-2xl text-sm'>[What kind of events hackers can expect from our hackathon and why they should be excited for them]</p>
          </article>
        </article>
        <div
          style={{
            backgroundImage: `url(${bgImg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className={`flex items-center justify-center lg:h-full lg:w-[45%] h-[50%] w-full`}>
          <div className='relative 2xl:w-[40%] 2xl:h-1/2 xl:h-[60%] lg:w-[60%] md:h-3/4 md:w-[40%] sm:h-1/2 h-2/3 w-[50%] sm:w-[44%]'>
            <ChallengeCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage2