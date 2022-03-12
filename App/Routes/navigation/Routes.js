import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenOption} from './constants/options';
import {OrdersContainer, CheckoutContainer} from '../../Views';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'order'} screenOptions={screenOption}>
      <Stack.Screen name={'order'} component={OrdersContainer} />
      <Stack.Screen name={'checkout'} component={CheckoutContainer} />
    </Stack.Navigator>
  );
};
