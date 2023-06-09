/* eslint-disable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png"
import "./todo.css"

export const TodoItem = ({ title, deleteTodo,button }) => {
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title">{title}</p>
      {button}
      <img className="todo-icon"  onClick={deleteTodo}  src={DeleteIcon} />
    </div>
  )
}