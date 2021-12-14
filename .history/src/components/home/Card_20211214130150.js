import React, { useContext } from "react";
import styles from "../../assets/css/Cards.module.css";
import ContextApi from "../ContextApi";
const Card = (props) => {
  const lang = useContext(ContextApi);

  return (
    <div className={styles.card}>
      <img
        src={require("../../assets/images/cards/" + props.data.img).default}
        alt={props.data.alt}
        width="150"
      />
      <div>
        {lang.lang === "AR" ? props.data.title_AR : props.data.title_EN}
      </div>
    </div>
  );
};

export default Card;
