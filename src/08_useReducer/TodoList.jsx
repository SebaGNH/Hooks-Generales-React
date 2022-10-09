import React from 'react'
import {TodoItem} from './'

const TodoList = ({estados = [],onDeleteTodo,onToggleTodo}) => {
  return (
    <>
        <ul className="list-group">
          {
            estados.map( estado =>(
              <TodoItem 
                key={estado.id}
                estado={estado}
                onDeleteTodo={onDeleteTodo}
                onToggleTodo={onToggleTodo}
              />
            ))
          }
        </ul>
    </>
  )
}

export default TodoList