console.clear()

const initialState = [{
  id: 1,
  todo: 'Recolectar piedras',
  done: false
}]


const Reducer = (state = initialState, action = {}) => {
  if (action.type === '[TODO] add todo') {
    return [...state, action.payload]
  }

  return state;
}



let todos = Reducer();
//console.log(todos); //[ { id: 1, todo: 'Recolectar piedras', done: false } ]


const newTodo = {
  id:2,
  todo: 'Juntar Maderas',
  done: false
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
}

todos = Reducer(todos,addTodoAction);
console.log({state:todos}) 