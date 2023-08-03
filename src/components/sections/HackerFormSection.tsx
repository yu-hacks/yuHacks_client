import React from 'react';
import SideBar from '../common/SideBar.component';
import { HackerForm } from '../common/HackerForm.component';


const HackerFormSection = () => {
    return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10">
        <HackerForm isHacker={true} />
      </div>
    </div>
    );
};

export default HackerFormSection;
