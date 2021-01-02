import React from 'react';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

/**
 * Main Function
 * The controller of the application
 */
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </>
      
  );
}

export default App;
