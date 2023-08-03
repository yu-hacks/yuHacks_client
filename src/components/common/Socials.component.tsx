import React, { FC } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import linkedin from '@/public/images/LinkedIn.png';
import instagram from '@/public/images/Instagram.png';
import twitter from '@/public/images/Twitter.png';

interface SocialsProps {
  isDarkMode?: boolean;
}

const Socials: FC<SocialsProps> = ({ isDarkMode }) => {
  const socStyle = {
    filter: isDarkMode ? 'brightness(0) invert(1)' : 'none',
  };

  return (
    <div className='flex items-center justify-end' style={socStyle}>
      <ul className="h-10 list-none flex justify-between">
        <li> 
          <a href="/">
            <Image src={linkedin} className={`mx-2`} alt={'linkedin'} />
          </a>
        </li>
        <li>
          <a href="/">
            <Image src={instagram} className="mx-2" alt={'instagram'} />
          </a>
        </li>
        <li>
          <a href="/">
            <Image src={twitter} className="mx-2" alt={'twitter'} />
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
