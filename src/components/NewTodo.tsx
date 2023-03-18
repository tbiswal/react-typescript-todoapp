import React, { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo:React.FC = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      const enteredText = inputEl.current!.value;
      todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>Todo text</label>
      <input type="text" ref={inputEl} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
