import {
  FETCH_CONFIGURATION_SUCCESS,
  UPDATE_CONFIGURATION_SUCCESS,
  DELETE_CONFIGURATION_SUCCESS,
  CREATE_CONFIGURATION_SUCCESS
} from 'store/actionTypes'


const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type){
    case FETCH_CONFIGURATION_SUCCESS:
      return {
        ...state,
        payload
      }
    case UPDATE_CONFIGURATION_SUCCESS:
      return {
        ...state,
        payload
      }
    case DELETE_CONFIGURATION_SUCCESS:
      return {
        ...state,
        payload
      }
    case CREATE_CONFIGURATION_SUCCESS:
      return {
        ...state,
        payload
      }
    default:
      return state
  }

}