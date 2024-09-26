import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import React, { useState } from 'react';
import { Loading, CustomTextInput, CustomButton } from '../components/';

const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome</Text>
            <Image
                style={styles.image}
                source={require('../../assets/images/loginIcon.png')}
            />

            <CustomTextInput
                title="Email"
                isSecureText={false}
                handleOnChangeText={setEmail}
                handleValue={email}
                handlePlaceholder="Enter Your Email"
                inputMode="email"
            />

            <CustomTextInput
                title="Password"
                isSecureText={true}
                handleOnChangeText={setPassword}
                handleValue={password}
                handlePlaceholder="Enter Your Password"
            />

            {/* Login Button */}
            <CustomButton
                onPress={() => setIsLoading(true)}
                title="Login"
                style={{ width: '50%' }}
            />

            {/* SignUp Button */}
            <CustomButton
                onPress={() => navigation.navigate('Signup')}
                title="Sign Up"
                style={{ width: '35%', backgroundColor: '#F57C00' }}
            />

            {isLoading && (
                <Loading changeIsLoading={() => setIsLoading(false)} />
            )}
        </View>
    );
};

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD966',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 125,
        height: 125,
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: 10,
        color: 'white',
    },
});
