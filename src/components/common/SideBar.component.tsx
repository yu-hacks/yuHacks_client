import React, { FC } from 'react';
import Image from 'next/image';

// images
import Group83 from '@/public/images/coming-soon-page/Group83.png';

const SideBar: FC = () => {
  return (
    <div className='w-full h-full bg-[#F6F6F6]'>
      <div className='flex flex-col justify-space-between items-center mx-auto pt-36'>
        <div>
          <Image src={Group83} alt='defaultHackCard' className='w-[172.561px] h-[222.81px] pr-8 ml-4' />
        </div>
        <div className='flex flex-col justify-space-between items-center pr-10 pt-[20px]'>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[150px] sm:w-[150px] md:w-[190px] lg:w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Application</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[150px] sm:w-[150px] md:w-[190px] lg:w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Overview</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[150px] sm:w-[150px] md:w-[190px] lg:w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Event Schedule</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[150px] sm:w-[150px] md:w-[190px] lg:w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Challenges</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[150px] sm:w-[150px] md:w-[190px] lg:w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Sponsor Resources</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[150px] sm:w-[150px] md:w-[190px] lg:w-[190px] mb-[10px] text-left pl-14 text-[14px] mt-64'>Feedback</button>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
