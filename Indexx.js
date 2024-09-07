import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Creed  from './App';
import { NavyProvider } from './NavyContext';

ReactDOM.render(
  <Router>
    <NavyProvider>
      <Creed />
      <Home />
       <About />
        <Contact />
    </NavyProvider>
  </Router>,
  document.getElementById('root')
);
