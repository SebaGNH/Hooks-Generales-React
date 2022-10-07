import React,{useState, useCallback} from 'react'
import ShowIncrement from './ShowIncrement'

// useCallback es como el memo pero para memorizar funciones, la función solo se va a reprocesar cuando algo en ella cambie

const CallBackHook = () => {
  const [counter, setCounter] = useState(0)


/*   const incrementar = () =>{
    setCounter( counter +1)
  } */

  //Función memorizada, solo se ejecuta una vez //NO ME FUNCÓ
  const incrementarCallBack = useCallback( () => {
    setCounter( counterCB => counterCB + 1)
  },
  [],
)

  return (
    <>
      <h2>useCallback Hook {counter}</h2>
      <ShowIncrement 
        incrementar={incrementarCallBack}
      />
    </>
  )
}

export default CallBackHook