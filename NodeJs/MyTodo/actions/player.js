export const playStart = () => {
  return {
    type: 'START'
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

export const sliderChange = (time) => {
  return {
    type: 'SLIDER_CHANGE',
    time
  }
}
