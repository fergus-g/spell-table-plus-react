import { useState } from "react";
import IconButtons from "./IconButtons/IconButtons.jsx";
import styles from "./PlayArea.module.css";

export default function PlayArea({
  creatures,
  enchantments,
  lands,
  artifacts,
}) {
  const [clickedId, setClickedId] = useState(null);
  const [tappedCards, setTappedCards] = useState({});

  const clickHandler = (id) => {
    setClickedId((prevId) => (prevId === id ? null : id));
  };

  const untapHandler = () => {
    setTappedCards({});
  };

  const toggleTapped = (id) => {
    setTappedCards((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle tapped state for specific card ID
    }));
  };

  const creatureCards = creatures?.map((creature) => {
    return (
      <>
        <img
          className={`${styles.cardImg} ${
            tappedCards[creature.id] ? styles.rotated : ""
          }`}
          key={creature.id}
          src={creature.image_uri}
          alt={creature.name}
          onClick={() => clickHandler(creature.id)}
        />
        {clickedId === creature.id ? (
          <IconButtons
            tapped={tappedCards[creature.id] || false}
            onTap={() => toggleTapped(creature.id)}
          />
        ) : null}
      </>
    );
  });

  const enchantmentsCards = enchantments?.map((enchantments) => {
    return (
      <>
        <img
          className={`${styles.cardImg} ${
            tappedCards[enchantments.id] ? styles.rotated : ""
          }`}
          key={enchantments.id}
          src={enchantments.image_uri}
          alt={enchantments.name}
          onClick={() => clickHandler(enchantments.id)}
        />
        {clickedId === enchantments.id ? (
          <IconButtons
            tapped={tappedCards[enchantments.id] || false}
            onTap={() => toggleTapped(enchantments.id)}
          />
        ) : null}
      </>
    );
  });

  const landsCards = lands?.map((lands) => {
    return (
      <>
        <img
          className={`${styles.cardImg} ${
            tappedCards[lands.id] ? styles.rotated : ""
          }`}
          key={lands.id}
          src={lands.image_uri}
          alt={lands.name}
          onClick={() => clickHandler(lands.id)}
        />
        {clickedId === lands.id ? (
          <IconButtons
            tapped={tappedCards[lands.id] || false}
            onTap={() => toggleTapped(lands.id)}
          />
        ) : null}
      </>
    );
  });
  const artifactCards = artifacts?.map((artifact) => {
    return (
      <>
        <img
          className={`${styles.cardImg} ${
            tappedCards[artifact.id] ? styles.rotated : ""
          }`}
          key={artifact.id}
          src={artifact.image_uri}
          alt={artifact.name}
          onClick={() => clickHandler(artifact.id)}
        />
        {clickedId === artifact.id ? (
          <IconButtons
            tapped={tappedCards[artifact.id] || false}
            onTap={() => toggleTapped(artifact.id)}
          />
        ) : null}
      </>
    );
  });

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
          <div className={styles.cardImgContainer}>{creatureCards}</div>
        </div>
        <div className={styles.enchantmentZone}>
          <h1 className={styles.zoneHeading}>Enchantments</h1>
          <div className={styles.cardImgContainer}>{enchantmentsCards}</div>
        </div>
      </div>
      <div className={styles.landsArtifacts}>
        <div className={styles.landsZone}>
          <h1 className={styles.zoneHeading}>Lands</h1>
          <div className={styles.cardImgContainer}>{landsCards}</div>
        </div>
        <div className={styles.artifactsZone}>
          <h1 className={styles.zoneHeading}>Artifacts</h1>
          <div className={styles.cardImgContainer}>{artifactCards}</div>
        </div>
      </div>
    </div>
  );
}
