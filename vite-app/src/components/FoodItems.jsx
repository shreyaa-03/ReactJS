/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Item from "./Item";

export default function FoodItems({ items, setFoodItems }) {
  let [boughtItems, setBoughtItems] = useState([]);

  const buttonClicked = (event, item) => {
    // Add items to boughtItems array and 'Delete' text
    if (boughtItems.includes(item)) {
      let newItems = boughtItems.filter((boughtItem) => boughtItem !== item);
      setBoughtItems(newItems);
      console.log(`${item} removed`);
      // On clicked 'Delete' delete the item from itemsArray
      if (items.includes(item)) {
        let newItems = items.filter((delitems) => delitems !== item);
        setFoodItems(newItems);
        console.log(`${item} removed`);
      }
    } else {
      console.log(`${item} bought`);
      let newItems = [...boughtItems, item];
      setBoughtItems(newItems);
    }
  };

  return (
    <React.Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            bought={boughtItems.includes(item)}
            key={item}
            buttonClicked={(event) => buttonClicked(event, item)}
            foodItem={item}
          ></Item>
        ))}
      </ul>
    </React.Fragment>
  );
}
