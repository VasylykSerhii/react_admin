import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createBrowserHistory } from "history";

import {createRootReducer} from 'store/reducers'



export const hist = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(hist)]

const store = createStore(
  createRootReducer(hist),
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store