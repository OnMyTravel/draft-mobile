import userReducers from '../../reducers/userReducers';

import { START_AUTHENTICATION } from '../../actions/actiontypes'

it('should have a default state', () => {
  // given
  const fakeAction = { type: null }

  // when
  const result = userReducers(undefined, fakeAction);

  // then
  expect(result).toEqual({
    "isLogging": false,
  });
});

describe('when receiving a START_AUTHENTICATION action', () => {

  it('should change the logging status', () => {
    // given
    const fakeAction = { type: START_AUTHENTICATION }

    // when
    const result = userReducers(undefined, fakeAction);

    // then
    expect(result).toEqual({
      "isLogging": true,
    });
  });
});