import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userTypes"
import axios from 'axios'

export const fetUsersRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetUsersRequest)
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        const users = res.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        const errorMeessage = error.message
        dispatch(fetchUsersFailure(errorMeessage))
      })
  }
}