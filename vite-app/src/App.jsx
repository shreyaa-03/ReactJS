import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMessage";

const App = () => {
    let foodItems = ["veg", "non-veg", "apple"];
  // let foodItems = [];

  return (
    <React.Fragment>
      <h1>Heading</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  );
};
export default App;
