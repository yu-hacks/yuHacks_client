import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { FC } from 'react'

interface Props {
  name: string;
  type?: string;
  bgColor: string;
  color: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  onClick?: () => void;
}
const Button: FC<Props> = ({ name, type, bgColor, color, Icon, onClick }: Props) => {
  return (
    <>
      {(type === 'submit' || type === 'reset') ?
        <button type={type} className={`hover:opacity-80 transition-all inline-block ${color} sm:text-base text-xs sm:px-12 sm:py-2 px-6 py-1 ${bgColor} border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-Arvo`}>
          {Icon && <Icon />}
          {name}
        </button>
        :
        <button type='button' onClick={onClick} className={`hover:opacity-80 transition-all inline-block ${color} sm:text-base text-xs sm:px-12 sm:py-2 px-6 py-1 ${bgColor} border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-Arvo`}>
          {Icon && <Icon />}
          {name}
        </button>}
    </>
  )
}

export default Button