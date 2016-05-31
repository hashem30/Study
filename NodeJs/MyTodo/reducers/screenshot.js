const initialState = {
  images:[]
}

const screenshot = (state = initialState, action) => {
  switch (action.type) {
    case 'DRAW_SCREENSHOT':
      return Object.assign({}, state, {
        images: action.images
      })    
    default:
      return state
  }
}
export default screenshot
