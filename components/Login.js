import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Login = ({ startConnexion, isLogging } = {}) => {
  return (
    <View style={styles.container}>
      <Text>Let's LOG</Text>
      <Button
        onPress={startConnexion}
        title="Learn More"
        color="#841584"
        disabled={isLogging}
        accessibilityLabel="Learn more about this purple button"
      />
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

export default Login;
