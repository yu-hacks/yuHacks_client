import React, { FC } from 'react'
import './LoginRegistration.css';
import Link from 'next/link';
// import Button from '@/components/common/Button.component'
import {BsCursorFill} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'

const LoginRegistration:FC = () => {
    

    return (
        <div className='outer justify-center'>
                <div className='flex-row '>
                    <div className='top-icon rounded-md ring-1 ring-inset ring-gray-300 bg-gradient-to-b from-gray-400 '></div>
                    <RxCross2 className="cross ml-auto"/>
                </div>
                
                <div className="circle rounded-full m-auto p-5 justify-center align-center">
                    <BsCursorFill className='flex icon-flip m-auto text-white' size='6x'/>
                </div>


                <div>
                    <form className='m-auto' action="#" method="POST">
                        <div>
                            <label className='email m-auto text text-sm'>Email</label>
                            <br />
                            <input className='email-input p-2' type="email" name="email" value="example@mail.com"/>
                        </div>
                        
                        <div>
                            <label className='password m-auto text text-sm'>Password</label>                        
                            <br />
                            <input className='password-input p-2' type="password" name="password" value="***********"/>

                        </div>
                        <div>
                            <Link href="/" className='sign-up text-black text  '>Sign Up</Link>
                            {/* <Button className='m-auto' name={"Login"}/> type="submit" */}
                        </div>
                    </form>
                </div>
        </div>
    )

}

export default LoginRegistration