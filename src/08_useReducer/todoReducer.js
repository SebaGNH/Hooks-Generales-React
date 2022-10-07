export const todoReducer = (initialState = [],action) => {
  switch (action.tipe) {
    case 'ABC': 
      throw new Error('Action.type = ABC no está implementada');

    default: return initialState

  }
}