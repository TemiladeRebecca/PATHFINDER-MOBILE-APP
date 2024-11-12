import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Pressable, Alert } from 'react-native';

export default function LoginDetails() {
    const [loginDetails, setLoginDetails] = useState({ email: '', password: '', confirmPassword: '' });

    // Email Validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (name, value) => {
        setLoginDetails((prevValue) => ({ ...prevValue, [name]: value }));
    };

    const handleEmailBlur = () => {
        if (!validateEmail(loginDetails.email)) {
            Alert.alert('Invalid Email', 'Please enter a valid email');
        }
    };

    const handlePasswordBlur = () => {
        if (loginDetails.password.length < 8) {
            Alert.alert('Password too short', 'Password must have at least 8 characters');
        }
    };

    const handleConfirmPasswordBlur = () => {
        if (loginDetails.password !== loginDetails.confirmPassword) {
            Alert.alert('Passwords Mismatch', 'Passwords do not match');
        }
    };

    const handleSubmit = () => {
        const { email, password, confirmPassword } = loginDetails;

        if (!validateEmail(email) || password.length < 8 || password !== confirmPassword) {
            Alert.alert('Invalid Details', 'Please check your details and try again.');
            return;
        }

        Alert.alert('Success', 'Your details have been submitted successfully!');
    };

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.card}>
                    <Text style={styles.title}>Welcome to Pathfinder</Text>

                    {/* Email Input */}
                    <TextInput
                        value={loginDetails.email}
                        onChangeText={(text) => handleChange('email', text)}
                        onBlur={handleEmailBlur}
                        placeholder="Enter your email"
                        style={styles.input}
                        placeholderTextColor='#303640'
                    />

                    {/* Password Input */}
                    <TextInput
                        value={loginDetails.password}
                        onChangeText={(text) => handleChange('password', text)}
                        onBlur={handlePasswordBlur}
                        placeholder="Enter your password"
                        secureTextEntry
                        style={styles.input}
                        placeholderTextColor='#303640'
                    />

                    {/* Confirm Password Input */}
                    <TextInput
                        value={loginDetails.confirmPassword}
                        onChangeText={(text) => handleChange('confirmPassword', text)}
                        onBlur={handleConfirmPasswordBlur}
                        placeholder="Confirm your password"
                        secureTextEntry
                        style={styles.input}
                        placeholderTextColor='#303640'
                    />

                    <View style={styles.accountContainer}>
                        <Text style={styles.forgotPassword}>Already have an account? </Text>
                        <Pressable style={styles.loginLink}>
                            <Text style={styles.loginLinkText}>Login</Text>
                        </Pressable>
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
                        <Text style={styles.loginButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        width: 350,
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#303640',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 56,
        paddingLeft: 16,
        borderColor: '#4A505B',
        borderWidth: 2,
        borderRadius: 12,
        marginBottom: 24,
        fontSize: 14,
    },
    forgotPassword: {
        color: '#303640',
    },
    accountContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    loginLink: {
        marginLeft: 4,
    },
    loginLinkText: {
        color: '#5EA2DC',
        fontWeight: '600',
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 16,
        marginBottom: 10,
        backgroundColor: '#5EA2DC',
        borderRadius: 8,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '600',
    },
});
