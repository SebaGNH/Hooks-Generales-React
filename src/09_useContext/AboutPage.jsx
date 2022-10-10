import React,{useContext} from 'react'
import { UserContext } from './context/UserContext'

const AboutPage = () => {
  const {user} = useContext(UserContext)

  return (
    <>
      <h2>AboutPage</h2>
      <code>
        {JSON.stringify(user,null,3)}
      </code>
    </>
  )
}

export default AboutPage