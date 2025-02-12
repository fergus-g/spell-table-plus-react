import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img className={styles.img} src="../../../public/assets/header.png" />
    </div>
  );
};

export default Header;
