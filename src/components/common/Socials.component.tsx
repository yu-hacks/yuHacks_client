import React, { FC } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import linkedin from '@/public/images/LinkedIn.png';
import instagram from '@/public/images/Instagram.png';
import threads from '@/public/images/threads.png';

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
          <a href="https://www.linkedin.com/company/yuhacks/" target="_blank">
            <Image src={linkedin} className={`mx-2`} alt={'linkedin logo'} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/yuhacks/" target="_blank">
            <Image src={instagram} className="mx-2" alt={'instagram logo'} />
          </a>
        </li>
        <li>
          <a href="https://www.threads.net/@yuhacks" target="_blank">
            <Image src={threads} className="mx-2" alt={'threads logo'} />
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
