import React, { useEffect, useState } from 'react';
import Card from '@/components/Card'; // Importe o componente Card

const MemoryGame = () => {
  const cards = [
    { id: 1, value: 'A', isFlipped: false },
    { id: 2, value: 'B', isFlipped: false },
    { id: 3, value: 'C', isFlipped: false },
    { id: 4, value: 'D', isFlipped: false },
    { id: 5, value: 'A', isFlipped: false },
    { id: 6, value: 'B', isFlipped: false },
    { id: 7, value: 'C', isFlipped: false },
    { id: 8, value: 'D', isFlipped: false },
    // Cada par de cartas deve ter o mesmo 'value'
  ];

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

  // Função de embaralhar as cartas
  const shuffle = (array: any) => {
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
  };

  useEffect(() => {
    const shuffledCards = shuffle(cards);
    setGameCards(shuffledCards);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex flex-wrap justify-center'>
        {gameCards.map((card, index) => (
          <Card key={index} card={card} index={index} flipCard={flipCard} />
        ))}
      </div>
    </main>
  );
};

export default MemoryGame;
