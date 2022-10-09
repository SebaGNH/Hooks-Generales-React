import { useReducer } from "react"
import { todoReducer } from "./TodoReducer";
import {TodoList,TodoAdd} from './'

const initialState = [
  {
    id: Math.random().toString(36).substring(2),
    description: 'Recolectar Piedras',
    done: false
  },
  {
    id: Math.random().toString(36).substring(2),
    description: 'Cortar Madera',
    done: false
  }
]


const TodoApp = () => {

  const [estados, dispatch] = useReducer(todoReducer, initialState);

  const onNewTodo = (todo) => {
    //console.log({todo})
    const action = {
      type: 'Add Todo',
      payload: todo
    }
    //Dispatch es la función con la que envío información al "todoReducer.js"
    dispatch(action);
  }


  return (
    <>
    <h2>Todo App (10), <small>Pendientes: 2</small></h2>

    <div className="row">

    <div className="col-md-7">
      <TodoList 
        estados={estados}
      />        
    </div>


      <div className="col-md-5">
        <TodoAdd 
          onNewTodo={onNewTodo}
        />
      </div>

    </div>
    </>
  )
}

export default TodoApp