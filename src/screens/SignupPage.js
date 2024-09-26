import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SignupPage() {
    return (
        <View style={styles.container}>
            <Text>SignupPage</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFD966',
    }
})