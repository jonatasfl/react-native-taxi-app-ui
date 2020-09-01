import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import theme from './theme';

import Home from './screens/Home';
import Verification from './screens/Verification';
import AddCard from './screens/AddCard';
import CurrentLocation from './screens/CurrentLocation';
import SelectDestination from './screens/SelectDestination';
import Request from './screens/Request';
import YourRide from './screens/YourRide';

import MapButton, { IMapButtonProps } from './components/MapButton';
import arrowLeft from './assets/arrow-left.png';

type IBackButton = Partial<IMapButtonProps>;

const BackButton: React.FC<IBackButton> = props => {
  return <MapButton {...props} icon={arrowLeft} />;
};

const Stack = createStackNavigator();

const Index: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: { paddingLeft: wp('5%') },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: 'OpenSans_400Regular',
              fontSize: hp('4%'),
            },
            headerStyle: {},
          }}
        >
          <Stack.Screen
            name="AddCard"
            component={AddCard}
            options={{
              headerShown: true,
              headerTitle: 'Add Card',
              headerLeft: props => <BackButton transparent {...props} />,
            }}
          />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="CurrentLocation" component={CurrentLocation} />
          <Stack.Screen
            name="SelectDestination"
            component={SelectDestination}
          />
          <Stack.Screen
            name="Request"
            component={Request}
            options={{
              headerShown: true,
              headerTitle: '',
              headerLeft: props => <BackButton {...props} />,
            }}
          />
          <Stack.Screen
            name="YourRide"
            component={YourRide}
            options={{
              headerShown: true,
              headerTitle: 'Your Ride',
              headerLeft: props => <BackButton transparent {...props} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default Index;
