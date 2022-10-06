import React,{useState} from 'react'
import { useCounter } from '../hooks'
import {Small} from './'

const Memorize = () => {
  const { counter, incrementar} = useCounter(0)
  const [show, setShow] = useState(true)
  

  return (
    <>
      <h1>Counter: <Small counter={counter}/>  </h1>

      <button 
        className='btn btn-primary'
        onClick={()=>incrementar()}
        >+1
      </button>

      <button
        className='btn btn-primary'
        onClick={()=>setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default Memorize