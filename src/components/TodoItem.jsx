import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoItem({ todoItem }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo" style={{ display: "flex" }}>
      <li className="todo-item">{todoItem.text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => deleteTodo(todoItem.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
