import React from 'react'
import {Routes,Route,Navigate,Link,NavLink} from 'react-router-dom'
import {HomePage, AboutPage,LoginPage} from './'
import { UserProvider } from './context/UserProvider'

const AppContext = () => {
  return (
    <UserProvider>
      <h2>AppContext</h2>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded-3">
        <Link className="navbar-brand" to="/">useContext</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <NavLink 
              className={({isActive}) => `nav-link ${isActive?'active':''}`}  
              to="/"
              end
              >Home
            </NavLink>
            <NavLink 
              className={({isActive}) => `nav-link ${isActive?'active':''}`}  
              to="/AboutPage"
              >AboutPage
            </NavLink>
            <NavLink 
              className={({isActive}) => `nav-link ${isActive?'active':''}`}
              to="/LoginPage"
              >LoginPage
            </NavLink>           
          </ul>
        </div>
      </nav>

      

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/AboutPage' element={<AboutPage />}/>
        <Route path='/LoginPage' element={<LoginPage />}/>
        {/* <Route path='/*' element={<HomePage />}/> */}
        <Route path='/*' element={<Navigate to='/' />}/>
      </Routes>
    </UserProvider>
  )
}

export default AppContext