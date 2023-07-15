"use client"
import Card from '@/components/common/Card.component'
import React, { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import '../../styles/AboutPage1.css';
import vector from '@/public/images/Vector.png'
import country from '@/public/images/country.png'
import img9 from '@/public/images/9.png'
import img59 from '@/public/images/59.png'
import imgdec from '@/public/images/56.3.png'
import school from '@/public/images/School.png'
import major from '@/public/images/major.png'

const AboutPage1: FC = () => {
    return(
        <div className="md:flex RadicalBackground  w-full h-100vh bg-gradient-to-b from-[#303030] to-[#202020] mx-auto min-[320px]:px-3 md:px-3 lg:px-20 py-12">

            <div className='min-[320px]:m-auto md:m-1 min-[320px]:w-[350px] sm:w-[500px] md:w-screen md:mr-5 justify-center align-middle'>
                <Card type='opaque'>
                    <div className='h-[500px] min-[320px]:p-3 sm:p-8 md:p-5 align-middle'>
                        <Image src={vector} alt="vector" className=' '/> {/* ml-11 mt-9 mb-2*/}
                        <br/>
                        <h3 className='text-white min-[200px]:text-[28px] md:text-[28px] lg:text-[31px] font-HindMadurai '>{/*ml-11 mr-96  mb-1*/}
                        Join us for an exciting 36-{"\n"}
                        hour adventure
                        </h3>
                        <br/>
                        <p className='text-[#c3c3c3]  min-[200px]:text-[15px] md:text-[18.5px]  lg:mr-20 font-HindMadurai'>Welcome to yuHacks 2023! York University's premier 36-hour hackathon! This September, join 250 innovative and creative developers, designers, and creators to unite and unleash their creativity, collaborating on cutting-edge projects and explore new possibilities!</p>{/*ml-11 mr-36 mb-[118px]*/}
                 
                    </div>    
                        
                </Card>
            </div>
            <br/>
                
            <div className='min-[320px]:m-auto md:m-1 min-[320px]:w-[350px] sm:w-[500px]  lg:mx-2'>
                <Card type='opaque'>
                    <div className='h-[500px] min-[320px]:p-3 sm:p-9 md:p-8 align-middle'>
                        <h3 className=' text-[24px] text-[#c3c3c3] mx-3'>Statistics from out last Hackathon</h3>
                        <br/>
                    
                        <div className=' items-center mx-3'> 
                        
                            <div>
                                <div className='items-center flex'>
                                    <Image src={country} alt="country" className='mr-4'/>
                                    <div className=''>
                                        <Image src={img9} alt="9"/>
                                        
                                        <p className='text-[#717171] text-[20px] font-HindMadurai mt-3'>Countries</p>
                                    </div>
                                </div>
                                <br/>

                                <div className='items-center flex'>
                                    <Image src={school} alt="school" className='mr-4'/>
                                    <div className='w-[200px]'>
                                        <Image src={img59} alt="59"/>
                                        
                                        <p className='text-[#717171] text-[20px] font-HindMadurai mt-3'>Schools from around the world</p>
                                    </div>
                                </div>
                                <br/>

                                <div className='items-center flex'>
                                    <Image src={major} alt="major" className='mr-4'/>
                                    <div className=''>
                                        <Image src={imgdec} alt="56.3%"/>
                                        
                                        <p className='text-[#717171] text-[20px] font-HindMadurai mt-3'>CS Major</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>   
                </Card>   
            </div> 
        </div>
    );
};

export default AboutPage1