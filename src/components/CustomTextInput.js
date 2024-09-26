import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({ title, isSecureText, handleOnChangeText, handleValue, handlePlaceholder, inputMode }) => {
    return (

        <View style={styles.inputContainer}>

            <Text style={styles.inputBoxText}>{title}</Text>

            <TextInput
                secureTextEntry={isSecureText}
                placeholder={handlePlaceholder}
                style={styles.TextInputStyle}
                onChangeText={handleOnChangeText}
                value={handleValue}
            />

        </View>

    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
    },
    inputBoxText: {
        fontWeight: 'bold',
        alignItems: 'flex-start'

    },
    TextInputStyle: {

        color: 'white',
        borderBottomWidth: 1,
        width: '100%',
        height: 38,
        borderRadius: 10,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
})