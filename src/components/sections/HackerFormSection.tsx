"use client"
import React, { FC, useState, useEffect } from 'react'
import SideBar from '../common/SideBar.component';
import { HackerForm } from '../common/HackerForm.component';
import validateToken, {getTokenFromStorage} from '@/utils/token-auth';
import { useRouter, usePathname } from 'next/navigation';


const App = () => {
  const router = useRouter();
  const pathname = usePathname()

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    if(pathname == '/HackerForm') {
        if(!getTokenFromStorage() && !validateToken(getTokenFromStorage())) {
            router.push('/login');
        }
      }
      setHydrated(true);
  }, []);
  if (!hydrated) {
      return (null);
  }


 
  
    return (
    <div className="grid grid-cols-12 h-full w-full  ">
      <div className="col-span-4 sm:col-span-4 md:col-span-3 lg:col-span-3">
        <SideBar />
      </div>
      <div className="col-span-8 sm:col-span-8 md:col-span-9 lg:col-span-9">
        <HackerForm isHacker={true} />
      </div>
    </div>
    );
};

export default App;
