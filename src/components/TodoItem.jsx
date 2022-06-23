import CompleteButton from "./shared/CompleteButton";
import TrashButton from "./shared/TrashButton";

function TodoItem({ todoItem }) {
  return (
    <div className="todo" style={{ display: "flex" }}>
      <li className="todo-item">{todoItem}</li>
      <CompleteButton />
      <TrashButton />
    </div>
  );
}

export default TodoItem;
