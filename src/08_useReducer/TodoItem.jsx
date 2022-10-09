import React from 'react'

const TodoItem = ({estado,onDeleteTodo,onToggleTodo}) => {
  return (
    <li className="list-group-item d-flex justify-content-between"> 
      <span 
        className={`align-self-center ${(estado.done)?'text-decoration-line-through': ''}`}
        onClick={()=> onToggleTodo(estado.id)}
        >{estado.description}</span>
      <button 
        className="btn btn-danger"
        onClick={()=>onDeleteTodo(estado.id)}
        >Borrar</button>
    </li>
  )
}

export default TodoItem