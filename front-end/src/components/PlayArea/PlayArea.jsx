import styles from "./PlayArea.module.css";

export default function PlayArea() {
  return (
    <div className={styles.container}>
      <div className={styles.cardzone}>
        <div className={styles.creatureZone}>
          <h1 className={styles.zoneHeading}>Creatures</h1>
          <div className={styles.cardImages}></div>
        </div>
        <div className={styles.enchantmentZone}>
          <h1 className={styles.zoneHeading}>Enchantments</h1>
          <div className={styles.cardImages}></div>
        </div>
      </div>
      <div className={styles.landsArtifacts}>
        <div className={styles.landsZone}>
          <h1 className={styles.zoneHeading}>Lands</h1>
          <div className={styles.cardImages}></div>
        </div>
        <div className={styles.artifactsZone}>
          <h1 className={styles.zoneHeading}>Artifacts</h1>
          <div className={styles.cardImages}></div>
        </div>
      </div>
    </div>
  );
}
