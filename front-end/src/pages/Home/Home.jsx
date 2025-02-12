import PlayArea from "../../components/PlayArea/PlayArea";
import DeckList from "../../components/DeckList/DeckList";
import PlayerHand from "../../components/PlayerHand/PlayerHand";
import Header from "../../components/Header/Header";

import { useState } from "react";

import styles from "./Home.module.css";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [creatures, setCreatures] = useState([]);
  const [enchantments, setEnchantments] = useState([]);
  const [lands, setLands] = useState([]);
  const [artifacts, setArtifacts] = useState([]);

  return (
    <div className={styles.app_container}>
      <Header />
      <div className={styles.play_container}>
        <PlayArea
          creatures={creatures}
          enchantments={enchantments}
          lands={lands}
          artifacts={artifacts}
        />
        <DeckList
          cards={cards}
          creatures={creatures}
          enchantments={enchantments}
          lands={lands}
          artifacts={artifacts}
          setCreatures={setCreatures}
          setEnchantments={setEnchantments}
          setLands={setLands}
          setArtifacts={setArtifacts}
        />
      </div>
      <PlayerHand setCards={setCards} />
    </div>
  );
};

export default Home;
