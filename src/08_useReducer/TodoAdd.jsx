import React from 'react'
import {useForm} from '../hooks'

const TodoAdd = ({onNewTodo}) => {
  const {formState, onChangeInput,  onResetForm} = useForm(
    {
      description: ''
    }
  );


  const onSubmit = (e) => {
    e.preventDefault();

    if(formState.description <= 1) return; 

    const nuevaTarea = {
      id: Math.random().toString(36).substring(2),
      description: formState.description,
      done: false,
    }
    onNewTodo(nuevaTarea);
    onResetForm();
  }

  return (
    <>
      <h2>Agregar TODO</h2>
      <form action="" onSubmit={onSubmit}>
        <input 
          type="text" 
            placeholder="Que hay que hacer?"
            className="form-control"
            name='description'
            value={formState.description}
            onChange={onChangeInput}
          />
          <button
            type="submit"
            className="btn btn-primary mt-2"
          >Agregar</button>
      </form>
    </>
  )
}

export default TodoAdd