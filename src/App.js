import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import routes from '../src/routes'

// no state

// no methods

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
