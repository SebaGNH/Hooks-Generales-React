import React from 'react'

const TodoItem = ({estado}) => {
  return (
    <li className="list-group-item d-flex justify-content-between"> 
      <span className="align-self-center">{estado.description}</span>
      <button className="btn btn-danger">Borrar</button>
    </li>
  )
}

export default TodoItem