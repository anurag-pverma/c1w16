import React from "react";
import data from "../data.json";

const GroceryDetails = () => {
  console.log(data);

  return (
    <>
      <h1>Groceries</h1>
      <div className="container">
        {
          /* map through the data and display the cards */

          data &&
            data.map((item, key) => {
              return (
                <div className="box">
                  <div className="innerBox">
                    <img src={item.imgURL} alt="" />
                  </div>
                  <p>{item.title}</p>
                  <p> {item.mrp}</p>
                  <p>{item.sellingPrice}</p>
                  <p>{item.discount}</p>
                </div>
              );
            })
        }
      </div>
    </>
  );
};
export default GroceryDetails;
