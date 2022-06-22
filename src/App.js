import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Head from "./components/Head";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Head />
      <Header />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
