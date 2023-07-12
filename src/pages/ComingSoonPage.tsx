import Socials from '@/components/common/Socials.component'
import Image from 'next/image'
import circle from '@/public/images/coming-soon-page/cmingsoon-circle.png'
import card from '@/public/images/coming-soon-page/cmingsoon-card.png'
import rectangle from '@/public/images/coming-soon-page/rectangle.png'
import becomeSponsor from '@/public/images/coming-soon-page/become-sponsor.png'
import becomeVolunteer from '@/public/images/coming-soon-page/become-volunteer.png'
import logo from '@/public/images/coming-soon-page/logo.png'
import React, { FC } from 'react'

const ComingSoonPage: FC = () => {
    const mainStyle = {
        backgroundImage: 'radial-gradient(circle, #272727, #202020)',
        // width: '100vw',
        // height: '100vh',
        // display: 'flex',
        display: 'block',
        // flexDirection: 'column' as const,
        // alignItems: 'center',
        // justifyContent: 'center',
    }

    return (
        <div style={mainStyle}>
            <div className='w-1177 h-40 flex flex-row items-center justify-between sm:w-360 md:w-910 lg:w-910'>
                <div className='flex items-center'>
                    <p className='text-[#C95656] font-ndot47'>yuHacks</p>
                    <p className='text-[#FFFFFF] font-ndot47'>(</p>
                    <p className='text-[#FFFFFF] font-ndot47'>2023</p>
                    <p className='text-[#FFFFFF] font-ndot47'>)</p>
                </div>
                <div className='text-[lightgray] bg-center bg-contain bg-no-repeat'>
                    <Socials isDarkMode={true} />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between bg-[#C95656] w-910 h-469 sm:w-360 md:w-910 lg:w-910">
                <div className="z-99 flex flex-col justify-between p-[0px]">
                    <div>
                        <Image src={logo} alt="logo" width={108} height={97} className="mt-0 ml-0 pl-0 pt-0" />
                        <div className='w-94 h-94 mt-[10px]'>
                            <h1 className="text-[#FFFFFF] text-xs font-ndot47">Project Name:</h1>
                            <h1 className="text-[#FFFFFF] text-xs font-ndot47">yuHacks(2023)</h1>
                        </div>
                    </div>
                    <Image src={rectangle} alt="logo" width={155.34} height={101.206} className="mt-[100px]" />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <Image src={circle} alt="coming soon" className='m-0'
                        width={360}
                        height={360} />
                    <Image src={card} alt="card" className='z-10 absolute'
                        width={210.23}
                        height={269.68} />
                </div>
                <div className="z-99 top-0 right-0">
                    <Image src={rectangle} alt="logo" width={155.34} height={101.206} className='z-99' />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-910 text-[#C95656] rounded-8 mt-4 ml-12 mr-12">
                <h3 className='text-3xl'>York University's Premiere Hacker</h3>
                <p className='text-xl'>Coming September 29 - October 1</p>
            </div>
            <div className='flex w-496 h-50 flex flex-row items-center justify-center'>
                <div>
                    <Image src={becomeSponsor} alt="coming soon" className='flex'
                        width={179}
                        height={22} />
                </div>
                <div>
                    <Image src={becomeVolunteer} alt="coming soon" className='flex'
                        width={179}
                        height={22} />
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <p className='text-[#FBFBFB] opacity-0.25 text-xs pt-3 pb-4'>Brought to you with love from the <u>yuHacks 2023 team</u></p>
            </div>
        </div>
    )
}

export default ComingSoonPage
