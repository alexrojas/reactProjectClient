import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { Route } from 'react-router-dom';

import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
import store from './store'

import './App.css';

// const store = createStore(()=> [], {}, applyMiddleware())

class App extends Component {
  render() {
    return (
      <Provider store={store}>

        <div className="App">

          <Navbar/>

          <Route exact path="/" component={Landing}/>
          <div className="container">
            <Route exact path="/login" component={Login}  />
            <Route exact path="/register" component={Register}  />
          </div>

          <Footer/>
        </div>


      </Provider>
    );
  }
}

export default App;
