import React from "react";
import styles from "./Search.module.css";

const Search = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className={styles.search}
      onChange={onSearch}
      data-testid="search"
    />
  );
};

export default Search;
