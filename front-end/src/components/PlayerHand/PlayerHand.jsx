import CreateDeckModal from "../Modal/CreateDeckModal";
import { useState } from "react";
import { Button } from "@mui/material";
// import fetchCardData from "../../api/fetchCardData";
import { useUser } from "../../context/UserContext.jsx";

import styles from "./PlayerHand.module.css";

export default function PlayerHand() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useUser();

  const handleCreateDeck = (deck) => {
    console.log(user);
    console.log("Deck Created:", deck);
    // Send to backend or store it
  };

  return (
    <div className={styles.container}>
      <div className={styles.hand}>
        <div>
          <h1>Player Hand</h1>
        </div>
        <Button variant="contained" onClick={() => setIsModalOpen(true)}>
          Create Deck
        </Button>
        <CreateDeckModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateDeck}
        />
      </div>
    </div>
  );
}
