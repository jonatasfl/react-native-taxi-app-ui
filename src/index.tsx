import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Home from './screens/Home';
import Verification from './screens/Verification';
import CurrentLocation from './screens/CurrentLocation';
import SelectDestination from './screens/SelectDestination';
import Request from './screens/Request';
import YourRide from './screens/YourRide';

import MapButton from './components/MapButton';
import arrowLeft from './assets/arrow-left.png';

const BackButton = props => {
  return <MapButton icon={arrowLeft} {...props} />;
};

const Stack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { paddingLeft: wp('5%') },
          headerStyle: {},
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
        <Stack.Screen name="SelectDestination" component={SelectDestination} />
        <Stack.Screen
          name="Request"
          component={Request}
          options={{
            headerShown: true,
            headerTitle: '',
            headerLeft: props => <BackButton {...props} />,
          }}
        />
        <Stack.Screen name="YourRide" component={YourRide} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Index;
