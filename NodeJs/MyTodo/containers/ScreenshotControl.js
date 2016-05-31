import { connect } from 'react-redux'
import { drawScreenshot } from '../actions/screenshot'
import Screenshot from '../components/Screenshot'

const mapStateToProps = (state) => {
  return {
    images: state.screenshot.images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDrawScreenshot: (images) => {
      dispatch(drawScreenshot(images))
    }
  }
}

const ScreenshotControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screenshot)

export default ScreenshotControl
