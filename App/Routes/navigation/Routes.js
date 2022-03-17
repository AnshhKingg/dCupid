import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenOption} from './constants/options';
import {
  OrdersContainer,
  CheckoutContainer,
  HelpContainer,
  FaqContainer,
  RegisterContainer,
  RegisterContainer2,
  HomepageContainer,
} from '../../Views';
import {DrawerView} from '../../Components';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'homepage'} screenOptions={screenOption}>
      <Stack.Screen name={'homepage'} component={HomepageContainer} />
      <Stack.Screen name={'register2'} component={RegisterContainer2} />
      <Stack.Screen name={'register'} component={RegisterContainer} />
      <Stack.Screen name={'order'} component={OrdersContainer} />
      <Stack.Screen name={'checkout'} component={CheckoutContainer} />
      <Stack.Screen name={'help'} component={HelpContainer} />
      <Stack.Screen name={'faq'} component={FaqContainer} />
    </Stack.Navigator>
  );
};

export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 300,
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
      drawerContent={props => <DrawerView {...props} />}>
      <Drawer.Screen name="Draw" component={MainStack} />
    </Drawer.Navigator>
  );
};
