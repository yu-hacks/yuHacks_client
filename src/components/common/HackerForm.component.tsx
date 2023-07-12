"use client"

import React, { FC, useRef, useState } from 'react'
import Button from './Button.component'
import { MdFileDownload } from 'react-icons/md'

export const HackerForm: FC = () => {
    const onUpload = (file: File) => {
        console.log(file)
    }
    return (
        <div className='h-screen w-[80%] mx-auto bg-[#F6F6F6]'>
            <form action="#" className='pt-24 pb-10'>
                <h1 className={`font-HindMadurai text-[32px] font-bold text-black`}>Hacker Application</h1>
                <hr className='h-[1.5px] bg-black/20' />
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>General</legend>
                    <label className={`text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Email *
                        <input className='w-full h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="email" name="email" placeholder='example@gmail.com' required />
                    </label>
                    <fieldset className={`mt-3 flex justify-between flex-nowrap gap-9 items-end`}>
                        <label className={`flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>First Name *
                            <input className='w-full block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="first-name" placeholder='John' required />
                        </label>
                        <label className={`flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Last Name *
                            <input className='w-full block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="last-name" placeholder='Doe' required />
                        </label>
                    </fieldset>
                    <fieldset className={`mt-3 flex justify-between flex-nowrap gap-9 items-end`}>
                        <label className={`flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>School *
                            <input className='w-full block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="school" placeholder='York University' required />
                        </label>
                        <label className={`flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Year *
                            <input className='w-full block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="year" placeholder='3rd Year' required />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>Portfolio</legend>
                    <label className={`text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Website
                        <input className={`w-full h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]`} type="text" name="website" placeholder='www.mywebsite.com' />
                    </label>
                    <fieldset className={`mt-3 flex justify-between flex-nowrap gap-9 items-end`}>
                        <label className={`flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Your Repository (Github, Gitlab, etc.)
                            <input className='w-full block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="repo" placeholder='www.mygit.com/...' />
                        </label>
                        <label className={`flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Linkedin Page
                            <input className='w-full block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="linkedin" placeholder='www.linkedin.com/...' />
                        </label>
                    </fieldset>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Resume (in PDF Format)
                        <FileDragDrop onUpload={onUpload} />
                    </label>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Say something about yourself in 500 words or less
                        <textarea className={`w-full p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]`} rows={7} name="story" placeholder='Now, tell us your story...'></textarea>
                    </label>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>Special Requirements</legend>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Do you have any allergy or need medical assistance?
                        <input className='w-full block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="email" name="allergy" placeholder='We’re allergic to bad vibes :)' />
                    </label>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Do you have any special dietary needs?
                        <input className='w-full block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="diet" placeholder='We’re allergic to bad vibes :)' />
                    </label>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Clothing Size
                        <input className='w-[49%] block h-12 p-6 font-Arvo text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="size" placeholder='XS/S/M/L/XL' />
                    </label>
                </fieldset>
                <fieldset className={`flex justify-end gap-1 mt-14`}>
                    <Button bgColor='bg-transparent' color='text-black' type="reset" name="Clear" />
                    <Button bgColor='bg-[#4F4F4F]' color='text-white' type="submit" name="Submit" />
                </fieldset>
            </form>
        </div>
    )
}

interface FileDragDropProps {
    onUpload: (file: File) => void,
}

const FileDragDrop: FC<FileDragDropProps> = ({ onUpload }) => {

    const [uploadedFile, setUploadedFile] = useState<File>();
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (
            e.relatedTarget === undefined || e.currentTarget.contains(e.relatedTarget as Node)
        ) {
            return;
        }

        setIsDragging(false);

    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const newFile = e.dataTransfer.files[0];
        setUploadedFile(newFile);
        onUpload(newFile);
    };

    return (
        <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`w-auto h-24 flex items-center justify-center flex-col flex-nowrap text-base text-[#555555] border-2 border-[rgb(0,0,0)] border-opacity-[0.35] rounded-lg ${isDragging ? '' : 'border-dashed'}`}
        > {uploadedFile ? <Button bgColor='bg-[#4F4F4F]' color='text-white' type="submit" icon={() => <MdFileDownload/>} name={`${uploadedFile.name}`} /> : ""}
        </div>
    )
}





