import React, { Component, PropTypes } from 'react'

class Player extends Component {
  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  render() {
    const { value, onPlay, onStop, onJump } = this.props
    return (
      <p>
        Current Time: {time}
        {' '}
        <button onClick={onPlay}>
          Play
        </button>
        {' '}
        <button onClick={onStop}>
          Stop
        </button>
        <input type="text" value={this.state.time}
        <button onClick={onJump}>
          Jump
        </button>
      </p>
    )
  }
}

Player.propTypes = {
  time: PropTypes.number.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onJump: PropTypes.func.isRequired
}

export default Player
