function TodoItem({ todoItem, handleDelete }) {
  const handleComplete = (item) => {
    console.log(item + " completed");
  };

  return (
    <div className="todo" style={{ display: "flex" }}>
      <li className="todo-item">{todoItem.text}</li>
      <button
        className="complete-btn"
        onClick={() => handleComplete(todoItem.id)}
      >
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={() => handleDelete(todoItem.id)}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
