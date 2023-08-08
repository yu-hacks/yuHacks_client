"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import vector from "@/public/images/Vector.png";
import "../../styles/AboutPage1.css";
import Card from "../common/Card.component";

interface questions {
  question: string;
  answer: string;
  id: number;
}

const faqData: questions[] = [
  {
    id: 1,
    question: "What kind of accomodation will be provided?",
    answer:
      "Since yuHacks(2023) is coming back to in-person format, we are working hard to provide a safe and comfortable environment for all our hackers. We will be providing sleeping areas, meals, and other necessities. More detail coming soon.",
  },
  {
    id: 2,
    question: "Who can participate?",
    answer:
      "Any student who's interested in tech or has an innovative idea can participate in yuHacks. We welcome people in all areas of study with different talents to collaborate and come up with the best solution they can produce.",
  },
  {
    id: 3,
    question: "What if I have never participated in a hackathon before?",
    answer:
      "yuHacks aims to be beginner-friendly. We will be hosting workshops and providing mentors to help you get started, whether it is in coding, design, or creative thinking.",
  },
];
const faqData2: questions[] = [
  {
    id: 4,
    question: "What kind of activities will there be?",
    answer:
      "We will be hosting workshops in various topics in hope to help a wide range of possible project ideas. We will also be having leisure activities to provide a much-needed break for our hackers. Stay tune to learn more.",
  },
  {
    id: 5,
    question: "How many people can be on one team?",
    answer:
      "To stay true to our theme of collaboration and connection, we recommend having at least 2 and up to 4 people in a team. If you can't find a team by the time hackathon starts, we will help you connect with fellow hackers to make sure you have the same experience as everyone.",
  },
  {
    id: 6,
    question: "Are you accepting applications outside of Ontario, Canada?",
    answer:
      "We are open to all students who are in Ontario by the time hackathon starts as it's the easiest to plan logistically. We are still discussing transportation outside Ontario. Stay tune to learn more.",
  },
];

function open(id: string, arrowid: string) {
  var item = document.getElementById(id) as HTMLInputElement;
  var arrow = document.getElementById(arrowid) as HTMLInputElement;

  if (item) {
    if (item.style.height === "0px") {
      item.style.height = "auto";
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

  return (
    <div id="faq-container" className="flex w-full mx-auto px-3 lg:px-20 py-6">
      <div
        id="faq-background"
        className="flex flex-col md:flex-row w-full mx-auto bg-white/[0.13] rounded-3xl"
      >
        <div className="p-8 align-middle">
          <h1 className="text-[#EFCCCC] text-4xl font-semibold text-center lg:mx-20 mt-5">
            Frequently Asked Questions
          </h1>
          <br />
          <br />

          <div className="flex-wrap grid-container justify-center lg:mx-10 mb-8">
            <div>
              {faq.map((q, index) => {
                return (
                  <Question
                    question={q.question}
                    answer={q.answer}
                    id={q.id}
                    key={q.id}
                  />
                );
              })}
            </div>
            <div>
              {faq2.map((q, index) => {
                return (
                  <Question
                    question={q.question}
                    answer={q.answer}
                    id={q.id}
                    key={q.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  question: string;
  answer: string;
  id: number;
};

const Question: FC<Props> = ({ question, answer, id }) => {
  const st = {
    overflow: "hidden",
    transition: "0.5s",
    height: "0px",
  };

  return (
    <div className="mt-1 sm:mx-2 sm:px-2 md:mx-5 lg:mx-12 ">
      <div className="flex">
        <div
          onClick={() => open(`answer+${id}`, `arrow+${id}`)}
          className="flex flex-row cursor-pointer justify-center"
        >
          <div className="shrink-0">
            <Image
              className="w-[12px] h-[20px] mr-2"
              src={vector}
              alt="arrow"
              id={`arrow+${id}`}
            />
          </div>
          <h4 className="text-white font-HindMadurai text-xl hover:text-[#DF9A9A]">
            {question}
          </h4>
        </div>
      </div>
      <p
        className="text-[#c3c3c3] font-HindMadurai text- sm:w-[291px] my-3 ml-5"
        id={`answer+${id}`}
        style={st}
      >
        {answer}
      </p>
    </div>
  );
};

export default FAQ;
