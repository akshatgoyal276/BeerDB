import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

export async function getBeerBrands() {
  let response = await fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
  );
  let data = await response.json();
  return data;
}
export async function getBeerImages() {
  let response = await fetch(
    "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
  );
  let data = await response.json();
  return data;
}
