import React from "react";
import PropTypes from "prop-types";
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

IconButtons.propTypes = {
  onTap: PropTypes.func,
  tapped: PropTypes.bool,
  graveyard: PropTypes.array,
  setGraveyard: PropTypes.func,
  exile: PropTypes.array,
  setExile: PropTypes.func,
  removeFromPlayArea: PropTypes.func,
  clickedId: PropTypes.number,
};
