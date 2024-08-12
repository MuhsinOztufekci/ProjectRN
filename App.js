import React from 'react'
import LoginPage from './src/screens/LoginPage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignupPage from './src/screens/SignupPage'

const Stack = createNativeStackNavigator()


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login Page' component={LoginPage} />
        <Stack.Screen name='SignUp Page' component={SignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
