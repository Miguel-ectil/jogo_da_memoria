import React from 'react';
import Image from 'next/image';

const Card = ({ card, index, flipCard }: any) => {
  return (
    <div
      key={index}
      className='group relative h-48 min-w-[200px] bg-blue-400 rounded-md m-2 cursor-pointer transform transition duration-200 ease-in hover:scale-110'
      onClick={() => flipCard(index)}
    >
      {card.isFlipped ? (
        <Image
          src={`/image_${card.id}.png`}
          fill={true}
          alt='ANIME'
          className='rounded'
        />
      ) : (
        <div className="w-full h-full bg-gray-300 rounded-md"></div>
      )}
    </div>
  );
};

export default Card;
