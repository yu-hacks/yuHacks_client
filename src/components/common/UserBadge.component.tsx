"use client"
import React, { FC, useState } from 'react';
import Image from 'next/image';
import ImageWithFallback from './ImageFallback';
import PropTypes from 'prop-types';

// avatar
import avt from '@/public/images/avatar_default.png';
import sponsorIcon from '@/public/images/sponsorIcon.png';
import organizerIcon from '@/public/images/organizerIcon.png';

// styles
import '../../styles/UserBadge.css';

const UserBadge: FC<{ roles: string }> = ({ roles }) => {
  let backgroundColor = '';
  const [name, setName] =  useState('John Doe');
  let image = avt;

  if (roles === 'sponsor') {
    backgroundColor = '#E79C2B';
    image = sponsorIcon;
  } else if (roles === 'hacker') {
    backgroundColor = '#C95656';
    image = avt;
  } else if (roles === 'organizer') {
    backgroundColor = '#565656';
    image = organizerIcon;
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

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" style={cardStyle}>
      <div className="px-6 py-4">
        <div className="rectangle"></div>
        <ImageWithFallback
          src={image}
          fallbackSrc={avt}
          className="w-30 h-30 rounded-full mx-auto bg-white"
          alt="Picture of the author"
          width={94.047}
          height={94.047}
        />
        <p className="hcard-name font-ndot47">{name}</p>
        <p className="font-ndot47 yuhack">yu_hacks(2023)</p>
      </div>
    </div>
  );
};

UserBadge.propTypes = {
  roles: PropTypes.string.isRequired,
};

export default UserBadge;
