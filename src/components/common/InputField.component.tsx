"use client"
import React, { FC, useState } from 'react'

interface Props {
  message?: string;
}

const InputField: FC<Props> = (props) => {

  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);


  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 pt-2 items-center justify-center">
          <input type="text" placeholder="Some placeholder..." disabled={isDisabled}
            className={`w-full border pl-4 pr-4 py-3.5 ${isError ? 'border-red-500' : 'border-gray-200'}  ${isDisabled ? 'bg-stone-300' : 'bg-neutral-50'} rounded-md shadow-inner border-2 border-gray-200 focus:border-red-300 outline-none`} />
          {isError && <p className="text-red-500 text-right text-[13px]">{props.message}</p>}
        </div>
      </div>
    </>
  )
}

export default InputField
