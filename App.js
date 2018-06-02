import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import LoginPage from './containers/LoginPage';

import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
