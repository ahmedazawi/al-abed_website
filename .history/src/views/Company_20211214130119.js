import React, { useContext } from "react";
import styles from "../assets/css/company.module.css";

import data from "../assets/data/comapnies.json";
import ContextApi from "../components/ContextApi";
const Company = () => {
  const lang = useContext(ContextApi);
  return (
    <div className={styles.company}>
      <h1 style={{ fontSize: "40px" }}>
        {lang.lang === "AR" ? "الشركات" : "Companies"}
      </h1>
      <div className={styles.cards_container}>
        <div className={styles.cards}>
          {data.map((el) => {
            return (
              <div className={styles.card} key={el.id}>
                <img
                  src={require("../assets/images/co-page/" + el.img).default}
                  alt={el.alt}
                />
                <div>
                  <h2> {lang.lang === "AR" ? el.title_AR : el.title_EN}</h2>
                  <p>
                    {lang.lang === "AR" ? el.description_AR : el.description_EN}
                  </p>
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
