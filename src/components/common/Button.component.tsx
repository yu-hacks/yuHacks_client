import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React, { FC, MouseEventHandler } from 'react'
import {FcGoogle} from 'react-icons/fc'

interface Props {
  name: string;
  type?: 'submit' | 'button' | 'reset';
  id?: string;
  colour? : string;
  fontcolour?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
const Button: FC<Props> = ({name, type, id, colour, fontcolour}) => {

  if(colour ==  null) colour = '[var(--bg-main-accent)]';

  if(fontcolour == null) fontcolour = 'white';

  return (
    <div className='flex justify-center items-center'>
      <button type={type} id={id} className={`hover:opacity-80 transition-all inline-block text-${fontcolour} text-base px-12 py-2 bg-${colour} border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-HindMadurai`}>
      <div className="flex flex-row">
      {id=='Google' && <FcGoogle className='h-6 w-6 py-1'/>}{name}
      </div>
      </button>
    </div>
  )
}

export default Button