import React, { FC } from 'react'
import Image from 'next/image'
import bugImg from '@/public/images/bug.png'

const ChallengeCard: FC = () => {
    return (
        <div className='-rotate-3 rounded-lg shadow-md sm:w-72 sm:h-[400px] bg-[#FEFFFC] flex items-center'>
            <div className='h-[370px] mx-5 border-t-4 border-b-4 border-t-[#c95656] border-b-[#58A0D4] border-opacity-75'>
                <Image src={bugImg} alt={'bug'} className='w-28 h-28 mx-auto my-10' />
                <div className="flex flex-col w-10/12 mx-auto my-5 font-ndot47 text-center text-black text-xl">
                    Bug-hunting challenge
                </div>
                <div className="flex flex-col w-10/12 mx-auto font-I text-center text-black text-opacity-50 text-[14px]">
                    We are a multi-disciplinary event that aim to bring people of all background and...
                </div>
            </div>
        </div>
    )
}

export default ChallengeCard