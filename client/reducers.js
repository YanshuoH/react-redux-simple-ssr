import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import {
  INCREMENT_BB8,
  INCREMENT_R2D2
} from './constants'

const initialState = {
  count: 0,
}

function BB8(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_BB8:
      return Object.assign({}, state, { count: state.count + 1 })
    default:
      return state
  }
}

function R2D2(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_R2D2:
      return Object.assign({}, state, { count: state.count + 1 })
    default:
      return state
  }
}

export default combineReducers({
  BB8,
  R2D2,
  routing: routerReducer,
})
