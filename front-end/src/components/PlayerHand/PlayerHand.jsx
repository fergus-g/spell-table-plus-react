import CreateDeckModal from "../Modal/CreateDeckModal";
import ShowDeckModal from "../Modal/ShowDecksModal";
import { useState } from "react";
import { Button } from "@mui/material";
import styles from "./PlayerHand.module.css";
import useCreateDeck from "../../helpers/useCreateDeck";
import { useUser } from "../../context/UserContext";
import fetchDecks from "../../helpers/fetchDecks";

export default function PlayerHand({ setCards }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeckModalOpen, setIsDeckModalOpen] = useState(false);
  const [decks, setDecks] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = useUser();

  const clickHandler = async (modal) => {
    if (modal === "create") {
      setIsModalOpen(true);
    }
    if (modal === "show") {
      setLoading(true);
      try {
        const fetchedDecks = await fetchDecks(user.user.id);

        setDecks(fetchedDecks.data);
      } catch (error) {
        console.error("Error fetching decks:", error);
      }
      setLoading(false);
      setIsDeckModalOpen(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.hand}>
        <div>
          <h1>Player Hand</h1>
        </div>
        <div>
          <Button variant="contained" onClick={() => clickHandler("create")}>
            Create Deck
          </Button>
          <Button variant="contained" onClick={() => clickHandler("show")}>
            Show Decks
          </Button>
        </div>
        <CreateDeckModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={useCreateDeck}
        />
        <ShowDeckModal
          open={isDeckModalOpen}
          onClose={() => setIsDeckModalOpen(false)}
          decks={decks}
          loading={loading}
          onDelete={setDecks}
          setCards={setCards}
        />
      </div>
    </div>
  );
}
