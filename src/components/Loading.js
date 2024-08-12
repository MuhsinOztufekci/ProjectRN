import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';

const Loading = (props) => {
    return (
        <View style={styles.container}>
            <Pressable
                style={styles.closeButtonContainer}
                onPress={() => props.changeIsLoading()}
            >
                <Text style={styles.closeButton}>X</Text>
            </Pressable>
            <ActivityIndicator size={'large'} color={'blue'} />
            <Text style={styles.loginText}> Loading...</Text>
        </View>
    );
}

export default Loading;

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
        marginTop: 25
    },
    closeButtonContainer: {
        backgroundColor: 'black',
        width: 30,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 45,
        right: 15
    },
    closeButton: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
});
