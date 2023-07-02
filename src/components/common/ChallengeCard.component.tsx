"use client"

import React, { FC, useState } from 'react';
import Image from 'next/image';
import bugImg from '@/public/images/bug.png';
import { motion } from 'framer-motion';

interface CardType {
    id: number;
    deg: string;
    text: string;
}

const cardData: CardType[] = [
    { id: 1, deg: '-3deg', text: 'We are a multi-disciplinary event that aims to bring people of all backgrounds...' },
    { id: 2, deg: '12deg', text: 'We are a multi-disciplinary event that aims to bring people of all backgrounds...' },
    { id: 3, deg: '45deg', text: 'We are a multi-disciplinary event that aims to bring people of all backgrounds...' },]


const ChallengeCard: FC = () => {
    const [cards, setCards] = useState<CardType[]>(cardData);

    const handleClick = () => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            const cardToMove = updatedCards.shift();
            const firstCard = updatedCards[0];
            const secondCard = updatedCards[1];
            updatedCards.push({ ...cardToMove!, deg: '45deg' });
            updatedCards[0] = { ...firstCard, deg: '-3deg' };
            updatedCards[1] = { ...secondCard, deg: '12deg' };
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
    handleClick: () => void;
};

const Card: FC<Props> = ({ deg, index, text, handleClick }) => {

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
            className={`absolute rounded-lg shadow-md w-52 h-64 sm:w-72 sm:h-[400px] bg-[#FEFFFC] flex items-center`}
            style={{
                cursor: index === 0 ? 'grab' : 'default',
            }}
            onDragEnd={handleClick}
            custom={index}
            variants={CardVariants}
            initial="begin"
            animate="end"
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
        >


            <div className='h-[90%] w-5/6 mx-auto border-t-[3px] border-b-[3px] border-t-[#c95656] border-b-[#58A0D4] border-opacity-75'>
                <Image src={bugImg} alt={'bug'} className='sm:w-28 sm:h-28 w-16 h-16 mx-auto my-10' />
                <div className="flex flex-col w-5/6 mx-auto my-5 font-ndot47 text-center text-black sm:text-xl text-xs">
                    Bug-hunting challenge
                </div>
                <div className="flex flex-col w-5/6 mx-auto font-Inconsolata text-center text-black text-opacity-50 sm:text-[14px] text-[10px] leading-none">
                    {text}
                </div>
            </div>
        </motion.div>
    );
};

export default ChallengeCard;