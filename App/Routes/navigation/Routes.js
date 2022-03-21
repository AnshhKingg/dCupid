import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenOption} from './constants/options';
import {
  HelpContainer,
  FaqContainer,
  RegisterContainer,
  RegisterContainer2,
  HomepageContainer,
  DashboardContainer,
} from '../../Views';
import {DrawerView} from '../../Components';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'dashboard'}
      screenOptions={screenOption}>
      <Stack.Screen name={'dashboard'} component={DashboardContainer} />
      <Stack.Screen name={'homepage'} component={HomepageContainer} />
      <Stack.Screen name={'register2'} component={RegisterContainer2} />
      <Stack.Screen name={'register'} component={RegisterContainer} />
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
        },
      }}
      drawerContent={props => <DrawerView {...props} />}>
      <Drawer.Screen name="Draw" component={MainStack} />
    </Drawer.Navigator>
  );
};
