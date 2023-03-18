import React, { useRef } from "react";
import classes from './NewTodo.module.css';

// import Todo from "../models/todo";

const NewTodo:React.FC<{onSaveNewTodo: (text: string) => void}> = (props) => {
  const inputEl = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      const enteredText = inputEl.current!.value;
      props.onSaveNewTodo(enteredText);
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
