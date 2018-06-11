import sinon from 'sinon'

const expo = {
  Facebook: {
    logInWithReadPermissionsAsync: () => {}
  }
}

function __rejectFacebookLoginWith(error) {
  expo.Facebook.logInWithReadPermissionsAsync = () => {
    return Promise.resolve(message);
  }
}

function __resolveFacebookLoginWith(message) {
  expo.Facebook.logInWithReadPermissionsAsync = () => {
    return Promise.resolve(message);
  }
}

expo.test = {
  rejectFacebookLoginWith: __rejectFacebookLoginWith,
  resolveFacebookLoginWith: __resolveFacebookLoginWith
}

export default expo