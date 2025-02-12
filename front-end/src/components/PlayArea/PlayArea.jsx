import styles from "./PlayArea.module.css";

export default function PlayArea({
  creatures,
  enchantments,
  lands,
  artifacts,
}) {
  const creatureCards = creatures?.map((creature) => {
    return (
      <img
        className={styles.cardImg}
        key={creature.id}
        src={creature.image_uri}
        alt={creature.name}
      />
    );
  });

  const enchantmentCards = enchantments?.map((enchantment) => {
    return (
      <img
        className={styles.cardImg}
        key={enchantment.id}
        src={enchantment.image_uri}
        alt={enchantment.name}
      />
    );
  });

  const landCards = lands?.map((land) => {
    return (
      <img
        className={styles.cardImg}
        key={land.id}
        src={land.image_uri}
        alt={land.name}
      />
    );
  });

  const artifactCards = artifacts?.map((artifact) => {
    return (
      <img
        className={styles.cardImg}
        key={artifact.id}
        src={artifact.image_uri}
        alt={artifact.name}
      />
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
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.5,
        }}
      />
      <div className={styles.creatureEnchantment}>
        <div className={styles.creatureZone}>
          <h1 className={styles.zoneHeading}>Creatures</h1>
          <div className={styles.cardImgContainer}>{creatureCards}</div>
        </div>
        <div className={styles.enchantmentZone}>
          <h1 className={styles.zoneHeading}>Enchantments</h1>
          <div className={styles.cardImgContainer}>{enchantmentCards}</div>
        </div>
      </div>
      <div className={styles.landsArtifacts}>
        <div className={styles.landsZone}>
          <h1 className={styles.zoneHeading}>Lands</h1>
          <div className={styles.cardImgContainer}>{landCards}</div>
        </div>
        <div className={styles.artifactsZone}>
          <h1 className={styles.zoneHeading}>Artifacts</h1>
          <div className={styles.cardImgContainer}>{artifactCards}</div>
        </div>
      </div>
    </div>
  );
}
