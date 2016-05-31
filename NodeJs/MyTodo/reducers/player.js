const initialState = {
  time: 1,
  min: 1,
  max: 4 * 60 * 60 - 30 * 60,
  playing: false
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
      return Object.assign({}, state, {
        time: 1,
        playing: true,
      })
    case 'STOP':
      if (!state.playing) {
        return state
      }

      return Object.assign({}, state, {
        time: 1,
        playing: false
      })
    case 'TICK':
      return Object.assign({}, state, {
        time: action.time
      })
    case 'JUMP':
      if (!state.playing) {
        return state
      }

      return Object.assign({}, state, {
        time: parseInt(action.time)
      })
    case 'SLIDER_CHANGE':
      return Object.assign({}, state, {
        time: action.time
      })
    default:
      return state
  }
}
export default player
