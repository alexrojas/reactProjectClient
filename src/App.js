import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './actions/authActions'
import {logoutUser} from './actions/authActions'

import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
import store from './store'

import './App.css';


if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken)
  const decoded = jwt_decode(localStorage.jwtToken)
  store.dispatch(setCurrentUser(decoded))

  const currentTime = Date.now() / 1000
  if(decoded.exp < currentTime){
    store.dispatch(logoutUser())
    window.location.href = '/login'
  }

}
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
