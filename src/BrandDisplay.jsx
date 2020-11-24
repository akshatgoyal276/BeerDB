import React from "react";
import "./styles.css";

export default function BrandDisplay(props) {
  const { data } = props;
  return (
    <div id="list">
      {data.map((beer) => {
        return (
          <div id={beer.id} className="beerBrandCard" key={beer.id}>
            <img src={beer.image} width="200px" alt="beerImage" />
            <div className="beerDetails">
              {beer.abv !== "" ? <p>{"ABV : " + beer.abv}</p> : ""}
              {beer.ibu !== "" ? <p>{"IBU : " + beer.ibu}</p> : ""}
              <p>{"Name : " + beer.name}</p>
              <p>{"Style : " + beer.style}</p>
              <p>{"Ounces : " + beer.ounces}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
