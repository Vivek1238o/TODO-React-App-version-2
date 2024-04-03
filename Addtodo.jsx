import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
function Addtodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [duedate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddbutton = () => {
    onNewItem(todoName, duedate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div class="col-4">
          <input
            type="date"
            value={duedate}
            onChange={handleDateChange}
          ></input>
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kg-button"
            onClick={handleAddbutton}
          >
            <IoAddCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Addtodo;
