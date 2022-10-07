import React from 'react'

const ShowIncrement = ({incrementar}) => {
  console.log('Ejecutando ShowIncrement');
  return (
    <>
      <button
        className='btn btn-warning'
        onClick={incrementar}
      >Incrementar</button>
    </>
  )
}

export default ShowIncrement