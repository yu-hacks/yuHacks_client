"use client"

import React, { FC, useState } from 'react'
import Image from 'next/image'
import vector from '@/public/images/Vector.png'
import '../../styles/AboutPage1.css'
import Card from '../common/Card.component'

interface questions {
    question: string;
    answer: string;
}

interface FAQ {
    id?: string;
}

const faqData: questions[] = [
    { question: 'What is yuHacks?', answer: 'yuHacks(2023) is the sixth iteration of this student-led event. Our goal is to provide a fun, inclusive, and growth-focused experience that prepares participants for their future tech careers.' },
    { question: 'Who can participate?', answer: 'ans1' },
    { question: 'What if I’ve never participated in a hackathon before?', answer: 'ans2' },
    { question: 'What kind of activities will there be?', answer: 'ans3' },
    { question: 'How many people can be on one team?', answer: 'ans4' },
    { question: 'What if I am not in Ontario?', answer: 'ans5' }
]

function open(id: string, arrowid: string) {
    var item = document.getElementById(id) as HTMLInputElement
    var arrow = document.getElementById(arrowid) as HTMLInputElement

    if (item) {
        if (item.style.display === "none") {
            item.style.display = "block";
            arrow.setAttribute("class", "rotated");
        } else {
            item.style.display = "none";
            arrow.setAttribute("class", "rotate-back");
        }
    }
}

const FAQ: FC<FAQ> = ({id}) => {
    const [faq, setFaqs] = useState<questions[]>(faqData);

    return (
        <div id={id} className="w-full h-100vh  min-[320px]:px-3 md:px-3 lg:px-20 py-12 m-auto">
            <div className="min-[320px]:m-auto min-[320px]:w-[350px] sm:w-[500px] md:w-full justify-center align-middle">
                <Card type="opaque">
                    <h1 className='text-white text-[39px] text-center font-HindMadurai lg:mx-20 mt-5'>Frequently asked questions</h1>
                    <br /><br />

                    <div className='flex-wrap grid-container justify-center lg:mx-10 mb-8'>
                        {faq.map((q, index) => {
                            return (
                                <Question question={q.question} answer={q.answer} index={index} />
                            )
                        })}
                    </div>
                </Card>
            </div>
        </div>
    );
};

type Props = {
    question: string;
    answer: string;
    index: number;
}

const Question: FC<Props> = ({ question, answer, index }) => {
    return (
        <div className='mt-1 sm:mx-2 sm:px-2 md:mx-5 lg:mx-12 '>
            <div className='flex'>
                <Image className='w-[12px] h-[20px] mr-2'
                    src={vector}
                    alt='arrow'
                    id={`arrow+${index}`}
                    onClick={() => open(`answer+${index}`, `arrow+${index}`)}
                />
                <h3 className='text-white font-HindMadurai text-[16px]'>{question}</h3>
            </div>
            <p className='text-[#c3c3c3] font-HindMadurai text-[16px] sm:w-[291px] my-3 ml-7' id={`answer+${index}`} style={{ display: "none" }}>{answer}</p>
        </div>
    );
};



export default FAQ