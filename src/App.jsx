import React from 'react'
import {Counter01, Counter02,Counter03WithCustumHook} from './01useState'
//Importado desde el index.js
import { SimpleForm, SimpleFormWithCustomHook } from './02useEffect'
import {MultipleCustomHooks} from './03Examples';
import {FocusScreen} from './04useRef'
import {Layout} from './05useLayoutEffect'
import {Memorize,MemoHook,CallBackHook} from './06memos'
import { Padre } from './07tarememo/Padre';
import {TodoApp} from './08_useReducer';
import {AppContext} from './09_useContext'
import AppRedux from './18_Redux_Toolkit/AppRedux';




const App = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">

          <div className="col-md-12">    
           {/*  <Counter01 /> */}
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
           {/*  <FocusScreen /> */}
          </div>

          
          <div className="col-md-12">
            {/* <Layout /> */}
          </div>

          <div className="col-md-12">
           {/*  <Memorize /> */}
            {/* <MemoHook /> */}
           {/*  <CallBackHook /> */}
           {/*  <Padre /> */}
          </div>

          <div className="col-md-12">
            {/* <IntroReducer /> */}
            {/* <TodoApp /> */}
          </div>

          <div className="col-md-12 bg-secondary rounded p-3">
            {/* <IntroReducer /> */}
            {/* <AppContext /> */}
          </div>

          <div className="col-md-12">
            <AppRedux/>
          </div>


        </div>
      </div>
    </>
  )
}

export default App