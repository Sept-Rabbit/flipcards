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
        "https://lh3.googleusercontent.com/OjrdELLkT4F4a5nnZw3DWSfj8AS5_iRw5t5ddYvrxoV3PT5llvNrkfLjtK63JNdyCMYNyUxQN2LS1uwX_SldFyUk6AtEpkUhLy7hlOsyRaxbCAwQT_AzsKLX2NGtxapejH4l4r_w=w1200",
      alt: "cub",
    },
    {
      source:
        "https://lh3.googleusercontent.com/gE8KRfmfnWd_N0Na0V-weLT3PQcmMii2YM5OabdLaDxvAibpxwDCdJmKZW9PDvoqpYeRB6UlhbHQq710jtFFd-q_L6SavvRRBfKuOwA1fBwCtAEBT8OZLz2JwaEkp63dYc78y5Yn=w1200",
      alt: "puppy",
    },
    {
      source:
        "https://lh3.googleusercontent.com/BQAogFkPRqwTpqA573yigpjNml4JhQ0CSgY9asL_zZqXE3Ixj3fSDT1rR3OXmQBWBo8ViYtFn2E_7YOTSACBqpzBWlj21p4S6RZJ66ZZUBzF-CWhoC1TWCWVefFIMsh9RsdPs0By=w1200",
      alt: "kitten",
    },
    {
      source:
        "https://lh3.googleusercontent.com/4v6jS3kC1rbTmbfVf4XM9HYu_YYu8cHO_s5qRTSOtFmM7D1PUB5pilnvLiVY_lR1jYocZBJ2GsYBNCWhV8HD69oZ5hvnhSh23BrsrvZYH-ib8UCwB6oaMBWv6fxRVSQxmqfvMaLy=w1200",
      alt: "jenna",
    },
    {
      source:
        "https://lh3.googleusercontent.com/3A7RxthyYnmpkfN7O8GP_CrKTNhbw_7uWPVbfTk3mcOkdJClQ1XZq5MjgFDBGEphwaYIMIytw6B9oq557-EOjQotwkzxILnj2TIwuQxOpVvxZsbYTn19eNO4b4wdhRhTyLmIkD0s=w1200",
      alt: "keira",
    },
    {
      source:
        "https://lh3.googleusercontent.com/v7ZPEzETceOrCK7gOJ9mRoxl9oa8DxRuQG-VtPGIunOtL-jmdPZDguKn9Llxgcg6C7nw2wHhYIcgm_xxcBvL6ga4zy-fo4O1CUmotRZ85gjzJ2JLu8vU9WXE40LpwdyTlB2AFoV5=w1200",
      alt: "yellow",
    },
    {
      source:
        "https://lh3.googleusercontent.com/CVVYADNXp59VkKsyejbqppq366tQNybrPzpmfb9_L4jxeY0Qj0TAe6LFact22ssqS2xrnA8zPe5JSJnlB46B13XSgNfI8m0Ih4V1F-582-tmgGPPKi1QftfXCpByXsLqjmQW_sOh=w1200",
      alt: "sean",
    },
    {
      source:
        "https://lh3.googleusercontent.com/cO_hKcKW4Au7Uw-VYqfilwyZhgdiC3BRPothfufpOiEswRBjeskqgrVMzB63wlJ01t--tVMSlMLqewRNMBbend9AgBMASsS5wsTqO-xH5FSHFp-9ieVB3QXs99mMFBwSRBgu2fLp=w1200",
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
