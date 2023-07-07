"use client"
import React, { FC} from 'react';
import {MdDownload} from 'react-icons/md'
import {FaChevronRight} from 'react-icons/fa'

// example
{/* <AccentedButton name='sec. Direction Button' buttonType='action' primary={true} fullWidth={true} onClick={}/> */}
/
type Props = {
  name: string;
  buttonType: string;
  primary: boolean;
  fullWidth: boolean;
  onClick: () => void;
};

const AccentedButton: FC<Props> = ({name, buttonType, primary, fullWidth, onClick}) => {
  const normalPrimary = `flex px-12 py-2 transition-all text-white text-base bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md hover:border-4 focus:border-4 focus:shadow-lg rounded-xl font-HindMadurai font-semibold`;
  const normalSecondary =`flex px-12 py-2 transition-all text-black text-base hover:shadow-md hover:rounded-xl focus:shadow-lg focus:rounded-xl font-HindMadurai font-semibold`;
  const fullPrimary = 'w-full w-min-[300px] flex justify-center py-2 transition-all text-white text-base bg-[var(--bg-main-accent)] border-2 border-solid border-black/[.13] shadow-md hover:border-4 focus:border-4 focus:shadow-lg rounded-xl font-HindMadurai font-semibold';
  const fullSecondary = 'w-full w-min-[300px] flex justify-center py-2 transition-all text-black text-base hover:shadow-md hover:rounded-xl focus:shadow-lg focus:rounded-xl font-HindMadurai font-semibold';
  const full = 'px-[35px] py-[25px] sm:px-5 sm:w-1/2 md:w-4/12 lg:4/12 items-center justify-center';
         if(fullWidth){
          if(primary){
            if(buttonType === 'default'){
              return (
                <div className={full}>
                  <button onClick={onClick} className={fullPrimary}>{name}</button> 
                </div>
              )
             }else if(buttonType === 'direction'){
              return (
                <div className={full}>
                  <button onClick={onClick} className={fullPrimary}>{name}&ensp;<FaChevronRight className='h-6 w-6 py-1'/></button> 
                </div>
              );
             }else if(buttonType === 'action'){
              return (
                <div className={full}>
                  <button onClick={onClick} className={fullPrimary}><MdDownload className='h-7 w-7 py-[2px]'/>&ensp;{name}</button> 
                </div>
              );
             }
          }else{
            if(buttonType === 'default'){
              return (
                <div className={full}>
                  <button onClick={onClick} className={fullSecondary}>{name}</button> 
                </div>
              )
             }else if(buttonType === 'direction'){
              return (
                <div className={full}>
                  <button onClick={onClick} className={fullSecondary}>{name}&ensp;<FaChevronRight className='h-6 w-6 py-1'/></button> 
                </div>
              );
             }else if(buttonType === 'action'){
              return (
                <div className={full}>
                  <button onClick={onClick} className={fullSecondary}><MdDownload className='h-7 w-7 py-[2px]'/>&ensp;{name}</button> 
                </div>
              );
             }
          }
          
         }else{
          if(primary){
            if(buttonType === 'default'){
              return (
                <button onClick={onClick} className={normalPrimary}>{name}</button> 
              )
             }else if(buttonType === 'direction'){
              return (
                <button onClick={onClick} className={normalPrimary}>{name}&ensp;<FaChevronRight className='h-6 w-6 py-1'/></button> 
              );
             }else if(buttonType === 'action'){
              return (
                <button onClick={onClick} className={normalPrimary}><MdDownload className='h-7 w-7 py-[2px]'/>&ensp;{name}</button> 
              );
             }
          }else{
            if(buttonType === 'default'){
              return (
                <button onClick={onClick} className={normalSecondary}>{name}</button> 
              )
             }else if(buttonType === 'direction'){
              return (
                <button onClick={onClick} className={normalSecondary}>{name}&ensp;<FaChevronRight className='h-6 w-6 py-1'/></button> 
              );
             }else if(buttonType === 'action'){
              return (
                <button onClick={onClick} className={normalSecondary}><MdDownload className='h-7 w-7 py-[2px]'/>&ensp;{name}</button> 
              );
             }
          }
         }
      
         return (
          <button className={normalPrimary}>unknown</button> 
        );
  
};


export default AccentedButton;