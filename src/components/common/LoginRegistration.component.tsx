"use client"; 
import React, { FormEvent, useState } from 'react'
import '../../styles/LoginRegistration.css';
import Link from 'next/link';
// import Button from '@/components/common/Button.component'
import {BsCursorFill} from 'react-icons/bs'
import {RxCross2} from 'react-icons/rx'


const LoginRegistration = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [pwdConfirm, setPwdConfirm] = React.useState('');
    const [error, setError] = React.useState('');

    const handleLogin = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        hide('err1');
        hide('err2');
        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
          };

        if (!target.email.value) {
            unhide('err1');
        }
        if(!target.password.value){
            unhide('err2');
        }
    };

    const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        hide('err3');
        hide('err4');
        hide('err5');
        hide('close');

        const target = event.target as typeof event.target & {
            email: { value: string };
            password: { value: string };
            pwdConfirm: {value: string};
        };
        var msg = '';
        var pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        if (!target.email.value) {
            unhide('err3');
        }
        if(!target.password.value){
            unhide('err4');
        }
        if(!target.pwdConfirm.value){
            unhide('err5');
        }

        if((target.password.value && target.pwdConfirm.value) && target.password.value != target.pwdConfirm.value){
            msg = 'Passwords do not match.';
            setError(msg);
            unhide('close');
        }

        if(target.password.value && !target.password.value.match(pwd)){
            setError(msg + 'Password must be minimum 8 characters with a mix of uppercase letters, lowercase letters, numbers, and special characters.')
            unhide('close');
        }
        
    };
   
    const unhide = (name: string) => {
        var button = document.getElementById(name) as HTMLInputElement
        var text = ' * required';
        if(button){
            button.style.visibility = "visible";
        }

        if(name == "err3" || name == "err1"){
            setEmail(text);
        }else if(name == "err4" || name == "err2"){
            setPassword(text);
        }else if(name == "err5"){
            setPwdConfirm(text);
        }
        
    }
   
    const hide = (name: string) => {
        var button = document.getElementById(name) as HTMLInputElement
        if(button){
            button.style.visibility = "hidden";
        }

        if(name == "err3" || name == "err1"){
            setEmail('');
        }else if(name == "err4" || name == "err2"){
            setPassword('');
        }else if(name == "err5"){
            setPwdConfirm('');
        }else if(name == "close"){
            setError('');
        }
    }

    function signUpView() {
        var signUp = document.getElementById('sign-up') as HTMLInputElement
        var logIn = document.getElementById('login') as HTMLInputElement

        hide('err1');
        hide('err2');
        hide('close');
        signUp.style.display = "block";
        logIn.style.display = "none";
    }

    function loginView() {
        var signUp = document.getElementById('sign-up') as HTMLInputElement
        var logIn = document.getElementById('login') as HTMLInputElement

        hide('err3');
        hide('err4');
        hide('err5');
        hide('close');
        signUp.style.display = "none";
        logIn.style.display = "block";
    }

    return (
        <div className='outer justify-center'>
                <div className='flex-row '>
                    <div className='top-icon rounded-md ring-1 ring-inset ring-gray-300 bg-gradient-to-b from-gray-400 '></div>
                    <RxCross2 className="cross ml-auto"/>
                </div>
                
                <div className="circle rounded-full m-auto p-5 justify-center align-center">
                    <BsCursorFill className='flex icon-flip m-auto text-white' size='6x'/>
                </div>


                <div id='login'>
                    {/* {email && <div id="errorMessage" className="bg-red-100 border text-xs border-red-400 text-red-700 px-2 py-1 rounded relative" role="alert">
                        <strong className="font-bold">Error! </strong>
                        <span id="error" className="block sm:inline"></span>
                        <span onClick={hide} className="absolute top-0 bottom-0 right-0 px-2 py-1">
                            <svg className="fill-current h-4 w-4 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>} */}

                    <form className='m-auto' onSubmit={handleLogin} name='loginForm' action='#' method="POST">
                        <div>
                            <label className='email m-auto text text-sm' htmlFor='email'>Email{email && <span id='err1' style={{color: 'red'}}>{email}</span>}</label>
                            <br />
                            <input className='email-input p-2' onChange={() => hide('err1')} type="email" name="email" id='email' placeholder='example@mail.com'/>
                        </div>
                        
                        <div>
                            <label className='password m-auto text text-sm' htmlFor='password'>Password{password && <span id='err2' style={{color: 'red'}}>{password}</span>}</label>                        
                            <br />
                            <input className='password-input p-2' onChange={() => hide('err2')} type='password' name='password' id='password' placeholder="***********"/>
                        </div>

                        <div>
                            {/* <Button className='main-button' name={"Login"}/> type="submit" */}
                            <button onClick={signUpView} className='sign-up text-black text' type="reset">Sign Up</button>
                            <button className='main-button' type='submit'>Login</button>
                        </div>
                    </form>

                </div>

                <div id='sign-up' style={{display: 'none'}}>
                    {error && <div id="close" className="bg-red-100 border text-xs border-red-400 text-red-700 px-2 py-1 rounded relative" role="alert">
                        <strong className="font-bold">Error! </strong>
                        <span  className="block sm:inline">{error}</span>
                        <span onClick={() => hide('close')} className="absolute top-0 bottom-0 right-0 px-2 py-1">
                            <svg className="fill-current h-4 w-4 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                        </span>
                    </div>}

                    <form className='m-auto'  onSubmit={handleSignUp} name='signUpForm' action='#' method="POST"  >
                        <div>
                            <label className='c-email m-auto text text-sm' htmlFor='email'>Email{email && <span id='err3' style={{color: 'red'}}>{email}</span>}</label>
                            <br />
                            <input className='c-email-input p-2' onChange={() => hide('err3')} type="email" name="email" id='email' placeholder='example@mail.com'/>
                        </div>
                        
                        <div>
                            <label className='c-password m-auto text text-sm' htmlFor='password'>Password{password && <span id='err4' style={{color: 'red'}}>{password}</span>}</label>                        
                            <br />
                            <input className='c-password-input p-2' onChange={() => hide('err4')} type='password' name='password' id='password' placeholder="***********"/>
                        </div>

                        <div>
                            <label className='confirm-password m-auto text text-sm' htmlFor='pwdConfirm'>Confirm password{pwdConfirm && <span id='err5' style={{color: 'red'}}>{pwdConfirm}</span>}</label>                        
                            <br />
                            <input className='confirm-password-input p-2' onChange={() => hide('err5')} type='password' name='pwdConfirm' id='pwdConfirm' placeholder="***********"/>
                        </div>

                        <div>
                            {/* <Button className='main-button' name={"Sign Up"}/> type="submit" */}
                            <button onClick={loginView} className='sign-up text-black text' type="reset">Login</button>
                            <button className='main-button' type="submit">Sign Up</button>
                        </div>
                    </form>

                </div>
        </div>
    )

}

export default LoginRegistration





