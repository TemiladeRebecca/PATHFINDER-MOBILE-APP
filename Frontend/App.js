import 'react-native-gesture-handler';
import { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PagerComponent from './components/PagerComponent';
import GettingStartedScreen from './screens/GettingStarted';
import LoginPage from './components/LoginPage';
import QuestionsScreen from './screens/QuestionsScreen';
import DiseasesScreen from './screens/DiseasesScreen';
import MapScreen from './screens/MapScreen';
import FloatingButton from './components/FloatingButton';

const Stack = createStackNavigator();

export default function App() {

    const [isMapUpdated, setIsMapUpdated] = useState(false);
    const navigationRef = useRef();

    const ToggleMapUpdateHandler = () => {
        if (isMapUpdated) {
            if (navigationRef.current?.canGoBack()) {
                navigationRef.current.goBack();
            } else {
                navigationRef.current?.navigate('Pager');
            }
        } else {
            navigationRef.current?.navigate('MapScreen');
        }
        setIsMapUpdated((prevValue) => !prevValue);
    };

    return (
        <NavigationContainer ref={navigationRef}>
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
                <Stack.Screen
                name="DiseasesScreen"
                component={DiseasesScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="QuestionsScreen"
                component={QuestionsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="MapScreen"
                component={MapScreen}
                options={{ headerShown: false }}
            />
            </Stack.Navigator>
            <FloatingButton onPress={ToggleMapUpdateHandler} label={isMapUpdated ? 'Hide Updates' : 'Show Map Updates'} />
        </NavigationContainer>
    );
}
