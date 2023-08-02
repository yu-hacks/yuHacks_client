// "use client"
import React, { FC, PropsWithChildren } from 'react';

type Props = {
  type?: 'opaque' | 'outline';
  pl?: number;
  pt?: number;
  pb?: number;
  pr?: number;
} & PropsWithChildren;

const Card: FC<Props> = ({ children, type, pl, pt, pb, pr }) => {
   
  if(pl !== undefined || pt !== undefined || pb !== undefined || pr !== undefined ){
    if(pl=== undefined){
      pl = 25;
    }
    if(pt=== undefined){
      pt = 25;
    }
    if(pb === undefined){
      pb = 25;
    }
    if(pr=== undefined){
      pr = 25;
    }
    if(type === 'opaque'){
      return(


        <div className=' items-center justify-center'>

          <div className={`  justify-center bg-white bg-opacity-[.13] backdrop-blur-[18px] shadow-sm border-2 border-solid border-black/[.05] rounded-2xl pl-[${pl}px] pt-[${pt}px] pb-[${pb}px] pr-[${pr}px] `}>
          {children}
          </div>   
        </div>
      );
    }else if(type === 'outline'){
      return(


        <div className=' items-center justify-center'>

          <div className={` justify-center shadow-sm border-2 border-solid border-black rounded-2xl pl-[${pl}px] pt-[${pt}px] pb-[${pb}px] pr-[${pr}px]`}>
          {children}
          </div> 
        </div>  
      );
    } else{
      return(
        <div className='  items-center justify-center'>

          <div className={' justify-center  bg-white bg-opacity-[.35]  backdrop-blur-[13px] shadow-sm border-2 border-solid border-black/[.05] rounded-2xl pl-[${pl}px] pt-[${pt}px] pb-[${pb}px] pr-[${pr}px]'}>
            {children}
          </div> 
        </div> 
      );
    }
  }else{
    if(type === 'opaque'){
      return(
        <div className=' items-center justify-center'>
          <div className='  justify-center bg-white bg-opacity-[.13]  backdrop-blur-[18px] shadow-sm border-2 border-solid border-black/[.05] rounded-2xl p-[25px]'>
          {children}
          </div> 
        </div>  
      );
    }else if(type === 'outline'){
      return(
        <div className=' items-center justify-center'>
          <div className=' justify-center shadow-sm border-2 border-solid border-black rounded-2xl p-[25px]'>
          {children}
          </div>   
        </div>
      );
    } 
  }          
  
  return(
    <div className='  items-center justify-center'>
      <div className={' justify-center  bg-white bg-opacity-[.35]  backdrop-blur-[13px] shadow-sm border-2 border-solid border-black/[.05] rounded-2xl p-[25px]'}>
        {children}
      </div> 
    </div> 
  );

};



export default Card;