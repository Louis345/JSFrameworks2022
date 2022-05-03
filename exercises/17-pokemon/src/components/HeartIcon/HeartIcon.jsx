import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./HeartIcon.module.css";

const HeartIcon = ({ isFavorite, id, size, onClick }) => {
  const [liked, setLiked] = React.useState(false);

  return (
    <React.Fragment>
      {liked || isFavorite ? (
        <AiFillHeart
          className={styles.heart}
          onClick={() => {
            setLiked(false);
            onClick(id);
          }}
          size={size}
        />
      ) : (
        <AiOutlineHeart
          className={styles.heart}
          onClick={() => {
            setLiked(true);
            onClick(id);
          }}
          size={size}
        />
      )}
    </React.Fragment>
  );
};

export default HeartIcon;
