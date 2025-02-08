import PlayArea from "../../components/PlayArea/PlayArea";
import DeckList from "../../components/DeckList/DeckList";
import PlayerHand from "../../components/PlayerHand/PlayerHand";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.app_container}>
      <div className={styles.play_container}>
        <PlayArea />
        <DeckList />
      </div>
      <PlayerHand />
    </div>
  );
};

export default Home;
