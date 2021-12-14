import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Company from "./views/Company";
import Contact from "./views/Contact";

import axios from "axios";

import ContextApi from "./components/ContextApi";
import cookieCutter from "cookie-cutter";
function App() {
  const [lang, setLang] = useState();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "YWRtaW5AdGhvdGhvOmcwMDM4Mzk2Mg==",
      },
    };
    axios
      .get("http://194.163.172.70:3002/template/alabed-exchange")
      .then((response) => {
        console.log(response.data[0].data.Supply);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let myCoockie = cookieCutter.get("abed-lang");
    if (myCoockie === "AR") {
      setLang("AR");
    } else if (myCoockie === "EN") {
      setLang("EN");
    } else {
      setLang("AR");
    }
  }, []);
  useEffect(() => {
    cookieCutter.set("abed-lang", lang);
    if (lang === "AR") {
      document.body.style.direction = "rtl";
    } else {
      document.body.style.direction = "ltr";
    }
  });
  const changeLang = () => {
    if (lang === "AR") {
      setLang("EN");
      return window.location.replace("/");
    } else {
      setLang("AR");
      return window.location.replace("/");
    }
  };
  if (lang === "AR") {
    document.body.style = "font-family: 'Cairo', sans-serif";
  } else {
    document.body.style = "font-family: 'Rubik', sans-serif";
  }
  return (
    <div className="App">
      <ContextApi.Provider value={lang}>
        <BrowserRouter>
          <Header changeLang={changeLang} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/services" exact element={<Services />} />
            <Route path="/companies" exact element={<Company />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ContextApi.Provider>
    </div>
  );
}

export default App;
