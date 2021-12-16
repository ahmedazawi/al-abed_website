import React, { useContext } from "react";
import styles from "../../assets/css/circle_center.module.css";
import USDimg from "../../assets/images/USD.jpg";
import IQDimg from "../../assets/images/IQD.jpg";
import ContextApi from "../ContextApi";
const CircleCenter = () => {
  const lang = useContext(ContextApi);
  return (
    <div className={styles.center_circle_container}>
      <div className={styles.coins_container}>
        <div className={styles.coins}>
          <div>
            <span>USD</span>
            <img src={USDimg} alt="USD" />
          </div>
          <div>
            <span>IQD</span>
            <img src={IQDimg} alt="IQD" />
          </div>
        </div>
      </div>
      <div
        className={styles.coins_sales}
        style={
          lang === "AR"
            ? { borderRadius: "3.8vh 0 0 3.8vh" }
            : { borderRadius: "0 3.8vh 3.8vh 0" }
        }
      >
        <div className={styles.coins_sales_header}>
          {lang === "AR" ? "معروض" : "Supply"}
        </div>
        <div
          style={
            lang === "AR"
              ? {
                  borderLeft: "1px solid white",
                }
              : {
                  borderRight: "1px solid white",
                }
          }
          className={styles.field_one}
        >
          100
        </div>
        <div className={styles.field_two}>148,250</div>
      </div>

      <div
        className={styles.coins_sales}
        style={
          lang === "AR"
            ? { borderRadius: "3.8vh 0 0 3.8vh" }
            : { borderRadius: "0 3.8vh 3.8vh 0" }
        }
      >
        <div className={styles.coins_sales_header}>
          {lang === "AR" ? "مطلوب" : "Demand"}
        </div>
        <div
          style={
            lang === "AR"
              ? {
                  borderLeft: "1px solid white",
                }
              : {
                  borderRight: "1px solid white",
                }
          }
          className={styles.field_one}
        >
          100
        </div>
        <div className={styles.field_two}>147,250</div>
      </div>
      <div className={styles.circle_content_bottom}>
        <div>
          {lang === "AR"
            ? "ألاسعار غير ثابتة وقابلة للتغيير"
            : "Prices are not fixed and changeable"}
        </div>

        <div>07711111618</div>
      </div>
    </div>
  );
};

export default CircleCenter;
