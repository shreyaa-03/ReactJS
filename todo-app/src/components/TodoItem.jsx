function TodoItem() {
  let todoName = "Buy Milk";
  let todoDate = "15/06/2024";

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
