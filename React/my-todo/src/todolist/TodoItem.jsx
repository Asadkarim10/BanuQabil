
import React, { useState } from "react";
import DeleteIcon from "../assets/deleteicon.png"
import "./todo.css"

export const TodoItem = ({title, deleteTodo}) =>{
  const [completed, setCompleted] = useState(false);

  const OnPress = () => {
    setCompleted(!completed);
  };
  
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title" style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</p> 
      <div className="img-but">      
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
      <button onClick={OnPress}   style={{ borderColor: completed ? "green" : "black"}} > A</button>
      </div>
    </div>
  )
}