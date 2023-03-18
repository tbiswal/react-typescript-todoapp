import React, { useState } from "react";
import Todo from "../models/todo";
interface Props {
  children: React.ReactNode;
}

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC<Props> = (props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodoList((prevState) => [...prevState, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todoList,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
       {props.children}
    </TodosContext.Provider>
  );
};
