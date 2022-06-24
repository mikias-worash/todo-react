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
    console.log(id);
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  const addNewTodo = (newTodo) => {
    newTodo.id = uuidv4();
    newTodo.checked = false;
    setTodo([newTodo, ...todo]);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        deleteTodo,
        addNewTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
