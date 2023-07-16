"use client"
import yuHacks2023Arrow from '@/public/images/yuHacks2023Arrow.png';
import HackerCardLogin from '@/public/images/HackerCardLogin.png';

import Image from 'next/image';
import InputField from '@/components/common/InputField.component';
import Button from '@/components/common/Button.component';
import { FormEvent, useState } from 'react';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useMutation,
    gql
} from "@apollo/client";
import AccentedButton from '@/components/common/AccentedButton.component';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "",
});


const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      userId
      token
      tokenExpiration
    }
  }
  `;

const RESGISTRATION_MUTATION = gql`
  mutation RegisterUser($input: RegisterInput!) {
    registerUser(input: $input) {
      userId
      firstName
      lastName
      email
      role
    }
  }
  `;

export default function LoginPage() {

    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [loginMode, setLoginMode] = useState<boolean>(true);

    // const [login] = useMutation(LOGIN_MUTATION);
    // const [registerUser] = useMutation(RESGISTRATION_MUTATION);


    const handleFirstNameChange = (value: string) => {
        setFirstname(value);
    };

    const handleLastNameChange = (value: string) => {
        setLastname(value);
    };

    const handleEmailChange = (value: string) => {
        setEmail(value);
    };

    const handlePasswordChange = (value: string) => {
        setPassword(value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if ((e.nativeEvent as any).submitter.id === 'login' && loginMode) {

            console.log('Email:', email);
            console.log('Password:', password);
        e.preventDefault();

            // login({
            //     variables: {
            //         input: {
            //             email: email,
            //             password: password
            //         }
            //     }
            // });

        } else if ((e.nativeEvent as any).submitter.id === 'login' && !loginMode) {
            setLoginMode(true);
             

        } else if ((e.nativeEvent as any).submitter.id === 'register' && loginMode) {
            setLoginMode(false);
        }

        else if ((e.nativeEvent as any).submitter.id === 'register' && !loginMode) {

            console.log('firstname:', firstname);
            console.log('lastname:', lastname);
            console.log('Email:', email);
            console.log('Password:', password);
            

            // registerUser({
            //     variables: {
            //         input: {
            //             firstName: firstname,
            //             lastName: lastname,
            //             email: email,
            //             passwodrd: password,
            //         }
            //     }
            // });

        }
        else if ((e.nativeEvent as any).submitter.id === 'Google') {

            console.log('Google ');

        }

        setFirstname('');
        setLastname('');
        setEmail('');
        setPassword('');

    };

    return (
        // <ApolloProvider client={client}>

            <div className="DashboardLoginDesktop w-full h-full relative bg-neutral-100">

                <div className="Logo w-[155px] h-[30px] ml-4 sm:ml-4 mt-12 md:ml-12 lg:ml-12" >
                    <Image src={yuHacks2023Arrow} alt="My Image" width={152} height={27} />
                </div>


                <div className="MainPage flex flex-col max-w-[950px] max-h[505px] sm:flex-col md:flex-row lg:flex-row justify-center align-center mx-auto my-4 sm:my-4 md:my-16 lg:my-16" >

                    <div className="HackerCard w-full  sm:w-full lg:w-1/2 md:w-1/2 flex mb-4 sm:mb-4 md:mb-32 lg:mb-32 justify-center items-center ">

                        <Image src={HackerCardLogin} alt="My Image" width={427} height={475} />
                        {/* <Image src={HackerCardLogin} alt="My Image" width={200} height={200} /> */}

                    </div>

                    <div className={`LoginSection w-full  sm:w-full lg:w-1/2 md:w-1/2 flex justify-center items-center ${loginMode ? 'mb-0' : 'mb-48'}`}>


                        <div className="Login   w-[406px] h-[490px]">

                            <form onSubmit={handleSubmit}>

                                {!loginMode && <div>
                                    <div className="Email mt-8 ml-8 text-neutral-400 text-sm font-medium">First Name</div>
                                    <div className="Email flex ml-8">
                                        <InputField Disabled={false} Error={false} message={'Empty First name'} type="text" placeholder='First name' value={firstname} onChange={handleFirstNameChange} />
                                    </div>


                                    <div className="Email mt-4  ml-8 text-neutral-400 text-sm font-medium">Last Name</div>
                                    <div className="Email flex ml-8">
                                        <InputField Disabled={false} Error={false} message={'Empty Last name'} type="text" placeholder='Last name' value={lastname} onChange={handleLastNameChange} />
                                    </div>

                                </div>}

                                <div className="Email mt-4 ml-8 text-neutral-400 text-sm font-medium">Email</div>
                                <div className="Email flex ml-8">
                                    <InputField Disabled={false} Error={false} message={'Invalid Email'} type="email" placeholder='Email' value={email} onChange={handleEmailChange} />
                                </div>

                                <div className="Password mt-4 ml-8 text-neutral-400 text-sm font-medium">Password</div>

                                <div className="Password flex ml-8">

                                    <InputField Disabled={false} Error={false} message={'Invalid Password'} type="password" placeholder='Password' value={password} onChange={handlePasswordChange} />

                                </div>

                                <div className="mt-8 mx-11 flex flex-row items-center">
                                    <div className="ml-1">
                                        <Button name={'Register'} id={'register'} />
                                    </div>


                                    <div className="mx-3">
                                        <Button name="Login" id={'login'} />
                                    </div>

                                </div>

                                <div className="Frame162 w-[346px] h-[70px] ml-8 py-6 justify-center items-center gap-2.5 inline-flex">
                                    <div className="Line17 grow shrink basis-0 h-[0px] border border-neutral-800 border-opacity-10"></div>
                                    <div className="OrLogInUsing text-center text-neutral-400 text-base font-medium">Or log in using</div>
                                    <div className="Line16 grow shrink basis-0 h-[0px] border border-neutral-800 border-opacity-10"></div>
                                </div>

                                <Button name={'Login with Google'} id={'Google'} colour='var(--light, #FBFBFB)' fontcolour='black' />
                                
                            </form>

                        </div>



                    </div>

                </div>


            </div>
        // </ApolloProvider>

    )
}
