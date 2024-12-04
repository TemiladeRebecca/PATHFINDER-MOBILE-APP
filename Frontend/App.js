import 'react-native-gesture-handler';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PagerComponent from './components/PagerComponent';
import GettingStartedScreen from './screens/GettingStarted';
import LoginPage from './components/LoginPage';
import QuestionsScreen from './screens/QuestionsScreen';
import DiseasesScreen from './screens/DiseasesScreen';

const Stack = createStackNavigator();

export default function App() {

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}
