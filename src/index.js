import React from 'react';
import ReactDOM from 'react-dom';
import './list.css';
import './index.css';
import Board from "./board"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board />, document.getElementById('app'));
registerServiceWorker();
