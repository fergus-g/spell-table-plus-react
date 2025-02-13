import styles from "./iconButtons.module.css";

const IconButtons = () => {
  return (
    <div className={styles.container}>
      <button>Graveyard</button>
      <button>Tap</button>
      <button>Exile</button>
    </div>
  );
};

export default IconButtons;
