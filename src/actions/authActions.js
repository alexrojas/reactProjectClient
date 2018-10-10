import {GET_ERRORS} from './types'
import {SET_CURRENT_USER} from './types'
import setAuthToken from '../utils/setAuthToken'
import axios from 'axios';
import jwt_decode from 'jwt-decode';


export const registerUser = (userData, history) => dispatch  => {
  console.log('QWERTYUIKLJHGFDSADFGHJYTRESDFCVBNHJUYTRDCVBNJUYTREDCVBNJIUYTRFDCVBNJKIUYTF',process.env.REACT_APP_API_URL)
  axios.post('/api/users/register', userData)
  .then((res)=>{
    console.log(res.data)
    history.push('/login')
  })
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  )
}


// login user token
export const loginUser = userData => dispatch  => {
  axios.post('/api/users/login', userData)
  .then((res)=>{
    //save ot local storage
    const token = res.data.token
    //set token to local storage
    localStorage.setItem('jwtToken', token)
    // set token to auth header
    setAuthToken(token)
    const decoded = jwt_decode(token)
    dispatch(setCurrentUser(decoded))
  })
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })
  )
}

export const setCurrentUser = decoded => {
  return{
    type: SET_CURRENT_USER,
    payload: decoded
  }
}
export const logoutUser = () => dispatch => {
  localStorage.removeItem('jwtToken')
  setAuthToken(false)
  dispatch(setCurrentUser({}))

  return {

  }
}
