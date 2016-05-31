import React from 'react'
import Screenshot from './Screenshot'
import Counter from './Counter'
const App = () => (
  <div>
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
    <Screenshot />
  </div>
)

export default App
