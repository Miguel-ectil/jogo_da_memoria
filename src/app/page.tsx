'use client'
import { useState } from 'react';
import Image from 'next/image';

const cards = [
  { id: 1, value: '1', isFlipped: false },
  { id: 2, value: '2', isFlipped: false },
  { id: 3, value: '3', isFlipped: false },
  { id: 4, value: '4', isFlipped: false },
  { id: 5, value: '5', isFlipped: false },
  { id: 6, value: '6', isFlipped: false },
  { id: 7, value: '7', isFlipped: false },
  { id: 8, value: '8', isFlipped: false },
  // Adicione pares de cartas conforme necessário
];

export default function Home() {
  const [gameCards, setGameCards] = useState(cards);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const flipCard = (index: number) => {
    const updatedCards = [...gameCards];

    if (flippedCardIndex === null) {
      updatedCards[index].isFlipped = true;
      setFlippedCardIndex(index);
    } else {
      const firstCard = updatedCards[flippedCardIndex];

      if (firstCard.value === updatedCards[index].value && flippedCardIndex !== index) {
        // Match found, keep both cards flipped
        updatedCards[index].isFlipped = true;
        setGameCards(updatedCards);
        setFlippedCardIndex(null);
      } else {
        // No match found, flip cards back after a short delay
        updatedCards[index].isFlipped = true;
        setGameCards(updatedCards);

        setTimeout(() => {
          updatedCards[index].isFlipped = false;
          firstCard.isFlipped = false;
          setGameCards(updatedCards);
          setFlippedCardIndex(null);
        }, 1000); // Adjust delay time as needed
      }
    }

    setGameCards(updatedCards);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-wrap justify-center'>
        {gameCards.map((card, index) => (
          <div 
            key={index} 
            className='group relative h-48 min-w-[200px] bg-blue-400 rounded-md m-2 cursor-pointer transform transition duration-200 ease-in hover:scale-110'
            onClick={() => flipCard(index)}
          >
            {card.isFlipped ? (
              <Image
                src={`/image_${card.value}.png`} 
                fill={true}
                alt='ANIME'
                className='rounded'
              />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-md"></div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
