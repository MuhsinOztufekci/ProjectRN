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

import Loading from '../components/Loading';

const LoginPage = ({ navigation }) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    return (
        <View style={styles.container}>

            <Text style={styles.welcome}>Hellooo {result}</Text>
            <Image
                style={styles.image}
                source={require('../../assets/images/loginIcon.png')} />


            <View style={styles.inputContainer}>

                <Text style={styles.inputBoxText}>Email</Text>

                <TextInput
                    placeholder='Enter Your Email'
                    style={styles.TextInputStyle}
                    onChangeText={setName}
                    value={name} />

            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputBoxText}>Password</Text>

                <TextInput
                    placeholder='Enter Your Password'
                    style={styles.TextInputStyle}
                    onChangeText={setLastName}
                    value={lastName}
                    secureTextEntry={true}
                />

            </View>



            {/* Login Button  */}
            <Pressable
                onPress={() => setIsLoading(true)}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#FF9800' : '#FFB74D',
                    },
                    styles.button
                ]}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            {/* SignUp Button */}
            <Pressable
                onPress={() => navigation.navigate('Signup')}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed ? '#E65100' : '#F57C00',
                        marginTop: 8
                    },
                    styles.signupButton
                ]}
            >
                <Text style={[styles.buttonText, { color: 'white' }]}>Sign Up</Text>
            </Pressable>


            {
                isLoading
                    ? <Loading
                        changeIsLoading={() => setIsLoading(false)} />
                    : null
            }

        </View >
    );
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD966',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    TextInputStyle: {
        borderBottomWidth: 1,
        width: '100%',
        height: 38,
        borderRadius: 10,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
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
    image: {
        width: 125,
        height: 125
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10,
        color: 'white'
    },
    signupButton: {
        width: '35%',
        height: 35,
        borderRadius: 8,
        marginVertical: 14,
        alignItems: 'center',
        textAlign: 'center'
    },
    inputBoxText: {
        fontWeight: 'bold',
        alignItems: 'flex-start'

    },

});
