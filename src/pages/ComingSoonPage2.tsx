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
//     // display: 'flex',
//     width: '100%',
//     height: '100%',
//     // flexDirection: 'column' as const,
//     // alignItems: 'center' as const,
//     justifyCotent: 'center' as const,
//   }

//   const [isSmallScreen, setIsSmallScreen] = useState(false);
//   useEffect(() => {
//     const handleResize = () => {
//       console.log(window.innerWidth);
//       setIsSmallScreen(window.innerWidth <= 1280); // Adjust the breakpoint as needed
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
//             <h3 className="text-[49px]">York University's Premiere Hackathon</h3>
//             <p className="text-xl">Coming September 29 - October 1</p>

//             <div className='flex flex-col items-center justify-center p-4 mt-[30px]'>
//               <div className='w-full sm:w-auto flex flex-col sm:flex-row justify-center items-center'>
//                 <div className='mb-4 sm:mb-0 sm:mr-4 flex justify-center items-center'>
//                   <Image src={becomeSponsor} alt="coming soon" className='flex' width={isSmallScreen ? 238 : 179} height={isSmallScreen ? 50 : 22} />
//                 </div>
//                 <div className='flex justify-center items-center'>
//                   <Image src={becomeVolunteer} alt="coming soon" className='flex' width={179} height={22} />
//                 </div>
//               </div>
//             </div>
//             <div className=" mx-auto p-4 flex flex-col items-center">
//               <Image src={Group179} alt="coming soon" className='flex' width={910} height={469} sizes="(min-width: 390px) 1024.34px, 100vw" />
//             </div>



//             <div className='flex items-center justify-center'>
//               <p className='text-[#FBFBFB] opacity-0.25 text-xs pt-3 pb-4'>Brought to you with love from the <u>yuHacks 2023 team</u></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default ComingSoonPage


import React from 'react'

const ComingSoonPage2 = () => {
  const mainStyle = {
    backgroundImage: 'radial-gradient(circle, #272727, #202020)',
    display: 'flex',
    width: '100%',
    height: '100%',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyCotent: 'center' as const,
  }
  return (
    <div style={mainStyle}>

    </div>
  )
}

export default ComingSoonPage2
