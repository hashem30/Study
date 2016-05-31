const play = (state, action) => {
  switch (action.type) {
    case 'PLAY':
      if (state.playing) {
        return state
      }

      return Object.assign({}, state, {
        playing: !state.playing
      })
    case 'STOP':
      if (!state.playing) {
        return state
      }

      return Object.assign({}, state, {
        time: 0,
        playing: !state.playing
      })
    case 'JUMP':
      if (!state.playing) {
        return state
      }

      return Object.assign({}, state, {
        time: !state.time
      })
    default:
      return state
  }
}
