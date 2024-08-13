import React from 'react'
import { HomePage, ProfilePage } from '../screens/index.js'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const UserStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home Page'
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home Page' component={HomePage} />
            <Stack.Screen name='Profile Page' component={ProfilePage} />
        </Stack.Navigator>
    )
}

export default UserStack
