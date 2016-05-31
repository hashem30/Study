require('rc-slider/assets/index.css');
//http://react-component.github.io/slider/

import React, { PropTypes } from 'react'
import Slider from 'rc-slider'

function format(time) {
  const pad = (time, length) => {
    while (time.length < length) {
      time = '0' + time;
    }
    return time;
  }

  time = new Date(time * 1000);
  let m = pad((time.getHours() - 18).toString(), 2);
  let s = pad(time.getMinutes().toString(), 2);
  let ms = pad(time.getSeconds().toString(), 2);

  return `${m} : ${s} : ${ms}`;
}

const Player = ({ time, min, max, playing, onPlay, onStop, onSliderChange }) => (
  <div>
    Current Time: {format(time)}
    Status: {playing?1:0}
    {' '}
    <button onClick={onPlay}>
      Play
    </button>
    {' '}
    <button onClick={onStop}>
      Stop
    </button>
    <Slider value={time} min={min} max={max} onChange={onSliderChange} />
  </div>
)

Player.propTypes = {
  time: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  playing: PropTypes.bool.isRequired,
  onPlay: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onSliderChange: PropTypes.func.isRequired
}

export default Player
