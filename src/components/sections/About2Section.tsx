import Image from "next/image";
// import ChallengeCard from "../common/ChallengeCard.component";

//
import wireframe from "@/public/images/about-2-media.png";
import arrow from "@/public/images/blue-arrow.png";

const About2Section = () => {
  return (
    <div
      id="about-2-container"
      className="flex w-full mx-auto px-3 lg:px-20 py-6"
    >
      <div
        id="about-2-background"
        className="flex flex-col md:flex-row w-full mx-auto bg-white/[0.13] rounded-3xl"
      >
        <div id="about-2-text" className="px-8 py-12 lg:p-16 md:basis-2/3">
          <Image src={arrow} alt="" className="mb-4" />
          {/* <MdChevronRight className='text-[#58A0D4] left-[-50px] sm:w-10 sm:h-10 xl:w-16 xl:h-16 md:w-12 md:h-12 h-9 w-9' /> */}
          <h3 className="font-semibold text-4xl text-[#CDE2F2] mb-10 max-w-[450px]">
            Prototype, Program, Present Your Grand Ideas
          </h3>
          <p className="text-lg text-[#C3C3C3] max-w-[560px]">
            Brainstorming an idea, making a prototype, coding for a MVP, and
            presenting your final product, we at yuHacks aims to provide you
            with the best platform to make it happens. We also have a variety of
            activities and resources to get you inspired to build the next
            groundbreaking solution.
          </p>
        </div>
        <div
          id="about-2-media"
          className="flex h-full justify-center align-middle shrink-0 mt-8 md:mt-0"
        >
          <div>
            <Image src={wireframe} alt="" width={458} height={458} />
          </div>
          {/* TODO - Fix position of ChallengeCard in a div */}
          {/* <div className='absolute 2xl:w-[40%] 2xl:h-1/2 xl:h-[60%] lg:w-[60%] md:h-3/4 md:w-[40%] sm:h-1/2 h-2/3 w-[50%] sm:w-[44%]'>
            <ChallengeCard />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About2Section;
