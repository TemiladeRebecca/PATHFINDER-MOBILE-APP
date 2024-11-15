import 'react-native-gesture-handler';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PagerComponent from './components/PagerComponent';
import AnimatedSplashScreen from './screens/AnimatedSplashScreen';
import GettingStartedScreen from './screens/GettingStarted';
import LoginPage from './components/LoginPage';

const Stack = createStackNavigator();

export default function App() {
    // State to track if splash animation is complete
    const [isSplashAnimationComplete, setSplashAnimationComplete] = useState(false);

    // Conditional rendering: Show AnimatedSplashScreen first
    if (!isSplashAnimationComplete) {
        return (
            <AnimatedSplashScreen onFinish={() => setSplashAnimationComplete(true)} />
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Pager">
                <Stack.Screen
                    name="Pager"
                    component={PagerComponent}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GettingStarted"
                    component={GettingStartedScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="LoginPage"
                    component={LoginPage}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
