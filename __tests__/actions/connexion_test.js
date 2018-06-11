import { startConnexion } from '../../actions'
import { START_AUTHENTICATION, FACEBOOK_AUTHENTICATION_FAILED, FACEBOOK_AUTHENTICATION_SUCCESS } from '../../actions/actiontypes'

import Expo from 'expo';
jest.mock('expo');

describe('Action | connexion | startConnexion', () => {
  test('should a START', () => {
    // given
    const dispatch = jest.fn();

    // when
    startConnexion()(dispatch)

    // then
    expect(dispatch).toHaveBeenNthCalledWith(1, { type: START_AUTHENTICATION });
  });

  test('should dispatch a failure', () => {
    // given
    const dispatch = jest.fn();
    Expo.test.resolveFacebookLoginWith({ type: 'cancel' })

    // when
    const promise = startConnexion()(dispatch)
    
    // then
    return promise.then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, { type: START_AUTHENTICATION });
      expect(dispatch).toHaveBeenNthCalledWith(2, { type: FACEBOOK_AUTHENTICATION_FAILED });
    })
  });

  test('should a FACEBOOK_AUTHENTICATION_SUCCESS', () => {
    // given
    const dispatch = jest.fn();
    Expo.test.resolveFacebookLoginWith({ type: 'success' })

    // when
    const promise = startConnexion()(dispatch)
    
    // then
    return promise.then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, { type: START_AUTHENTICATION });
      expect(dispatch).toHaveBeenNthCalledWith(2, { type: FACEBOOK_AUTHENTICATION_SUCCESS });
    })
  });
});