import { useReducer } from "react"

const initialState = [
  {
    id: Math.random().toString(36).substring(2),
    description: 'Recolectar Piedras'
  }
]


const TodoApp = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <h2>Todo App</h2>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
    </>
  )
}

export default TodoApp