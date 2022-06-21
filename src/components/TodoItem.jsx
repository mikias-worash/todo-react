import React from "react";
import CompleteButton from "./shared/CompleteButton";
import TrashButton from "./shared/TrashButton";

function TodoItem() {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <div className="todo" style={{ display: "flex" }}>
          <li className="todo-item">Wake up</li>
          <CompleteButton />
          <TrashButton />
        </div>
      </ul>
    </div>
  );
}

export default TodoItem;
