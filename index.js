import React, { Children, StrictMode } from 'react';
import './index.css';
import Creed from './App';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <StrictMode>
   <Creed />
  </StrictMode>,
  document.getElementById('root')
);

reportWebVitals();