import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const NameScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        autoCorrect={false}
        value={password}
        onChangeText={ (text) => setPassword(text)}
      />
      { password.length < 5 ? <Text>Password must be longer than 5 characters!</Text> : null }
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default NameScreen;