import { FC } from "react";
import Image from "next/image";

// ASSETS
import arrow from "@/public/images/yellow-arrow.png";
import sponsorGraphics from "@/public/images/sponsor-graphics.png";
// import Button from "../common/Button.component";

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
        <div id="sponsor-media" className="flex justify-center align-middle shrink-0 md:mt-0 md:basis-1/3">
          <div>
            <Image src={sponsorGraphics} alt="" width={458} height={458}/>
          </div>
          {/* TODO - Fix position of ChallengeCard in a div */}
          {/* <div className='absolute 2xl:w-[40%] 2xl:h-1/2 xl:h-[60%] lg:w-[60%] md:h-3/4 md:w-[40%] sm:h-1/2 h-2/3 w-[50%] sm:w-[44%]'>
            <ChallengeCard />
          </div> */}
        </div>
        <div id="sponsor-text" className="mx-8 my-12 lg:m-16 lg:pl-8">
          <Image src={arrow} alt="" className="mb-4" />
          <h3 className="font-semibold text-4xl text-[#F8E1BF] mb-10 max-w-[500px]">Sponsor, Support, Supercharge a New Possibility</h3>
          <p className="text-lg text-[#C3C3C3] max-w-[500px]">It is a place where you can be creative and innovative. It is a place where you can make your ideas come to life.</p>
          {/* TODO - Add Sponsor Us button*/}
          <div id="button-wrapper" className="w-max mt-6">
            <a 
              href="mailto:sponsorship@yuhacks.ca"
              className="text-[#F1C480] text-lg font-medium hover:underline"
            >
              Interested in Sponsoring?
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SponsorSection;