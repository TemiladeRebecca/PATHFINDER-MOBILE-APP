import { useEffect } from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we perform setup
SplashScreen.preventAutoHideAsync();

export default function AnimatedSplashScreen({ onFinish }) {
    const fadeAnim = new Animated.Value(1);

    useEffect(() => {
        // Start fade-out animation
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
        }).start(() => {
            // Hide the splash screen and call onFinish to proceed to main app
            SplashScreen.hideAsync();
            if (onFinish) onFinish();
        });
    }, []);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Image source={require('../assets/splash.jpg')} style={styles.image} />
            <Text style={styles.text}>PATHFINDER</Text>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#303640',
    },
});
