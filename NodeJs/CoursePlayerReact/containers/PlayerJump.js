import React from 'react'
import { connect } from 'react-redux'
import { jumpTime } from '../actions'

let PlayerJump = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(jumpTime(input.value))
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
PlayerJump = connect()(PlayerJump)

export default PlayerJump
