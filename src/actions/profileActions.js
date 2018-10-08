import axios from 'axios';
// import jwt_decode from 'jwt-decode';
import {GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS} from "./types"
// import {PROFILE_NOT_FOUND} from "./types"
// import {CLEAR_CURRENT_PROFILE} from "./types"
// import {GET_PROFILES} from "./types"


//get current profile
export const getCurrentProfile = () => dispatch  => {
  dispatch(setProfileLoading())
  axios.get('/api/profile')
  .then((res)=>{
    console.log("payload Test", res)
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  })
  .catch((err)=>{
    dispatch({
      type: GET_PROFILE, //not errors because if its empty profile then we will create a button that says you need to create a profile
      payload: {}
    })
  })
}

//create profile

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post('/api/profile', profileData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Profile loading

export const setProfileLoading = ()  => {
  return {
    type: PROFILE_LOADING
  }
}
//clear progile from state
export const clearCurrentProfile = ()  => {
  return {
    type: CLEAR_CURRENT_PROFILE,

  }
}
