import React, { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodoList((prevState) => [...prevState, newTodo]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    });
  };

  return (
    <div className="App">
      <NewTodo onSaveNewTodo={addTodoHandler} />
      <Todos items={todoList} onDelete={deleteTodoHandler} />
    </div>
  );
}

export default App;
