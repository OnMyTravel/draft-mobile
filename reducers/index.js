import { combineReducers } from 'redux';

import userReducers from './userReducers'

const defaultState = {};
const initialReducer = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  initialReducer,
  user: userReducers
});