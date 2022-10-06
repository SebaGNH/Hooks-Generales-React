import React from 'react'
import {Counter01, Counter02,Counter03WithCustumHook} from './01useState'
//Importado desde el index.js
import { SimpleForm, SimpleFormWithCustomHook } from './02useEffect'
import {MultipleCustomHooks} from './03Examples';
import {FocusScreen} from './04useRef'
import {Layout} from './05useLayoutEffect'
import {Memorize} from './06memos'

const App = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-12">    
            {/* <Counter01 /> */}
            {/* <Counter02 /> */}
            {/* <Counter03WithCustumHook /> */}
          </div>

          <div className="col-md-12">
            {/* <SimpleForm /> */}
            {/* <SimpleFormWithCustomHook /> */}
          </div>

          <div className="col-md-12">
            {/* <MultipleCustomHooks /> */}
          </div>

          
          <div className="col-md-12">
            {/* <FocusScreen /> */}
          </div>

          
          <div className="col-md-12">
            {/* <Layout /> */}
          </div>

          <div className="col-md-12 bg-secondary rounded p-3">
            <Memorize />
          </div>



        </div>
      </div>
    </>
  )
}

export default App