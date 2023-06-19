import React from 'react'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { SiTiktok } from 'react-icons/si'
const Socials = () => {
    return (
        <div>
            <ul className="list-none w-44 flex justify-between">
                <li><a href="/"><AiFillLinkedin className="text-slate-400 w-8 h-8" /></a></li>
                <li><a href="/"><AiFillInstagram className="text-slate-400 w-8 h-8" /></a></li>
                <li><a href="/"><BsTwitter className="text-slate-400 w-8 h-8" /></a></li>
                <li><a href="/"><SiTiktok className="text-slate-400 w-8 h-8" /></a></li>
            </ul>
        </div>
    )
}

export default Socials