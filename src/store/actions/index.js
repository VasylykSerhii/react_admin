import {
  FETCH_CONFIGURATION_SUCCESS,
  UPDATE_CONFIGURATION_SUCCESS,
  CREATE_CONFIGURATION_SUCCESS,
  DELETE_CONFIGURATION_SUCCESS
} from 'store/actionTypes'

import * as Api from 'api'

export const fetchConfiguration = () => async dispatch => {
  const configuration = await Api.fetchConfiguration()
  dispatch({
    type: FETCH_CONFIGURATION_SUCCESS,
    payload: configuration
  })
}

export const updateConfiguration = (id,value) => async dispatch => {
  await Api.updateConfiguration(id,value)
  const configuration = await Api.fetchConfiguration()
  dispatch({
    type: UPDATE_CONFIGURATION_SUCCESS,
    payload: configuration
  })
}

export const deleteConfiguration = (id) => async dispatch => {
  await Api.deleteConfiguration(id)
  const configuration = await Api.fetchConfiguration()
  dispatch({
    type: DELETE_CONFIGURATION_SUCCESS,
    payload: configuration
  })
}

export const createConfiguration = (value, key) => async dispatch => {
  await Api.createConfiguration(value, key)
  const configuration = await Api.fetchConfiguration()
  dispatch({
    type: CREATE_CONFIGURATION_SUCCESS,
    payload: configuration
  })
}