import { START_AUTHENTICATION } from './actiontypes';


export const startConnexion = () => {
  return dispatch => {
    dispatch({ type: START_AUTHENTICATION })
  }
}

