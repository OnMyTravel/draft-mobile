import { START_AUTHENTICATION } from '../actions/actiontypes';

const defaultUserState = {
  isLogging: false
}

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case START_AUTHENTICATION:
      return Object.assign({}, state, {
        isLogging: true
      });

    default:
      return state
  }
}

export default userReducer;