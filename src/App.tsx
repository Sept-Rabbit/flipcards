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
    {
      source:
        "https://drive.google.com/file/d/1-hDwUp1v8dPmv5Grt4umorL1R2881ADb/view?usp=sharing",
      alt: "cub",
    },
    {
      source:
        "https://drive.google.com/file/d/1UKeSlgPN2bG2WvMRAYFRm5fR7ECqOuCJ/view?usp=sharing",
      alt: "puppy",
    },
    {
      source:
        "https://drive.google.com/file/d/1XnHpsA0Wf2wwNGj0w90L1ZXXCuQoPlPO/view?usp=sharing",
      alt: "kitten",
    },
    {
      source:
        "https://drive.google.com/file/d/1WmD3iXrsyRr92xop5Q7tb9d_vPKZQG0f/view?usp=sharing",
      alt: "jenna",
    },
    {
      source:
        "https://drive.google.com/file/d/1iLIJm8nzElEJOLCjANfUTOU-5F3ZaAT5/view?usp=sharing",
      alt: "keira",
    },
    {
      source:
        "https://drive.google.com/file/d/1MK9LHUSertYh6S92FdT5YXqHePy5C4A9/view?usp=sharing",
      alt: "yellow",
    },
    {
      source:
        "https://drive.google.com/file/d/1Vt7BFVIocf4J2zm_aa1OmNpr1RlEWFdW/view?usp=sharing",
      alt: "sean",
    },
    {
      source:
        "https://drive.google.com/file/d/10yX9NLpyqe5apS1r4Q8w_YY4vFFTFZT6/view?usp=sharing",
      alt: "albee",
    },
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
