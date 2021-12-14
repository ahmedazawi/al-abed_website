import React, { useContext } from "react";
import Cards from "../components/home/Cards";
import ContextApi from "../components/ContextApi";
const Services = () => {
  const lang = useContext(ContextApi);
  return (
    <div className="services-container">
      <h1 style={{ fontSize: "40px" }}>
        {lang.lang === "AR" ? "الخدمات المقدمة" : "Services provided"}
      </h1>
      <ul style={{ margin: "40px 0", lineHeight: "50px", fontSize: "25px" }}>
        <li>
          {lang.lang === "AR"
            ? "التوسط في بيع وشراء العملات الاجنبية حسب تعليمات البنك المركزي العراقي "
            : "Mediation in the sale and purchase of foreign currencies according to the Central Bank of Iraq instructions "}
        </li>
        <li>
          {lang.lang === "AR"
            ? "الحوالة الداخلية الى جميع محافظات العراق "
            : "Internal transfer to all Iraq governorates"}
        </li>
        <li>
          {lang.lang === "AR"
            ? "صرف رواتب الموظفين والمتقاعدين كافة "
            : "Pay all employees and retirees salaries"}
        </li>
        <li>
          {lang.lang === "AR"
            ? "خدمة تحويل الويسترن يومين والموني غرام حسب تعليمات البنك المركزي العراقي قريبا "
            : "Western Union and Money Gram transfer service according to the the Central Bank of Iraq instructions"}
        </li>
        <li>
          {lang.lang === "AR"
            ? "اصدار بطاقات الماستر"
            : "master cards Issuance"}
        </li>
      </ul>
      <div className="cards-services-container">
        <Cards />
      </div>
    </div>
  );
};

export default Services;
