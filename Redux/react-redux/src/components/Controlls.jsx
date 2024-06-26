import { useRef } from "react";
import { useDispatch } from "react-redux";

export default function Controlls() {
  const dispatch = useDispatch();
  const NumRef = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: NumRef.current.value } });
    NumRef.current.value = "";
  };
  const handleSubtract = () => {
    dispatch({ type: "SUB", payload: { num: NumRef.current.value } });
    NumRef.current.value = "";
  };
  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
  };

  return (
    <>
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="Enter number" ref={NumRef} />

        <button type="button" className="btn btn-info" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleSubtract}
        >
          Subtract
        </button>
      </div>
    </>
  );
}
