import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Head from "./components/Head";
import TodoList from "./components/TodoList";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Head />
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
