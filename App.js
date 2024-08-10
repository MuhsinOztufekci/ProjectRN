import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Button,
  Image
} from 'react-native';

import React, { useState } from 'react';

import Loading from './src/components/Loading';


export default function App() {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>

      <Image
        style={styles.Image}
        source={require('./assets/images/login_icon.png')} />

      <Text style={styles.welcome}>Welcome </Text>

      <Text>Email</Text>

      <TextInput
        placeholder='Enter Your Email'
        style={styles.TextInputStyle}
        onChangeText={setName}
        value={name}
      />

      <Text>Password</Text>

      <TextInput
        placeholder='Enter Your Password'
        style={styles.TextInputStyle}
        onChangeText={setLastName}
        value={lastName}
        secureTextEntry={true}
      />

      <Pressable
        onPress={() => setResult(name + " " + lastName)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'gray' : 'black'
          },
          styles.Button
        ]}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

      <Loading />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInputStyle: {
    borderWidth: 1,
    width: '50%',
    height: 38,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Button: {
    borderWidth: 2,
    width: '50%',
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 14
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  Image: {
    width: 150,
    height: 150
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 20
  }
});
