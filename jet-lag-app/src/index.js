import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const express = require('express');

const app = express();

app.use(express.static('static'));

app.use(express.urlencoded({
    extended: true
}))

app.post('/getSchedule', (req, res) => {
  req.body
})


ReactDOM.render(
    <App />,
  document.getElementById('root')
);
