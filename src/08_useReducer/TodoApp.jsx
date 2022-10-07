import { useReducer } from "react"
import { todoReducer } from "./TodoReducer";

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

  return (
    <>
    <h2>Todo App (10), <small>Pendientes: 2</small></h2>

    <div className="row">
      <div className="col-md-7">
        <ul className="list-group">
          {
            estados.map( estado =>(
              <li key={estado.id} className="list-group-item d-flex justify-content-between"> 
                <span className="align-self-center">item 1</span>
                <button className="btn btn-danger">Borrar</button>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="col-md-5">
        <h2>Agregar TODO</h2>
        <form action="">
          <input 
            type="text" 
              placeholder="Que hay que hacer?"
              className="form-control"
            />
            <button
              type="submit"
              className="btn btn-primary mt-2"
            >Agregar</button>
        </form>
      </div>

    </div>
    </>
  )
}

export default TodoApp