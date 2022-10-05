import { useState } from "react"
//Si nomandan el initialValue entonces será 10
const useCounter = (initialValue = 5) => {
  const [counter, setCounter] = useState(initialValue);

  //Valor por defecto 1
  const incrementar = (value = 1) => {
    setCounter(counter + value);
  }
  const decrementar = (value = 1, minimo = 0) => {
    if (counter <= minimo) return;

    setCounter(counter - value);
  }
  const resetear = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    incrementar,
    decrementar,
    resetear
  }
}

export default useCounter