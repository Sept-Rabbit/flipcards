import { useState } from "react";
import ImageCard from "./components/ImageCard";

interface Card {
  source: string;
  alt: string;
  flipped: boolean;
}

function App() {
  const [turns, setTurns] = useState<number>(0);
  const [cards, setCards] = useState<Card[]>([]);
  const [flip, setFlip] = useState<boolean>(false);

  const flipCard = (id: number) => {
    let newCards = [...cards];
    newCards[id].flipped = !newCards[id].flipped;
    setCards(newCards);
  };

  const imageCards: Card[] = [
    {
      source:
        "https://lh3.googleusercontent.com/OjrdELLkT4F4a5nnZw3DWSfj8AS5_iRw5t5ddYvrxoV3PT5llvNrkfLjtK63JNdyCMYNyUxQN2LS1uwX_SldFyUk6AtEpkUhLy7hlOsyRaxbCAwQT_AzsKLX2NGtxapejH4l4r_w=w1200",
      alt: "cub",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/gE8KRfmfnWd_N0Na0V-weLT3PQcmMii2YM5OabdLaDxvAibpxwDCdJmKZW9PDvoqpYeRB6UlhbHQq710jtFFd-q_L6SavvRRBfKuOwA1fBwCtAEBT8OZLz2JwaEkp63dYc78y5Yn=w1200",
      alt: "puppy",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/BQAogFkPRqwTpqA573yigpjNml4JhQ0CSgY9asL_zZqXE3Ixj3fSDT1rR3OXmQBWBo8ViYtFn2E_7YOTSACBqpzBWlj21p4S6RZJ66ZZUBzF-CWhoC1TWCWVefFIMsh9RsdPs0By=w1200",
      alt: "kitten",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/N8_lM7mLTS1tjUloF5jIB-ojiKD1W7QTRGIgf1ZqPToxc2Slk7sKwUSx3n27LQZy0suQG_gixC2b5xhEINkmAXC8FadISqITl_D8iGDzGtW6aaSuu9xSGKdPToG2Io31bsqaGZWw=w1200",
      alt: "jenna",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/MhmAhs1hI8Lfd6PKQVDOvBQnGyVRMeKC0rljIQawhLHC3RHhV_CSl29pc7goBDCzMdXRFW_V3JW7qQMDeWGpChjcT7hs9EyYdGce732WDsKnSXTjYkgaoAFFDt1pR-K_vmXYJlH7=w1200",
      alt: "keira",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/v7ZPEzETceOrCK7gOJ9mRoxl9oa8DxRuQG-VtPGIunOtL-jmdPZDguKn9Llxgcg6C7nw2wHhYIcgm_xxcBvL6ga4zy-fo4O1CUmotRZ85gjzJ2JLu8vU9WXE40LpwdyTlB2AFoV5=w1200",
      alt: "yellow",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/CVVYADNXp59VkKsyejbqppq366tQNybrPzpmfb9_L4jxeY0Qj0TAe6LFact22ssqS2xrnA8zPe5JSJnlB46B13XSgNfI8m0Ih4V1F-582-tmgGPPKi1QftfXCpByXsLqjmQW_sOh=w1200",
      alt: "sean",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/cO_hKcKW4Au7Uw-VYqfilwyZhgdiC3BRPothfufpOiEswRBjeskqgrVMzB63wlJ01t--tVMSlMLqewRNMBbend9AgBMASsS5wsTqO-xH5FSHFp-9ieVB3QXs99mMFBwSRBgu2fLp=w1200",
      alt: "albee",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/qfDMqu51dmFw7ve3p9rRaFn4Xpu7PKXqvXMuGPX4NHb1nCuaXhv0KUWKv82NcKdWJbcLyNU0urZxt1avv_PYcAgRtEtHSzXj1AvaFj7uhAOPMEPtB3GG8vQYfTIyj41yoURjJbzZ=w1200",
      alt: "shiba",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/3ApbgX03DVBRrywsIwl658hSO3K2RBddGk73Exmq_gQPamEtatEZwbwS5Fcq3Aw8Ai7SueQ_KKAM4FxcQwMz5l7EP9vs6tTcybXpR9amGpfYSnffgJqiS5AC_dBRp73tA1LJv_JQ=w1200",
      alt: "floppy",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/jqn_y4sRXpNjU4juqTKfvGKlYgZoW6UVyw4KMvq35u5CP1IK2HXPjdx2jddemOWFWckEkLBRIoAGcesWAtOMHFybj8wwIHVRUwhyHOvhn49RPZ3DIN9BVrlCjMzWpyoTZGDiYuIv=w1200",
      alt: "rabbit1",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/DE3JcvxNGQERVwnw1M-WkNvkcKMDitirZOj_-tnA19jqkSt1n8S9TBNeji6KLvSGgJgQ-2VT0JwIBHT6Jw4vOObpbP0R8cGD4YfGLkAhLmetHS5uiAyD3B2oGC54fQgr05YDc34z=w1200",
      alt: "rabbit2",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/ekDnzRcTYRx2riBvGGjDa-gJUvDmFo8HDR3SsWTNBHu4m2N_uD0xaIIRlH72UDF9cASdvKfXzDt5pnL62AKttOvdm4Y7dTWIAavJYERGYc1Tzl0Oq5ApxhUqAkqWZ3ifpux9zods=w1200",
      alt: "dog",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/jJrm_DVd_aujbQ8jfH6lgqzGJDzpTs-tfVQCvh1MYORofS93CXCRNVAW01dk7F2dVJPZ-26Tx6NFTvL5gipHfNSzsF2_GvP_YaOHU2S6aGiN6ewjyip4HtHOOSDmggn-mJoZFrrqWA=w1200",
      alt: "white",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/I984Qdur8MLJeXsD-cWzvsvw0T8tRQG9xQZZxqWQfkK8uiZJLMcYYlDqLhIIeS5MpRNRZQ6eruYh7V5KmmT8mqSNBfpqrlMXvN8Qheuq7lF4PXRjvhej6ovyp2fZX-b5o_JAnUm-YQ=w1200",
      alt: "burger",
      flipped: false,
    },
    {
      source:
        "https://lh3.googleusercontent.com/-WSdqigQyBkd1FndJsmIT3x-xr4bD1xo7uLtQ6P6f_O1rakSQmdtHpJtOt1683l8SbO6y_sFhK_DU4Q7dEbN8wHNksu5p-UkOrbOEIxHQUXwg-3hlXsKuHwOC7z2y-9fBE2vCL42RA=w1200",
      alt: "meerkat",
      flipped: false,
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
      <div className="grid w-full grid-cols-2 gap-10 p-5 place-items-center md:grid-cols-3 lg:grid-cols-4">
        {cards.map((card, index) => (
          <ImageCard
            source={card.source}
            alt={card.alt}
            flipped={card.flipped}
            id={index}
            key={index}
            flipCard={flipCard}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
