"use client"

import React, { FC, FormEvent, useState } from 'react'
import Button from './Button.component'
import { gql, useMutation } from '@apollo/client';
import DownloadIcon from '@mui/icons-material/Download';
import validateToken, {getTokenFromStorage} from '@/utils/token-auth';
import { useRouter } from 'next/navigation';
import jwtDecode from 'jwt-decode';

interface HackerFormProps {
    isHacker?: boolean;
    newFile?: File;
}

interface decodedToken {
    _id: String;
    email: String;
    exp: number,
    iat: number
  }

const HACKER_MUTATION = gql `
mutation ApplyHacker($input: HackerApplicationInput!, $file: Upload) {
    applyHacker(input: $input, file: $file) {
        _id
        firstName
        lastName
        email
        school
        year
        website
        github
        linkedin
        allergies
        dietaryNeeds
        clothingSize
        role
    }
  }
`;




export const HackerForm: FC<HackerFormProps> = ({ isHacker }) => {
    const router = useRouter();
    const [applyHacker, {error, loading}] = useMutation(HACKER_MUTATION, {
        onError: (error) => {
          console.error(error.toString());
          if(error.toString().includes(' User not found')){
            console.log('User Not found');
          }
          else  if(error.toString().includes('Error uploa')){
            console.log('Error uploading')
          }
        }
      });



    const [email, setEmail] = useState<string>('');
    const [firstname, setFirstname] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [school, setSchool] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [website, setWebsite] = useState<string>('');
    const [repo, setRepo] = useState<string>('');
    const [linkedin, setLinkedin] = useState<string>('');
    const [story, setStory] = useState<string>('');
    const [allergy, setAllergy] = useState<string>('');
    const [diet, setDiet] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<string>('');

    const [file, setFile] = useState<File>();

    const [completed, setCompleted] = useState<boolean>(false);



        const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };

      const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstname(event.target.value);
      };

      const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(event.target.value);
      };
    
      const handleSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSchool(event.target.value);
      };
    
      const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYear(event.target.value);
      };

      const handleRepoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRepo(event.target.value);
      };

      const handleDietChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiet(event.target.value);
      };
    
      const handleSelectedValueChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
      };
    
      const handleWebsiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWebsite(event.target.value);
      };

      const handleLinkedinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLinkedin(event.target.value);
      };
    
      const handleAllergyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAllergy(event.target.value);
      };

      const handleStoryChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setStory(event.target.value);
      };

      const handleResumeChange = (value: File) => {
        setFile(value);
      };

      const handleFormReset = async (e: FormEvent<HTMLFormElement>) => {
            setEmail('');
            setFile(undefined);
            setAllergy('');
            setDiet('');
            setFirstname('');
            setYear('');
            setLastname('');
            setSchool('');
            setRepo('');
            setLinkedin('');
            setWebsite('');
            setSelectedValue('');
            setStory('');
      };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {



        e.preventDefault();
        console.log(file);
        console.log(email);
        console.log(firstname);
        console.log(lastname);
        console.log(year);
        console.log(school);
        console.log(linkedin);
        console.log(website);
        console.log(repo);
        console.log(story);
        console.log(allergy);
        console.log(diet);
        console.log(selectedValue);
  
        
        if(getTokenFromStorage() && validateToken(getTokenFromStorage())) {
            const token = getTokenFromStorage();
                if(token) {
                    const decodedToken:decodedToken = jwtDecode(token);
                    const id = decodedToken._id;
                    console.log(id);
                    if(file) {
                    const {data} = await applyHacker({
                        variables: {
                        file,
                          input: {
                            _id: id,
                            school: school,
                            website: website,
                            year: year
                          }, 
                        }, 
                      });
                      if(data?.applyHacker) {
                        console.log('Application Successful');
                        setCompleted(true);
                      };

                    }

                }
                else {
                    console.log("token invalid, even tho our first check was valid?");
                    router.push('/login');
                }
            
        }
        else {
            console.log("invalid session");
            router.push('/login');
        }
        
      };


    return (
        <div className='h-[100%] mx-auto bg-[#F6F6F6] px-4 sm:px-4 md:px-10 lg:px-20'>
            {!completed ?
            <form onSubmit={handleSubmit} onReset={handleFormReset} className='pt-24 pb-10'>
                <h1 className={`font-HindMadurai text-[32px] font-bold text-black`}>Hacker Application</h1>
                <hr className='h-[1.5px] bg-black/20' />
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>General</legend>
                    <label className={`text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Email *
                        <input className='w-full text-black h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={email} onChange={handleEmailChange} type="email" name="email"  placeholder='example@gmail.com' required />
                    </label>
                    <fieldset className={`mt-3 sm:flex sm:justify-between sm:flex-nowrap sm:gap-9 sm:items-end`}>
                        <label className={`sm:flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>First Name *
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={firstname} onChange={handleFirstNameChange} type="text" name="first-name" placeholder='John' required />
                        </label>
                        <label className={`sm:mt-0 mt-3 sm:flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Last Name *
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={lastname} onChange={handleLastNameChange} type="text" name="last-name" placeholder='Doe' required />
                        </label>
                    </fieldset>
                    <fieldset className={`mt-3 sm:flex sm:justify-between sm:flex-nowrap sm:gap-9 sm:items-end`}>
                        <label className={`sm:flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>School *
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={school} onChange={handleSchoolChange} type="text" name="school" placeholder='York University' required />
                        </label>
                        <label className={`sm:mt-0 mt-3 sm:flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Year *
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={year} onChange={handleYearChange} type="text" name="year" placeholder='3rd Year' required />
                        </label>
                    </fieldset>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>Portfolio</legend>
                    <label className={`text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Website
                        <input className={`w-full text-black h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]`} value={website} onChange={handleWebsiteChange} type="text" name="website" placeholder='www.mywebsite.com' />
                    </label>
                    <fieldset className={`mt-3 sm:flex sm:justify-between sm:flex-nowrap sm:gap-9 sm:items-end`}>
                        <label className={`sm:flex-grow text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Your Repository (Github, Gitlab, etc.)
                            <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={repo} onChange={handleRepoChange} type="text" name="repo" placeholder='www.github.com/username' />
                        </label>
                        <label className={`sm:flex-grow block text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Linkedin Page
                            <input className='sm:mt-0 mt-3 w-full block text-black h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={linkedin} onChange={handleLinkedinChange} type="text" name="linkedin" placeholder='www.linkedin.com/username' />
                        </label>
                    </fieldset>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Resume (in PDF Format)</label>
                    <FileDragDrop resume={file} setResume={handleResumeChange}/>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Say something about yourself in 500 words or less
                        <textarea className={`w-full text-black p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]`} rows={7} value={story} onChange={handleStoryChange} name="story" placeholder='Now, tell us your story...'></textarea>
                    </label>
                </fieldset>
                <fieldset className={`mt-14`}>
                    <legend className={`text-[#C3C3C3] font-HindMadurai text-base font-semibold`}>Special Requirements</legend>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Do you have any allergy or need medical assistance?
                        <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={allergy} onChange={handleAllergyChange} type="text" name="allergy" placeholder='We’re allergic to bad vibes :)' />
                    </label>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Do you have any special dietary needs?
                        <input className='w-full text-black block h-12 p-6 font-HindMadurai text-sm bg-white border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]' value={diet} onChange={handleDietChange} type="text" name="diet" placeholder='We’re allergic to bad vibes :)' />
                    </label>
                    <label className={`block mt-3 text-sm font-HindMadurai font-medium text-black text-opacity-[0.55]`}>Clothing Size
                        <select
                            className={`w-[49%] block h-12 px-5 font-HindMadurai text-sm text-black border-[2px] border-solid border-black border-opacity-[0.13] rounded-[4px]`}
                            name='size'
                            value={selectedValue}
                            onChange={handleSelectedValueChange}
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
                    {!isHacker && <Button bgColor='bg-[#DE4F30]' color='text-white' type="reset" name="Reject" />}
                    <div className={`flex justify-end flex-col sm:flex-col md:flex-row lg: flex-row ${isHacker && 'w-full'}`}>
                        <div className="mr-8">
                            <Button bgColor='bg-transparent' color='text-black' type="reset" name="Clear" />
                        </div>
                        
                        <div className="mr-8 mt-4 sm:mt-4 md:mt-0 lg: mt-0"> 
                            <Button bgColor='bg-[#4F4F4F]' color='text-white' type="submit" name="Submit" />
                        </div>
                    </div>
                </fieldset>
            </form> :  <div className="flex flex-col mx-auto pt-96 max-w-[350px] text-center  font-HindMadurai">Application submitted successfully! We will reach out to you soon.           <button className='hover:bg-[#cfcecc] hover:rounded-[6px] h-[39px] w-[150px] sm:w-[150px] md:w-[190px] lg:w-[190px] mb-[10px] mt-4 mx-auto text-[14px] font-bold'>Edit Information</button>
</div>   
        }
        </div> 
    )
}

interface FileDragDrop {
    resume?: File;
    setResume: (value: File) => void;
}

const FileDragDrop: FC<FileDragDrop> = ({resume, setResume}) => {

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
            setResume(newFile);
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
                setResume(newFile);
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
            {uploadedFile ? <Button onClick={handleButtonClick} bgColor='bg-[#4F4F4F]' color='text-white' Icon={DownloadIcon} name={`${uploadedFile.name}`} /> : "Click or drag and drop your resume here"}
        </div>
    )
}





