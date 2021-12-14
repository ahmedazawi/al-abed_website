import React from "react";
import styles from "../../assets/css/Cards.module.css";
import Card from "./Card";
import data from "../../assets/data/cards.json";
const Cards = () => {
  return (
    <div className={styles.cards}>
      {data.map((data) => {
        return <Card data={data} key={data.id} />;
      })}
    </div>
  );
};

export default Cards;
