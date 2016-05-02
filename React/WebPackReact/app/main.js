/*
var greeter = require('./greeter');
document.getElementById('root').appendChild(greeter());
*/
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import '../public/main.css';

render(<Greeter />, document.getElementById('root'));
