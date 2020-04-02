import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import configuration from 'store/reducers/configuration'

export const createRootReducer = history => combineReducers({
  configuration,
  router: connectRouter(history)
})