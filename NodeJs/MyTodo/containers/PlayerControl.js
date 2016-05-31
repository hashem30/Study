import { connect } from 'react-redux'
import { playStart, playStop, sliderChange } from '../actions/player'
import Player from '../components/Player'

const mapStateToProps = (state) => {
  return {
    time: state.player.time,
    min: state.player.min,
    max: state.player.max,
    playing: state.player.playing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlay: () => {
      dispatch(playStart())
    },
    onStop: () => {
      dispatch(playStop())
    },
    onSliderChange: (time) => {
      dispatch(sliderChange(time))
    }
  }
}

const PlayerControl = connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)

export default PlayerControl
