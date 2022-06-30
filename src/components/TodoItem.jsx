import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoItem({ todoItem }) {
  const { markTodo, deleteTodo, selected } = useContext(TodoContext);
  const check = todoItem.checked;

  return (
    <div
      className={`${todoItem.checked ? "todo completed" : "todo"}`}
      style={{
        display:
          selected === "all"
            ? "flex"
            : selected === "completed" && check
            ? "flex"
            : selected === "inprogress" && !check
            ? "flex"
            : "none",
      }}
    >
      <li className="todo-item">{todoItem.text}</li>
      <button className="complete-btn" onClick={() => markTodo(todoItem)}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(todoItem.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
