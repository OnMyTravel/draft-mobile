import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'react-router-native'

const Landing = ({ } = {}) => {
  return (
    <View style={styles.container}>
      <Text>Landing page</Text>
      <Link to="/login">
        <Text>Register</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Landing;
