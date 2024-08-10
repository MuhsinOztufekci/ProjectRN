import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'blue'} />
            <Text style={styles.loginText}>Loading...</Text>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'lightblue'
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 27,
        color: 'white',
        marginVertical: 25
    }
})