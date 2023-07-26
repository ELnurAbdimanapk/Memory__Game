import { CardContent, Card } from "@mui/material";
import React from "react";
import "../App.css";

const CardItem = ({ card,image ,handleChoice}) => {
  const handleClick = () => {
    handleChoice(card)
  }
  return (
    <>
      <Card
        sx={{
          maxWidth: 200,
          minHeight: 198,
          maxHeight: 198,
          border: "solid 1px #fff",
          borderRadius: 3,
        }}
      >
        <CardContent sx={{ padding: 0 }}>
          <img src={image} alt="card front" />
        </CardContent>
      </Card>
      <Card
        sx={{
          maxWidth: 200,
          minHeight: 198,
          maxHeight: 198,
          border: "solid 1px #fff",
          borderRadius: 3,
        }}
      >
        <img src="/images/cover.png" alt="card back" onClick={handleClick} />
      </Card>
    </>
  );
};

export default CardItem;
