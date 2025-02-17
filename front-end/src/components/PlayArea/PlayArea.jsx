import React, { useState } from "react";
import IconButtons from "./IconButtons/IconButtons.jsx";
import styles from "./PlayArea.module.css";

export default function PlayArea({
  creatures,
  enchantments,
  lands,
  artifacts,
  setCreatures,
  setEnchantments,
  setLands,
  setArtifacts,
  setGraveyard,
  setExile,
}) {
  const [clickedId, setClickedId] = useState(null);
  const [tappedCards, setTappedCards] = useState({});

  const clickHandler = (id) => {
    setClickedId((prevId) => (prevId === id ? null : id));
  };

  const removeFromPlayArea = (category, id) => {
    if (category.includes("Creature")) {
      setCreatures((prev) => prev.filter((card) => card.id !== id));
    } else if (category.includes("Enchantment")) {
      setEnchantments((prev) => prev.filter((card) => card.id !== id));
    } else if (category.includes("Land")) {
      setLands((prev) => prev.filter((card) => card.id !== id));
    } else if (category.includes("Artifact")) {
      setArtifacts((prev) => prev.filter((card) => card.id !== id));
    }
  };

  const untapHandler = () => {
    setTappedCards({});
  };

  const toggleTapped = (id) => {
    setTappedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const CardList = ({
    cards,
    tappedCards,
    clickedId,
    clickHandler,
    toggleTapped,
    styles,
  }) => {
    return cards?.map((card) => (
      <>
        <img
          key={card.id}
          className={`${styles.cardImg} ${
            tappedCards[card.id] ? styles.rotated : ""
          }`}
          src={card.image_uri}
          alt={card.name}
          onClick={() => clickHandler(card.id)}
        />
        {clickedId === card.id ? (
          <IconButtons
            tapped={tappedCards[card.id] || false}
            onTap={() => toggleTapped(card.id)}
            exile={card}
            setExile={setExile}
            graveyard={card}
            setGraveyard={setGraveyard}
            removeFromPlayArea={removeFromPlayArea}
            clickedId={clickedId}
          />
        ) : null}
      </>
    ));
  };

  return (
    <div className={styles.container}>
      <img
        src="/assets/Magic-The-Gathering.webp"
        alt="Magic: The Gathering background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "120%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.5,
        }}
      />
      <button onClick={() => untapHandler()}>Untap All</button>
      <div className={styles.creatureEnchantment}>
        <div className={styles.creatureZone}>
          <h1 className={styles.zoneHeading}>Creatures</h1>
          <div className={styles.cardImgContainer}>
            <CardList
              cards={creatures}
              tappedCards={tappedCards}
              clickedId={clickedId}
              clickHandler={clickHandler}
              toggleTapped={toggleTapped}
              styles={styles}
            />
          </div>
        </div>
        <div className={styles.enchantmentZone}>
          <h1 className={styles.zoneHeading}>Enchantments</h1>
          <div className={styles.cardImgContainer}>
            <CardList
              cards={enchantments}
              tappedCards={tappedCards}
              clickedId={clickedId}
              clickHandler={clickHandler}
              toggleTapped={toggleTapped}
              styles={styles}
            />
          </div>
        </div>
      </div>
      <div className={styles.landsArtifacts}>
        <div className={styles.landsZone}>
          <h1 className={styles.zoneHeading}>Lands</h1>
          <div className={styles.cardImgContainer}>
            <CardList
              cards={lands}
              tappedCards={tappedCards}
              clickedId={clickedId}
              clickHandler={clickHandler}
              toggleTapped={toggleTapped}
              styles={styles}
            />
          </div>
        </div>
        <div className={styles.artifactsZone}>
          <h1 className={styles.zoneHeading}>Artifacts</h1>
          <div className={styles.cardImgContainer}>
            <CardList
              cards={artifacts}
              tappedCards={tappedCards}
              clickedId={clickedId}
              clickHandler={clickHandler}
              toggleTapped={toggleTapped}
              styles={styles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
