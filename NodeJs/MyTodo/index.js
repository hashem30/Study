import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)



var interval = null;
store.subscribe(() => {
  if (store.getState().player.playing && interval === null) {
    interval = setInterval(() => {
      if (store.getState().player.time >= store.getState().player.max) {
        store.dispatch({
          type: 'STOP'
        });
      } else {
        store.dispatch({
          type: 'TICK',
          time: store.getState().player.time + 1
        });
      }
    }, 1000);
  }
  if (!store.getState().player.playing && interval !== null) {
    clearInterval(interval);
    interval = null;
  }
});
