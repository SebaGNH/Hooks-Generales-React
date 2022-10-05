import React,{useRef} from 'react'

const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    inputRef.current.select();
  }
  return (
    <>
      <h3 className='text-white mb-3'>Focus Screen</h3>
      
      <input 
        type="text"
        placeholder='Ingrese su Nombre'
        className='form-control'
        ref={inputRef}
        />

      <button 
        className="btn btn-primary mt-4"
        onClick={onClick}
        >Set Focus
      </button>
    </>
  )
}

export default FocusScreen