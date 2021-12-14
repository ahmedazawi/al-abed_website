import React, { useContext } from "react";
import ContextApi from "../components/ContextApi";
import Img from "../assets/images/bg_al-abed.jpeg";
const About = () => {
  const lang = useContext(ContextApi);
  return (
    <div className="about-container">
      <img src={Img} alt="al-abed bg" />
      <h1>
        {lang.lang === "AR" ? "نبذة عن الشركة" : "Overview on the Company "}
      </h1>
      <p>
        {lang.lang === "AR"
          ? "تعد العابد للصيرفة  شركة رائدة فى مجال التحويلات المالية وخدمات الصرافة بدولة العراق. تأسست الشركة في عام 2012 وتخضع لإشراف البنك المركزي العراقي تلتزم الشركة بأعلى قيم النزاهة والشفافية والمصداقية. خلال تلك الفترة القصيرة نسبياً من عمر تواجد الشركة بمجال الصيرفة."
          : "Al-abed Exchange is the leading Remittance and Money Exchange Co. in Iraq. We were founded in 2012 and are regulated by the Central Bank of Iraq  and are led by strong values of integrity, transparency and trust. In this short period of our operations."}
      </p>
    </div>
  );
};

export default About;
