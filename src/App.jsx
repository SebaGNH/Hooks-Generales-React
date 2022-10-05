import React from 'react'
import {Counter01, Counter02,Counter03WithCustumHook} from './01useState'
//Importado desde el index.js
import { SimpleForm, SimpleFormWithCustomHook } from './02useEffect'
import {MultipleCustomHooks} from './03Examples';

const App = () => {
  return (
    <>
      <div className="container">
        <div className="row">

          <div className=''>    
            {/* <Counter01 /> */}
            {/* <Counter02 /> */}
            {/* <Counter03WithCustumHook /> */}
          </div>

          <div className=''>
            {/* <SimpleForm /> */}
            {/* <SimpleFormWithCustomHook /> */}
          </div>

          <div className="col-md-12">
            <MultipleCustomHooks />
          </div>



        </div>
      </div>
    </>
  )
}

export default App