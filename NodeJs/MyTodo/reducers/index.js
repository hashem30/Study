import { combineReducers } from 'redux'
import todos from './todos'
import player from './player'
import screenshot from './screenshot'
const todoApp = combineReducers({
  todos,
  player,
  screenshot
})

export default todoApp
