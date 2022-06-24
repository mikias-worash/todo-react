import { useState } from "react";

function TodoForm({ todo, handleAdd }) {
  const [text, setText] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text,
    };

    handleAdd(newTodo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="todo-input" onChange={handleChange} />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">In-progress</option>
        </select>
      </div>
    </form>
  );
}

export default TodoForm;
