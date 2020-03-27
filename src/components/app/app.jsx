import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../../pages/home'
import About from '../../pages/about'
import Sidebar from '../sidebar'

import './reset.css';
import './app.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <Sidebar/>
      
        <div className='content'>
          <Switch>
            <Route path="/" exact={true} component={Home}>
              {/* <Home /> */}
            </Route>
            <Route path="/about" component={About}>
              {/* <About /> */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
