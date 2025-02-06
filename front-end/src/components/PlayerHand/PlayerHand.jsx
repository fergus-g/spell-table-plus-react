import Modal from "../Modal/Modal";
import { useState } from "react";
import fetchCardData from "../../api/fetchCardData";

import styles from "./PlayerHand.module.css";

export default function PlayerHand() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(""); // State to hold textarea value

  const handleClose = () => {
    setOpen(false);
  };

  const handleFetch = (input) => {
    console.log(input);
    fetchCardData({ input });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.hand}>
        <div>
          <h1>Player Hand</h1>
        </div>
        <button onClick={handleOpen} className={styles.create_button}>
          Create Deck
        </button>
        <Modal isOpen={open}>
          <>
            <h1>Add Cards</h1>
            <textarea
              value={input} // Bind the textarea value to the state
              onChange={(e) => setInput(e.target.value)} // Update state on input change
            />
            <button onClick={() => handleFetch(input)}>Add</button>
            <button onClick={handleClose}>Cancel</button>
          </>
        </Modal>
      </div>
    </div>
  );
}
