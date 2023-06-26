import React from 'react'
import Image from 'next/image'
import linkedin from '@/public/images/LinkedIn.png'
import instagram from '@/public/images/Instagram.png'
import twitter from '@/public/images/Twitter.png'
import tiktok from '@/public/images/TikTok.png'
const Socials = () => {
    return (
        <div className='flex justify-center items-center'>
            <ul className="list-none w-48 flex justify-between">
                <li><a href="/"><Image src={linkedin} className=" w-9 h-9" alt={'linkedin'} /></a></li>
                <li><a href="/"><Image src={instagram} className=" w-9 h-9" alt={'instagram'} /></a></li>
                <li><a href="/"><Image src={twitter} className=" w-9 h-9" alt={'twitter'} /></a></li>
                <li><a href="/"><Image src={tiktok} className=" w-9 h-9" alt={'tiktok'} /></a></li>
            </ul>
        </div>
    )
}

export default Socials