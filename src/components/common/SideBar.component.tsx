import React, { FC } from 'react';
import Image from 'next/image';

// images
import Group83 from '@/public/images/coming-soon-page/Group83.png';

const SideBar: FC = () => {
  return (
    <div className='w-[359px] h-full bg-[#F6F6F6]'>
      <div className='flex flex-col justify-space-between items-center ml-[118px] mr-[51.33px] pt-20'>
        <div>
          <Image src={Group83} alt='defaultHackCard' className='w-[172.561px] h-[222.81px]' />
        </div>
        <div className='flex flex-col justify-space-between items-center pt-[20px]'>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Application</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Overview</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Event Schedule</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Challenges</button>
          <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[190px] mb-[10px] text-left pl-14 text-[14px]'>Sponsor Resources</button>
        </div>
        <button className='pt-20 pb-10 text-[14px]'>Feedback</button>
      </div>
    </div>
  );
};

export default SideBar;
