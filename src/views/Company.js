import React, { useContext } from "react";
import styles from "../assets/css/company.module.css";

import data from "../assets/data/comapnies.json";
import ContextApi from "../components/ContextApi";
const images = require.context("../assets/images/co-page", false, /\.(png|jpe?g|svg)$/);


const Company = () => {
  const lang = useContext(ContextApi);
  return (
    <div className={styles.company}>
      <h1 style={{ fontSize: "40px" }}>
        {lang === "AR" ? "الشركات" : "Companies"}
      </h1>
      <div className={styles.cards_container}>
        <div className={styles.cards}>
          {data.map((el) => {
            return (
              <div className={styles.card} key={el.id}>
                <img
                  src={images(`./${el.img}`)}
                  alt={el.alt}
                />
                <div>
                  <h2> {lang === "AR" ? el.title_AR : el.title_EN}</h2>
                  <p>{lang === "AR" ? el.description_AR : el.description_EN}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Company;
