import React,{useState,useEffect} from 'react'
import Message from './Message'

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    userName: '',
    email: ''
  })

  //También podemos destructurar el evento {target}
  const onChangeInput = (e) =>{
    const {name,value} = e.target;
    //console.log(e.target.value)
    //console.log(name,value,{name,value})
    //userName carlitose Object { name: "userName", value: "carlitose" }

    setFormState({
      ...formState,
      [name]:value
    });
  }


  useEffect( () => {
    console.log('Renderizado')
  },[formState.email]);

  return (
    <>
      <h1>Formulario Simple</h1>

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
        {/* <Message /> */}
    </>
  )
}

export default SimpleForm