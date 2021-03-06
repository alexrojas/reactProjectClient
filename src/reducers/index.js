import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import profileReducer from './profileReducer'
import postReducer from './postReducer'


export default combineReducers({
  //here we will include all our reducers ()it can be named anything
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer
})
