import React from "react";
import GraveyardModal from "./GraveyardModal.jsx/GraveyardModal";
import { useState } from "react";

import styles from "./Graveyard.module.css";

export default function Graveyard({ graveyard, exile }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExileModalOpen, setIsExileModalOpen] = useState(false);

  const graveyardHandler = () => {
    setIsModalOpen(true);
  };

  const exileHandler = () => {
    setIsExileModalOpen(true);
  };
  return (
    <>
      <div className={styles.container}>
        <button onClick={() => graveyardHandler()}>Graveyard</button>
        <button onClick={() => exileHandler()}>Exile</button>
      </div>
      <GraveyardModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        graveyard={graveyard}
      />
      <GraveyardModal
        open={isExileModalOpen}
        onClose={() => setIsExileModalOpen(false)}
        exile={exile}
      />
    </>
  );
}
