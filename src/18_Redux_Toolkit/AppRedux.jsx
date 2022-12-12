import React from 'react'
import { Provider } from 'react-redux'
import { CounterRedux } from './components/CounterRedux'
import {store} from './store/store'


const AppRedux = () => {
  
  return (
    <Provider store={store}>
      <CounterRedux/>
    </Provider>
  )
}

export default AppRedux