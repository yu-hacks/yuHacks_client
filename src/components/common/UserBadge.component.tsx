"use client";
import React, { FC, useState, useEffect } from 'react';
import avt from '@/public/images/avatar_default.png';
import Image from 'next/image';
import ImageWithFallback from './ImageFallback';
import PropTypes from 'prop-types';
import '../../styles/UserBadge.css';

//api
// import { getUserData } from '@/utils/http-request';

const UserBadge:FC<{ roles: string }> = ({ roles }) => {
  const [image, setImage] = useState(avt);
  const [name, setName] = useState('');
  let backgroundColor = '';

  if (roles === 'sponsor') {
    backgroundColor = '#E79C2B'; // Set background color for sponsor
  } else if (roles === 'hacker') {
    backgroundColor = '#C95656'; // Set background color for hacker
  } else if (roles === 'organizer') {
    backgroundColor = '#565656'; // Set background color for organizer
  }

  const cardStyle = {
    width: '172.447px',
    height: '222.928px',
    transform: 'rotate(-0.047deg)',
    borderRadius: '8px',
    background: backgroundColor,
    boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.25)',
    textAlign: 'center' as const,
  };

  //will be removed later
  useEffect(() => {
    if (roles === 'hacker') {
      setName('John Doe');
      setImage(avt);
    } else {
      setName('Organizer');
      setImage(avt);
    }
  }, [roles]);

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
      <div className="max-w-sm rounded overflow-hidden shadow-lg" style={cardStyle}>
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

UserBadge.propTypes = {
  roles: PropTypes.string.isRequired,
};

export default UserBadge;
