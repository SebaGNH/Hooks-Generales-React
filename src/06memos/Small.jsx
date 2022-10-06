import React,{memo} from 'react'

//Memo le indica que memorize este componente, no olvidar poner las llaves () al inicio y fin, es para que no se renderize cuando no hubo cambios en el
// recibe como argumento todo el componente
const Small = memo(({counter}) => {
  console.log("Me volví a generar")
  return (
    <small>{counter}</small>
  )
})

export default Small