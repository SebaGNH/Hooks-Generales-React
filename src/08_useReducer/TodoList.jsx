import React from 'react'
import {TodoItem} from './'

const TodoList = ({estados = []}) => {
  return (
    <>
        <ul className="list-group">
          {
            estados.map( estado =>(
              <TodoItem 
                key={estado.id}
                estado={estado}
              />
            ))
          }
        </ul>
    </>
  )
}

export default TodoList