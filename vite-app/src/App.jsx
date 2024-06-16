import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

const App = () => {
    let foodItems = ["veg", "non-veg", "apple"];
  // let foodItems = [];
  const handleOnChange = (event) =>{
    console.log(event.target.value)
}


  return (
    <>
    <Container>
      <h1>Heading</h1>
        <ErrorMsg items={foodItems}></ErrorMsg>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <FoodItems items={foodItems} ></FoodItems>
      </Container>
      <Container>
        <p>Above food for your well-being.</p>
      </Container>
      </>
  );
};
export default App;
