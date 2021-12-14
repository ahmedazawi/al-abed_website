import React from "react";

const ContextApi = React.createContext({
  lang: "",
});
const fetchApi = React.createContext({
  exchange: {},
})

export = { ContextApi;
fetchApi;
}