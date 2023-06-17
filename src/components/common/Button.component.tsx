import React from 'react'
import './Button.component.css'

const Button = () => {
  return (
    <div>
    <button className="btn-font text-white text-base px-12 py-2 absolute bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md rounded-2xl">
      Login
    </button>
    <br/><br/>
    <button className="btn-font text-white text-base px-12 py-2 absolute bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md rounded-2xl">
      Hello
    </button>
    </div>
  )
}

export default Button