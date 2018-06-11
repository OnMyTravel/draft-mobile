import { START_AUTHENTICATION, FACEBOOK_AUTHENTICATION_FAILED, FACEBOOK_AUTHENTICATION_SUCCESS } from './actiontypes';

import Expo from 'expo';

export const startConnexion = () => {
  return async function (dispatch) {

    dispatch({ type: START_AUTHENTICATION })

    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1801749093371838', {
      permissions: ['public_profile']
    })

    if (type === 'success') {
      dispatch({ type: FACEBOOK_AUTHENTICATION_SUCCESS })
    } else {
      dispatch({ type: FACEBOOK_AUTHENTICATION_FAILED })
    }
  }
}
