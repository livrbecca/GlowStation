import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./Search.css";

const SearchResults = (value) => {

  return (
    <div>
      <h2 className="searchTitle">Search Results</h2>
      <h3 className="searchedValue">
        You searched for: <b>{value.value}</b>
      </h3>
      <div className="resultContainer">
        {value.searchResults.map((eachResult, key) => {
          const slugEncoded = encodeURIComponent(eachResult.slug);
          console.log(eachResult);
          return (
            <>
              <div className="result">
                <Link
                  to={{
                    pathname: `/product/${slugEncoded}`,
                    state: {
                      product: eachResult,
                    },
                  }}
                >
                  {/* <h3><b>{eachResult}</b></h3> - Try*/}
                  <Card.Img
                    variant="top"
                    className="searchPic"
                    src={eachResult.imageLinks.img1}
                    alt="products"
                  />
                  <Card.Body key={eachResult.id}>
                    <Card.Subtitle className="searchSub">{eachResult.brand}</Card.Subtitle>
                    <Card.Title className="searchTitle"> {eachResult.name}</Card.Title>
                    <Card.Subtitle className="searchSub">
                      <b>£{eachResult.price.toFixed(2)}</b>
                    </Card.Subtitle>
                    
                    <h3 className="searchDes">
                      {eachResult.description.largeDes}
                    </h3>
                   
                  </Card.Body>
                </Link>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
