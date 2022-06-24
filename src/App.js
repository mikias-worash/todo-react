import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Head from "./components/Head";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
  ]);

  const deleteTodo = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodo(todo.filter((item) => item.id !== id));
    }
  };

  const addNewTodo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodo([newTodo, ...todo]);
  };

  return (
    <div className="App">
      <Head />
      <Header />
      <TodoForm todo={todo} handleAdd={addNewTodo} />
      <TodoList todo={todo} handleDelete={deleteTodo} />
    </div>
  );
}

export default App;
