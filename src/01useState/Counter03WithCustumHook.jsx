import React,{useState} from 'react'
import useCounter from '../hooks/useCounter'

const Counter03WithCustumHook = () => {

  const {counter,incrementar,decrementar,resetear} = useCounter(3);

  return (
    <>
      <h3>Counter: {counter}</h3>
      <div className="">
        <button 
          className='btn btn-primary'
          onClick={()=>incrementar(2)}
          >+2
        </button>

        <button className='btn btn-success' onClick={resetear}>0</button>
        <button className='btn btn-primary' onClick={()=>decrementar(1)}>-1</button>
      </div>
    </>
  )
}

export default Counter03WithCustumHook