import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Task 1 from context",
      checked: false,
    },
    {
      id: 2,
      text: "Task 2 from context",
      checked: false,
    },
  ]);

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  const markTodo = (item) => {
    const newTodo = {
      id: item.id,
      text: item.text,
      checked: !item.checked,
    };

    setTodo(
      todo.map((todoItem) =>
        todoItem.id === item.id ? { ...todoItem, ...newTodo } : todoItem
      )
    );
  };

  const addNewTodo = (newTodo) => {
    newTodo.id = uuidv4();
    newTodo.checked = false;
    setTodo([...todo, newTodo]);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        deleteTodo,
        addNewTodo,
        markTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
