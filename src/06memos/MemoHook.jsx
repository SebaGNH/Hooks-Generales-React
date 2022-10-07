import React,{useState, useMemo} from 'react'
import { useCounter } from '../hooks'

//usememo memoriza un valor
const heavyStuff = (counter = 100) =>{
  for (let i = 0; i < counter; i++) {
    console.log('Ahí Vamos')
  }
  return `${counter} iteraciones realizadas`;
}

const MemoHook = () => {
  const { counter, incrementar} = useCounter(500)
  const [show, setShow] = useState(true)
  
  const memorizedValue = useMemo(()=>{
    heavyStuff(counter)
  },[counter]);

  return (
    <>
      <h1>Counter: <small>{memorizedValue}</small> </h1>

      <button 
        className='btn btn-success'
        onClick={()=>incrementar()}
        >+1
      </button>

      <button
        className='btn btn-success'
        onClick={()=>setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default MemoHook