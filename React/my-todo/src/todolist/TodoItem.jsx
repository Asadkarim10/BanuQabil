/* eslint-disable react/prop-types */
import { useState } from "react";
import DeleteIcon from "../assets/deleteicon.png"
import "./todo.css"

export const TodoItem = ({ title, deleteTodo }) => {
  const [isChecked, setIsChecked] = useState(false);
  
 





  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title">{title}</p>
      <div ClassName="works">
      <input type="checkbox"   
     onChange={() =>  setIsChecked((prev) => !prev) + alert("you have done your task")
    
    } 
     

      />  
     
    



      <img className="todo-icon"  onClick={deleteTodo}  src={DeleteIcon} />
      </div>
    </div>
  )
}
