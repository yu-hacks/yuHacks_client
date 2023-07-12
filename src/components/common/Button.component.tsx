import React, { FC, ReactNode } from 'react'
import { IconType } from 'react-icons';

type Icon = (props: IconType) => JSX.Element;

interface Props {
  name: string;
  type: string;
  bgColor: string;
  color: string;
  Ic?: Icon;
}
const Button: FC<Props> = ({name, type, bgColor, color, Ic}) => {
  return (
    <div>
      {(type === 'submit' || type === 'reset') ?
        <input type={type} className={`hover:opacity-80 transition-all inline-block ${color} text-base px-12 py-2 ${bgColor} border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-Arvo`} value={`${Icon ? Icon : ""} ${name}`} /> : <button className={`hover:opacity-80 transition-all inline-block ${color} text-base px-12 py-2 ${bgColor} border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-Arvo`}>
          <div><Ic /></div>
          {name}
        </button>}
    </div>
  )
}

export default Button