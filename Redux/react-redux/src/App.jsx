import Container from "./components/Container";
import Controlls from "./components/Controlls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";

export default function App() {
  return (
    <center
      // className="px-4 py-5 my-5 text-center"
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplayCounter />
          <Controlls></Controlls>
        </div>
      </Container>
    </center>
  );
}
