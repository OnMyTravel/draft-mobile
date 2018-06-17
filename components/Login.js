import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'react-router-native'

import Title from './Title'

const Login = ({ startConnexion, isLogging } = {}) => {
  return (
    <View style={styles.container}>
      <Title>Login</Title>
      <Text>Because we want to help you to share your most magical moments with as many friends and relatives as possibles, we started building OnMyTravel using the most popular social media.</Text>
      <Text>But don't worry, we won't share anything on Facebook without your approval.</Text>
      <Text>Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé par OnMyTravel pour permettre l'accès au service offert par OnMyTravel. Elles sont conservées pendant la durée d'utilisation du service et sont destinées à OnMyTravel exclusivement. Elles ne sont pas communiquées à des tiers.</Text>

      <Text>Let's LOG</Text>
      <Button
        onPress={startConnexion}
        title="Learn More"
        color="#841584"
        disabled={isLogging}
        accessibilityLabel="Learn more about this purple button"
      />
      <Link to="/">
        <Text>Home</Text>
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

export default Login;