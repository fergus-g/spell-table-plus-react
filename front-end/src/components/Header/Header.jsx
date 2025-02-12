import AccountHeader from "./Account/AccountHeader.jsx";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <AccountHeader />
    </div>
  );
};

export default Header;
