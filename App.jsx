import Appname from "./Components/Appname";
import Addtodo from "./Components/Addtodo";
import "./App.css";
import Todoitems from "./Components/TodoItems";
import Welcomemessage from "./Components/Welcomemessage";
import { useState } from "react";
function App() {
  const initialtodoItems = [
    {
      name: "Go to college",
      duedate: "7/11/2024",
    },
    {
      name: "Learn javascript",
      duedate: "10/11/2024",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialtodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, duedate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(
      (todoItem) => todoItem.name !== todoItemName
    );
    setTodoItems(newTodoItems);
    console.log(`Delete item : ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <Welcomemessage></Welcomemessage>}
      <Todoitems
        todoItems={todoItems}
        onDeleteclick={handleDeleteItem}
      ></Todoitems>
    </center>
  );
}
export default App;
