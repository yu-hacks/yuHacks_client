"use client"

import React, { FC, useState } from 'react'
import Button from './Button.component'
import DownloadIcon from '@mui/icons-material/Download';

interface HackerFormProps {
    isHacker: boolean;
}
export const HackerForm: FC<HackerFormProps> = ({ isHacker }) => {
    return (
        <div className='h-[100%] mx-auto bg-[#F6F6F6] px-20'>
            <form action="#" className='pt-24 pb-10'>
                <h1 className={`font-HindMadurai text-[32px] font-bold text-black`}>Hacker Application</h1>
                <hr className='h-[1.5px] bg-black/20' />
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>General</legend>
                    <label className={`text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Email *
                        <input className='w-full text-black h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="email" name="email" placeholder='example@gmail.com' required />
                    </label>
                    <fieldset className={`mt-3 sm:flex sm:justify-between sm:flex-nowrap sm:gap-9 sm:items-end`}>
                        <label className={`sm:flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>First Name *
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="first-name" placeholder='John' required />
                        </label>
                        <label className={`sm:mt-0 mt-3 sm:flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Last Name *
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="last-name" placeholder='Doe' required />
                        </label>
                    </fieldset>
                    <fieldset className={`mt-3 sm:flex sm:justify-between sm:flex-nowrap sm:gap-9 sm:items-end`}>
                        <label className={`sm:flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>School *
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="school" placeholder='York University' required />
                        </label>
                        <label className={`sm:mt-0 mt-3 sm:flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Year *
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="year" placeholder='3rd Year' required />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>Portfolio</legend>
                    <label className={`text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Website
                        <input className={`w-full text-black h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]`} type="text" name="website" placeholder='www.mywebsite.com' />
                    </label>
                    <fieldset className={`mt-3 sm:flex sm:justify-between sm:flex-nowrap sm:gap-9 sm:items-end`}>
                        <label className={`sm:flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Your Repository (Github, Gitlab, etc.)
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="repo" placeholder='www.github.com/username' />
                        </label>
                        <label className={`sm:flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Linkedin Page
                            <input className='sm:mt-0 mt-3 w-full block text-black h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="linkedin" placeholder='www.linkedin.com/username' />
                        </label>
                    </fieldset>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Resume (in PDF Format)</label>
                    <FileDragDrop />
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Say something about yourself in 500 words or less
                        <textarea className={`w-full text-black p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]`} rows={7} name="story" placeholder='Now, tell us your story...'></textarea>
                    </label>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>Special Requirements</legend>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Do you have any allergy or need medical assistance?
                        <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="email" name="allergy" placeholder='We’re allergic to bad vibes :)' />
                    </label>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Do you have any special dietary needs?
                        <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' type="text" name="diet" placeholder='We’re allergic to bad vibes :)' />
                    </label>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Clothing Size
                        <select
                            className={`w-[49%] block h-12 px-5 font-HindMadurai text-sm text-black border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]`}
                            name='size'
                            defaultValue={""}
                        >
                            <option className='text-lg' value="" disabled>XS/S/M/L/XL</option>
                            <option className='text-lg' value="XS">XS</option>
                            <option className='text-lg' value="S">S</option>
                            <option className='text-lg' value="M">M</option>
                            <option className='text-lg' value="L">L</option>
                            <option className='text-lg' value="XL">XL</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset className={`flex justify-between mt-14`}>
                    {!isHacker && <Button bgColor='bg-[#DE4F30]' colour='text-white' type="reset" name="Reject" />}
                    <div className={`flex justify-end ${isHacker && 'w-full'}`}>
                        <div className="mr-8">
                            <Button bgColor='bg-transparent' colour='text-black' type="reset" name="Clear" />
                        </div>
                        
                        <div className="mr-8"> 
                            <Button bgColor='bg-[#4F4F4F]' colour='text-white' type="submit" name="Submit" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}


const FileDragDrop: FC = () => {

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
        const fileExtension = newFile.name.split('.').pop()?.toLowerCase();

        if (fileExtension === 'pdf') {
            setUploadedFile(newFile);
        } else {
            alert('Invalid file format. Only PDF files are accepted.');
        }
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.pdf';
        input.onchange = (e: Event) => {
            const newFile = (e.target as HTMLInputElement).files?.[0];
            if (newFile) {
                setUploadedFile(newFile);
            }
        };
        input.click();
    }

    const handleButtonClick = () => {
        if (uploadedFile) {
            const downloadUrl = URL.createObjectURL(uploadedFile);
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = uploadedFile.name;
            a.click();
            URL.revokeObjectURL(downloadUrl);
        }
    };

    return (
        <div
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`font-HindMadurai sm:text-lg text-base cursor-pointer w-auto h-24 flex items-center justify-center flex-col flex-nowrap text-[#555555] border-2 border-[rgb(0,0,0)] border-opacity-[0.35] rounded-lg ${isDragging ? '' : 'border-dashed'}`}
        >
            {uploadedFile ? <Button onClick={handleButtonClick} bgColor='bg-[#4F4F4F]' colour='text-white' name={`${uploadedFile.name}`} /> : "Click or drag and drop your resume here"}
        </div>
    )
}





