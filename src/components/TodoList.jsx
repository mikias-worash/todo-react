import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todo, setTodo] = useState(["Task 1", "Task 2", "Task 3"]);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo.map((todoItem) => (
          <TodoItem todoItem={todoItem} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
