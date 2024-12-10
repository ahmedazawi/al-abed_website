import React, { useContext } from "react";
import styles from "../../assets/css/Cards.module.css";
import ContextApi from "../ContextApi";

const images = require.context("../../assets/images/cards", false, /\.(png|jpe?g|svg)$/);


const Card = (props) => {
  const lang = useContext(ContextApi);

  return (
    <div className={styles.card}>
      <img
         src={images(`./${props.data.img}`)}
        alt={props.data.alt}
        width="150"
      />
      <div>{lang === "AR" ? props.data.title_AR : props.data.title_EN}</div>
    </div>
  );
};

export default Card;
