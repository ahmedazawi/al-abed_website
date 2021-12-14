import axios from "axios";
import React, { useEffect } from "react";

useEffect(() => {
  axios.get("194.163.172.70:3002/template/alabed-exchange").then((response) => {
    console.log(response);
  });
}, []);
const ContextApi = React.createContext({
  lang: "",
});

export default ContextApi;
