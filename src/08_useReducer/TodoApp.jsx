import {useEffect, useReducer } from "react"
import { todoReducer } from "./TodoReducer";
import {TodoList,TodoAdd} from './'

const initialState = [
/*   {
    id: Math.random().toString(36).substring(2),
    description: 'Recolectar Piedras',
    done: false
  },
  {
    id: Math.random().toString(36).substring(2),
    description: 'Cortar Madera',
    done: false
  } */
]


//Inicializa el local storage
const initStorage = () =>{
  //Si es nulo regresa un arreglo vacío " || [] "
  return JSON.parse(localStorage.getItem('TareasEstados')) || [];
}

const TodoApp = () => {

  const [estados, dispatch] = useReducer(todoReducer, initialState,initStorage);

  //LocalStorage almacenamiento de estados
  useEffect( ()=> {
    localStorage.setItem('TareasEstados',JSON.stringify(estados) )
  },[estados]);



  const onNewTodo = (todo) => {
    //console.log({todo})
    const action = {
      type: 'Add Todo',
      payload: todo
    }
    //Dispatch es la función con la que envío información al "todoReducer.js"
    dispatch(action);
  }

  const onDeleteTodo = (id) => {
    //console.log(id)
    //Usamos el dispatch sin crear la constante con el action
    dispatch({
      type: 'Remove Todo',
      payload: id
    })
  }
  

  const onToggleTodo = (id) =>{
    //console.log("Toggle",id)

    const action = {
      type: 'Toggle Todo',
      payload: id
    }

    dispatch(action);
  }

  return (
    <>
    <h2>Todo App (10), <small>Pendientes: 2</small></h2>

    <div className="row">

    <div className="col-md-7">
      <TodoList 
        estados={estados}
        onDeleteTodo={onDeleteTodo}
        onToggleTodo={onToggleTodo}
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