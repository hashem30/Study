import React from 'react'
import { connect } from 'react-redux'
import { playJump } from '../actions/player'

let PlayerBar = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(playJump(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Jump
        </button>
      </form>
    </div>
  )
}
PlayerBar = connect()(PlayerBar)

export default PlayerBar
