import { useState } from "react";
import ImageCard from "./components/ImageCard";

interface Card {
  source: string;
  alt: string;
}

function App() {
  const [turns, setTurns] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>([]);

  const imageCards: Card[] = [
    { source: "./src/images/cubs.jpg", alt: "cubs" },
    { source: "./src/images/puppy.jpg", alt: "puppy" },
    { source: "./src/images/kitten.jpg", alt: "kitten" },
    { source: "./src/images/jenna.jpg", alt: "jenna" },
    { source: "./src/images/keira.jpg", alt: "keira" },
    { source: "./src/images/yellow.jpg", alt: "yellow" },
    { source: "./src/images/sean.jpg", alt: "sean" },
    { source: "./src/images/albee.jpg", alt: "albee" },
  ];

  const shuffleCards = () => {
    const shuffledCards = imageCards;

    shuffledCards
      .sort(() => {
        return Math.random() - 0.5;
      })
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden text-white bg-gray-900 ">
      <p onClick={shuffleCards} className="my-10 cursor-pointer">
        New Game
      </p>
      <div className="grid w-full grid-cols-2 gap-10 p-5 place-items-center lg:grid-cols-4">
        {cards.map((card) => (
          <ImageCard source={card.source} alt={card.alt} />
        ))}
      </div>
    </div>
  );
}

export default App;
