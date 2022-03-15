import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { screenOption } from './constants/options';
import {
  OrdersContainer,
  CheckoutContainer,
  HelpContainer,
  FaqContainer,
  RegisterContainer,
  RegisterContainer2,
} from '../../Views';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'register2'} screenOptions={screenOption}>
      <Stack.Screen name={'register2'} component={RegisterContainer2} />
      <Stack.Screen name={'register'} component={RegisterContainer} />
      <Stack.Screen name={'order'} component={OrdersContainer} />
      <Stack.Screen name={'checkout'} component={CheckoutContainer} />
      <Stack.Screen name={'help'} component={HelpContainer} />
      <Stack.Screen name={'faq'} component={FaqContainer} />
    </Stack.Navigator>
  );
};
