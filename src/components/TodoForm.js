
import { Button, TextField, } from "@material-ui/core";
import React, { useState } from 'react';
import {v4 as uuid }  from "uuid";

function TodoForm( {addTodo} ){
  const [todo , setTodo] = useState({
    id: "",
    task: "", 
    completed: false
  });

  function handleTaskInputChange(e){
  setTodo({... todo, task: e.target.value })
  }

  function handleSubmit(e){
    e.preventDefault();
    if(todo.task.trim()){
      addTodo({...todo, id: uuid });

      setTodo({...todo, task:""});

    }
  }
  return ( 
  
    <form onSubmit={handleSubmit}>
      <TextField className="todo-form" label="Task" type="text" value={todo.task} onChange={handleTaskInputChange}/>
      <Button type="submit">Add it</Button> 
    </form>

  );
}

export default TodoForm;