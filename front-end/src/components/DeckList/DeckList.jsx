import { Button } from "@mui/material";
import styles from "./DeckList.module.css";
import { useState } from "react";

export default function DeckList({ cards }) {
  let cardsData = cards?.data;

  const cardList = cardsData?.map((item, index) => {
    return (
      <Button
        sx={{
          alignSelf: "center",
          position: "relative",
          width: "250px",
          textAlign: "center",
          marginTop: "10px",
          color: "white",
          textTransform: "none",
          backgroundColor: "grey.800",
          "&:hover": {
            backgroundColor: "grey.700",
          },
        }}
        key={index}
        img={item.image_uri}
        lang={item.lang}
        id={item.type_line}
      >
        {item.name}
      </Button>
    );
  });

  return <div className={styles.container}>{cardList}</div>;
}
