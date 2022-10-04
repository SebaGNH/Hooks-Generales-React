import React,{useState,useEffect} from 'react'
import useForm from '../hooks/useForm'

const SimpleFormWithCustomHook = () => {
  //Destructuramos userName,email,password
  const {formState, onChangeInput,onResetForm, userName,email,password} = useForm( {
    userName: '',
    email: '',
    password:''
  });




  return (
    <>
      <div className="col-6 card bg-secondary mb-3 p-1 ">
        <div className="card-header">
          <h3>Formulario Custom Hook</h3>
        </div>

        <div className="card-body">
          <input 
            type="text"
            className='form-control'
            placeholder='UserName'
            name='userName'
            value={formState.userName}
            onChange={onChangeInput}
            />

          <input 
            type="email"
            className='form-control mt-3'
            placeholder='notengo@notengo.com'
            name='email'
            value={formState.email}
            onChange={onChangeInput}
            />

          <input 
            type="password"
            className='form-control mt-3'
            placeholder='Password'
            name='password'
            value={formState.password}
            onChange={onChangeInput}
            />



          <div className="d-grid mt-4">
            <button 
              className="btn btn-lg btn-primary" 
              type="button"
              onClick={onResetForm}
              >Borrar
            </button>
          </div>



        </div> {/* Fin Row */}
      </div>
    </>
  )
}

export default SimpleFormWithCustomHook