import React from "react";
import styles from "./Card.module.css";
import HeartIcon from "../HeartIcon/HeartIcon";

const Card = ({ pokemonName, image, id, isFavorite, handleOnPokemonClick }) => {
  return (
    <div className={styles.container} key={id}>
      <img src={image} alt={pokemonName} className={styles.image} />

      <div className={styles.contentContainer}>
        <div className={styles.subContainer}>
          <div className={styles.title}>{pokemonName}</div>
          <div className={styles.content}>
            <div className={styles.iconContainer}>
              <HeartIcon
                isFavorite={isFavorite}
                id={id}
                size={15}
                name={pokemonName}
                onClick={() => handleOnPokemonClick(id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
