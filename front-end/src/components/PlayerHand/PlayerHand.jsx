import CreateDeckModal from "../Modal/CreateDeckModal";
import { useState } from "react";
import { Button } from "@mui/material";
import fetchCardData from "../../api/fetchCardData";
import { useUser } from "../../context/UserContext";
import styles from "./PlayerHand.module.css";

export default function PlayerHand() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useUser();

  const clickHandler = () => {
    setIsModalOpen(true);
  };

  const handleCreateDeck = async (deck) => {
    try {
      // Step 1: Create Deck
      const deckResponse = await fetch(`http://localhost:5000/decks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: deck.user_id,
          name: deck.name,
        }),
      });

      if (!deckResponse.ok) throw new Error("Failed to create deck");

      const createdDeck = await deckResponse.json();
      const deckId = createdDeck.data.id;

      // Step 2: Fetch Card Data
      const cardPromises = deck.cards.map(async (card) => {
        console.log(card);
        const cardData = await fetchCardData({ input: card }); // Fetch card info

        return cardData
          ? { deck_id: deckId, card_name: card.name, details: cardData }
          : null;
      });

      const cardsWithDetails = (await Promise.all(cardPromises)).filter(
        Boolean
      );

      if (cardsWithDetails.length === 0) {
        console.warn("No card data was fetched, skipping card insert.");
        return alert("Deck created, but no valid cards were found.");
      }

      // Step 3: Add Cards to the Deck
      const cardsWithDeckId = cardsWithDetails.map((card) => ({
        deck_id: deckId,
        name: card.details.name,
        lang: card.details.lang,
        image_uri: card.details.image_uris.normal,
        type_line: card.details.type_line,
      }));

      const cardResponse = await fetch(`http://localhost:5000/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cards: cardsWithDeckId }),
      });

      if (!cardResponse.ok) throw new Error("Failed to add cards");

      console.log("Cards added successfully");
      alert("Deck and cards created successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Error creating deck and cards. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.hand}>
        <div>
          <h1>Player Hand</h1>
        </div>
        <Button variant="contained" onClick={() => clickHandler()}>
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
