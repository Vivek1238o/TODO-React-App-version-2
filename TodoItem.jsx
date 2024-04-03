import { MdDeleteOutline } from "react-icons/md";
function TodoItem({ todoname, tododate, onDeleteclick }) {
  return (
    <div ClassName="container">
      <div class="row kg-row">
        <div class="col-6">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteclick(todoname)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
