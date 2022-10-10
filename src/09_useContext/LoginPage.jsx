import React,{useContext} from 'react'
import { UserContext } from './context/UserContext';

const LoginPage = () => {

  const {user,setUser} = useContext(UserContext);
  //console.log(user)

  return (
  <>
    <h2>LoginPage {'  '+ user?.name}</h2>
    <pre>
      {JSON.stringify(user,null,3)}
    </pre>

    <button className="btn btn-primary"
      onClick={()=> setUser({id:123, name: 'Canelo', email:'notengo@notengo.com'})}
    >
      Agregar Usuario
    </button>
  </>
  )
}

export default LoginPage