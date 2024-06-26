import { useDispatch } from "react-redux";

export default function Controlls() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        -1
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleIncrement}
      >
        +1
      </button>
    </div>
  );
}
