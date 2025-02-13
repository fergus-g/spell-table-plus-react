import styles from "./iconButtons.module.css";

const IconButtons = ({ onTap, tapped }) => {
  return (
    <div className={styles.container}>
      <button>Graveyard</button>
      <button onClick={() => onTap(!tapped)}>Tap</button>
      <button>Exile</button>
    </div>
  );
};

export default IconButtons;
