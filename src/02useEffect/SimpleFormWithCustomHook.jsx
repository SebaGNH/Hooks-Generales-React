import React,{useState,useEffect} from 'react'


const SimpleFormWithCustomHook = () => {
  const [formState, setFormState] = useState({
    userName: '',
    email: '',
    password:''
  })


  const onChangeInput = (e) =>{
    const {name,value} = e.target;


    setFormState({
      ...formState,
      [name]:value
    });
  }

  useEffect( () => {
    //
  },[formState.email]);


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
        </div>
      </div>
    </>
  )
}

export default SimpleFormWithCustomHook