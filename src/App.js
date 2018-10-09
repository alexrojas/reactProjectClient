import React, { Component } from 'react';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { Route, Router, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './actions/authActions'
import {logoutUser} from './actions/authActions'
import Dashboard from './components/dashboard/Dashboard'
import CreateProfile from './components/create-profile/CreateProfile'
import EditProfile from './components/edit-profile/EditProfile'
import {clearCurrentProfile} from './actions/profileActions'
import PrivateRoute from './components/common/PrivateRoute'
import Profiles from './components/profiles/Profiles'
import Profile from './components/profile/Profile'
import Posts from './components/posts/Posts'


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
    store.dispatch(clearCurrentProfile())
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
            <Route exact path="/profiles" component={Profiles}  />
            <Route exact path="/register" component={Register}  />
            <Route exact path="/profile/:name" component={Profile}  />

            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard}  />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/create-profile" component={CreateProfile}  />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/edit-profile" component={EditProfile}  />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/feed" component={Posts}  />
            </Switch>
          </div>

          <Footer/>
        </div>


      </Provider>
    );
  }
}

export default App;
