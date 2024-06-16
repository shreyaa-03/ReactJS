import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMessage";
import Container from "./components/Container";

const App = () => {
    let foodItems = ["veg", "non-veg", "apple"];
  // let foodItems = [];

  return (
    <>
    <Container>
      <h1>Heading</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
      </Container>
      <Container>
        <p>Above food for your well-being.</p>
      </Container>
      </>
  );
};
export default App;
