import React from "react";

const ContextApi = React.createContext({
  lang: "",
  exchange: {
    supply: "",
    demand: "",
  },
});

export default ContextApi;
