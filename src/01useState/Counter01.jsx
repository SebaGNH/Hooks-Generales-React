import React,{useState} from 'react'

const Counter01 = () => {

  const [{counter1,counter2,counter3}, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })


  
  return (
    <>
      <h2>Counter: {counter1}</h2>
      <h2>Counter: {counter2}</h2>
      <h2>Counter: {counter3}</h2>

      <hr />
      <button 
        className='btn btn-primary'
        onClick={()=>setCounter(
          {
            counter1:counter1 +1,
            counter2,
            counter3
          }
        )}>+1</button>
    </>
  )
}

export default Counter01