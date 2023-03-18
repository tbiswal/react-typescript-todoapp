import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import { TodosContextProvider } from "./store/todos-context";

import "./App.css";

function App() {
  return (
    <div className="App">
      <TodosContextProvider>
        <NewTodo />
        <Todos />
      </TodosContextProvider>
    </div>
  );
}

export default App;
