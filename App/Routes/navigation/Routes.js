import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {screenOption} from './constants/options';
import {
  HelpContainer,
  FaqContainer,
  RegisterContainer,
  RegisterContainer2,
  HomepageContainer,
  DashboardContainer,
  OtpContainer,
  Otp2Container,
  ProfileContainer,
} from '../../Views';
import {DrawerView} from '../../Components';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={'register'} screenOptions={screenOption}>
      <Stack.Screen name={'register'} component={RegisterContainer} />
      <Stack.Screen name={'register2'} component={RegisterContainer2} />
      <Stack.Screen name={'dashboard'} component={DashboardContainer} />
      <Stack.Screen name={'profile'} component={ProfileContainer} />
      <Stack.Screen name={'help'} component={HelpContainer} />
      <Stack.Screen name={'faq'} component={FaqContainer} />
    </Stack.Navigator>
  );
};

export const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'homepage'} screenOptions={screenOption}>
      <Stack.Screen name={'homepage'} component={HomepageContainer} />

      <Stack.Screen name={'otp'} component={OtpContainer} />
      <Stack.Screen name={'otp2'} component={Otp2Container} />
      <Stack.Screen name={'DashB'} component={DrawerStack} />
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
