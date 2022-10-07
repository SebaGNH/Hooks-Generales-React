console.clear()

const estadoInicial = [{
  id: 1,
  todo: 'Recolectar piedras',
  done: false
}]


const Reducer = (state = estadoInicial, action = {}) => {
  if (action.type === 'Carlitos') {
    return [...state, action.payload]
  }

  return state;
}



let tareas = Reducer();
//console.log(tareas); //[ { id: 1, todo: 'Recolectar piedras', done: false } ]


const nuevaTarea = {
  id:2,
  todo: 'Juntar Maderas',
  done: false
}

const addTodoAction = {
  type: 'Carlitos',
  payload: nuevaTarea
}

tareas = Reducer(tareas,addTodoAction);
console.log({state:tareas}) 


/*
{
  state: [
    { id: 1, todo: 'Recolectar piedras', done: false },
    { id: 2, todo: 'Juntar Maderas', done: false }
  ]
}
*/