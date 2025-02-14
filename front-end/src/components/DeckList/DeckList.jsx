import { Button } from "@mui/material";
import Graveyard from "../Graveyard/Graveyard";

import styles from "./DeckList.module.css";

export default function DeckList({
  cards,
  creatures,
  enchantments,
  lands,
  artifacts,
  setCreatures,
  setEnchantments,
  setLands,
  setArtifacts,
}) {
  let cardsData = cards?.data;

  const sortCards = (card) => {
    if (card.type_line.includes("Creature")) {
      setCreatures((creatures) => [...creatures, card]);
    } else if (card.type_line.includes("Enchantment")) {
      setEnchantments((enchantments) => [...enchantments, card]);
    } else if (card.type_line.includes("Land")) {
      setLands((lands) => [...lands, card]);
    } else if (card.type_line.includes("Artifact")) {
      setArtifacts((artifacts) => [...artifacts, card]);
    }
  };

  const cardList = cardsData?.map((item, index) => {
    return (
      <>
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
          onClick={() => sortCards(item)}
        >
          {item.name}
        </Button>
      </>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.deckcontainer}>{cardList}</div>
      <Graveyard className={styles.graveyard} />
    </div>
  );
}
