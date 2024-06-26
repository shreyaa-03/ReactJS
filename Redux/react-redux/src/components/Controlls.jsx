import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions, privacyActions } from "../store";

export default function Controlls() {
  const dispath = useDispatch();
  const NumRef = useRef();

  const handleIncrement = () => {
    dispath(counterActions.increment());
  };
  const handleDecrement = () => {
    dispath(counterActions.decrement());
  };
  const handleAdd = () => {
    dispath(counterActions.add({ num: NumRef.current.value }));
    NumRef.current.value = "";
  };
  const handleSubtract = () => {
    dispath(counterActions.subtract({ num: NumRef.current.value }));
    NumRef.current.value = "";
  };
  const handlePrivacy = () => {
    dispath(privacyActions.privacyToggle());
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
