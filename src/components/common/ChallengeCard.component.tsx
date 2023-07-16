"use client"

import React, { FC, useState } from 'react';
import Image from 'next/image';
import bugImg from '@/public/images/bug.png';
import { motion } from 'framer-motion';

interface CardType {
    id: number;
    deg: string;
    text: string;
    bottom?: string;
    right?: string;
}

const cardData: CardType[] = [
    { id: 1, deg: '13.415deg', bottom: '-16rem', right: '-19rem', text: 'Hello' },
    { id: 2, deg: '3.915deg', bottom: '13rem', right: '-14rem', text: 'Hi' },
    { id: 3, deg: '-3.958deg', bottom: '42rem', right: '-8rem', text: 'We are a multi-disciplinary event that aims to bring people of all backgrounds...' },]


const ChallengeCard: FC = () => {
    const [cards, setCards] = useState<CardType[]>(cardData);

    const handleClick = (index: number) => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            let cardToMove = updatedCards[index];
            let firstCard, secondCard;
            switch (index) {
                case 0:
                    cardToMove = updatedCards[1];
                    firstCard = updatedCards[2];
                    secondCard = updatedCards[0];
                    break;
                case 1:
                    firstCard = updatedCards[0];
                    secondCard = updatedCards[2];
                    break;
                case 2:
                    firstCard = updatedCards[0];
                    secondCard = updatedCards[1];
                    break;
            }
            updatedCards[0] = { ...cardToMove!, deg: '13.415deg', bottom: '-16rem', right: '-19rem' };
            updatedCards[1] = { ...firstCard!, deg: '3.915deg', bottom: '13rem', right: '-14rem' };
            updatedCards[2] = { ...secondCard!, deg: '-3.958deg', bottom: '42rem', right: '-8rem' };
            return updatedCards;
        });
    };

    return (
        <>
            {cards.map((card, index) => {
                return (
                    <Card
                        key={card.id}
                        index={index}
                        deg={card.deg}
                        bottom={card.bottom}
                        right={card.right}
                        text={card.text}
                        handleClick={handleClick}
                    />
                )
            })}
        </>
    );
};

type Props = {
    deg: string;
    index: number;
    text: string;
    right?: string;
    bottom?: string;
    handleClick: (index: number) => void;
};

const Card: FC<Props> = ({ deg, index, text, right, bottom, handleClick }) => {

    const CardVariants = {
        begin: () => ({
            opacity: 0,
            rotate: 0,
        }),
        end: (index: number) => ({
            opacity: 1,
            zIndex: cardData.length - index,
            rotate: deg,
        }),
    }

    return (
        <motion.div
            className={`absolute rounded-lg inset-0
            shadow-md 2xl:w-72 2xl:h-[400px] xl:w-60 xl:h-[380px] w-44 h-[250px] md bg-[#FEFFFC] flex items-center`}
            style={{
                // right: `${right}`,
                // bottom: `${bottom}`,
                cursor: 'grab'
            }}
            onDragEnd={() => handleClick(index)}
            custom={index}
            variants={CardVariants}
            initial="begin"
            animate="end"
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
        >


            <div className='h-[90%] w-5/6 mx-auto border-t-[3px] border-b-[3px] border-t-[#c95656] border-b-[#58A0D4] border-opacity-75'>
                <Image src={bugImg} alt={'bug'} className='xl:w-28 xl:h-28 md:w-14 md:h-14 w-10 h-10 mx-auto xl:my-10 my-5' />
                <div className="flex flex-col w-5/6 mx-auto my-5 font-HindMadurai text-center text-black xl:text-xl text-sm">
                    Bug-hunting challenge
                </div>
                <div className="flex flex-col w-[90%] mx-auto font-Inconsolata text-center text-black text-opacity-50 xl:text-[14px] text-xs leading-none">
                    {text}
                </div>
            </div>
        </motion.div>
    );
};

export default ChallengeCard;