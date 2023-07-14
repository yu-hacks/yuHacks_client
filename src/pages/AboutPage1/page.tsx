"use client"
import Card from '@/components/common/Card.component'
import React, { FC, useEffect, useState } from 'react'
import '../../styles/AboutPage1.css';

const AboutPage1: FC = () => {
    return(
        <div className="grid-container RadicalBackground relative  w-full h-100vh bg-gradient-to-b from-[#303030] to-[#202020]">

            <Card type='opaque'>
                <h3 className='text-white'>Join us for an exciting 36- hour adventure</h3>
                <br/>
                <p className='text-white'>Welcome to yuHacks 2023! York University's premier 36-hour hackathon! This September, join 250 innovative and creative developers, designers, and creators to unite and unleash their creativity, collaborating on cutting-edge projects and explore new possibilities!</p>
            </Card>
                
            <Card type='opaque'>
                <h3 className='text-white'>Statistics from out last Hackathon</h3>
                <br/>
                <div className={``}>
                
                </div>
            </Card>    
        </div>
    );
};

export default AboutPage1