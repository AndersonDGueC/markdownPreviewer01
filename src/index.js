import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <div className="container-fluid">
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

