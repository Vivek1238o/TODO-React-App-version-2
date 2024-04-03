import TodoItem from "./TodoItem";
import styles from "./todoItems.module.css";

const Todoitems = ({ todoItems, onDeleteclick }) => {
  return (
    <div className={styles.items_container}>
      {todoItems.map((items) => (
        <TodoItem
          tododate={items.duedate}
          todoname={items.name}
          onDeleteclick={onDeleteclick}
        />
      ))}
    </div>
  );
};
export default Todoitems;
