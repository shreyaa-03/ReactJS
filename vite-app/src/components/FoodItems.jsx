/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Item from "./Item";

export default function FoodItems({ items }) {

  let [boughtItems, setBoughtItems] = useState([])

  const buttonClicked = (event,item) => {
    console.log(`${item} bought`);
    let newItems = [...boughtItems, item]
    setBoughtItems(newItems)
  };
  return (
    <React.Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            bought={boughtItems.includes(item)}
            key={item}
            buttonClicked={(event) => buttonClicked(event,item)}
            foodItem={item}
          ></Item>
        ))}
      </ul>
    </React.Fragment>
  );
}
