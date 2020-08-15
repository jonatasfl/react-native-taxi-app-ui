import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Verification from './screens/Verification';
import Map from './screens/Map';
import SelectDestination from './screens/SelectDestination';

const Stack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="SelectDestination" component={SelectDestination} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
