"use client"

import React, { FC, useState } from 'react'
import Image from 'next/image'
import vector from '@/public/images/Vector.png'
import '../../styles/AboutPage1.css'
import Card from '../common/Card.component'

interface questions {
    question: string;
    answer: string;
    id: number;
}

const faqData: questions[] = [
    { id:1, question: 'What is yuHacks?', answer: 'yuHacks(2023) is the sixth iteration of this student-led event. Our goal is to provide a fun, inclusive, and growth-focused experience that prepares participants for their future tech careers.' },
    { id:2, question: 'Who can participate?', answer: 'ans1' },
    { id:3, question: 'What if I’ve never participated in a hackathon before?', answer: 'ans2' },
    
]
const faqData2: questions[] = [
    { id:4, question: 'What kind of activities will there be?', answer: 'ans3' },
    { id:5, question: 'How many people can be on one team?', answer: 'ans4' },
    { id:6, question: 'What if I am not in Ontario?', answer: 'ans5' }
]

function open (id : string, arrowid: string){
    var item = document.getElementById(id) as HTMLInputElement
    var arrow = document.getElementById(arrowid) as HTMLInputElement

    if(item){
        if (item.style.height === "0px") {
            item.style.height = "auto"
            arrow.setAttribute("class", "rotated");
        } else {
            item.style.height = "0px";
            arrow.setAttribute("class", "rotate-back");
        }
    }
}

const FAQ: FC = () => {
    const [faq, setFaqs] = useState<questions[]>(faqData);
    const [faq2, setFaqs2] = useState<questions[]>(faqData2);

    return(
        <div className="md:flex RadicalBackground  w-full h-100vh mx-auto min-[320px]:px-3 md:px-3 lg:px-20 py-12">
            <div className='min-[320px]:m-auto md:m-1 min-[320px]:w-[350px] sm:w-[500px] md:w-full xl:w-screen justify-center align-middle'>
                <Card type="opaque">
                    <div className=' min-[320px]:p-3 sm:p-8 md:p-5 align-middle'>
                            <h1 className='text-white text-[39px] text-center font-HindMadurai lg:mx-20 mt-5'>Frequently asked questions</h1>
                            <br/><br/>

                            <div className='flex-wrap grid-container justify-center lg:mx-10 mb-8'>
                                <div>
                                    {faq.map((q, index) => {
                                        return(
                                            <Question question={q.question} answer={q.answer} id={q.id}/>
                                        )
                                    })}
                                </div>
                                <div>
                                    {faq2.map((q, index) => {
                                        return(
                                            <Question question={q.question} answer={q.answer} id={q.id}/>
                                        )
                                    })}
                                </div>
                                
                            </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

type Props = {
    question: string;
    answer: string;
    id: number;
}

const Question: FC<Props> = ({question, answer, id}) => {
    const st={
        overflow:'hidden', 
        transition:'0.5s', 
        height:'0px'
    };

    return(
        <div className='mt-1 sm:mx-2 sm:px-2 md:mx-5 lg:mx-12 '>
            <div className='flex'>
                <div onClick={() => open(`answer+${id}`, `arrow+${id}`)} className='flex cursor-pointer'>
                    <Image className='w-[12px] h-[20px] mr-2'
                        src={vector} 
                        alt='arrow' 
                        id={`arrow+${id}`} 
                    /> 
                    <h3 className='text-white font-HindMadurai text-[16px] hover:text-slate-300'>{question}</h3>
                </div>
            </div>
            <p className='text-[#c3c3c3] font-HindMadurai text-[16px] sm:w-[291px] my-3 ml-5' id={`answer+${id}`} style={st}>{answer}</p>
        </div> 
    );
};



export default FAQ