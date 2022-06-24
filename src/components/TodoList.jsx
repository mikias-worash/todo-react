import TodoItem from "./TodoItem";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoList() {
  const { todo } = useContext(TodoContext);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo.map((todoItem) => (
          <TodoItem key={todoItem.text} todoItem={todoItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
