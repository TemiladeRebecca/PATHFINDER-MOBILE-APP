import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreenOne from './screens/DetailScreenOne';
import DetailScreenTwo from './screens/DetailScreenTwo';
import DetailScreenThree from './screens/DetailScreenThree';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailOne" component={DetailScreenOne} />
        <Stack.Screen name="DetailTwo" component={DetailScreenTwo} />
        <Stack.Screen name="DetailThree" component={DetailScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
