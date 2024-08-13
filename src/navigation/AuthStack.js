import React from 'react'
import { LoginPage, SignupPage } from '../screens/index.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login Page'
            screenOptions={{ headerShown: false }}>
                
            <Stack.Screen name='Login Page' component={LoginPage} />
            <Stack.Screen name='SignUp Page' component={SignupPage} />
        </Stack.Navigator>
    )
}

export default AuthStack
