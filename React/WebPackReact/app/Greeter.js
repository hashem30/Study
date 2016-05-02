/*
var config = require('./config.json');

module.exports = function() {
  var greeter = document.createElement('div');
  greeter.textContent = config.greetText;
  return greeter;
};
*/
import React, {Component} from 'react'
import config from './config.json';
import styles from '../public/greeter.css';

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}>
        <h2>React</h2>
        <h3>{config.greetText}</h3>
      </div>
    );
  }
}

export default Greeter
