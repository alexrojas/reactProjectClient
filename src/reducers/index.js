import {combineReducers} from 'redux'
import authReducer from './authReducer'


export default combineReducers({
  //here we will include all our reducers ()it can be named anything
  auth: authReducer
})
