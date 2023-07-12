// "use client"
// import React, { FC, useState, useEffect } from 'react'
// import Socials from '@/components/common/Socials.component'
// import Image from 'next/image'
// import becomeSponsor from '@/public/images/coming-soon-page/become-sponsor.png'
// import becomeVolunteer from '@/public/images/coming-soon-page/become-volunteer.png'
// import Group179 from '@/public/images/coming-soon-page/Group179.png'
// import navicon from '@/public/images/coming-soon-page/navicon.png'
// import Menu from '@/public/images/coming-soon-page/Menu.png'

// const ComingSoonPage: FC = () => {
//   const mainStyle = {
//     backgroundImage: 'radial-gradient(circle, #272727, #202020)',
//     width: '100%',
//     minHeight: '100vh',
//     justifyContent: 'center' as const,
//   }

//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       console.log(window.innerWidth);
//       setIsSmallScreen(window.innerWidth < 660); // Adjust the breakpoint as needed
//     };

//     handleResize(); // Check initial screen size
//     window.addEventListener('resize', handleResize); // Listen for window resize events

//     return () => {
//       window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
//     };
//   }, []);

//   return (
//     <>
//       <div style={mainStyle}>
//         <div className='flex flex-col justify-center items-center'>
//           <div className='mx-auto w-full h-[40px] pt-[57px] p-4 flex flex-row items-center justify-between'>
//             <div className='flex items-center'>
//               <div className='mr-[7px]'>
//                 <Image src={navicon} alt="navicon" className='w-[40px] h-[40px]' />
//               </div>
//               <p className='text-[#C95656] font-ndot47 text-[16px]'>yuHacks</p>
//               <p className='text-[#FFFFFF] font-ndot47 text-[16px]'>(</p>
//               <p className='text-[#FFFFFF] font-ndot47 text-[16px]'>2023</p>
//               <p className='text-[#FFFFFF] font-ndot47 text-[16px]'>)</p>
//             </div>
//             <div className='text-[lightgray] bg-center bg-contain bg-no-repeat'>
//               {isSmallScreen ? <Image src={Menu} alt='menu-icon' className='w-[40px] h-[40px]' /> : <Socials isDarkMode={true} />}
//             </div>
//           </div>
//           <div className="h-[216px] mx-auto flex-row sm:flex-col w-full sm:h-[54px] p-4 text-center text-[#C95656] rounded-8 mt-4">
//             <h3 className="text-[49px] font-[Hind Madurai]">York University's Premiere Hackathon</h3>
//             <p className="text-xl">Coming September 29 - October 1</p>

//             <div className='flex flex-col items-center justify-center p-4 mt-[30px]'>
//               <div className='w-full sm:w-auto flex flex-col sm:flex-row justify-center items-center'>
//                 <div className='mb-4 sm:mb-0 sm:mr-4 flex justify-center items-center'>
//                   <Image src={becomeSponsor} alt="coming soon" className='flex' width={isSmallScreen ? 238 : 179} height={isSmallScreen ? 50 : 22} />
//                 </div>
//                 <div className='flex justify-center items-center'>
//                   <Image src={becomeVolunteer} alt="coming soon" className='flex' width={isSmallScreen ? 238 : 179} height={isSmallScreen ? 50 : 22} />
//                 </div>
//               </div>
//             </div>
//             <div className=" mx-auto p-4 flex flex-col items-center">
//               <Image src={Group179} alt="coming soon" width={910} height={469} />
//             </div>
//             <div className='flex items-center justify-center'>
//               <p className='text-[#FBFBFB] opacity-25 text-xs pt-3 pb-4'>Brought to you with love from the <u>yuHacks 2023 team</u></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ComingSoonPage

"use client"
import Socials from '@/components/common/Socials.component'
import Image from 'next/image'
import circle from '@/public/images/coming-soon-page/cmingsoon-circle.png'
import card from '@/public/images/coming-soon-page/cmingsoon-card.png'
import rectangle from '@/public/images/coming-soon-page/rectangle.png'
import becomeSponsor from '@/public/images/coming-soon-page/become-sponsor.png'
import becomeVolunteer from '@/public/images/coming-soon-page/become-volunteer.png'
import logo from '@/public/images/coming-soon-page/logo.png'
import Menu from '@/public/images/coming-soon-page/Menu.png'
import Group179 from '@/public/images/coming-soon-page/Group179.png'
import navicon from '@/public/images/coming-soon-page/navicon.png'
import React, { FC, useState, useEffect } from 'react'

const ComingSoonPage2: FC = () => {
  const mainStyle = {
    backgroundImage: 'radial-gradient(circle, #272727, #202020)',
    display: 'block',
    textAlign: 'center' as const,
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      setIsSmallScreen(window.innerWidth < 660); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return (
    <div style={mainStyle}>
      <div className='w-full max-w-screen-xl mx-auto p-6 flex flex-row items-center justify-between'>
        <div className='flex items-center'>
          <div className='mr-[7px]'>
            <Image src={navicon} alt="navicon" className='w-[40px] h-[40px]' />
          </div>
          <p className='text-[#C95656] font-ndot47 text-[16px]'>yuHacks</p>
          <p className='text-[#FFFFFF] font-ndot47 text-[16px]'>(</p>
          <p className='text-[#FFFFFF] font-ndot47 text-[16px]'>2023</p>
          <p className='text-[#FFFFFF] font-ndot47 text-[16px]'>)</p>
        </div>
        <div className='text-[lightgray] bg-center bg-contain bg-no-repeat'>
          {isSmallScreen ? <Image src={Menu} alt='menu-icon' className='w-[40px] h-[40px]' /> : <Socials isDarkMode={true} />}
        </div>
      </div>
      <div className="max-w-screen-sm mx-auto p-4 text-center text-[#C95656] rounded-8 mt-4">
        <h3 className='text-3xl'>York University's Premiere Hacker</h3>
        <p className='text-xl'>Coming September 29 - October 1</p>
      </div>
      <div className='flex flex-col items-center justify-center p-4'>
        <div className='w-full sm:w-auto flex justify-center'>
          <div className='mr-4'>
            <Image src={becomeSponsor} alt="coming soon" className='flex' width={179} height={22} />
          </div>
          <div>
            <Image src={becomeVolunteer} alt="coming soon" className='flex' width={179} height={22} />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center items-center" >
        <Image src={Group179} alt="coming soon" className='flex' width={910} height={469} />
      </div>

      <div className='flex items-center justify-center'>
        <p className='text-[#FBFBFB] opacity-25 text-xs pt-3 pb-4 text-HindMadurai'>Brought to you with love from the <u>yuHacks 2023 team</u></p>
      </div>
    </div>
  )
}

export default ComingSoonPage2
