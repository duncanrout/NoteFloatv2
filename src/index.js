import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1185475",
    key: "8f672c2c33f0c373e1b6",
    secret: "16c4e31c3d6e8cdce6f7",
    cluster: "us2",
    useTLS: true
});

pusher.trigger("my-channel", "my-event", {
    message: "hello world"
});


ReactDOM.render(
   
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
