//let currentTime = 0
export const playStart = () => {
  return {
    type: 'PLAY'
  }
}
export const playStop = () => {
  return {
    type: 'STOP'
  }
}

export const playJump = (time) => {
  return {
    type: 'JUMP',
    time
  }
}
