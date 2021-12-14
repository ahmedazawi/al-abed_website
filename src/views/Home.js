import React, { useContext } from "react";
import Img from "../assets/images/bg_al-abed.jpeg";
import WebHomeComponent from "../components/home/WebHomeComponent";
import Cards from "../components/home/Cards";
import ContextApi from "../components/ContextApi";
const Home = () => {
  const lang = useContext(ContextApi);

  return (
    <div>
      <div className="home-container">
        <div className="home-bg-img">
          <img src={Img} alt="bg" />
        </div>

        <WebHomeComponent />

        <div className="cards-container">
          <h1 className="title">
            {lang.lang === "AR" ? "خدماتنا" : "Our Services"}
          </h1>
          <Cards />
        </div>
        <div className="google-map">
          <h1 className="title">
            {lang.lang === "AR" ? "موقع الشركة" : "Company Location"}
          </h1>
          <div className="google-map-code">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.79588404784727!2d44.33880122563358!3d33.263989505660476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1559d56705081561%3A0x5022ef1826ffda1e!2z2LTYsdmD2Ycg2KfZhNi52KfYqNivINmE2YTYtdix2KfZgdmH!5e0!3m2!1sen!2siq!4v1637967843907!5m2!1sen!2siq"
              width="100%"
              height="600"
              title="google map"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
