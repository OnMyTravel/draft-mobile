import React from 'react';
import { StyleSheet, Text } from 'react-native';

const FacebookLogin = (props) => {
  return (
      <Text style={styles.title}>Se connecter avec Facebook</Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '100',
  },
});

export default FacebookLogin;