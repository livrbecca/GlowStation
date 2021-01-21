import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "../ShopAndProducts/Rating";

const SearchResults = (value) => {



  //console.log("value:", value);
  //console.log("value.searchResults:", value.searchResults);
//   console.log(slug);
//   console.log(slugEncoded);
  return (
    <div>
      <h2>Search Results</h2>
      <h3>
        You searched for: <b>{value.value}</b>
      </h3>

      {value.searchResults.map((eachResult, key) => {
         const slugEncoded = encodeURIComponent(eachResult.slug);
        console.log(eachResult)
        return (
          <>
            <Link
              to={{
                pathname: `/product/${slugEncoded}`,
                state: {
                  product: eachResult,
                },
              }}
            >
              <Card.Img
                variant="top"
                className="displayPics"
                src={eachResult.imageLinks.img1}
                alt="products"
               
              />
              <Card.Body key={eachResult.id}>
                <Card.Subtitle>{eachResult.brand}</Card.Subtitle>
                <Card.Title> {eachResult.name}</Card.Title>
                <Card.Subtitle>
                  <b>£{eachResult.price.toFixed(2)}</b>
                </Card.Subtitle>
                <Rating
                  rating={eachResult.rating}
                  numReviews={eachResult.numReviews}
                />
              </Card.Body>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default SearchResults;
