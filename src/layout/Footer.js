import React, { useContext } from "react";
import Logo from "../assets/svg/Asset5";
import EmailLogo from "../assets/svg/EnvelopeSolid";
import LocationLogo from "../assets/svg/CompassSolid";

import ContextApi from "../components/ContextApi";
const Footer = () => {
  const lang = useContext(ContextApi);
  return (
    <footer className="footer-container">
      <div className="footer-section_one">
        <Logo width="286" style={{ marginTop: "4vw" }} />
        <div>
          {lang === "AR" ? (
            <p>تواصل معنا : 07711111618 - 07719000069 </p>
          ) : (
            <p>Contact Us : 07711111618 - 07719000069</p>
          )}
        </div>
      </div>
      <div className="footer-section_two">
        <div className="section_two-contact">
          <div className="section_two-contact_wrapper">
            <LocationLogo width="37" />
            <div>
              {lang === "AR"
                ? "بغداد - البياع - مقابل معارض السيارات - بداية شارع 26"
                : "Baghdad - alBayaa - opposite the Cars dealership showrooms - beginning of 26 street"}
            </div>
          </div>
          <div className="section_two-contact_wrapper">
            <EmailLogo width="37" />
            <div>info@alabedexchange.iq</div>
          </div>
        </div>
        <hr />
        <div
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "15px",
            textAlign: "center",
          }}
        >
          {lang === "AR"
            ? "جميع الحقوق محفوظة شركة العابد للصرافة 2021"
            : "All rights reserved Al-Abed Exchange Company 2021"}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
