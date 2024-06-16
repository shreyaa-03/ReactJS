/* eslint-disable react/prop-types */
import React from "react";
import Item from "./Item";

export default function FoodItems({ items }) {
  const buttonClicked = (item) => {
    console.log(`${item} bought`);
  };
  return (
    <React.Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            buttonClicked={() => buttonClicked(item)}
            foodItem={item}
          ></Item>
        ))}
      </ul>
    </React.Fragment>
  );
}
