import PlayArea from "../../components/PlayArea/PlayArea";
import DeckList from "../../components/DeckList/DeckList";
import PlayerHand from "../../components/PlayerHand/PlayerHand";
import { useState } from "react";

import styles from "./Home.module.css";

const Home = () => {
  const [cards, setCards] = useState([]);

  return (
    <div className={styles.app_container}>
      <div className={styles.play_container}>
        <PlayArea />
        <DeckList cards={cards} />
      </div>
      <PlayerHand setCards={setCards} />
    </div>
  );
};

export default Home;
