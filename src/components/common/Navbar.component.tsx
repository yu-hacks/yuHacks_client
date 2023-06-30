import Link from 'next/link'
import React, { FC } from 'react'

const Navbar:FC = () => {
  return (
    <>
    <div className="mt-10 mx-auto max-w-sm">
    <div className="border border-solid border-[#C95656]"></div>
    <ul className="mt-1 flex flex-row items-center justify-between font-Arvo ">
    <Link href="/" className="ml-4 ">ABOUT</Link>
        <Link href="/" className=" ">TIMELINE</Link>
        <Link href="/" className=" ">SPONSORS</Link>
        <Link href="/" className="mr-4 ">FAQ</Link>
    </ul>
    <div className="mt-1 border border-[#58A0D4]"></div>
    </div>
    </>
  )
}

export default Navbar