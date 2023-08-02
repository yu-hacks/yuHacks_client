import { FC } from "react";
import Image from "next/image";

// ASSETS
import arrow from "@/public/images/yellow-arrow.png";
import sponsorGraphics from "@/public/images/sponsor-graphics.png";

const SponsorSection: FC = () => {
  return (
    <div 
      id="sponsor-container"
      className="flex w-full mx-auto px-3 lg:px-20 py-6"
    >
      <div
        id="section-background"
        className="flex flex-col md:flex-row w-full mx-auto bg-white/[0.13] rounded-3xl"
      >
        <div id="sponsor-media" className="flex justify-center align-middle shrink-0">
          <div>
            <Image src={sponsorGraphics} alt="" width={458} height={458}/>
          </div>
          {/* TODO - Fix position of ChallengeCard in a div */}
          {/* <div className='absolute 2xl:w-[40%] 2xl:h-1/2 xl:h-[60%] lg:w-[60%] md:h-3/4 md:w-[40%] sm:h-1/2 h-2/3 w-[50%] sm:w-[44%]'>
            <ChallengeCard />
          </div> */}
        </div>
        <div id="sponsor-text" className="px-8 py-12 lg:p-16">
          <Image src={arrow} alt="" className="mb-4" />
          <h3 className="font-medium text-[2rem] text-[#FDFDFD] mb-6 max-w-[450px]">Sponsor, Support, Supercharge a New Possibility</h3>
          <p className="text-lg text-[#C3C3C3] max-w-[500px]">The Hackathon is a 36-hour event where you can prototype, program, and present your grand ideas. It is a place for you to meet new people, learn new things, and have fun. It is a place where you can be creative and innovative. It is a place where you can make your ideas come to life.</p>
          {/* TODO - Add Sponsor Us button*/}
        </div>
      </div>
    </div>
  )
}

export default SponsorSection;