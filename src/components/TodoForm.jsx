import { useState } from "react";
import { useContext } from "react";
import TodoContext from "../context/TodoContext";

function TodoForm({ handleAdd }) {
  const [text, setText] = useState();

  const { addNewTodo } = useContext(TodoContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text,
    };

    addNewTodo(newTodo);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        onChange={handleChange}
        value={text}
      />
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
