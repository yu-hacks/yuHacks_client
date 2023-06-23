import React, { FC, useState, useEffect } from 'react';
import avt from '@/public/images/avatar_default.png';
import Image from 'next/image';
import '../../styles/HackerCard.css';

interface Props {
  name: string;
}

const HackerCard: FC<Props> = (props) => {

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg card-style">
        <div className="px-6 py-4">
          <div className="rectangle"></div>
          <Image src={avt}
            className="w-30 h-30 rounded-full mx-auto bg-white"
            alt="Picture of the author"
            width={94.047}
            height={94.047}
          />
          <p className="hcard-name font-ndot47">
            {props.name}
          </p>
          <p className='font-ndot47 yuhack'>yu_hacks(2023)</p>
        </div>
      </div>
    </>
  );
};

export default HackerCard;
