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
  const [isLoading, setIsLoading] = useState(false)


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
        onPress={() => setIsLoading(true)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'gray' : 'black'
          },
          styles.Button
        ]}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>

      {isLoading
        ? <Loading
          changeIsLoading={() => setIsLoading(false)} />
        : null
      }

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
    height: 35,
    borderRadius: 8,
    marginVertical: 14
  },
  buttonText: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 5,
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
