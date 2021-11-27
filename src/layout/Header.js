import React, { useContext } from "react";
import "../assets/css/header.css";
import BrandIcon from "../assets/svg/Asset5";
import Facebook from "../assets/svg/FacebookBrands";
import Whatsapp from "../assets/svg/WhatsappBrands";
import ContextApi from "../components/ContextApi";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const lang = useContext(ContextApi);
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  navLink.forEach((n) => n.addEventListener("click", closeMenu));
  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="nav-logo">
          <BrandIcon />
        </NavLink>

        <div className="nav-menu">
          <NavLink to="/about" className="nav-link">
            <div>{lang === "AR" ? "من نحن" : "About"}</div>
          </NavLink>
          <NavLink to="/services" className="nav-link">
            <div>{lang === "AR" ? "الخدمات" : "Services"}</div>
          </NavLink>
          <NavLink to="/companies" className="nav-link">
            <div>{lang === "AR" ? "الشركات" : "Companies"}</div>
          </NavLink>

          <NavLink to="/contact" className="nav-link">
            <div>{lang === "AR" ? "اتصل بنا" : "Contact Us"}</div>
          </NavLink>

          <div className="mobile-contact">
            <div className="header-contact-elements">
              <div
                style={{ fontSize: "20px", fontWeight: "600" }}
                onClick={() => props.changeLang()}
              >
                {lang === "AR" ? "EN" : "AR"}
              </div>
              <div style={{ width: "20px" }}>
                <a
                  href="https://wa.me/+9647700680038"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Whatsapp />
                </a>
              </div>
              <div style={{ width: "20px" }}>
                <a
                  href="https://www.facebook.com/alabedexchange1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div onClick={mobileMenu} className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div
        className="header-contact"
        style={
          lang === "AR" ? { marginLeft: "100px" } : { marginRight: "100px" }
        }
      >
        <div className="header-contact-elements">
          <div
            style={{ fontSize: "20px", fontWeight: "600" }}
            onClick={() => props.changeLang()}
          >
            {lang === "AR" ? "EN" : "AR"}
          </div>
          <div
            style={{ width: "20px", textDecoration: "none", color: "white" }}
          >
            <a
              href="https://wa.me/+9647700680038"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Whatsapp />
            </a>
          </div>
          <div style={{ width: "20px" }}>
            <a
              href="https://www.facebook.com/alabedexchange1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
