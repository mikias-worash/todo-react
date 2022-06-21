import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import Head from "./components/Head";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <Head />
      <Header />
      <TodoForm />
      <TodoItem />
    </div>
  );
}

export default App;
