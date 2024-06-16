import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

const App = () => {
 

  let [foodItems, setFoodItems] = useState([])

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFoodItem = event.target.value
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      event.target.value = ''
      console.log(newFoodItem)
    }
}
  return (
    <>
    <Container>
      <h1>Food Items</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg items={foodItems}></ErrorMsg>
        {/* <p>{ textToShow}</p> */}
      <FoodItems items={foodItems} ></FoodItems>
      </Container>
      {/* <Container>
        <p>Above food for your well-being.</p>
      </Container> */}
      </>
  );
};
export default App;
