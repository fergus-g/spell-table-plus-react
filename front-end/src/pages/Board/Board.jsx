import React from "react";
import PlayArea from "../../components/PlayArea/PlayArea";
import DeckList from "../../components/DeckList/DeckList";
import Header from "../../components/Header/Header";

import { useState } from "react";

import styles from "./Board.module.css";

const Board = () => {
  const [cards, setCards] = useState([]);
  const [creatures, setCreatures] = useState([]);
  const [enchantments, setEnchantments] = useState([]);
  const [lands, setLands] = useState([]);
  const [artifacts, setArtifacts] = useState([]);
  const [graveyard, setGraveyard] = useState([]);
  const [exile, setExile] = useState([]);

  return (
    <div className={styles.app_container}>
      <Header setCards={setCards} />
      <div className={styles.play_container}>
        <PlayArea
          creatures={creatures}
          enchantments={enchantments}
          lands={lands}
          artifacts={artifacts}
          setArtifacts={setArtifacts}
          setCreatures={setCreatures}
          setEnchantments={setEnchantments}
          setLands={setLands}
          setGraveyard={setGraveyard}
          setExile={setExile}
        />
        <DeckList
          cards={cards}
          creatures={creatures}
          enchantments={enchantments}
          lands={lands}
          artifacts={artifacts}
          graveyard={graveyard}
          setGraveyard={setGraveyard}
          exile={exile}
          setExile={setExile}
          setCreatures={setCreatures}
          setEnchantments={setEnchantments}
          setLands={setLands}
          setArtifacts={setArtifacts}
        />
      </div>
    </div>
  );
};

export default Board;
