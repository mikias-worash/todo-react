function TodoItem({ todoItem }) {
  return (
    <div className="todo" style={{ display: "flex" }}>
      <li className="todo-item">{todoItem}</li>
      <button class="complete-btn">
        <i class="fas fa-check"></i>
      </button>
      <button class="trash-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
