"use client"
import React, { ChangeEvent, FC, useEffect, useState } from 'react'

interface Props {
  message?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  Error: boolean;
  Disabled: boolean;
}

const InputField: FC<Props> = ({message, value, onChange, placeholder, type, Error, Disabled}) => {

  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  useEffect(() => {
    if (Disabled !== null) setDisabled(Disabled);
     if(Error !== null) setError(Error);
  }, [Disabled, Error]);  



  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-[350px] sm:w-[350px] md:w-[350px] lg:w-[350px] xl:w-[350px] pt-2 items-center justify-center">
          <input type={type} placeholder={placeholder} disabled={isDisabled} value={value} onChange={handleInputChange}
            className={`w-[350px] border pl-4 pr-4 py-3.5 ${isError ? 'border-red-500' : 'border-gray-200'}  ${isDisabled ? 'bg-stone-300' : 'bg-neutral-50'} rounded-md shadow-inner border-2 border-gray-200 focus:border-red-300 outline-none`} />
          {isError && <p className="text-red-500 text-right text-[13px]">{message}</p>}
        </div>
      </div>
    </>
  )
}

export default InputField
