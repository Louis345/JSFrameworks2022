import React from "react";
import Tabs from "../../components/Tabs/Tabs";
import Search from "../../components/Search/Search";
import styles from "./Header.module.css";
import { MdOutlineSubject } from "react-icons/md";
import { AiFillAppstore } from "react-icons/ai";

const Header = ({ onSearch, onTab }) => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Tabs onTab={onTab} />
        <div className={styles.bottomContainer}>
          <Search onSearch={onSearch} />
          <MdOutlineSubject className={styles.icon} size={30} />
          <AiFillAppstore className={styles.icon} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
