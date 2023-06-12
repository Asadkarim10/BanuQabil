
import React, { useState } from "react";
import DeleteIcon from "../assets/deleteicon.png"
import "./todo.css"
import { FaHeart } from 'react-icons/fa';


export const TodoItem = ({title, deleteTodo}) =>{
  const [completed, setCompleted] = useState(false);

  const OnPress = () => {
    setCompleted(!completed);
  };
  
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title" style={{ textDecoration: completed ? "line-through" : "none" }}>{title}</p> 
      <div className="img-but">      
      <img className="todo-icon" src={DeleteIcon} style={{borderColor: completed ? "red" : "white" }} onClick={deleteTodo} />
      <FaHeart onClick={OnPress}  style={{ color: completed ? "red" : "black"}} />
      </div>
    </div>
  )
}