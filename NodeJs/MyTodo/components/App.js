import React from 'react'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import PlayerControl from '../containers/PlayerControl'
import PlayerBar from '../containers/PlayerBar'
import ScreenshotControl from '../containers/ScreenshotControl'
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <PlayerControl />
    <PlayerBar />
    <ScreenshotControl />
  </div>
)

export default App
