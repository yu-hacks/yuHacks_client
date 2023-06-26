"use client"

import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import bugImg from '@/public/images/bug.png';

interface CardType {
    id: number;
    deg: string;
    pos: string;
    text: string;
}

const ChallengeCard: FC = () => {
    const [cards, setCards] = useState<CardType[]>([
        { id: 1, deg: 'rotate-45', pos: 'absolute', text: 'We are a multi-disciplinary event that aims to bring people of all backgrounds...' },
        { id: 2, deg: 'rotate-12', pos: 'absolute', text: 'We are a multi-disciplinary event that aims to bring people of all backgrounds...' },
        { id: 3, deg: '-rotate-3', pos: 'absolute', text: 'We are a multi-disciplinary event that aims to bring people of all backgrounds...' },
    ]);

    const handleClick = () => {
        const updatedCards = [...cards];
        const firstCard = updatedCards.pop();
        const secondCard = updatedCards[0];
        const thirdCard = updatedCards[1];
        if (firstCard) {
            updatedCards.unshift({ ...firstCard, deg: 'rotate-45' });
            updatedCards[1] = { ...secondCard, deg: 'rotate-12' };
            updatedCards[2] = { ...thirdCard, deg: '-rotate-3' };
            setCards(updatedCards);
        }
    };

    return (
        <>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    deg={card.deg}
                    pos={card.pos}
                    text={card.text}
                    handleClick={handleClick}
                />
            ))}
        </>
    );
};

type Props = {
    deg: string;
    pos: string;
    text: string;
    handleClick: () => void;
};

const Card: FC<Props> = ({ deg, pos, text, handleClick }) => {
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleTransition = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsTransitioning(false);
            handleClick();
        }, 250); // Adjust the duration of the transition animation here (in milliseconds)
    };

    return (
        <>
            <div
                className={`${deg} ${pos} rounded-lg shadow-md sm:w-72 sm:h-[400px] bg-[#FEFFFC] flex items-center transition-transform transform ${isTransitioning ? '-translate-x-full' : ''
                    }`}
                onClick={handleTransition}
            >
                <div className='h-[23rem] mx-5 border-t-[3px] border-b-[3px] border-t-[#c95656] border-b-[#58A0D4] border-opacity-75'>
                    <Image src={bugImg} alt={'bug'} className='w-28 h-28 mx-auto my-10' />
                    <div className="flex flex-col w-10/12 mx-auto my-5 font-ndot47 text-center text-black text-xl">
                        Bug-hunting challenge
                    </div>
                    <div className="flex flex-col w-10/12 mx-auto font-Inconsolata text-center text-black text-opacity-50 text-[14px] leading-none">
                        {text}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChallengeCard;