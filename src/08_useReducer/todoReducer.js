export const todoReducer = (initialState = [],action) => {
  switch (action.type) {
    case 'Add Todo': 
      return [...initialState, action.payload];
    
    case 'Remove Todo':
      //Filter devuelve un nuevo arreglo, no lo muta como el push
      return initialState.filter(todo => todo.id !== action.payload)

    case 'Toggle Todo':
      return initialState.map( todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo;
      })

    default: return initialState;

  }
}