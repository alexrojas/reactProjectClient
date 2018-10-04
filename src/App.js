import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar/>

        <Route exact path="/" component={Landing}/>
        <div className="container">
          <Route exact path="/login" component={Login}  />
          <Route exact path="/register" component={Register}  />
        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
