import React from "react";
import "./styles.css";
import { getBeerBrands, getBeerImages } from "./index";
import BrandDisplay from "./BrandDisplay";

export default function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    let tempdata;
    getBeerBrands().then((data) => {
      tempdata = data;
      getBeerImages().then((data) => {
        let index = 0;
        tempdata.map((beer) => {
          beer.image = data[index % 5].image;
          index++;
          return beer;
        });
        setData(tempdata);
        setBeerBrands(tempdata);
      });
    });
  }, []);

  const [beerBrands, setBeerBrands] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);

  function applyFilter(filter) {
    let arr = [...data];
    arr = arr.filter((beer) => {
      if (beer.name.toLowerCase().includes(filter.toLowerCase())) {
        return true;
      }
      return false;
    });
    setBeerBrands(arr);
  }
  const lastPage =
    parseInt(beerBrands.length / 20, 10) +
    (beerBrands.length % 20 === 0 ? 0 : 1);
  const onPageInput = (page) => {
    if (page > lastPage) {
      return;
    } else if (page < 1) {
      return;
    } else {
      setCurrentPage(page - 1);
    }
  };

  return (
    <div className="App">
      <input
        id="searchBrandNameInput"
        onChange={(event) => {
          applyFilter(event.target.value);
        }}
        placeholder="Enter Brand Name"
      ></input>
      <br />
      <input
        id="pageInput"
        type="number"
        placeholder="Enter the page Number"
        onChange={(event) => onPageInput(event.target.value)}
      ></input>
      <p>{"Last Page is : " + lastPage}</p>
      <BrandDisplay
        data={beerBrands.slice(20 * currentPage, 20 + 20 * currentPage)}
      />
    </div>
  );
}
