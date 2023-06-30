"use client";
import React, { FC, useState, useEffect } from 'react';
import avt from '@/public/images/avatar_default.png';
import Image from 'next/image';
import ImageWithFallback from './ImageFallback';
import '../../styles/HackerCard.css';

//api
// import { getUserData } from '@/utils/http-request';

const HackerCard = () => {
  const [image, setImage] = useState(avt);
  const [name, setName] = useState('');

  //will be removed later
  setName('John Doe');
  setImage(avt);

  // useEffect(() => {
  //   const userData = getUserData();
  //   //hard code for now
  //   setName('John Doe');
  //   setImage(avt);

  // setName(userData.name);
  // setImage(userData.avatar);
  // }
  //   , []);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg card-style">
        <div className="px-6 py-4">
          <div className="rectangle"></div>
          <ImageWithFallback src={image} fallbackSrc={avt}
            className="w-30 h-30 rounded-full mx-auto bg-white"
            alt="Picture of the author"
            width={94.047}
            height={94.047}
          />
          <p className="hcard-name font-ndot47">
            {name}
          </p>
          <p className='font-ndot47 yuhack'>yu_hacks(2023)</p>
        </div>
      </div>
    </>
  );
};

export default HackerCard;
