'use client'
import { useEffect, useState } from 'react';
import MemoryGame from './MemoryGame/page';

const cards = [
  { id: 1, value: 'A', isFlipped: false },
  { id: 2, value: 'B', isFlipped: false },
  { id: 3, value: 'C', isFlipped: false },
  { id: 4, value: 'D', isFlipped: false },
  { id: 5, value: 'A', isFlipped: false },
  { id: 6, value: 'B', isFlipped: false },
  { id: 7, value: 'C', isFlipped: false },
  { id: 8, value: 'D', isFlipped: false },
];

function shuffle(array: any[]) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function Home() {
  const [gameCards, setGameCards] = useState(cards);
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  const flipCard = (index: number) => {
    const updatedCards = [...gameCards];

    if (flippedCardIndex === null) {
      updatedCards[index].isFlipped = true;
      setFlippedCardIndex(index);
    } else {
      if (updatedCards[flippedCardIndex].value === updatedCards[index].value && flippedCardIndex !== index) {
        updatedCards[index].isFlipped = true;
        setFlippedCardIndex(null);
      } else {
        updatedCards[index].isFlipped = true;
        setTimeout(() => {
          updatedCards[flippedCardIndex].isFlipped = false;
          updatedCards[index].isFlipped = false;
          setFlippedCardIndex(null);
          setGameCards(updatedCards);
        }, 1000); // Ajuste o tempo de delay conforme necessário
      }
    }

    setGameCards(updatedCards);
  };

  useEffect(() => {
    const shuffledCards = shuffle(cards);
    setGameCards(shuffledCards);
  }, []);

  return (
    <MemoryGame />
  );
}
