import React, { FC } from 'react'

const Button: FC = () => {
  return (
    <div className='flex h-[100px] gap-4 justify-center items-center space-between'>
      <button className={`inline-block text-white text-base px-12 py-2 bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-Arvo`}>
        Login
      </button>
      <button className={`inline-block text-white text-base px-12 py-2 bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md rounded-2xl font-Arvo`}>
        Sponsor Us
      </button>
    </div>
  )
}

export default Button