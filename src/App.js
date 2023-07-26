import { Button, Container, TableFooter } from "@mui/material";
import "./App.css";
import CardItem from "./components/Card";
import Footer from "./components/Footer";
import { useState } from "react";

const cardImages = [
  { image: "/images/photo1.png" },
  { image: "/images/photo2.png" },
  { image: "/images/photo3.png" },
  { image: "/images/photo4.png" },
  { image: "/images/photo5.png" },
  { image: "/images/photo6.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((el) => ({ ...el, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  //Handle a choice
  const handleChoice = (card) => {
    console.log(card);
  };
  return (
    <>
      <h1>Memory Game</h1>
      <Button onClick={shuffleCards} variant="contained" size="large">
        New Game
      </Button>
      <Container>
        <div className="card__container">
          {cards.map((el) => {
            return (
              <CardItem
              card ={el}
                image={el.image}
                key={el.id}
                handleChoice={handleChoice}
              />
            );
          })}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
