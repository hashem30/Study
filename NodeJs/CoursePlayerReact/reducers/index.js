import { combineReducers } from 'redux'
import counter from './counter'
import player from './player'

const playerApp = combineReducers({
  counter,
  player
})

export default playerApp
