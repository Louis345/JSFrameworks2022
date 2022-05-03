import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import Search from "../../components/Search/Search";
import styles from "./Header.module.css";

const Header = ({ onSearch, onTab }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Tabs onTab={onTab} />
        <div className={styles.bottomContainer}>
          <Search onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
};

export default Header;
