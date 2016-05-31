import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
  )
}

render()
store.subscribe(render)


import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import playerApp from './reducers'
import App from './components/App'

let store = createStore(playerApp)
const rootEl = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)
