import React from "react";
import "./styles.css";
import { getBeerBrands, getBeerImages } from "./index";
import BrandDisplay from "./BrandDisplay";

export default function App() {
  const [beerBrands, setBeerBrands] = React.useState([]);
  const [brandNameFilter, setBrandNameFilter] = React.useState("");
  React.useEffect(() => {
    let tempdata;
    getBeerBrands().then((data) => {
      tempdata = data;
    });
    getBeerImages().then((data) => {
      let index = 0;
      tempdata.map((beer) => {
        beer.image = data[index % 5].image;
        index++;
        return beer;
      });
      setBeerBrands(tempdata);
    });
  }, []);

  return (
    <div className="App">
      <input
        id="searchBrandNameInput"
        onChange={(event) => setBrandNameFilter(event.target.value)}
        placeholder="Enter Brand Name"
      ></input>
      <BrandDisplay filter={brandNameFilter} data={beerBrands} />
    </div>
  );
}
