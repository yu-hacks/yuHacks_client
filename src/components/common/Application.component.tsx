"use client"
import { FC, FormEvent, useEffect, useState } from 'react';
import Button from "./Button.component";
import { useQuery, gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation';
import jwt_decode from 'jwt-decode';
import validateToken, {getTokenFromStorage, setTokenInStorage} from '@/utils/token-auth';


const Application = () => {
const router = useRouter();

        
      

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(!getTokenFromStorage() && !validateToken(getTokenFromStorage())) {
            router.push('/login');
        }
        else {
            if((e.nativeEvent as any).submitter.id === 'hacker') {
                router.push('/HackerForm');

            }
        }
        
      };

return (<>
<form onSubmit={handleSubmit}>

<div className="mt-8 flex flex-col sm:flex-row lg:flex-row">
            <div className="order-3 sm:order-1">
              <Button name={"Volunteer Application"} id="voluneer"/>
            </div>

            <div className=" mt-0 lg:mx-2 md: mx-2 sm:mt-0 "></div>
            <div className="order-1 sm:order-3 mx-4">
              <Button name={"Hacker Application"} id="hacker" />
            </div>

            <div className="order-2 sm:order-2 mb-4 "></div>
          </div>
</form>

</>);
}

export default Application;