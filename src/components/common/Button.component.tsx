import React, { FC } from 'react'

interface Props {
  name: string;
  type: string;
}
const Button: FC<Props> = (props) => {
  return (
    <div>
      {(props.type === 'submit' || props.type === 'reset') ?
        <input type={props.type} className={`hover:opacity-80 transition-all inline-block text-white text-base px-12 py-2 bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-Arvo`} value={props.name} /> : <button className={`hover:opacity-80 transition-all inline-block text-white text-base px-12 py-2 bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-Arvo`}>
          {props.name}
        </button>}
    </div>
  )
}

export default Button