import { StyleSheet, Text, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, title, style }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? '#FF9800' : '#FFB74D',
                },
                styles.button,
                style // Apply any additional styles passed via props
            ]}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        width: '50%',
        height: 35,
        borderRadius: 8,
        marginVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
});
