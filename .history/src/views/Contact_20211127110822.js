import React, { useContext } from "react";
import ContextApi from "../components/ContextApi";
import Email from "../assets/svg/EnvelopeSolid";
const Contact = () => {
  const lang = useContext(ContextApi);
  return (
    <div className="contact-page ">
      <h1 style={{ fontSize: "40px" }}>
        {" "}
        {lang === "AR" ? "اتصل بنا" : "Contact Us"}
      </h1>
      <p>
        {lang === "AR"
          ? "تواصل معنا عن طريق ايميل الشركة او عبر الارقام في ألاسفل"
          : "Contact us via the company's email or via the phone numbers below"}
      </p>

      <div className="section_two-contact_wrapper">
        <Email width="25" />
        <div style={{ fontSize: "25px" }}> <a href="mailto:info@alabedexchange.iq" style={{textDecoration: 'none' , color: "var(--topHeaderColor)" }}>info@alabedexchange.iq</a> </div>
      </div>
      <p style={{ fontSize: "25px" }}>07711111618 - 07719000069</p>
    </div>
  );
};

export default Contact;
