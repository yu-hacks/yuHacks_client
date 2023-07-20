import React, { FC } from 'react';
import Image from 'next/image';
import linkedin from '@/public/images/LinkedIn.png';
import instagram from '@/public/images/Instagram.png';
import twitter from '@/public/images/Twitter.png';
import tiktok from '@/public/images/TikTok.png';
import PropTypes from 'prop-types';

interface SocialsProps {
  isDarkMode?: boolean;
}

const Socials: FC<SocialsProps> = ({ isDarkMode }) => {
  const socStyle = {
    filter: isDarkMode ? 'brightness(0) invert(1)' : 'none',
  };

  return (
    <div className='flex justify-center items-center' style={socStyle}>
      <ul className="h-10 list-none w-48 flex justify-between">
        <li> 
          <a href="/">
            <Image src={linkedin} className={`hover:opacity-60 w-9 h-9`} alt={'linkedin'} />
          </a>
        </li>
        <li>
          <a href="/">
            <Image src={instagram} className="hover:opacity-60 w-9 h-9" alt={'instagram'} />
          </a>
        </li>
        <li>
          <a href="/">
            <Image src={twitter} className="hover:opacity-60 w-9 h-9" alt={'twitter'} />
          </a>
        </li>
      </ul>
    </div>
  );
};

Socials.propTypes = {
  isDarkMode: PropTypes.bool,
};

export default Socials;
