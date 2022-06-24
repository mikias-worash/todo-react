import TodoItem from "./TodoItem";

function TodoList({ todo, handleDelete }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todo.map((todoItem) => (
          <TodoItem
            key={todoItem.text}
            todoItem={todoItem}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
