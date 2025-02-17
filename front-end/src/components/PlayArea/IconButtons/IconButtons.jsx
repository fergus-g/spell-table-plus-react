import React from "react";
import styles from "./iconButtons.module.css";

const IconButtons = ({
  onTap,
  tapped,
  graveyard,
  setGraveyard,
  exile,
  setExile,
  removeFromPlayArea,
  clickedId,
}) => {
  const clickHandlerGrave = () => {
    removeFromPlayArea(graveyard?.type_line, clickedId);
    setGraveyard((prevGraveyard) => [...prevGraveyard, graveyard]);
  };

  const clickHandlerExile = () => {
    removeFromPlayArea(exile?.type_line, clickedId);
    setExile((prevExile) => [...prevExile, exile]);
  };

  return (
    <div className={styles.container}>
      <button onClick={clickHandlerGrave}>Graveyard</button>
      <button onClick={() => onTap(!tapped)}>Tap</button>
      <button onClick={clickHandlerExile}>Exile</button>
    </div>
  );
};

export default IconButtons;
