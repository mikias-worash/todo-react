import { createContext, useState } from "react";
import { useEffect } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    const response = await fetch(`http://localhost:5000/todo?_sort=id`);

    const data = await response.json();
    setTodo(data);
  };

  const deleteTodo = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await fetch(`http://localhost:5000/todo/${id}`, { method: "DELETE" });
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  const markTodo = async (item) => {
    const newTodo = {
      id: item.id,
      text: item.text,
      checked: !item.checked,
    };

    const response = await fetch(`http://localhost:5000/todo/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    const data = await response.json();

    setTodo(
      todo.map((todoItem) =>
        todoItem.id === item.id ? { ...todoItem, ...data } : todoItem
      )
    );
  };

  const addNewTodo = async (newTodo) => {
    newTodo.checked = false;
    const response = await fetch(`http://localhost:5000/todo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    const data = await response.json();
    setTodo([...todo, data]);
  };

  const handleFilter = (e) => {
    setSelected(e.target.value);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        selected,
        deleteTodo,
        addNewTodo,
        markTodo,
        fetchTodo,
        handleFilter,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
