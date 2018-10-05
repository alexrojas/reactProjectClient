import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import profileReducer from './profileReducer'


export default combineReducers({
  //here we will include all our reducers ()it can be named anything
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
})
